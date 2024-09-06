import { AppState } from "../AppState.js";
import { Inspire } from "../models/Inspire.js";
import { api } from "./AxiosService.js";

class QuotesController {
    async getQuote() {
        const response = await api.get('api/quotes')
        console.log(response.data);

        const newQuote = new Inspire(response.data)
        AppState.quotes = newQuote
    }
}
export const quotesController = new QuotesController()