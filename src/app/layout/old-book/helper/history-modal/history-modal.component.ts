import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {OldBookHistoryModel} from "../model/OldBookHistory.model";

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.scss']
})
export class HistoryModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { history: OldBookHistoryModel }) {
    console.log(data.history.owner);
  }
}
