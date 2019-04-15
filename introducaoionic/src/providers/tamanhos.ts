import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';



@Injectable()
export class Tamanho{


    constructor(private httpProvider : HttpProvider){

    }
    url = "http://localhost:3000/tamanhos";

    public tamanhos (){
        this.httpProvider.url = this.url;

        return this.httpProvider.get();

    }



}
