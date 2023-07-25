export const generateSrcset = ($img, src, sizes) => {
  // use @nuxt/image to generate a srcset value that's (mostly) compatible
  // with responsive-loader (https://github.com/dazuaz/responsive-loader).
  // e.g. a require('image.jpg?sizes=[100, 200]').srcSet can be replaced with
  // generatesrcSet($img, 'image.jpg', [100, 200]).
  return sizes.map((size) => `${$img(src, { width: size })} ${size}w`).join(',')
}
