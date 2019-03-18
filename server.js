// const express = require('express');
// const app = express();
// app.use(express.static('./dist'));
// app.get('/*', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });
// app.listen(process.env.PORT || 8080);


const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static('./dist/ng-sp19-adityalprabhu'));

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/ng-sp19-adityalprabhu/index.html'));
});
app.listen(process.env.PORT || 8080);
