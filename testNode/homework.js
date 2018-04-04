const https = require('https');
const http = require('http');
const fs = require('fs');
const { JSDOM } = require("jsdom");
const PORT = 9000;


const name = ''


const FoundUrl = {
    '/found/': () => {
        return `
            <html>
            <h1>I cant do this</h1>
                <input>${name}</html>
            </html>
        `
    },

}





http.createServer((request, response) => {
    if(request.url in FoundUrl){
        response.write(FoundUrl[request.url]());
    }
    response.end('the end')
}).listen(PORT);


https.get('https://rabota.ua/company0/vacancy7157491?ref=recom_new&cre=jobsearch&pos=left_block', (res) => {
    res.on('data', (par) => {
        process.stdout.write(par);
    });
})









