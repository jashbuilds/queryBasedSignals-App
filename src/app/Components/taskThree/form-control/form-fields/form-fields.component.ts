import { Component, effect, ElementRef, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlComponent } from '../form-control.component';
import { Field } from '../../formField.model';

@Component({
  selector: 'app-form-fields',
  imports: [FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {

  private controlComponent = inject(FormControlComponent)
  fields: Field[] = [{ value: '' }]
  inputFields = viewChildren<ElementRef<HTMLInputElement>>('input')

  constructor() {
    effect(() => {
      this.formValidity()
    })
  }

  formValidity() {
    const allInputValid = this.inputFields().every(item => item.nativeElement.value.trim() !== '');
    this.controlComponent?.isFormValid.set(allInputValid);
  }

  addField() {
    this.fields.push({ value: '' })
  }

  removeField(index: number) {
    this.fields.splice(index, 1)
  }

  onSubmitForm() {
    this.inputFields().forEach(item => console.log(item.nativeElement.value));
    this.inputFields().forEach(item => item.nativeElement.value = '')
  }
}
