import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {EcButtonComponent} from "../../../../shared/components/ec-button/ec-button.component";
import {ProductType} from "../../../../shared/models/product.type";

@Component({
  selector: 'ec-product-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, EcButtonComponent],
  templateUrl: './ec-product-item.component.html',
  styleUrls: ['./ec-product-item.component.scss']
})
export class EcProductItemComponent {

  @Input({required: true}) product!: ProductType;
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Output() onEditEvent = new EventEmitter<ProductType>();

  onDeleteProduct(event: number): void {
    this.onDeleteEvent.emit(event);
  }

  onEditProduct(event: ProductType): void {
    this.onEditEvent.emit(event);
  }

}
