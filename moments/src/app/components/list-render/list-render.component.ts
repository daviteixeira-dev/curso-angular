import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Frida", type: "Dog", age: 3},
    {name: "Bob", type: "Horse", age: 5}
  ]

  animalDetails = ''

  constructor(private listService: ListService){}

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
}
