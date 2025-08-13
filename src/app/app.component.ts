import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent,FooterComponent,NavigationComponent,SlideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YSR Store';
}
