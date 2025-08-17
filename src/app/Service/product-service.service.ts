import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() {
    this.cartList = JSON.parse(localStorage.getItem('cartList') || '[]');
   }
  cartList:any[]=[];
  getCart(product:any){
    product.qty=1
    let index = this.cartList.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartList[index].qty += 1;
    } else {
      this.cartList.push(product);
    }
    
    // this.cartList.push(product);

    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    
  }
}
