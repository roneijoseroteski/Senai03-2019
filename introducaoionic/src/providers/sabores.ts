import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';



@Injectable()
export class Sabores{

    constructor(private httpProvider : HttpProvider){

    }

   
    
   

    idtamanho : number;



    public saboreseprecos(idSabor : string){
        let urlSabor="http://104.196.102.231/sabores/" + idSabor;

        this.httpProvider.url = urlSabor;
        return this.httpProvider.get();
    }


}