import { Component } from '@angular/core';
import { SlideComponent } from "../slide/slide.component";
import { ProductComponent } from "../product/product.component";


@Component({
  selector: 'app-home',
  imports: [SlideComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
