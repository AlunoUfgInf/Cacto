import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-outros-cactos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './outros-cactos.component.html',
  styleUrl: './outros-cactos.component.scss'
})
export class OutrosCactosComponent {

}
