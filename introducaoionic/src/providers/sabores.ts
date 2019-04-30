import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';



@Injectable()
export class Sabores{

    constructor(private httpProvider : HttpProvider){

    }





    // idtamanho : number;



    public saboreseprecos(idProduto : string){
        let urlSabor="http://localhost:3000/sabores/" + idProduto;
        
        this.httpProvider.url = urlSabor;
        return this.httpProvider.get();
    }


}
