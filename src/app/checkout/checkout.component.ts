import { Component } from '@angular/core';
import { CartItem } from '../main-body/main-body.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cartItems: CartItem[] = [];
  cartCount: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartCount = this.cartService.getCartCount();
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
  }
}
