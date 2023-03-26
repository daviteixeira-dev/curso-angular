import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Davi';
  age: number = 24;
  job: string = 'Desenvolvedor/Programador';
  hobbies: string[] = ['Estudar', 'Jogar', 'Assistir'];
  laptop = {
    name: 'Lenovo',
    year: '2019'
  }
}
