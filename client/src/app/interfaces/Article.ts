import { IContent } from './Content'

export interface IArticle {
    _id : string,
    title: string,
    content: [IContent],
    shortDescription: string,
    source: string,
    image: string,
    category: string
}