var express = require('express');
var morgan = require('morgan');
var path = require('path');

var article={
    articleOne
    :{
        title: 'Article 1',
        content:
        `<p>Content</p>
        
        <p>Content</p>
                
        <p>Content</p>
                
        <p>Content</p>`

    },
    articleTwo
    :{
        title: 'Article 2',
        content:
        `<p>Content</p>
        
        <p>Content</p>
                
        <p>Content</p>
                
        <p>Content</p>`
        
    },
};
function createTemplate (data){
var title=data.title;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = test>
            <div>
                <a href='/'>Home</a>
            </div>
            <h3>Article One
            </h3>
            ${content}
        </div>
    </body>
</html>     
`;

return htmlTemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
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
