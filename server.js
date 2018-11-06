const http = require('http'),
  src = require('fs').readFileSync("./src/test.html", {
    encoding: 'utf8'
  })
server = http.createServer((_, res) => res.end(src));
server.listen(3000, () => {
  console.log('http://localhost:3000/')
})