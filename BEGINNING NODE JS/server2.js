const index = require('http')
const server2 = index.createServer((req, res) =>{
	if(req.url === '/about')
	 res.end('The about page')
	else if(req.url === '/contact')
	 res.end('The contact page')
	else if(req.url === '/')
	 res.end('The home page')
	else {
	 res.writeHead(404)
	 res.end('page not found')
}
})
server2.listen(3003)


const http = require('http')
const server1 = http.createServer((req, res) =>{
	if(req.url === '/about')
	 res.end('this is server1')
	else if(req.url === '/contact')
	 res.end('The contact page')
	else if(req.url === '/')
	 res.end('The home page')
	else {
	 res.writeHead(404)
	 res.end('page not found')
}
})
server1.listen(3002)
