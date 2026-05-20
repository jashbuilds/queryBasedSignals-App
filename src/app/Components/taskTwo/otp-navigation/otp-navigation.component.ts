import { Component, effect, ElementRef, input, viewChild, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-navigation',
  imports: [FormsModule],
  templateUrl: './otp-navigation.component.html',
  styleUrl: './otp-navigation.component.css',
  host: {
    '(click)': 'onClick()'
  }
})
export class OtpNavigationComponent {

  inputEl = viewChildren<ElementRef<HTMLInputElement>>('input')

  constructor() {
    effect(() => {
      this.inputEl()[0].nativeElement.focus()
    })
  }

  jumpToNext(index: number) {
    const inputs = this.inputEl()
    
    if(index < inputs.length - 1) {
      inputs[index + 1].nativeElement.focus()
    } 
  }

  jumpToPrev(index: number) {
    const inputs = this.inputEl()
    
    if(index > 0) {
      inputs[index - 1].nativeElement.focus()
    }
  }
}
