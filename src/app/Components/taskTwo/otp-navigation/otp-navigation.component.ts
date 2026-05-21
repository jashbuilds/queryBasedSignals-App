import { Component, effect, ElementRef, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-navigation',
  imports: [FormsModule],
  templateUrl: './otp-navigation.component.html',
  styleUrl: './otp-navigation.component.css',
})
export class OtpNavigationComponent {

  inputEl = viewChildren<ElementRef<HTMLInputElement>>('input')

  constructor() {
    effect(() => {
      this.inputEl()[0]?.nativeElement.focus()
    })
  }

  jumpToNext(index: number) {
    const inputs = this.inputEl()

    if (index < inputs.length - 1) {
      inputs[index + 1].nativeElement.focus()
    }
  }

  jumpToPrev(event: KeyboardEvent, index: number) {

    if (event.key === 'Backspace') {
      const inputs = this.inputEl();

      if (index > 0) {
        event.preventDefault();
        inputs[index].nativeElement.value = '';
        inputs[index - 1].nativeElement.focus();
      } else if (index === 0) {
        inputs[index].nativeElement.value = '';
        inputs[index].nativeElement.focus();
      }
    }
  }

  preventChars(event: KeyboardEvent) {
    if (/[a-zA-z]/.test(event.key)) {
      event.preventDefault();
    }
  }
}
