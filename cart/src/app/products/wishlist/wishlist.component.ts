import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: any;
  errorMesg: any;
  constructor(private api: ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.getWishList();
  }
  getWishList() {
    this.api.getWishList().subscribe((result: any) => {
      this.wishlist = result.products;
      if(this.wishlist.length==0){
        this.errorMesg='empty'
      }
      console.log(result);

    }, result => {
      this.errorMesg = result.error.message
      console.log(result);
    })
  }

  deleteItem(product: any) {
    this.api.deleteItem(product.id).subscribe((result: any) => {
      alert(result.message)
      this.wishlist=result.wishlist
      if(this.wishlist.length==0){
        this.errorMesg='empty'
      }
    //  window.location.reload()
    }, result => {
      alert(result.error.message)
    })
  }

addToCart(product:any){
  this.cart.addToCart(product);
  this.deleteItem(product)
}

}
