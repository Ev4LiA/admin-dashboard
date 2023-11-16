import {Component, inject, OnInit} from '@angular/core';
import {OldBookModel} from "../helper/model/OldBook.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageModalComponent} from "../../../shared/components/image-modal/image-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {HistoryModalComponent} from "../helper/history-modal/history-modal.component";
import {OldBookHistoryModel} from "../helper/model/OldBookHistory.model";

@Component({
    selector: 'app-old-book-detail',
    templateUrl: './old-book-detail.component.html',
    styleUrls: ['./old-book-detail.component.scss']
})
export class OldBookDetailComponent implements OnInit {
    selectedOldBook: OldBookModel;
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    displayedColumns: string[] = ['uuid', 'oldBookUuid', 'ownerId', 'createdAt'];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
        this.selectedOldBook = this.route.snapshot.data[0].data;
    }

    openImageModal(imageUrl: string) {
        this.dialog.open(ImageModalComponent, {
            data: {imageUrl: imageUrl},
        });
    }

    openHistoryModel(history: OldBookHistoryModel) {
        this.dialog.open(HistoryModalComponent, {
            height: '400px',
            width: '600px',
            data: {history: history}
        })
    }
}
