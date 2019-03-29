import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../providers/cidade';
import { Bairro } from '../../providers/bairro';
/**
 * Generated class for the EntregainfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entregainfo',
  templateUrl: 'entregainfo.html',
})
export class EntregainfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidade : Cidade , private bairro : Bairro) {
    this.adicionaCidade();
  }

 public listaCidades = [];
 public listaBairros = [];
 public exibirCamposText : boolean = false;
 cidadela : string;
 bairo : string;
 


 public adicionaCidade(){
   this.cidade.PegarCidade().subscribe(
     (retorno : any) =>{
       this.listaCidades = retorno;
     }
   )
 }
 public clickcidade(){
   
   this.listarBairos();

 }

 public listarBairos(){
   this.bairro.PegarBairro(this.cidadela).subscribe(
     (resultado : any) =>{
       this.listaBairros = resultado;

     }
   )

 }
 public clicktext(){
   this.exibirCamposText = !this.exibirCamposText;
 }

public resetar(){
  this.cidadela = null;
  this.listaBairros = [];
  this.exibirCamposText = !this.exibirCamposText;
 
  this.adicionaCidade();
}
 

}
