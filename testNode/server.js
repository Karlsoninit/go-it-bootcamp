

// const http = require('http');
// const PORT = 7000;
//
// const server = http.createServer((request, response) => {
//     if( request.url === '/hello/' && request.method === 'GET' ){
//         response.write('HELLO GUYS')
//     }else {
//         response.write('Fuck off')
//     }
//     response.end()
//
// });
//
// server.listen(PORT, () => {
//     console.log(`Server Started on port: ${PORT}`);
// });


const http = reguire('http');
const https = reguire('https');

const PORT = 7000;

const articles = [
    'https://en.wikipedia.org/wiki/List_of_Bluetooth_protocols#TCS',
    'https://en.wikipedia.org/wiki/File_Transfer_Protocol',
    'https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol',
    'https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol',
    'https://en.wikipedia.org/wiki/TensorFlow',
    'https://en.wikipedia.org/wiki/OpenCV',
    'https://en.wikipedia.org/wiki/Java',
    'https://en.wikipedia.org/wiki/Deep_learning',
    'https://en.wikipedia.org/wiki/Command-line_interface',
        'https://en.wikipedia.org/wiki/Computer_terminal'
]

let raw = ''
articles.map((article) => {
    https.get(article, (res) => {

    })
})

https.get("https;//wikipedia.org/wiki/TCP", (res) => {
    res.on('data', (chunk) => {
        raw += chunk;
    })
    res.on('end', () => {
        raw
        debugger
    })

})