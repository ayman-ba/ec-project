import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModel} from "../../../../shared/models/product.model";
import {MatCardModule} from "@angular/material/card";
import {EcButtonComponent} from "../../../../shared/components/ec-button/ec-button.component";

@Component({
  selector: 'ec-product-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, EcButtonComponent],
  templateUrl: './ec-product-item.component.html',
  styleUrls: ['./ec-product-item.component.scss']
})
export class EcProductItemComponent {

  @Input({required: true}) product!: ProductModel;
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Output() onEditEvent = new EventEmitter<ProductModel>();

  onDeleteProduct(event: number): void {
    this.onDeleteEvent.emit(event);
  }

  onEditProduct(event: ProductModel): void {
    this.onEditEvent.emit(event);
  }

}
