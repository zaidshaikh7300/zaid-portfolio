// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   imports: [],
//   templateUrl: './skills.html',
//   styleUrl: './skills.css',
// })
// export class Skills {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports:[CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    'HTML', 'CSS', 'Bootstrap', 'Angular', 'Node.js', 'Express', 
    'MySQL', 'Prisma ORM', 'PostgreSQL', 'VS Code', 'Postman', 'Git','GitHub'
  ];
}

