export interface IComment {
    _id: String,
    content: String,
    author: { email : string, _id: string },
    therapist: String
}