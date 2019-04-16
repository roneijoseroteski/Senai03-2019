import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class Cadastrar{
    url = "http://localhost:3000/cadastro";

    constructor(private httpProvider : HttpProvider){

    }

    public NovoCadastro(nome:string, newuser:string, newpassword:string){

        let obj = {
            nome:nome,
            newuser:newuser,
            newpassword:newpassword

        }
        this.httpProvider.url = this.url;
        return this.httpProvider.post(obj);

    }

}