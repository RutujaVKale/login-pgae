//import { ServicesService } from './services.service';
import { Component } from '@angular/core';
//import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginpage';
  //todaydate;
  //componentproperty;
  //username;
  // password;
  // formsdata;
 // response:;
   constructor(//private myservice: ServicesService,
            //private router : Router,
               //private route:ActivatedRoute
               ){}
  ngOnInit(){
    //this.todaydate = this.myservice.showTodayDate();
  }
  // onClickSubmit(data){
  //   //alert("Entered username: "+data.username+" password: "+data.password);
  //  let response1 = this.myservice.getData(data);
  //   console.log('i am response1 '+response1);
  //   // if(response1===true){
  //   //   console.log("loggedin");
  //   //  // this.router.navigate(['/profile']);
  //   // }else{
  //   //   console.log("not");
  //   // }
  //   response1.subscribe((info)=>{
  //     if(info){
  //      console.log("loggedin");
  //     this.router.navigate(['/profile']);
  //   }else{
  //     console.log("not");
  //   }
      
  //   })
    
    
  }

