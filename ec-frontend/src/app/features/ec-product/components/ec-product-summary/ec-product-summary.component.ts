import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {EcButtonComponent} from "../../../../shared/components/ec-button/ec-button.component";
import {ProductType} from "../../../../shared/models/product.type";

@Component({
  selector: 'ec-product-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule, EcButtonComponent],
  templateUrl: './ec-product-summary.component.html',
  styleUrls: ['./ec-product-summary.component.scss']
})
export class EcProductSummaryComponent {

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
