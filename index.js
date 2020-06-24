const express = require('express'),
    path = require('path'),
    PORT = process.env.PORT || 5000;

express()
//   .use(express.static(path.join(__dirname, 'src')))
  .set('views', path.join(__dirname, 'src'))
//   .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('main/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));