import {HubModel} from "./Hub.model";
import {OldBookGroupModel} from "../../../old-book/helper/model/OldBookGroup.model";

export class HubDetailModel {
    hub: HubModel;
    oldBook: OldBookGroupModel[];
}
