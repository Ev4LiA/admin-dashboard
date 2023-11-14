import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {UserExchangeOrderModel} from "../../layout/exchange/helper/model/UserExchangeOrder.model";

@Injectable({
    providedIn: 'root'
})
export class AdminExchangeService {
    baseUrl: string;

    constructor(private api: ApiService) {
        this.baseUrl = 'http://116.118.89.53:45/admin/exchange';
        // this.baseUrl = 'http://localhost:3000/admin/exchange';
        console.log('Admin Service');
    }
    getExchangeOrderList(status?: string): Observable<UserExchangeOrderModel[]> {
        let url;
        if (status) {
            url = '/order?status=' + status;
        } else {
            url = '/order';
        }
        return this.api.get({path: this.baseUrl + url});
    }

    getExchangeOrderDetail(id: string) {
        let url = `/order/${id}`;
        return this.api.get({path: this.baseUrl + url});
    }

    adminEvaluateOrder(body) {
        let url = `/order/evaluate`;
        return this.api.post({path: this.baseUrl + url, body});
    }

    adminConfirmOrder(body) {
        let url = `/order/confirm`;
        return this.api.post({path: this.baseUrl + url, body});
    }
}
