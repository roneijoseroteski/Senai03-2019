import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tamanho } from '../../providers/tamanhos';

/**
 * Generated class for the PaginaRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-r',
  templateUrl: 'pagina-r.html',
})
export class PaginaRPage {
  public exibirconteudo : boolean = true;
  public listaTamanhos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhoPizza : Tamanho) {
    this.adicionarPizza();
  }

  public adicionarPizza(){
    this.tamanhoPizza.tamanhos().subscribe(
      (resultado : any) => {
        debugger;
        
        this.listaTamanhos = resultado;
        
      }
    )
   
  }

  buttonclick(){
    
    this.exibirconteudo = !this.exibirconteudo;
  }

}
