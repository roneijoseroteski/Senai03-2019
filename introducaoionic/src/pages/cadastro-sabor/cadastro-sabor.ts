import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tamanho } from '../../providers/tamanhos';
import { ProdutoCadastro } from '../../providers/cadastrarProduto';
import { Toast } from '../../providers/toast';
/**
 * Generated class for the CadastroSaborPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-sabor',
  templateUrl: 'cadastro-sabor.html',
})
export class CadastroSaborPage {
  public listaTamanhos  = [];
  idProduto : string;
  preco : number = 0;
  sabor : string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhos : Tamanho, private produtoCadastro : ProdutoCadastro, private toast :Toast) {
    this.tamanhosPizza();
  }

public tamanhosPizza(){
  this.tamanhos.tamanhos().subscribe(
    (resultado : any) =>{
      this.listaTamanhos = resultado;
    }
  )
}
saborCadastroForm(){
  if(this.sabor !== "" && this.preco !== 0 && this.idProduto !== ""){
     this.produtoCadastro.NovoSabor(this.sabor,this.preco,this.idProduto).subscribe(
       (resposta : any) =>{
        this.toast.presentToast(resposta.msg, 5000);
       },
       (error : any)=>{
        this.toast.presentToast("sabor ja existe", 5000);
       }
     )

  }
}

}
