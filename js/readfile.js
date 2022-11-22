var fs = require('fs'); // fs는 파일 시스템.

//sample.txt를 읽어서 로그를 찍음.
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data); 
});