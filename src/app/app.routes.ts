import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { CartaComponent } from './modules/pages/carta/carta.component';
import { OutrosCactosComponent } from './modules/pages/outros-cactos/outros-cactos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Cacto para a VV'
    },
    {
        path: 'carta',
        component: CartaComponent,
        title: 'Carta para a VV'
    },
    {
        path: 'outros-cactos', 
        component: OutrosCactosComponent,
        title: 'Outros Cactos Para a VV'
    },
    {
        path: 'carta/outros-cactos', 
        component: OutrosCactosComponent,
        title: 'Outros Cactos para a VV'
    }
];