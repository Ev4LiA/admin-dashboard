import {OldBookGroupModel} from "./OldBookGroup.model";
import {UserModel} from "../../../user/helper/model/User.model";
import {UserPurchaseOrderModel} from "./UserPurchaseOrder.model";

export class BookPurchaseOrderModel {
    uuid: string;

    userId: string;
    user: UserModel;

    oldBookGroupId: string;
    oldBookGroup: OldBookGroupModel;

    orderId: string;
    order: UserPurchaseOrderModel;
    amount: number;

    createdAt: Date;
}
