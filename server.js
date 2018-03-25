var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = 
{
    'article-one':
    {
        'content':`<p>This is my first article. Retrial</p>`
    },
    'article-two':
    {
        'content':`<p>This is my second article. Retrial</p>`
    },
    'article-three':
    {
        'content':`<p>This is my third article. Retrial</p>`
    }
};    
function createTemplate (data) 
{
        var content=data.content;
        
        var htmlTemplate = 
        `<html>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            <div class="container">
            ${content}
            </div>
        </html>`;
        return htmlTemplate;
}

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});  

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articlename;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});