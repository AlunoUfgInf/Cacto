import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  public niceTry() {
    alert('Mentirosa');
  }

  @ViewChild('movingButton') movingButton!: ElementRef<HTMLButtonElement>;

  moveButton(event: MouseEvent) {
    const button: HTMLButtonElement = this.movingButton.nativeElement;
    const buttonRect = button.getBoundingClientRect();

    // Calculate new position for the button to move away from the cursor
    const maxDistance = 100; // Adjust this value to control the distance from the cursor 

    const distanceX = Math.random() * maxDistance * 2 - maxDistance; // Random X distance within the range [-maxDistance, maxDistance]
    const distanceY = Math.random() * maxDistance * 2 - maxDistance; // Random Y distance within the range [-maxDistance, maxDistance]

    const newX = event.clientX - buttonRect.width / 2 + distanceX;
    const newY = event.clientY - buttonRect.height / 2 + distanceY;

    // Apply new position to the button
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  }

}
