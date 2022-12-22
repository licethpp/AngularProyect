import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  //este metodo traera todos mi lista de kesos
  getProducts(){
    //me retornara los kesos observados
    return this.productList.asObservable();
  }
  //pondra los kesos en el carrito
  setProduct(product:any){
  this.cartItemList.push(...product);
  this.productList.next(product);
  }

  //agragara los kesos al carrito de compras para pagarlos con el metodogetTotal
addtoCart(product:any){
this.cartItemList.push(product);
this.productList.next(this.cartItemList);
this.getTotalPrice();
console.log(this.cartItemList);

}
//este metodo recorera y sumara mis lista (map )de kesos que tengo y me dara un total
getTotalPrice():number{
  let granTotal=0;
  this.cartItemList.map((a:any)=>{
    granTotal +=a.total;
  })
  return granTotal;
}
//este metodo quitara un ellemento de mu lista de compras de kesos
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1)
    }
  })
  this.productList.next(this.cartItemList);
}
///-este metodo eliminara toda mi lista del carrito  con un array vacio[]
 removeAllCart(){
  this.cartItemList=[]
  this.productList.next(this.cartItemList)
 }
}
