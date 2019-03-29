import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class Bairro {
    constructor(private httpProvider : HttpProvider){

    }

    public PegarBairro(idCidade : string){

        let urlBairro = 'http://104.196.102.231/bairros/' + idCidade;

        this.httpProvider.url = urlBairro;

        return this.httpProvider.get();
    }

}