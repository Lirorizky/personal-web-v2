const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"));

app.use('/public', express.static(path.join(__dirname, "./public")));

// console.log(__dirname);

app.get('/', (req, res) => {
  res.send('Hello World');
})

const isLogin = false;

app.get('/home', (req, res) => {
  setHeader(res)
  res.render('index', {
    isLogin: isLogin
  })
})

app.get('/project', (req, res) => {
  setHeader(res);
  res.render('project', {
    isLogin: isLogin
  });
})

app.get('/project/:id', (req, res) => {
  const projectId = req.params.id
  setHeader(res);
  res.render('project-detail', {
    project: {
      id: projectId,
      title: '',
      post_date: '',
      company: '',
      content: ''
    }
  });
})

app.get('/contact', (req, res) => {
  setHeader(res);
  res.render('contact-form', {
    isLogin: isLogin
  });
})

const port = 5000;
app.listen(port, function() {
  console.debug(`server running on port ${port}`);
})

function setHeader(res){
  res.setHeader("content-type", "text/html");
  res.setHeader('Cache-Control', "s-max-age=1, stale-while-revalidate");
}