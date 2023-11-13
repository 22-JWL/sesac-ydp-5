const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// app.post(/'login' (req,res) => {
// //     try{
// //         const{id, pw} = req.body
// //         const{id: realId, pw:realPw} =userInfo;

// //         if(id === realId && pw === realPw){
// //             const token jwt.s
// //         }

// //     }
// // })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
