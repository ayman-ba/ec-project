import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {EcInputComponent} from "../../../../../shared/components/ec-input/ec-input.component";
import {EcButtonComponent} from "../../../../../shared/components/ec-button/ec-button.component";
import {EcTextareaComponent} from "../../../../../shared/components/ec-textarea/ec-textarea.component";
import {EcSelectComponent} from "../../../../../shared/components/ec-select/ec-select.component";
import {OptionType} from "../../../../../core/types/option.type";
import {map, Observable} from "rxjs";
import {ProductFacade} from "../../../services/product.facade";
import {DatalistFacade} from "../../../../../shared/services/datalist/datalist.facade";
import {datalistTransformer} from "../../../../../shared/utils/datalist.transformer";

@Component({
  selector: 'ec-create-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EcInputComponent, EcButtonComponent, EcTextareaComponent, EcSelectComponent],
  templateUrl: './ec-create-product-form.component.html',
  styleUrls: ['./ec-create-product-form.component.scss']
})
export class EcCreateProductFormComponent implements OnInit {

  readonly #productFacade = inject(ProductFacade);
  readonly #datalistFacade = inject(DatalistFacade);
  readonly #formBuilder = inject(NonNullableFormBuilder);

  categoriesOptions$: Observable<OptionType<number>[] | undefined> = this.#datalistFacade.selectDatalistMap().pipe(
    map(datalistMap => datalistTransformer.transformToOptions(datalistMap?.get('categories') ?? []))
  );

  productForm = this.#formBuilder.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required]
  });

  ngOnInit(): void {
    this.#datalistFacade.dispatchGetDatalist('categories');
  }


  onSave(): void {
    console.log(this.productForm.getRawValue())
    this.productForm.markAsTouched();
    if (!this.productForm.valid) {
      return;
    }
    this.#productFacade.dispatchSaveProduct(this.productForm.getRawValue());
  }

}
