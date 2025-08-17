import { Component } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  imports: [CurrencyPipe],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  constructor(private productServic:ProductServiceService) {
    this.cartList = this.productServic.cartList;
  }
  onDelete(product: any) {
    const index = this.cartList.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    }
  }
  cartList: any[] = [];

}
