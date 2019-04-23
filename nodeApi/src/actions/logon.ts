// import { MySQL } from '../mysql/mysql';
// import { MySQLFactory } from '../mysql/mysql_factory';


// export class LogonAction{


//     private validateData(){
//         new KernelUtils().createExceptionApiError('1001', 'Usu,ario e senha inválidos', this.req.body.userName == '' || this.req.body.password == '');

//     }

//     private generateSQL(): string {
//         return 'select * from user where .users.username = \'' + this.req.body.userName + '\' and users.password = \'' + this.req.body.password + '\'';
        
//     }


//     @Post('/logon')
//     public Post(){

//         new MySQLFactory().getConnection().select(this.generateSQL()).subscribe(
//             (data : any) => {
//                 if (!data.lenght || data.lenght != 1){
//                     this.sendError(new KernelUtils().createErrorApiObject(401, '1001', 'Usuario e senha inválidos'));
//                     return;
//                 }
//                 this.sendAnswer({
//                     userName : this.req.body.userName,
//                     password : this.req.body.password
//                 });
//             },
//             (error : any) =>{
//                 this.sendError(error);
//             }
//         );
//         defineVisibility(){
//             this.actionEscope = ActionType.atPublic;
//         }
//     }

// }