import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')  
  //to share stream of datas we use behaviour subject
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get('http://localhost:3000/all-products');
  }

  addToWishList(product: any) {
    const body = {
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price
    }
    return this.http.post('http://localhost:3000/add-to-wishlist', body)
  }

  getWishList() {
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  deleteItem(id: any) {
    return this.http.delete('http://localhost:3000/delete-item/' + id)
  }

}
