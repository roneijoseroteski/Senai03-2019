
import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class Login{
    url = "http://104.196.102.231/logon";


    constructor(private httpProvider : HttpProvider){
    }
        
    
    public login (userName: string, password : string){
        // console.log(userName,password);
        // debugger;
        let obj = {
            userName : userName,
            password : password
        }
        // userName:"admin@senai";
        // password:"1234";

        this.httpProvider.url = this.url;

        return this.httpProvider.post(obj)
               
            
        

    }
}