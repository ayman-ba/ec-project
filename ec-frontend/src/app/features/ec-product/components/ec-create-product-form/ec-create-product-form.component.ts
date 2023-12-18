import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {EcInputComponent} from "../../../../shared/components/ec-input/ec-input.component";
import {EcButtonComponent} from "../../../../shared/components/ec-button/ec-button.component";
import {selectIsSubmitting} from "../../store/product.reducer";
import {Store} from "@ngrx/store";
import {productActions} from "../../store/product.actions";
import {EcTextareaComponent} from "../../../../shared/components/ec-textarea/ec-textarea.component";

@Component({
  selector: 'ec-create-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EcInputComponent, EcButtonComponent, EcTextareaComponent],
  templateUrl: './ec-create-product-form.component.html',
  styleUrls: ['./ec-create-product-form.component.scss']
})
export class EcCreateProductFormComponent {

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required]
  });
  isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(private readonly formBuilder: NonNullableFormBuilder,
              private readonly store: Store) {
  }

  onSave(): void {
    this.productForm.markAsTouched();
    if (!this.productForm.valid) {
      return;
    }
    this.store.dispatch(productActions.saveProduct({
      productRequest: this.productForm.getRawValue()
    }));
  }

}
