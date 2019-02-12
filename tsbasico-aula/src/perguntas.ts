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
                    type:'input',
                    message:'Qual o tamanho da pizza: ',
                    choices:['Piquena', 'Média', 'Grande'],
                },
                {
                    name:'sabor',
                    type:'input',
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
        console.log(`\nNome ${this.dadosDoPedido.name}!\n`);
        console.log(`\nTelefone ${this.dadosDoPedido.telefone}!\n`);
        console.log(`\nTamanho ${this.dadosDoPedido.tamanho}!\n`);
        console.log(`\nSabor ${this.dadosDoPedido.sabor}!\n`);
        console.log(`\nQuantidade ${this.dadosDoPedido.quantidade}!\n`);
       if (this.dadosDaEntrega !== null){
           console.log(`\nCidade ${this.dadosDaEntrega.cidade}!`);
           console.log(`\nBairro ${this.dadosDaEntrega.bairro}!`);
           console.log(`\nRua ${this.dadosDaEntrega.rua}!`);
           console.log(`\nNumero da residencia ${this.dadosDaEntrega.numero}!`);
           console.log(`\nComplemento ${this.dadosDaEntrega.complemento}!`);

       }  
    }
}