import { Component } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private productService:ProductServiceService) { 
    this.cartList = this.productService.cartList
   
  }
    
  cartList:any[]=[]
  toogleMenu :boolean=false;
  handleTogleMenu(){
    this.toogleMenu=!this.toogleMenu;
  }

}
