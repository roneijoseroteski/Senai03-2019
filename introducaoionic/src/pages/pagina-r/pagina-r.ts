import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tamanho } from '../../providers/tamanhos';
import { Sabores } from '../../providers/sabores';
import { EntregainfoPage } from '../entregainfo/entregainfo';

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
  public listaSaboreePrecos = [];
  idProduto : string;



  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhoPizza : Tamanho, private sabor : Sabores) {
    this.adicionarPizza();
  }

  public adicionarPizza(){
    this.tamanhoPizza.tamanhos().subscribe(
      (resultado : any) => {
        // debugger;
        
        this.listaTamanhos = resultado;
        
      }
    )
   
  }
  clicar(){
    this.sabor.saboreseprecos(this.idProduto).subscribe(
      (saboreando : any) => {
        this.listaSaboreePrecos = saboreando;
      }
    )

  }

  buttonclick(){
    
    this.exibirconteudo = !this.exibirconteudo;
  }

  telaEntrega(){
    this.navCtrl.push(EntregainfoPage);
  }

}
