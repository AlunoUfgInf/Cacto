import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss'
})
export class CartaComponent {

}
