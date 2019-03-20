import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';



@Injectable()
export class Tamanho{


    constructor(private httpProvider : HttpProvider){

    }
    url = "http://104.196.102.231/tamanhos";

    public tamanhos (){
        this.httpProvider.url = this.url;

        return this.httpProvider.get();

    }



}