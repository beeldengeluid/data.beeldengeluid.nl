<template>
  <table class="text-left">
    <tbody>
      <tr v-if="isLinkObject(object)">
        <td colspan="2">
          <ObjectLink
            :icon-key="'link'"
            :href="object.url"
            :name="object.name"
          />
        </td>
      </tr>
      <tr v-else-if="isEmailObject(object)">
        <td colspan="2">
          <ObjectLink
            :icon-key="'email'"
            :href="`mailto:${object.email}`"
            :name="object.name"
          />
        </td>
      </tr>
      <tr v-else-if="isObjectWithLanguageValueOnly(object)">
        <th class="text-capitalize">
          <span>{{ object['@language'] }}</span>
        </th>
        <td>
          <LinkText :value="object['@value']" />
        </td>
      </tr>
      <tr v-for="(value, key) in object" v-else :key="key">
        <th v-if="renderable(value)" class="text-capitalize">
          <span v-if="isSchemaProp(key)">{{ renderSchemaProp(key) }}</span>
          <span v-else>{{ key }}</span>
        </th>
        <td v-if="renderable(value)">
          <!-- String -->
          <span v-if="typeof value == 'string'">
            <LinkText :value="value" />
          </span>

          <!-- Number -->
          <span v-else-if="typeof value == 'number'">
            <LinkText :value="value" />
          </span>

          <!-- Typed URI -->
          <span v-else-if="isObjectWithIdTypeName(value)">
            <ObjectLinkFromSchema :value="value" />
          </span>

          <!-- Named URI -->
          <span v-else-if="isObjectWithIdName(value)">
            <ObjectLinkFromSchema :value="value" />
          </span>

          <!-- URI -->
          <span v-else-if="isObjectWithIdOnly(value)">
            <LinkText :value="value['@id']" />
          </span>

          <!-- language, value Object -->
          <span v-else-if="isObjectWithLanguageValueOnly(value)">
            <LinkText :value="value['@value']" />
          </span>

          <!-- Array of id-only objects -->
          <ul v-else-if="isObjectWithIdOnlyArray(value)">
            <li v-for="(v, index) in value" :key="index">
              <LinkText :value="v['@id']" />
            </li>
          </ul>

          <!-- Array of non-objects -->
          <ul v-else-if="Array.isArray(value)">
            <li v-for="v in value" :key="v"><LinkText :value="v" /></li>
          </ul>
        </td>

        <td v-else colspan="2">
          <h2 v-if="isSchemaProp(key)" class="text-capitalize">
            {{ renderSchemaProp(key) }}
          </h2>
          <h2 v-else class="text-capitalize">{{ key }}</h2>

          <!-- Array of objects -->
          <div v-if="isObjectArray(value)">
            <DataTable v-for="(v, index) in value" :key="index" :object="v" />
          </div>

          <!-- Object -->
          <div v-else-if="typeof value == 'object'">
            <DataTable :object="value" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import {
  isObjectWithIdTypeName,
  isObjectWithIdName,
  isObjectWithIdOnly,
  isObjectWithIdOnlyArray,
  isObjectWithLanguageValueOnly,
  isSchemaProp,
  stripSchemaURL,
  camel2title,
} from '~/util/objectsFromSchema'
import { isEmailObject, isLinkObject } from '~/util/frontmatter'

const isObjectArray = (value) =>
  Array.isArray(value) && value.length > 0 && typeof value[0] === 'object'

defineProps({
  object: {
    type: Object,
    required: true,
    default: null,
  },
})

const renderable = (value) =>
  isObjectWithIdTypeName(value) ||
  isObjectWithIdName(value) ||
  isObjectWithIdOnly(value) ||
  isObjectWithLanguageValueOnly(value) ||
  isObjectWithIdOnlyArray(value) ||
  !isObjectArray(value) ||
  typeof value !== 'object'

const renderSchemaProp = (string) => {
  return camel2title(stripSchemaURL(string))
}
</script>

<style scoped lang="scss">
.list-none {
  list-style: none;
  padding-left: 0;
}
table {
  border-collapse: collapse;
  th {
    padding: 10px 20px 10px 0;
  }
  td {
    padding: 10px 10px 10px 0;
  }
}
</style>
