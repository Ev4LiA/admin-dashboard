import {Component, inject, OnInit} from '@angular/core';
import {AdminOldBookService} from "../../../shared/service/admin-old-book.service";
import {OldBookModel} from "../helper/model/OldBook.model";

@Component({
    selector: 'app-old-book-list',
    templateUrl: './old-book-list.component.html',
    styleUrls: ['./old-book-list.component.scss']
})
export class OldBookListComponent implements OnInit {
    isLoadingData = false;
    dataSourceAtHub: OldBookModel[] = [];
    dataSourceSold: OldBookModel[] = [];
    displayedColumns: string[] = ['uuid', 'name', 'virtualBookId', 'point'];

    private adminService = inject(AdminOldBookService);

    ngOnInit() {
        this.isLoadingData = true;
        this.adminService.getOldBookList().subscribe({
                next: value => {
                    this.dataSourceAtHub = value.filter(item => item.isAtHub);
                    this.dataSourceSold = value.filter(item => !item.isAtHub);
                },
                error: error => console.log(error)
            }
        ).add(() => this.isLoadingData = false);
    }
}
