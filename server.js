const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
f
const fs = require('fs'); 

app.engine('portal', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace('#url#', options.url)
    return callback(null, rendered);
  });
});
app.set('views', './views');
app.set('view engine', 'portal');


app.get('/0', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'steps to become a Millionaire',
    content: 'T1. Create a financial plan.',
    url: 'https://smartasset.com/wp-content/uploads/sites/2/2017/09/husband-and-wife-make-2020-monthly-family-financial-plan-picture-id1188903426-1.jpg'
  });
});


app.get('/1', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'second step',
    content: '2. Increase your income',
    url: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/03/LMM-Cover-Images-12.jpg'
  });
});


app.get('/2', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'Third step',
    content: 'Live below your means',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekECpIE6gz18sJsaQqLROMcDZQzrQ7SLAig&usqp=CAU'
  });
});

app.get('/3', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'Fourth step',
    content: 'Pay off your debt.',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyv-LdBYUdvzU27OR91tIOn0rW9gBodpfaRg&usqp=CAU'
  });
});



app.get('/4', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'Fifth step',
    content: 'Understand the power of compound interest',
    url: 'https://terrencejameson.com/wp-content/uploads/2018/11/What-is-Compound-Interest.jpg'
  });
});



app.get('/5', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'sixth step',
    content: 'Max out your retirement contributions each year',
    url: 'https://www.retirebeforedad.com/wp-content/uploads/2019/01/MaxOut401kTotalMax2.png'
  });
});



app.get('/6', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'seventh step',
    content: 'Choose the right investing brokerage',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhNp40Sp6AkPJ8iypAavfYjrgzgO2ywdVhA&usqp=CAU'
  });
});



app.get('/7', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'eighth step',
    content: 'Open a high-yield savings account',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthPuRNd9_QO4DQt0tyxjmZvtY9ZUFr9oUcQ&usqp=CAU'
  });
});



app.get('/8', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'Ninth step',
    content: 'Automate your savings and investing',
    url: 'https://imageio.forbes.com/blogs-images/peterlazaroff/files/2018/01/How-to-Automate-Your-Finances-1200x784.jpg?format=jpg&width=1200'
  });
});



app.get('/9', (req, res) => {
  res.render('template2', {
    title: 'Millionaire',
    message: 'Final step',
    content: 'Network with millionaires',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5kTn3tEEzQXVpF5cG_ej01um5ihA5EwJiQ&usqp=CAU'
  });
});





app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
