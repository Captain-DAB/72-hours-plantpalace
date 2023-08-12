import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onclick() {
    alert("Message Received Successfully, You will receive our response after a day");
  }
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartCount = this.cartService.getCartCount();
  }
}
