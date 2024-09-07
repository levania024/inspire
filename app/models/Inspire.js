export class Inspire {
    constructor(data) {
        this.name = data.name
        this.url = data.url
        this.imgUrl = data.imgUrl
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
        this.quote = data.quote || data.content
        this.description = data.description
        this.weather = data.weather || ''
        // this.main = data.main.temp || ''
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    // get quoteHTMLTemplate() {
    //     return `
    //     <p class= "justify-content-center">${this.quote}</p>
    //     <div class="text-end quote-author">
    //         <p>${this.author}</p>
    //     </div>`
    // }

    get weatherHTMLTemplate() {
        return `<button class="${this.weather}" type="button" data-toggle="${this.weather}" data-target="#navbarNavAltMarkup">
          <p class="">${this.main}</p>
          <i class="mdi mdi-weather-sunny fs-2 text-end"></i>
          <p>${this.name}</p>
        </button>`
    }

    get todoHTMLTemplate() {
        return `<div class="text-end m-3">
            <button type="button" class="btn btn-primary">To Do List</button>
          </div>

          <div class="col-4">
            <div class="d-flex align-items-end bg-secondary rounded">
              <form action="">
                <div class="m-3">
                  <input type="text" name="" class="form-label rounded">
                  <button type="button" class="btn btn-outline-primary"> + </button>
                </div>

                <div class="m-4">
                  <input type="checkbox" name="" id="">
                  <p>created to do list <i class="mdi mdi-delete-forever-outline fs-4" role="button"></i></p>
                </div>
              </form>
            </div>
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