import {OldBookHistoryModel} from "./OldBookHistory.model";
import {BookModel} from "../../../books/helper/model/Book.model";
import {HubModel} from "../../../hub/helper/model/Hub.model";

export class OldBookModel {
    uuid: string;
    condition: string;
    conditionDesc: string;
    imageUrl: string[];
    point: number;

    // Virtual Book
    virtualBookId: string;
    virtualBook: BookModel;

    // Hub
    hubId: string;
    hub: HubModel;

    view: number;
    isAtHub: boolean;
    history: OldBookHistoryModel[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
