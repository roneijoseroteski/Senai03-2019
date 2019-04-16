import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Messages } from '../providers/menssages';
import { Toast } from '../providers/toast';
import { HttpProvider } from '../providers/http';
import { Login } from '../providers/login';

import { PaginaRPage } from '../pages/pagina-r/pagina-r';
import { EntregainfoPage } from '../pages/entregainfo/entregainfo';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Http, HttpModule ,Headers, Response} from '@angular/http';
import { Sabores } from '../providers/sabores';
import { Cidade } from '../providers/cidade';
import { Bairro } from '../providers/bairro';
import { Tamanho } from '../providers/tamanhos';
import { Cadastrar } from '../providers/cadastrar';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PaginaRPage,
    EntregainfoPage,
    CadastroPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PaginaRPage,
    EntregainfoPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    HttpProvider,
    Login,
    Tamanho,
    Sabores,
    Cidade,
    Bairro,
    Cadastrar,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
