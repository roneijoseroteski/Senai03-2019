import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/menssages';
import { Toast } from '../../providers/toast';
// import { PaginaRPage } from '../pagina-r/pagina-r';
import { Login } from '../../providers/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario : string;
  pass : string;

  public exibirconteudo : boolean = true;
  public listaAlunos = [];

  constructor(public navCtrl: NavController, private messages : Messages, private toast : Toast, private logar : Login) {

  }
  public adicionarAlunos(){
    this.listaAlunos.push({name :"Aluno A"});
    this.listaAlunos.push({name :"Aluno B"});
    this.listaAlunos.push({name :"Aluno C"});
    this.listaAlunos.push({name :"Aluno D"});
    this.listaAlunos.push({name :"Aluno E"});
  }
  logform(){
    // debugger;
    if(this.usuario === "admin@senai" && this.pass === "1234" ){
      // this.navCtrl.push(PaginaRPage);
      // this.navCtrl.setRoot(PaginaRPage);
      
      let resultado = this.logar.login(this.usuario,this.pass);
      console.log(resultado);

    }else{
      this.toast.presentToast("Conta invalida", 5000);
    }

  }


  showMessage(){
    this.messages.loadingShow();


  }
  showToast(){
    this.toast.presentToast("sonhar nao e proibido" , 6000);
  }
  public limparAlunos(){
    // for(()=>{
    //   if ((this.listaAlunos[].nome === "Aluno A")
    //   =>{
  
  
    //   });

    // })
    this.listaAlunos = [];
  }
  buttonclick(){
    this.exibirconteudo = !this.exibirconteudo;
  }


}
