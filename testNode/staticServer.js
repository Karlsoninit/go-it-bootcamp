const http = require('http');
const fs = require('fs')
const PORT = 8000;

const urlMap = {
    '/image/': () => {
        return fs.readFileSync('./index.html')
    },
    public:(filename) => {
        try {
            return fs.readFileSync(filename)
        }
    }

}

http.createServer((request, response) =>{
    if(request.url in urlMap){
        response.write(urlMap[request.url]());
        debugger
    }else {
        let public = /^\/public{1}/i;
        if(pablic.test(url.replace))
           response.write(urlMap.public)
    }
    response.end()
}).listen(PORT)


    // if(request.url in urlMap){
    //     response.write(urlMap[request.url]());
    //     debugger
    // }else {
    //     response.write('404 f')
    // }
    // response.end()

