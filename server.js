var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title: 'Article 1',
        content:
        `<p>Content</p>
        
        <p>Content</p>
                
        <p>Content</p>
                
        <p>Content</p>`

    },
    'article-two':{
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res){
    var articleName=req.params.articleName;
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

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
