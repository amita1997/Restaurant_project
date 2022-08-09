import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // how here i will define the post, get, put, delete 
  // create reastaurant using post method 
postRestaurant(data:any){
 return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
  return res;
}))
  }
  // get restaruent data using get method
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
     return res;
   }))
     }
   //update Restaurant using put method
   updateRestaurant(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{
     return res;
   }))
  }
  // delete 
  deleteRestaurant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{
     return res;
   }))
  }

  
}


