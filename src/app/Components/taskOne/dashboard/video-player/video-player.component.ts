import { Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoEl')

  onEnded = output<void>()

  handleVideoEnd() {
    this.onEnded.emit()
  }

}
