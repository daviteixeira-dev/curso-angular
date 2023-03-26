import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal

  constructor(private lisService: ListService, private route: ActivatedRoute){
    this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.lisService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
