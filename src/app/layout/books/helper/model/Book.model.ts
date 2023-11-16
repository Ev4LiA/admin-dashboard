import {OldBookModel} from "../../../old-book/helper/model/OldBook.model";

export class BookModel {
    uuid: string;

    // Author
    authorId: string;

    name: string;
    description: string;
    bookCover: string;
    isbn: string;

    bookRelatedId: string;
    pages: number;

    // language
    languageId: string;

    // publish zone
    publisherId: string;
    publishingDate: Date;

    // rating
    ratingPoint: number;
    ratings: any[];

    // review

    // categories

    // OldBook
    OldBook: OldBookModel[];

    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

}
