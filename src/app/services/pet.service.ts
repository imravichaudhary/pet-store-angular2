import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app.setting';

import { Pet } from './../models/pet';

@Injectable()
export class PetService {

    private headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getPets(): Observable<Pet[]> {
        return this.http.get(AppSetting.endpoint.post, { headers: this.headers })
            .map(res => res.json() as Pet[]);
    }

    deletePet(deletePetId: number) {
        this.http.delete(`${AppSetting.endpoint.delete}/${deletePetId}`, { headers: this.headers })
            .subscribe((ok) => { console.log(ok) });
    }
}