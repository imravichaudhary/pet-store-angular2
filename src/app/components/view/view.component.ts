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
    private pagerPets: Array<Pet>;
    private errorMessage: any;

    public maxSize: number = 5;
    public bigTotalItems: number;
    public bigCurrentPage: number = 1;
    public numPages: number = 0;
    public itemsPerPage: number = 10;

    constructor(private petService: PetService) {
        petService.getPets().subscribe(
            pets => {
                this.pets = pets;
                this.bigTotalItems = this.pets.length;
                this.pagerPets = this.pets.slice(0, this.itemsPerPage);
            },
            error => {
                console.log(error);
                this.errorMessage = <any>error;
            }
        );
    }

    public pageChanged(event: any): void {
        let start = (event.page - 1) * event.itemsPerPage;
        let end = event.itemsPerPage > -1 ? (start + event.itemsPerPage) : this.pets.length;
        this.pagerPets = this.pets.slice(start, end);
    }

    public deletePet(pet: Pet) {
        let index = this.pets.indexOf(pet);
        if (index > -1) {
            this.petService.deletePet(pet.id);
            this.pets.splice(index, 1);
            this.pageChanged({ page: this.bigCurrentPage, itemsPerPage: this.itemsPerPage });
        }
        return false;
    }
}