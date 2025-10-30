import { Component, signal } from '@angular/core';
// import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Header, Home, About, SkillsComponent, Projects, Experience, Contact, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
