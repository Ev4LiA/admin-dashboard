import {BookModel} from "../../../books/helper/model/Book.model";
import {OldBookModel} from "./OldBook.model";

export class OldBookGroupModel {
    uuid: string;
    condition: string;
    conditionDesc: string;
    imageUrl: string[];
    point: number;
    amount: number;

    // Virtual Book
    virtualBookId: string;
    virtualBook: BookModel;
    view: number

    oldBook: OldBookModel[];

    BookPurchaseOrder
}
