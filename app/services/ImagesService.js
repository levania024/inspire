import { AppState } from "../AppState.js";
import { Inspire } from "../models/Inspire.js";
import { api } from "./AxiosService.js"

class ImagesService {

    async getInspireImage() {
        const response = await api.get('api/images')
        console.log(response.data);

        const newImage = new Inspire(response.data)
        AppState.images = newImage
    }
}
export const imagesService = new ImagesService()