const http = require("http")



const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our web page")
    }
    if(req.url === "/about"){
        res.end("Here is our short history")
    }
    res.end(`
    <h1>OOps</h1>,
    <p>We can seem to find the page</p>
     <a href="/">Back to home page</a>
    `)
})

server.listen(5000)