import {OldBookModel} from "./OldBook.model";

export class OldBookHistoryModel {
  uuid: string;
  oldBookUuid: string;
  oldBook: OldBookModel;
  ownerId: string;
  owner: any;
  isHub: boolean;
  createdAt: Date;
  updatedAt: Date;
}
