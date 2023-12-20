const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Barcelona":[
            [
               {
                  "nome":"Luis Suarez",
                  "foto":"https://us-tuna-sounds-images.voicemod.net/c0c8f0a8-0eb1-4d11-a601-78e41c23266f-1668412136526.jpg",
                  "gol_fatti":602,
                  "periodo":"2003 - 2021",
                  "ruolo":"esterno",
                  "anni":36
               },
               {
                  "nome":"Lionel Messi",
                  "foto":"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1146311511.jpg?resize=2048:*",
                  "gol_fatti":474,
                  "periodo":"2014 - 2020",
                  "ruolo":"attacante",
                  "anni":36
               },
               {
                  "nome":"Neymar Jr",
                  "foto":"https://jpimg.com.br/uploads/2017/06/1590946406-neymar-foi-expulso-na-partida-entre-barcelona-e-malaga-no-ultimo-dia-8.jpg",
                  "gol_fatti":68,
                  "periodo":"2013 - 2017",
                  "ruolo":"esterno",
                  "anni":31
               }
            ]
         ],
         "Real Madrid":[
            [
               {
                  "nome":"Cristiano Ronaldo",
                  "foto":"https://www.corriere.it/methode_image/2018/07/11/Cucina/Foto%20Cucina%20-%20Trattate/CR7%20barca-U3070979310482q7-U3000205434251v6G-593x443@Corriere-Web-Sezioni.PNG",
                  "gol_fatti":450,
                  "periodo":"2009 - 2017",
                  "ruolo":"attacante",
                  "anni":38
               },
               {
                  "nome":"Sergio Ramos",
                  "foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Russia-Spain_2017_%286%29.jpg/223px-Russia-Spain_2017_%286%29.jpg",
                  "gol_fatti":101,
                  "periodo":"2005 - 2021",
                  "ruolo":"difensore centrale",
                  "anni":37
               },
               {
                  "nome":"Luka Modric",
                  "foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Luka_Modric_Interview_2021_%28cropped%29.jpg/235px-Luka_Modric_Interview_2021_%28cropped%29.jpg",
                  "gol_fatti":26,
                  "periodo":"2012 - oggi",
                  "ruolo":"centrocampista",
                  "anni":38
               }
            ]
         ]
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});