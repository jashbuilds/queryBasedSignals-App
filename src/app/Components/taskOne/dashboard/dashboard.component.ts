import { Component, signal, viewChild } from '@angular/core';
import { VideoPlayerComponent } from "./video-player/video-player.component";

@Component({
  selector: 'app-dashboard',
  imports: [VideoPlayerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isPlaying = signal(false)
  videoComp = viewChild(VideoPlayerComponent)

  onPause() {
    this.videoComp()?.videoEl()?.nativeElement.pause();
    this.isPlaying.set(false)
  }

  onPlay() {
    this.videoComp()?.videoEl()?.nativeElement.play();
    this.isPlaying.set(true)
  }

  onVideoEnded() {
    this.isPlaying.set(false);
  }
}
