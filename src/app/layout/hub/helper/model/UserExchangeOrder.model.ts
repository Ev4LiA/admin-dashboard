import {BookExchangeOrderModel} from "./BookExchangeOrder.model";
import {UserModel} from "../../../user/helper/model/User.model";

export class UserExchangeOrderModel {
  uuid: string;
  userId: string;
  user: UserModel;
  numberOfBook: number;
  status: string;
  books: BookExchangeOrderModel[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
