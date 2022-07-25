module.exports = 'Alo alo 123 1234';
const nodeHtmlToImage = require('node-html-to-image')

nodeHtmlToImage({
  output: '/root/image.png',
  html: '<html><body>Hello world!</body></html>'
})
  .then(() => console.log('The image was created successfully!'))
