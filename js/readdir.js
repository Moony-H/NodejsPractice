var testFolder = './data'; //data folder 읽음
var fs = require('fs'); // 
 
//읽고 나서 list 형식으로 반환함.
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})