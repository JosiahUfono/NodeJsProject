const http = require("http");
var fs = require('fs');
const hostname = '127.0.0.1';
//node var textfield=document.getElementById("messageID").value;

const server = http.createServer((req, res ) => {
  res.statusCode = 200;
  fs.writeFile('message.txt', 'Nodess.html', function (err) {
    if (err) throw err;
   console.log("Saved successsssfylll");
   
});

});
server.listen( process.env.PORT || 3000);


 
