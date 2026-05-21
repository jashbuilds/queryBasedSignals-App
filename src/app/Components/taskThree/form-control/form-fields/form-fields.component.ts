import { Component, ElementRef, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlComponent } from '../form-control.component';

@Component({
  selector: 'app-form-fields',
  imports: [FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {

  private controlComponent = inject(FormControlComponent)

  fields = [{ value: '' }]

  inputFields = viewChildren<ElementRef<HTMLInputElement>>('input')

  formValidity() {
    const allInputValid = this.inputFields().every(item => item.nativeElement.value.trim() !== '');
    this.controlComponent?.isFormValid.set(allInputValid);
  }

  removeField(index: number) {
    this.fields.splice(index, 1)
    this.formValidity()
  }
}
