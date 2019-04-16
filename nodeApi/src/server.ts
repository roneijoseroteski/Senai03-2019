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
app.get('/tamanhos', (req,res,next) =>{
    // res.send({
        let tamanho : any = [];
        
            tamanho.push({
                "id":1,
                "name":"Pequena",
                "quantidade_sabores": 1
            },
            {
                "id":2,
                "name":"Média",
                "quantidade_sabores": 2

            },
            {
                "id":3,
                "name":"Grande",
                "quantidade_sabores": 3
            }

            )

        
        res.send(tamanho)
    // })
});
app.get('/sabores/:idsabor', (req,res,next) =>{
    // res.send({
        let sabor : any = [];
        if(req.params.idsabor == 1){
            sabor.push({
                "sabor": "Calabresa",
                "preco": 12
            },
            {
                "sabor": "Quatro Queijos",
                "preco": 15

            },
            {
                "sabor": "Bacon",
                "preco": 13
            },
            {
                "sabor": "Chocolate",
                "preco": 14

            },
            {
                "sabor": "Brocolis",
                "preco": 16
            }

            )

        }
        if(req.params.idsabor == 2){
            sabor.push({
                "sabor": "Calabresa",
                "preco": 18
            },
            {
                "sabor": "Quatro Queijos",
                "preco": 21

            },
            {
                "sabor": "Bacon",
                "preco": 19
            },
            {
                "sabor": "Chocolate",
                "preco": 20

            },
            {
                "sabor": "Brocolis",
                "preco": 22
            }

            )

        }
        if(req.params.idsabor == 3){
            sabor.push({
                "sabor": "Calabresa",
                "preco": 25
            },
            {
                "sabor": "Quatro Queijos",
                "preco": 28

            },
            {
                "sabor": "Bacon",
                "preco": 26
            },
            {
                "sabor": "Chocolate",
                "preco": 27

            },
            {
                "sabor": "Brocolis",
                "preco": 29
            }

            )

        }
        res.send(sabor)
    // })
});
app.get('/cidades', (req,res,next)=>{
    let cidade :any = [];
    cidade.push(
        {
            "id": 1,
            "name": "Jaraguá do Sul"
        },
        {
            "id": 2,
            "name": "Corupá"
        },
        {
            "id": 3,
            "name": "Guaramirim"
        }
    )
    res.send(cidade)
});
app.get('/bairros/:idcidades', (req,res,next)=>{
    let bairro : any = [];
    if(req.params.idcidades == 1){
        bairro.push(
            {
                "name": "Centro",
                "value": 1.5
            },
            {
                "name": "Agua Verde",
                "value": 2.35
            },
            {
                "name": "Chico de Paula",
                "value": 3.8
            },
            {
                "name": "Figueira",
                "value": 4
            }
        )
    }
    if(req.params.idcidades == 2){
        bairro.push(
            {
                "name": "Seminário",
                "value": 6.8
            },
            {
                "name": "Ano bom",
                "value": 6.75
            },
            {
                "name": "Centro",
                "value": 6
            }
        )
    }
    if(req.params.idcidades == 3){
        bairro.push(
            {
                "name": "Amizade",
                "value": 12
            },
            {
                "name": "Centro",
                "value": 8
            },
            {
                "name": "Avai",
                "value": 7
            },
            {
                "name": "Corticeira",
                "value": 7
            }
        )
    }
    res.send(bairro)
});
app.post('/logon', (req,res,next) =>{
     let userName = req.body.userName;
     let password = req.body.password;
    if(userName === "admin@senai" && password === "1234"){
        res.send({
            userName:userName,
            password:password
        });

    }else{
        res.status(401).send('Conta invalida!');
    }
})
app.post('/cadastro', (req,res,next)=>{
    let nome = req.body.nome;
    let newuser = req.body.newuser;
    let newpassword = req.body.newpassword;
   console.log(nome);
   console.log(newpassword);
   console.log(newuser);
   res.send({msg : "Criado com sucesso"});
})
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})