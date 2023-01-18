import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArray: any = [];
  cartList = new BehaviorSubject([])
  constructor() { }
  //add to cart

  addToCart(product: any) {
    this.cartArray.push(product);
    this.cartList.next(this.cartArray);
    console.log('cart', this.cartList);
    let total = this.getTotal();
  }

  getTotal() {
    var grandSum = 0;
    this.cartArray.map((item: any) => {
      grandSum += item.price
    })
    return grandSum
  }

  removeCart(product: any) {
    this.cartArray.map((item: any, index: any) => {
      if (product.id == item.id) {
        this.cartArray.splice(index, 1)
      }
    })
    this.cartList.next(this.cartArray)
  }
  
emptyCart(){
  this.cartArray=[];
  this.cartList.next(this.cartArray)
}

}
