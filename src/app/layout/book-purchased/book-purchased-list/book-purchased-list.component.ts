import {Component, inject, OnInit} from '@angular/core';
import {AdminBookPurchaseService} from "../../../shared/service/admin-book-purchase.service";

@Component({
  selector: 'app-book-purchased-list',
  templateUrl: './book-purchased-list.component.html',
  styleUrls: ['./book-purchased-list.component.scss']
})
export class BookPurchasedListComponent implements OnInit{
    private adminBookPurchaseService = inject(AdminBookPurchaseService)
    isLoadingData: boolean = true;
    bookPurchaseData: any = [];
    constructor() {
    }

    displayedColumns: string[] = ['uuid', 'userName', 'status', 'amount', 'createdAt'];

    ngOnInit() {
        this.isLoadingData = true;
        this.adminBookPurchaseService.getAllBookPurchase().subscribe({
            next: value => this.bookPurchaseData = value,
            error: err => console.log(err)
        }).add(() => this.isLoadingData = false)
    }
}
