import { Component, contentChild, ElementRef, viewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoEl')

}
