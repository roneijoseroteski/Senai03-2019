import {prompt} from 'inquirer';

export class Perguntas {
   private dadosDoPedido : any = null;
   private dadosDaEntrega : any = null;

    public facaUmaPergunta(){
        prompt(
            [
                {
                    name:'name',
                    type:'input',
                    message:'Qual o seu nome',
                }
            ]

        ).then(
            (answers : any) =>{
                console.log(`\nOlá ${answers.name}!\n`);
            }
        );

    }
    public pessoalInfoPedido(){
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
                    choices:['Piquena', 'Média', 'Grande'],
                },
                {
                    name:'sabor',
                    type:'list',
                    message:'Digite o sabor da Pizza: ',
                    choices:['catupiri', 'calabresa', 'alho e olio', 'quatro queijos', 'california', 'portuguesa','bahiana']
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
                    this.relatorio();
                }
            }
        )
    }

    
    public infoEntrega(){
        prompt(
            [
                {
                    name:'cidade',
                    type:'input',
                    message:'Qual a cidade: ',

                },
                {
                    name:'bairro',
                    type:'input',
                    message:'Qual seu bairro: ',

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
                this.relatorio();
            }
        )
    }
    public relatorio(){
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
    }
}