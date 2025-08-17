import { Component } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
declare const Swal: any;

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor( private productService:ProductServiceService){

  }
  handleAddToCart(product: any) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your item has been added successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
    this.productService.getCart(product);
    
  }
  allProduct: any = [
    {
      id: 1,
      name: '361° Sport / New in',
      image: 'https://poedagar.store/wp-content/uploads/2025/02/2-21.jpg',
      price: 23.51,
      oldPrice: 33.59,
      description: 'Basketball Sandals',
    },
    {
      id: 2,
      name: 'King Watch 201',
      image:
        'https://www.pop-collection254.store/cdn/shop/files/photo_2024-07-18_09-20-45.jpg?v=1721283724&width=1445',
      price: 80.5,
      oldPrice: 100.0,
      description: 'Luxury Watch',
    },
    {
      id: 3,
      name: '361° Sport / New in',
      image: 'https://poedagar.store/wp-content/uploads/2025/02/2-21.jpg',
      price: 23.51,
      oldPrice: 33.59,
      description: 'Basketball Sandals',
    },
    {
      id: 4,
      name: 'King Watch 201',
      image:
        'https://www.pop-collection254.store/cdn/shop/files/photo_2024-07-18_09-20-45.jpg?v=1721283724&width=1445',
      price: 80.5,
      oldPrice: 100.0,
      description: 'Luxury Watch',
    },
  ];
}
