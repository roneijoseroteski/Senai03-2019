import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';


export class Produtos {

    private categorias : any[] = [];
    private produtos : any[] = [];


    public getCategorias(){
        new VpHttp('http://5c6c7c63d51de300146f5b70.mockapi.io/categoria').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.categorias.push(element.categoria);
                });
                this.getProdutos();
                    
               
            },
            (error : any) => {
                console.log(error);
            }
        )

    }

    public getProdutos(){
        new VpHttp('http://5c6c7c63d51de300146f5b70.mockapi.io/produtos').get().subscribe(
            (data : any) => {
                this.produtos = data;
                this.clientePedido();
            },
            (error : any) => {
                console.log(error);
            }
        )

    }

    public clientePedido(){
        this.mostrandoCategorias();


    }
    private mostrandoCategorias() {
        prompt(
            [
                {
                    name:'categoria',
                    type:'list',
                    message:'esscolha a categoria desejada',
                    choices:this.categorias,
                }
            ]
        ).then((answers: any) =>{
            
         this.produtos.forEach((element : any) =>{
             if(element.categoria === answers.categoria){
                 console.log(`Tem ${element.produtos} Quantidade ${element.disponível} ${element.name}!`);
             }
         })
        })

    }


}