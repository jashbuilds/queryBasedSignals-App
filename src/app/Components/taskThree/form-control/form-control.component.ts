import { Component, signal, viewChild } from '@angular/core';
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

  addField() {
    const component = this.fieldsComponent()
    component?.fields.push({ value: '' })

    setTimeout(() => {
      component?.formValidity();
    }, 0);
  }

  onSubmit() {
    const component = this.fieldsComponent()

    this.fieldsComponent()?.fields.forEach((field) => {
      field.value = ''
    })
    setTimeout(() => {
      component?.formValidity();
    }, 0);
  }
}
