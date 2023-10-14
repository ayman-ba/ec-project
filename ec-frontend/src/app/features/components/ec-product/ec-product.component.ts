import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {selectIsSubmitting} from "./store/product.reducer";
import {productActions} from "./store/product.actions";
import {ProductService} from "./services/product.service";
import {EcInputComponent} from "../../../shared/components/ec-input/ec-input.component";

@Component({
  selector: 'ec-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EcInputComponent],
  templateUrl: './ec-product.component.html',
  styleUrls: ['./ec-product.component.scss']
})
export class EcProductComponent {

  form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required]
  })
   isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(private readonly formBuilder: FormBuilder,
              private readonly store: Store) {
  }

  onSave(): void {
   console.log(this.form.getRawValue())
    this.store.dispatch(productActions.saveProduct({
      productRequest: this.form.getRawValue()
    }))
  }
}
