const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));

//static file
app.use(express.static(__dirname + "/static"));

//for ejs templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//index ejs
app.get('/', (request, response) => {
    response.render("index");
});

app.get('/line', (request, response) => {
    response.render("wholepage");
})