import { Component, contentChild, ElementRef, inject, signal, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlComponent } from '../form-control.component';

@Component({
  selector: 'app-form-fields',
  imports: [FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {

  private parent = inject(FormControlComponent)

  fields = [{ value: '' }]

  controls = viewChildren<ElementRef<HTMLInputElement>>('input')

  formValidity() {
    const allValid = this.controls().every(item => item.nativeElement.value.trim() !== '');
    this.parent?.isFormValid.set(allValid);
  }

  removeEl(index: number) {
    this.fields.splice(index, 1)
  }

  addEl() {
    this.fields.push({ value: '' })
  }
}
