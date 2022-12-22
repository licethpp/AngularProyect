import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../_services/cart-service.service';
import { CheesesServiceService } from '../cheeses/cheeses-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList :any
public filterCartegory:any
searchKey:string="";

  constructor( private api:CheesesServiceService,private cartService:CartServiceService) { }

  ngOnInit(): void {
this.api.getAll().subscribe(rest=>{
  this.productList=rest;
  this.filterCartegory=rest;
  this.productList.forEach((a:any) => {
  if(a.category ==="women's clothing" || a.category ==="men's clothing"){
    a.category ="fashion"
  }
  Object.assign(a,{quantity:1,total:a.price});
});
console.log(this.productList)
});

this.cartService.search.subscribe((val:any)=>{
this.searchKey = val;

})

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCartegory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
