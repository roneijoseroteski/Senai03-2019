import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';
import {Tamanho} from './interface';

export class Pedidos {
    private dadosDoPedido : any = null;
    private dadosDaEntrega : any = null;
    private tamanhos : any[] = [];
    private sabores : any[] = [];
    private cidades : any[] = [];
    private bairos : any[] = [];

    public getTamanhos(){
        

        new VpHttp('http://5c64a102c969210014a32ee8.mockapi.io/tamanhos').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.tamanhos.push(element.tamanho);
                });
               // this.tamanhos = data;
                //console.log(JSON.stringify(this.tamanhos));
                this.getSabores();
                /*data.forEach((element : Tamanho) => {
                  console.log(element.tamanho);  
                });*/
               // console.log(JSON.stringify(data));
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getSabores(){
        new VpHttp('http://5c64a102c969210014a32ee8.mockapi.io/sabor').get().subscribe(
            (data : any) => {
                // console.log(data);
                data.forEach((element : any) => {
                    if(element.disponível === true){
                        this.sabores.push(element.Sabor);
                    }
                });
                // this.sabores = data;
                this.getCidades();

            },
            (error : any) => {
                console.log(error);
            }
        );
    }
    public getCidades(){
        new VpHttp('http://5c64a102c969210014a32ee8.mockapi.io/cidades').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.cidades.push(element.cidades);
                });
                // this.cidades = data;
                this.getBairos();
            },
            (error : any) => {
                console.log(error);
            }
        )
    }
    public getBairos(){
        new VpHttp('http://5c64a102c969210014a32ee8.mockapi.io/bairos').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.bairos.push(element.bairos);
                });
                // this.bairos= data;

                // console.log(JSON.stringify(this.sabores));
                // console.log(JSON.stringify(this.tamanhos));
                // console.log(JSON.stringify(this.cidades));
                // console.log(JSON.stringify(this.bairos));
                this.ChamarPedido();
            },
            (error : any) =>{
                console.log(error);
            }
        )
    }
  

    public ChamarPedido(){
        this.pessoalInfoPedido();
    }

    private pessoalInfoPedido(){
        prompt(
            [
                {
                    name:'name',
                    type:'input',
                    message:'Qual o seu nome: ',
                },
                {
                    name:'telefone',
                    type:'input',
                    message:'Digite seu numero de telefone: ',
                },{
                    name:'tamanho',
                    type:'list',
                    message:'Qual o tamanho da pizza: ',
                    choices:this.tamanhos,
                    
                },
                {
                    name:'sabor',
                    type:'list',
                    message:'Digite o sabor da Pizza: ',
                    choices:this.sabores,
                },
                {
                    name:'quantidade',
                    type:'input',
                    message:'Digite a quantidade de pizzas: ',
                },
                {
                    name:'entrega',
                    type:'input',
                    message:'E entregar a domicilio Sim ou Não: ',
                },
            ]
        ).then(
            (answers : any) =>{
                console.log(`\nNome ${answers.name}!\n`);
                console.log(`\nTelefone ${answers.telefone}!\n`);
                console.log(`\nTamanho ${answers.tamanho}!\n`);
                console.log(`\nSabor ${answers.sabor}!\n`);
                console.log(`\nQuantidade ${answers.quantidade}!\n`);

                this.dadosDoPedido = answers;
                if(answers.entrega == 'sim'){
                    this.infoEntrega();
                } else {
                    this.imprimirRelatorio();
                }
            }
        )
    }

    
    private infoEntrega(){
        prompt(
            [
                {
                    name:'cidade',
                    type:'list',
                    message:'Qual a cidade: ',
                    choices:this.cidades,


                },
                {
                    name:'bairro',
                    type:'list',
                    message:'Qual seu bairro: ',
                    choices:this.bairos,

                },
                {
                    name:'rua',
                    type:'input',
                    message:'Qual sua rua: ',

                },
                {
                    name:'numero',
                    type:'input',
                    message:'Qual o numeero da casa ou apartamento: ',

                },
                {
                    name:'complemento',
                    type:'input',
                    message:'Complemento de indereço: ',

                }
            ]
        ).then(
            (answers: any) =>{
                this.dadosDaEntrega = answers;
                this.imprimirRelatorio();
            }
        )
    }
    private imprimirRelatorio(){
        console.log(`Nome ${this.dadosDoPedido.name}!`);
        console.log(`Telefone ${this.dadosDoPedido.telefone}!`);
        console.log(`Tamanho ${this.dadosDoPedido.tamanho}!`);
        console.log(`Sabor ${this.dadosDoPedido.sabor}!`);
        console.log(`Quantidade ${this.dadosDoPedido.quantidade}!`);
       if (this.dadosDaEntrega !== null){
           console.log(`Cidade ${this.dadosDaEntrega.cidade}!`);
           console.log(`Bairro ${this.dadosDaEntrega.bairro}!`);
           console.log(`Rua ${this.dadosDaEntrega.rua}!`);
           console.log(`Numero da residencia ${this.dadosDaEntrega.numero}!`);
           console.log(`Complemento ${this.dadosDaEntrega.complemento}!`);

       } 
       
       this.dadosDoPedido.dadosDaEntrega = this.dadosDaEntrega;

       console.log(JSON.stringify(this.dadosDoPedido));

    }

}