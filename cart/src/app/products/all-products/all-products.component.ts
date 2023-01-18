import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts: any = [];
  searchTerm: String = '';
  
  constructor(private ds: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.ds.getProducts().subscribe((result: any) => {
      this.allProducts = result.products;
      console.log(this.allProducts);
    },
      result => {
        console.log(result.error.message);
      })

    this.ds.searchKey.subscribe((data: any) => {
      this.searchTerm = data
    })
  }


  addToWishList(product: any) {
    this.ds.addToWishList(product).subscribe((result: any) => {
      alert(result.message)
    },
      (result) => {
        alert(result.error.message)
      })
  }

  addToCart(product: any) {
    this.cart.addToCart(product)
  }

}
