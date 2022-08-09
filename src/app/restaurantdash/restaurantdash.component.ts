import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurantdash',
  templateUrl: './restaurantdash.component.html',
  styleUrls: ['./restaurantdash.component.css']
})
export class RestaurantdashComponent implements OnInit {
  formValue!: FormGroup
  restaurentModelObj:Restaurant=new Restaurant;
  allRestaurantData: any;
  // allRestaurantData: any;
  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
    this.getAllData()
  }


  //now subscribing our data

  addResto(){
    this.restaurentModelObj.name=this.formValue.value.name;
    this.restaurentModelObj.email=this.formValue.value.email;
    this.restaurentModelObj.mobile=this.formValue.value.mobile;
    this.restaurentModelObj.address=this.formValue.value.address;
    this.restaurentModelObj.services=this.formValue.value.services;

this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
  console.log(res);
  alert("Restaurant Records added successfull");
},
err=>{
  alert("something is wrong")
}
)
}
//get all data

getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData= res;
  })
}
//delete records

// deleteResto(data:any){
//   this.api.deleteRestaurant(data.id).subscribe(res=>{
//     alert("Restaureant records deleted ")
//     this.getAllData();//refresh
//   })
// }


deleteResto(data:any){
  this.api.deleteRestaurant(data.id).subscribe(res=>{
    alert("reast record delete")
    this.getAllData();
  })
}
onEditResto(data:any){
  this.restaurentModelObj.id = data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
}
updateResto(){
  this.restaurentModelObj.name=this.formValue.value.name;
  this.restaurentModelObj.email=this.formValue.value.email;
  this.restaurentModelObj.mobile=this.formValue.value.mobile;
  this.restaurentModelObj.address=this.formValue.value.address;
  this.restaurentModelObj.services=this.formValue.value.services;

  this.api.updateRestaurant(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(res=>{
alert("Reastant records update")
  })
}

}
