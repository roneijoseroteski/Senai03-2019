import express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
import { MySQLFactory } from './mysql/mysql_factory';


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
        let tamanhoSQL : string = 'select * from tamanhos'
        // console.log(tamanhoSQL);
        new MySQLFactory().getConnection().select(tamanhoSQL).subscribe(
            (data : any) => {
                // console.log(data.length);


                data.forEach((element : any) => {
                    console.log
                    
                    tamanho.push({
                        id : element.idTamanhos,
                        name : element.name,
                        quantidade_sabores : element.quantidade_sabores
                    })
                });

                res.send(tamanho)
            },
            (error : any) =>{
                console.log(error);
                res.send(error);
            }
        );
    // })
});
app.get('/sabores/:idsabor', (req,res,next) =>{
    // res.send({
        let sabor : any = [];
        let saboresSQL : string = 'select * from sabores where tamanhos_idTamanhos = \''+ req.params.idsabor + '\''
        console.log(saboresSQL);

    
        new MySQLFactory().getConnection().select(saboresSQL).subscribe(
            (data : any) => {
                // console.log(data.length);
                console.log(data);

                data.forEach((element : any) => {
                    console.log(element);
                    
                    sabor.push({
                        sabor : element.sabor,
                        preco : element.preco
                    })
                })

                res.send(sabor)
                
            },
            (error : any) =>{
                console.log(error);
                res.send(error);
            }
        );
    // })
});
app.get('/cidades', (req,res,next)=>{
    let cidade :any = [];
    let cidadeSQL : string = 'select * from cidades'
    // console.log(tamanhoSQL);
    new MySQLFactory().getConnection().select(cidadeSQL).subscribe(
        (data : any) => {
            // console.log(data.length);


            data.forEach((element : any) => {
                console.log
                
                cidade.push({
                    id : element.idCidades,
                    name : element.nome,
                    
                })
            });

            res.send(cidade)
        },
        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
});
app.get('/bairros/:idcidades', (req,res,next)=>{
    let bairro : any = [];
    let bairroSQL : string = 'select * from bairros where cidades_idCidades = \''+ req.params.idcidades + '\''
    console.log(bairroSQL);


    new MySQLFactory().getConnection().select(bairroSQL).subscribe(
        (data : any) => {
            // console.log(data.length);

            data.forEach((element : any) => {
                console.log
                
                bairro.push({
                    name : element.name,
                    value : element.value
                })
            });

            res.send(bairro)
            
        },
        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
});
app.post('/logon', (req,res,next) =>{
    //  let userName = req.body.userName;
    //  let password = req.body.password;
    // if(userName === "admin@senai" && password === "1234"){
    //     res.send({
    //         userName:userName,
    //         password:password
    //     });

    // }else{
    //     res.status(401).send('Conta invalida!');
    
    let generateSQL : string = 'select * from login where login.username = \'' + req.body.userName + '\' and login.password = \'' + req.body.password + '\''

    // }
    new MySQLFactory().getConnection().select(generateSQL).subscribe(
        (data : any) => {
            console.log(data.length);
            if (!data.length || data.length != 1){
                res.status(401).send('Conta invalida!');
                return;
            }
            res.send({
                userName : req.body.userName,
                password : req.body.password
            });
            
        },
        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
})
app.post('/cadastro', (req,res,next)=>{
//     let nome = req.body.nome;
//     let newuser = req.body.newuser;
//     let newpassword = req.body.newpassword;
//    console.log(nome);
//    console.log(newpassword);
//    console.log(newuser);
//    res.send({msg : "Criado com sucesso"});



    let cadastre : string ='insert into login(username,password,name) values(\'' + req.body.newuser + '\' ,\'' +req.body.newpassword +'\' ,\'' +req.body.nome + '\')'
    // 
    console.log(cadastre);
    new MySQLFactory().getConnection().insert(cadastre).subscribe(
        (data : any) => {
            res.send({msg : "Criado com sucesso"});
            return;
        },
        (error : any) =>{
            res.send(error);
        }
    );
})
app.post('/saborCadastro', (req,res,next)=>{

    
    let cadastreSabor : string ='insert into sabores(sabor,preco,tamanhos_idTamanhos) values(\'' + req.body.sabor + '\' ,\'' + req.body.preco +'\' ,\'' + req.body.tamanhos_idTamanhos + '\')'
    //                                                                                         
    console.log(cadastreSabor);
    new MySQLFactory().getConnection().insert(cadastreSabor).subscribe(
        (data : any) => {
            res.send({msg : "Criado com sucesso"});
            return;
        },
        (error : any) =>{
            res.send(error);
        }
    );
    }); 
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})