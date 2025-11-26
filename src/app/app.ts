import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    ArchitectureComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
