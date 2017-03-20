import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app.setting';

import { Pet } from './../models/pet';

@Injectable()
export class PetService {

    constructor(private http: Http) {
    }

    getPets(): Observable<Pet[]> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(AppSetting.serverUrl, { headers: headers })
            .map(res => res.json() as Pet[]);
    }
}