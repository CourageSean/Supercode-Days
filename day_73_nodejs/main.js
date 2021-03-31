console.log('hello');
const http = require('http');
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
    // console.log('request', req.url)
    // console.log(path.extname(req.url));
    let filePath = req.url === '/' ? '/index.html' : req.url
    console.log(filePath)
    let ext = path.extname(req.url)
    let contentType = "text/html"
    switch (ext) {
        case '.css':
            contentType = "text/css"
            break;
        case '.jpeg':
        case '.jpg':
            contentType = "image/jpeg"
            break;
        case '.png':
            contentType = "image/png"
            break;
        case '.ico':
            contentType = "image/vnd.microsoft.icon"
            break;
    }

    console.log(contentType)



    fs.readFile(`./public${filePath}`, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)
    })

    // if (req.url == "/") {
    //     fs.readFile('./public/index.html', (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': contentType })
    //         res.end(data)
    //     })
    // }
    // if (req.url == "/style.css") {
    //     fs.readFile('./public/style.css', (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': contentType })
    //         res.end(data)
    //     })

    // }
    // if (req.url == "/about") {
    //     fs.readFile('./public/about.html', (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': contentType })
    //         res.end(data)
    //     })
    // }
    // if (req.url == "/picture.jpeg") {
    //     fs.readFile('./public/picture.jpeg', (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': contentType })
    //         res.end(data)
    //     })
    // }
    // if (req.url == '/love.png') {
    //     fs.readFile('./public/love.png', (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'image/png' })
    //         res.end(data)
    //     })
    // }

})
server.listen(3010, () => {
    console.log('server working');
})