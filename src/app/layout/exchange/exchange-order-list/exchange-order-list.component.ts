import {Component, ElementRef, inject, OnInit, QueryList, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AdminExchangeService} from "../../../shared/service/admin-exchange.service";
import {UserExchangeOrderModel} from "../helper/model/UserExchangeOrder.model";
import {Observable} from "rxjs";

@Component({
    selector: 'app-exchange-order-list',
    templateUrl: './exchange-order-list.component.html',
    styleUrls: ['./exchange-order-list.component.scss']
})
export class ExchangeOrderListComponent implements OnInit {
    isLoadingData = false;
    dataSourcePending: UserExchangeOrderModel[] = [];
    dataSourceFinished: UserExchangeOrderModel[] = [];
    displayedColumns: string[] = ['uuid', 'userId', 'numberOfBook', 'status', 'createdAt'];

    private adminService = inject(AdminExchangeService);

    ngOnInit() {
        this.isLoadingData = true;
        this.adminService.getExchangeOrderList().subscribe({
                next: value => {
                    console.log(value);
                    this.dataSourcePending = value.filter(order => order.status != 'CANCEL' && order.status != 'FINISH')
                    this.dataSourceFinished = value.filter(order => order.status == 'CANCEL' || order.status == 'FINISH')
                    ;
                },
                error: error => console.log(error)
            }
        ).add(() => this.isLoadingData = false);
    }
}
