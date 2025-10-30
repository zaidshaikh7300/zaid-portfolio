import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    { name: 'Gallery Website', desc: 'An image gallery website built using Angular and Bootstrap.' },
    { name: 'Company Management Web App', desc: 'Manages employee and company data using Node.js and MySQL.' },
    { name: 'Weather App', desc: 'Displays live weather information using API integration with Angular.' }
  ];
}
