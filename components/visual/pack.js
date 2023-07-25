// https://www.crazygeeks.org/questions/packing-different-sized-circles-into-rectangle-d3-js  ?
// https://observablehq.com/@mbostock/packing-circles-inside-a-rectangle

const scaleValue = (v) => 14 + Math.pow(Math.log(v), 2)

export const createLayout = ({ nodes, width, height, padding = 1 }) => {
  nodes.forEach((d) => {
    d.r = scaleValue(d.value)
  })
  const layout = rectPack(nodes, width, height)
  const halfWidth = width / 2
  const halfHeight = height / 2
  layout.forEach((node) => {
    node.x += halfWidth
    node.y += halfHeight
    node.r -= padding
  })
  return layout
}

function scoreRectangle(node, width, height) {
  const a = node._
  const b = node.next._
  const ab = a.r + b.r
  const cx = (a.x * b.r + b.x * a.r) / ab
  const cy = (a.y * b.r + b.y * a.r) / ab
  return Math.max(Math.abs(cx * height), Math.abs(cy * width))
}

function rectPack(circles, width, height) {
  const n = circles.length
  if (!n) return circles

  let a, b, c

  // Place the first circle.
  a = circles[0]
  a.x = 0
  a.y = 0
  if (!(n > 1)) return circles

  // Place the second circle.
  b = circles[1]
  a.x = -b.r
  b.x = a.r
  b.y = 0
  if (!(n > 2)) return circles

  // Place the third circle.
  place(b, a, (c = circles[2]))

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a)
  b = new Node(b)
  c = new Node(c)
  a.next = c.previous = b
  b.next = a.previous = c
  c.next = b.previous = a
  // Attempt to place each remaining circle
  // eslint-disable-next-line
  pack: for (let i = 3; i < n; ++i) {
    c = circles[i]
    place(a._, b._, c)

    c = new Node(c)
    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    let j = b.next
    let k = a.previous
    let sj = b._.r
    let sk = a._.r
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j
          a.next = b
          b.previous = a
          --i
          // eslint-disable-next-line
          continue pack
        }
        sj += j._.r
        j = j.next
      } else {
        if (intersects(k._, c._)) {
          a = k
          a.next = b
          b.previous = a
          --i
          // eslint-disable-next-line
          continue pack
        }
        sk += k._.r
        k = k.previous
      }
    } while (
      j !== k.next
      // Success! Insert the new circle c between a and b.
    )
    c.previous = a
    c.next = b
    a.next = b.previous = b = c

    // Compute the new closest circle pair to the centroid.
    let aa = scoreRectangle(a, width, height)
    let ca
    while ((c = c.next) !== b) {
      if ((ca = scoreRectangle(c, width, height)) < aa) {
        a = c
        aa = ca
      }
    }
    b = a.next
  }
  return circles
}

function place(b, a, c) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const d2 = dx * dx + dy * dy
  if (d2) {
    const a2 = (a.r + c.r) ** 2
    const b2 = (b.r + c.r) ** 2
    if (a2 > b2) {
      const x = (d2 + b2 - a2) / (2 * d2)
      const y = Math.sqrt(Math.max(0, b2 / d2 - x * x))
      c.x = b.x - x * dx - y * dy
      c.y = b.y - x * dy + y * dx
    } else {
      const x = (d2 + a2 - b2) / (2 * d2)
      const y = Math.sqrt(Math.max(0, a2 / d2 - x * x))
      c.x = a.x + x * dx - y * dy
      c.y = a.y + x * dy + y * dx
    }
  } else {
    c.x = a.x + c.r
    c.y = a.y
  }
}

function intersects(a, b) {
  const dr = a.r + b.r - 1e-6
  const dx = b.x - a.x
  const dy = b.y - a.y
  return dr > 0 && dr * dr > dx * dx + dy * dy
}

class Node {
  constructor(circle) {
    this._ = circle
    this.circle = circle
    this.next = null
    this.previous = null
  }
}
