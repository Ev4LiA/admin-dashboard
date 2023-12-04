import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {AdminOldBookService} from "../../../shared/service/admin-old-book.service";
import {OldBookGroupModel} from "../helper/model/OldBookGroup.model";
import {UntypedFormBuilder} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
    selector: 'app-old-book-list',
    templateUrl: './old-book-list.component.html',
    styleUrls: ['./old-book-list.component.scss']
})
export class OldBookListComponent implements OnInit, AfterViewInit {
    isLoadingData = false;
    dataSourceAtHubRoot: OldBookGroupModel[] = [];
    dataSourceAtHub: OldBookGroupModel[] = [];
    dataSourceSold: OldBookGroupModel[] = [];
    displayedColumns: string[] = ['uuid', 'name', 'condition', 'amount', 'virtualBookId', 'point'];

    private adminService = inject(AdminOldBookService);

    private formBuilder = inject(UntypedFormBuilder);

    searchForm = this.formBuilder.group({
        name: [''],
    });

    ngOnInit() {
        this.isLoadingData = true;
        this.adminService.getOldBookList().subscribe({
                next: value => {
                    this.dataSourceAtHubRoot = value.filter(item => item.amount > 0);
                    this.dataSourceAtHub = this.dataSourceAtHubRoot;
                    this.dataSourceSold = value.filter(item => item.amount == 0);
                },
                error: error => console.log(error)
            }
        ).add(() => this.isLoadingData = false);
    }

    ngAfterViewInit() {
        this.searchForm.valueChanges
            .pipe(
                debounceTime(500)
            )
            .subscribe({
            next: (searchValue) => {
                this.dataSourceAtHub =  this.dataSourceAtHubRoot.filter((item) => {
                    return (item.uuid + item.virtualBook.name + item.virtualBookId).includes(searchValue.name);
                })
            }
        })
    }

    protected readonly name = name;
}
