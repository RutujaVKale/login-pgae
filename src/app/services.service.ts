import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  response: any;
 
  constructor(public http:HttpClient,
               private router : Router,
              private route:ActivatedRoute) { }


  public getData(data){
    let response = this.http.get('http://localhost:8080/login/'+data.username+'/'+data.password);
    alert(response);
    //console.log(response)
    //info=>console.log(info)
    response.subscribe((info)=>{
      if(info){
        console.log(info);
        return true;
      }else{
        console.log(info);
        return false;
      }
    });
    
    return response;
  //  this. response.subscribe((info)=>{
  //     if(info){
  //       //this.router.navigate(['/profile']);
       // console.log('loggedin');
  //       return true;
  //     }else{
  //       //this.router.navigate([])
  //       return false;
  //     }
  //   }
    
  //  );
    
  }
}
