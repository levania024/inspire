import { AppState } from "../AppState.js"
import { quotesController } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class QuotesController {
    constructor() {
        AppState.on('quotes', this.drawInspireQuote)

        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesController.getQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    // drawInspireQuote() {
    //     const quote = AppState.quotes
    //     setHTML('quote-of-the-day', quote.quoteHTMLTemplate)
    // }
}