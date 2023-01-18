import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItem: any = [];
  grand: Number = 0
  newtotal:any;

  constructor(private cart: CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartList.subscribe(
      (data: any) => {
        console.log(data);
        this.cartItem = data;
      }
    )
    this.grand = this.cart.getTotal();
  }

  deleteItem(product: any) {
    this.cart.removeCart(product)
    this.grand = this.cart.getTotal();
  }

  emptyCart(){
    this.cart.emptyCart();
  }
  discount3(source:any){
    let discount=Number(this.grand)*.03
    this. newtotal=Number(this.grand)-discount
party.confetti(source)
  }
  discount10(){
    let discount=Number(this.grand)*.1
    this. newtotal=Number(this.grand)-discount
  }
  discount30(){
    let discount=Number(this.grand)*.5
    this. newtotal=Number(this.grand)-discount
  }
  discount50(){
    let discount=Number(this.grand)*.5
    this. newtotal=Number(this.grand)-discount
  }
  discount5(){
    let discount=Number(this.grand)*.05
    this. newtotal=Number(this.grand)-discount
  }

  proceed(){
    alert('order placed')
    this.emptyCart();
    this.router.navigateByUrl('')
  }
}
