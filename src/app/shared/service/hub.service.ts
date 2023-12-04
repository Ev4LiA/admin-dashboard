import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HubDetailModel} from "../../layout/hub/helper/model/HubDetail.model";

@Injectable({
    providedIn: 'root'
})
export class HubService {
    baseUrl: string;

    constructor(private api: ApiService) {
        this.baseUrl = environment.backendUrl + '/hub';
    }

    listAllHub() {
        return this.api.get({path: this.baseUrl});
    }

    getHubDetail(id: string): Observable<HubDetailModel> {
        let url = this.baseUrl + `/${id}/books`
        return this.api.get({path: url})
    }
}
