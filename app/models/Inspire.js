export class Inspire {
    constructor(data) {
        // this.name = data.name
        this.url = data.url
        this.imgUrl = data.imgUrl
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
        this.quote = data.quote || data.content
        this.description = data.description
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    get quoteHTMLTemplate() {
        return `<p>${this.quote}</p>
          <div class="text-end quote-author">
            <p>${this.author}</p>
          </div>`
    }
}

// const image = {
//     url: String,
//     imgUrl: String,
//     query: String,
//     author: String,
//     largeImgUrl: String,
//     *createdAt: ISO Timestamp(Virtual Added by Database)
//     *updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const quote = {
//     quote: undefined,
//     description: String, required
// *createdAt: ISO Timestamp(Virtual Added by Database)
// *updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const todo = {
//     completed: Boolean, required
// description: String, required
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
//     * createdAt: ISO Timestamp (Virtual Added by Database)
// * updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const weather = {
//     name: String,
//     main: undefined,
//     weather: undefined,
//     *createdAt: ISO Timestamp(Virtual Added by Database)
// *updatedAt: ISO Timestamp(Virtual Added by Database)
// }