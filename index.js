const http = require('http')
const PORT = process.env.PORT || 3000
http.createServer((req,res)=>{

    res.write('Hello World');
    res.end();
    
}).listen(PORT,()=>{
    console.log('Server Running on http localhost bababa');
});