const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();

app.use('/static',express.static('static'));
app.use(express.urlencoded())

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res) => {
    res.render('home.pug');
});

app.get('/about',(req,res) => {
    res.render('about.pug');
});

app.get('/skills',(req,res) => {
    res.render('skills.pug');
});
app.get('/contact',(req,res) => {
    res.render('contact.pug');
});
app.post('/contact', (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const msg=req.body.message;
  
    const content=`NAME:${name}, EMAIL:${email}, MESSAGE:${msg}\n`;
    fs.appendFileSync('contact.txt',content,'utf-8');
    res.status(200).render('contact.pug');
});

app.listen(5000,() => {
    console.log('Listening...');
});
