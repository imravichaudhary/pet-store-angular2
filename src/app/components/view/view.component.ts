import { Component } from '@angular/core';
import { PetService } from './../../services/pet.service';
import { Pet } from './../../models/pet';

@Component({
    moduleId: module.id,  // Used for relative assets for components, like templateUrl and styleUrls
    selector: 'view-pets',
    templateUrl: './view.component.template.html'
})

export class ViewComponent {

    private pets: Array<Pet>;
    private errorMessage: any;

    constructor(private petService: PetService) {
        petService.getPets().subscribe(
            pets => this.pets = pets,
            error => this.errorMessage = <any>error
        );
    }

}