import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { FormFieldsComponent } from "./form-fields/form-fields.component";

@Component({
  selector: 'app-form-control',
  imports: [FormFieldsComponent],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  isFormValid = signal(false)

  fieldsComponent = viewChild(FormFieldsComponent)

  addEl() {
    this.fieldsComponent()?.fields.push({ value: '' })
  }
}
