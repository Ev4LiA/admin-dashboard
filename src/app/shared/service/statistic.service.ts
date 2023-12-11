import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {UserExchangeOrderModel} from "../../layout/exchange/helper/model/UserExchangeOrder.model";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StatisticService {
    baseUrl: string;

    constructor(private api: ApiService) {
        this.baseUrl = environment.backendUrl + '/statistic/admin';
        console.log('Admin Statistic');
    }
    getAdminStatistic(): Observable<any> {
        return this.api.get({path: this.baseUrl});
    }
}
