import {UserModel} from "../../../user/helper/model/User.model";
import firebase from "firebase/compat";
import database = firebase.database;
import {BookPurchaseOrderModel} from "./BookPurchaseOrder.model";

export class UserPurchaseOrderModel {
    uuid: string;
    userId: string;
    user: UserModel;

    createdAt: Date;
    updatedAt: Date;

    status: string;
    books: BookPurchaseOrderModel[];
}
