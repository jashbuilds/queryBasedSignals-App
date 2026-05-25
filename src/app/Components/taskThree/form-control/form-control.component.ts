import { Component, effect, signal, viewChild } from '@angular/core';
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

  addNewField() {
    this.fieldsComponent()?.addField()
  }

  onSubmit() {
    this.fieldsComponent()?.onSubmitForm()
  }
}
