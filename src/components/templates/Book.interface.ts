import { GlobalChildren } from "./GlobalChildren.interface";

export interface BooksInterface extends GlobalChildren {
    author: Array<string>;
    editor: string;
    noPage: number;
    _id: string;
    imageUrl: string;
    isbn: string;
    releaseDate: Date|string;
    summary: string;
    title: string;
}; 