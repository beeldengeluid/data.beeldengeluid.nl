export const download = (data, fileName, mimeType = '') => {
  const url = window.URL.createObjectURL(new Blob([data], { type: mimeType }))
  const link = document.createElement('a')

  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)

  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
