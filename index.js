const http = require("http")

const app = http.createServer((req, res)=>{
    if(req.url == "/home"){
        res.write("<html><body><h2>Node.js :-</h2><p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</p></body></html>");
        res.end()
    } else if(req.url == "/about"){
        const student = {
            "Name" : "Rakshith",
            "Age" : 22,
            "Batch": "EA22"
        };
        const studentStr = JSON.stringify(student);
        res.write(studentStr)
        res.end()
    }
})

app.listen(4000, ()=>{
    console.log("server running")
})