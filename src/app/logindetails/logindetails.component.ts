import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {

  constructor(private myservice: ServicesService,
              private router : Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
   onClickSubmit(data){
    //alert("Entered username: "+data.username+" password: "+data.password);
   let response1 = this.myservice.getData(data);
    console.log('i am response1 '+response1);
    // if(response1===true){
    //   console.log("loggedin");
    //  // this.router.navigate(['/profile']);
    // }else{
    //   console.log("not");
    // }
    response1.subscribe((info)=>{
      if(info){
       console.log("loggedin");
      this.router.navigate(['/profile']);
    }else{
      console.log("not");
    }
      
    })

}
}
