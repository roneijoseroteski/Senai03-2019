import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class Cidade {

    constructor( private httpProvider : HttpProvider){

    }
    urlCidade = 'http://104.196.102.231/cidades';
    

    public PegarCidade(){
        


        this.httpProvider.url = this.urlCidade;
        return this.httpProvider.get();
    }

}