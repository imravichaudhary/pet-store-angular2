import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app.setting';

import { Pet } from './../models/pet';

@Injectable()
export class PetService {

    constructor(private http: Http) {
    }

    getPets(): Observable<Pet[]> {
        return this.http.get(AppSetting.serverUrl)
            .map(res => res.json() as Pet[]);
    }
}