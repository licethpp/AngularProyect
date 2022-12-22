import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../_services/cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 public products:any=[]
 public grandTotal!:number;
 constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    //productos de mi service cart en mi componenete cart para mostrarlos en mo front 
    this.cartService.getProducts().subscribe(rest=>{
      this.products=rest;
      this.grandTotal= this.cartService.getTotalPrice();
    })
  }
removeItem(item:any){
  this.cartService.removeCartItem(item)

}
emptycart(){
  this.cartService.removeAllCart();
}
}
