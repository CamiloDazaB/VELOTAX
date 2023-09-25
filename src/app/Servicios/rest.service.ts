import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) { }


Url="https://localhost:7238/api/"

  public async Get(controller: string){
  await this.api.get(this.Url+controller).toPromise().then((res)=>{

    console.log(res);


  });
 
}

public async Put(body:any,controller: string,id:String){
  await this.api.put(this.Url+controller+"/"+id,body).toPromise().then((res)=>{

    console.log(res);


  });
 


}

public async Post(body:any,controller: string,){
  await this.api.post(controller,body).toPromise().then((res)=>{

    console.log(res);


  });
 
 

}

public async Delete(controller: string,id:String){
  await this.api.delete(this.Url+controller+"/"+id).toPromise().then((res)=>{

    console.log(res);


  });
 


}
}
