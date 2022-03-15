export interface IArticle {
    _id : string,
    title: string,
    description: [{title: string, description: string}],
    shortDescription: string,
    source: string,
    image: string,
    category: string
}