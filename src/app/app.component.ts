import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';


const COMPONENTS = [
  HeaderComponent,
  FooterComponent
];

const MODULES = [
  RouterOutlet,
  ReactiveFormsModule
];

@Component({
  selector: 'app-root',
  imports: [
    ...COMPONENTS,
    ...MODULES
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freelando-reactive-form';
}
