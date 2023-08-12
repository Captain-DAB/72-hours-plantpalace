import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../main-body/main-body.component';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.css'],
})
export class ResponseModalComponent implements OnInit {
  ngOnInit(): void {}
  @Input() selectedProduct: CartItem | undefined;
  @Input() selectedProducts: CartItem[] = [];
  @Output() emptyCartClicked: EventEmitter<void> = new EventEmitter<void>();

  calculateTotalPrice(): number {
    return this.selectedProducts.reduce(
      (total: number, item: { price: string }) => {
        return total + parseFloat(item.price.replace('$', ''));
      },
      0
    );
  }
  clearCart(): void {
    this.emptyCartClicked.emit();
  }
}
