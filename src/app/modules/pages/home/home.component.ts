import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Components
import { BodyComponent } from '../../components/body/body.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
