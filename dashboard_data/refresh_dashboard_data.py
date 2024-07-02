import requests  # type: ignore
import json
from collections import OrderedDict


prefixes = """PREFIX schema: <http://schema.org/>
              PREFIX sdo: <https://schema.org/>
              PREFIX skosxl: <http://www.w3.org/2008/05/skos-xl#>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"""

muziekweb_prefixes = """PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
                        PREFIX vocab: <https://data.muziekweb.nl/vocab/>
                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"""


def query_endpoint(sparql_endpoint, query):
    """Carries out the query on the endpoint and returns the results
    :param - sparql_endpoint - the endpoint containing the RDF data to be queried
    :param - query - the query to be carried out - must select a count variable ?count
    :returns - the results (response["results"]["bindings"])"""
    response = requests.get(
        sparql_endpoint,
        params={"query": query},
        headers={"Accept": "application/sparql-results+json"})
    return response.json()["results"]["bindings"]


def results_to_count(bindings, category, add_labels=False, add_uris=False):
    category_counts = []
    for result in bindings:
        this = {}
        this[category] = result["category"]["value"]
        this["count"] = int(result["count"]["value"])
        if add_labels:
            this["label"] = result["categoryLabel"]["value"]
        if add_uris:
            this["uri"] = result["category_uri"]["value"]
        category_counts.append(this)
    return category_counts


def uninvert_name(name):
    """Given a person's name in the form 'surname, first name', returns this in the form
    'first name surname'.
    :param name - inverted person name
    :returns uninverted name"""
    return ' '.join([part.strip() for part in name.split(',')][::-1])


def person_connections_query(person_id, series_uri):
    """Gets the persons connected to this person via programmes or scenes,
    with the properties creator or byArtist
    :param person_id - the GTAA id of the person
    :param series_uri - URI of the series (sdo:partOfSeries)"""
    return f"""{prefixes}
    SELECT ?count ?category ?category_uri
    WHERE
    {{
     {{
      SELECT (COUNT(DISTINCT ?program) as ?count) ?category ?category_uri
      WHERE
      {{
        ?program sdo:partOfSeason/sdo:partOfSeries {series_uri} .
        {{
             ?program (sdo:creator/sdo:creator)|(sdo:byArtist/sdo:byArtist) {person_id} ;
                      (sdo:creator/sdo:creator)|(sdo:byArtist/sdo:byArtist) ?category_uri .
        }}
          UNION
        {{
            ?program sdo:hasPart ?scene .
            ?scene (sdo:creator/sdo:creator)|(sdo:byArtist/sdo:byArtist) {person_id};
                   (sdo:creator/sdo:creator)|(sdo:byArtist/sdo:byArtist) ?category_uri .
        }}
            ?category_uri skosxl:prefLabel/skosxl:literalForm ?category
      }} GROUP BY ?category_uri ?category
     }}
    }} ORDER BY DESC(?count) LIMIT 10
    """


def top_x_entities_by_property_query(selected_property, number_of_entities, series_uri):
    """Gets the top x entities, ranked by number of occurrences, that are linked
    to a concert with the selected property
    :param selected_property - the property linking the program to the entity
    :param number_of_entities - how many entities to return
    :param series_uri - URI of the series (sdo:partOfSeries)"""
    return f"""{prefixes}
    SELECT ?count ?category
    WHERE
    {{
      {{
        SELECT (COUNT(DISTINCT ?program) as ?count) ?category
        WHERE
        {{
            ?program sdo:partOfSeason/sdo:partOfSeries {series_uri} .
              {{
                ?program {selected_property}/skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                ?program sdo:isPartOfSeason ?season .
                ?season  {selected_property}/skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                {series_uri} {selected_property}/skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                ?program sdo:hasPart ?scene.
                ?scene  {selected_property}/skosxl:prefLabel/skosxl:literalForm ?category 
              }}
        }} GROUP BY ?category
      }}
    }} ORDER BY DESC(?count) LIMIT {number_of_entities}
    """

def top_x_entities_by_role_property_query(role_property, number_of_entities, series_uri):
    """Gets the top x entities, ranked by number of occurrences, that are linked
    to a concert via a role with the role property
    :param role_property - the property linking the concert to the role and
                            the role to the entity
    :param number_of_entities - how many entities to return
    :param series_uri - URI of the series (sdo:partOfSeries)"""
    return f"""{prefixes}
    SELECT ?count ?category
    WHERE
    {{
      {{
        SELECT (COUNT(DISTINCT ?program) as ?count) ?category
        WHERE 
        {{
            ?program sdo:partOfSeason/sdo:partOfSeries {series_uri} .
              {{
                ?program {role_property}/{role_property} ?entity  .
                ?entity skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                ?program sdo:isPartOfSeason ?season .
                ?season  {role_property}/{role_property} ?entity  .
                ?entity skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                {series_uri} {role_property}/{role_property} ?entity  .
                ?entity skosxl:prefLabel/skosxl:literalForm ?category
              }}
              UNION
              {{
                ?program sdo:hasPart ?scene.
                ?scene  {role_property}/{role_property} ?entity  .
                ?entity skosxl:prefLabel/skosxl:literalForm ?category
              }}
        }} GROUP BY ?category 
      }}
    }} ORDER BY DESC(?count) LIMIT {number_of_entities}
    """


def items_over_time_query(series_uri):
    return f"""{prefixes}
            SELECT (COUNT(DISTINCT(?program)) as ?count) ?category
            WHERE
            {{
                ?program sdo:partOfSeason/sdo:partOfSeries {series_uri}.
                ?program <https://schema.org/datePublished> ?date .
                BIND(substr(?date, 1, 4) as ?category)
            }} GROUP BY ?category"""


def distribution_to_file(distribution, filename):
    print(f"Writing distribution to file {filename}")
    with open(filename, "w") as f:
        json.dump(distribution, fp=f, indent=2)


def moz_data():
    sparql_endpoint = "https://cat.apis.beeldengeluid.nl/sparql"
    muziekweb_sparql_endpoint = "https://api.data.muziekweb.nl/datasets/MuziekwebOrganization/Muziekweb/services/Muziekweb/sparql"
    moz_series_uri = "<http://data.beeldengeluid.nl/id/series/2101608030025711131>"

    concerts_over_time = results_to_count(query_endpoint(
        sparql_endpoint=sparql_endpoint,
        query=items_over_time_query(series_uri=moz_series_uri)),
        category="Year")
    distribution_to_file(
        distribution=concerts_over_time,
        filename="moz_concerts_over_time.json")


    # top_10_artists = 
    # top_10_creators = 

if __name__ == "__main__":
    moz_data()
