import express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');


const app: express.Application = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port: number = 3000;

// app.get('/teste', function (req, res) {
//     res.send('Ola Mundo e Professor querido!');
//   });
app.get('/tamanhos/:idsabor', (req,res,next) =>{
    // res.send({
        let sabor : any = [];
        if(req.params.idsabor === 1){
            sabor.push({
                id:1,
                name:"Pequena",
                quantidade_sabores: 1
            },
            {
                id:1,
                name:"Media",
                quantidade_sabores: 2

            },
            {
                id:1,
                name:"Grande",
                quantidade_sabores: 3
            }

            )

        }
        res.send(sabor)
    // })
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})