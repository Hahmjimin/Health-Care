// const express = require('express');
// const app = express();
// const test = require('.//Router/test');

// app.use('/', test);

// const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
// app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
const express = require("express"); 
const app = express();
const port = 5000; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "test", //mysql의 id
    password : "1234", //mysql의 password
    database : "nedis", //사용할 데이터베이스
});

connection.connect();

app.get('/', (req, res) =>{
    res.send('Netflix')
})

app.get('/Net', (req,res) => {
    connection.query('select * from netflix_titles', (err, data) => {
        if(!err) res.send({products : data});
        else res.send(err);
    })
})

// app.post("/Net", (req,res)=>{
//     // console.log(req.body);
//     connection.query("Select title from netflix_titles",
//     function(err,rows,fields){
//         if(err){
//             console.log("실패");
//             // console.log(err);
//         }else{
//             console.log("성공");
//             // console.log(rows);
//         };
//     });

    
// });

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})