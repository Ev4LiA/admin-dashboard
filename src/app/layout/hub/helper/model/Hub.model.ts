import {OldBookModel} from "../../../old-book/helper/model/OldBook.model";

export class HubModel {
    uuid: string;
    name: string;
    description: string;
    address: string;
    longitude: string;
    latitude: string;
    phoneNumber: string[];
    OldBook: OldBookModel[];
}
