import {OldBookHistoryModel} from "./OldBookHistory.model";
import {BookModel} from "../../../books/helper/model/Book.model";
import {HubModel} from "../../../hub/helper/model/Hub.model";

export class OldBookModel {
    uuid: string;

    // Hub
    hubId: string;
    hub: HubModel;

    isAtHub: boolean;
    history: OldBookHistoryModel[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
