import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./Components/taskOne/dashboard/dashboard.component";
import { OtpNavigationComponent } from './Components/taskTwo/otp-navigation/otp-navigation.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, OtpNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'queryBasedSignals-App';
}
