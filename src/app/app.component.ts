import { Component } from '@angular/core';
import { DashboardComponent } from "./Components/taskOne/dashboard/dashboard.component";
import { OtpNavigationComponent } from './Components/taskTwo/otp-navigation/otp-navigation.component';
import { FormControlComponent } from './Components/taskThree/form-control/form-control.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, OtpNavigationComponent, FormControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'queryBasedSignals-App';
}
