import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cadastrar } from '../../providers/cadastrar';
import { Toast } from '../../providers/toast';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome:string;
  newuser:string;
  newpassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams , private cadastrar : Cadastrar, private toast : Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  cadastroform(){
    if(this.nome !== "" && this.newuser !== "" && this.newpassword !== "" ){

    this.cadastrar.NovoCadastro(this.nome, this.newuser,this.newpassword).subscribe(
      (resposta : any)=>{
        this.toast.presentToast(resposta.msg, 5000);
      },
      (error : any )=>{
        console.log(error);
        this.toast.presentToast("Conta ja existente", 5000);
      }
    )
    }

  }

}
