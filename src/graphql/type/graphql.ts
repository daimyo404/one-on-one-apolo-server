
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Article {
    id?: Nullable<number>;
    title?: Nullable<string>;
    content?: Nullable<string>;
    author?: Nullable<string>;
    abstract?: Nullable<string>;
}

export abstract class IQuery {
    abstract article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

type Nullable<T> = T | null;
