import { Injectable } from '@angular/core';
import { HttpProvider }from '../providers/http';



@Injectable()
export class ProdutoCadastro{
    url = "http://localhost:3000/saborCadastro";
    constructor(private httpProvider: HttpProvider){

    }
    public NovoSabor(sabor : string, preco : number, idProduto : string){

            let obj = {
                sabor:sabor,
                preco:preco,
                tamanhos_idTamanhos: idProduto
            }
            console.log(obj);
            this.httpProvider.url = this.url;
            return this.httpProvider.post(obj);
    }
}