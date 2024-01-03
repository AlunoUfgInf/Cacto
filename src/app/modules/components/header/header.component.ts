import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public item: string = 'moon';

  public toggle() {
    /* A intrução abaixo faz com que ao clicar no botão, as variáveis no style.scss
    serão mudadas para :root .dark-theme*/
    document.body.classList.toggle('dark-theme')

    if(this.item === 'moon'){
      this.item = 'sun';
    } else {
      this.item = 'moon';
    }

  }
}
 