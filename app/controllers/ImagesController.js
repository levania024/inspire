import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
    constructor() {
        AppState.on('images', this.drawInspireImage)

        this.getInspireImage()
    }

    async getInspireImage() {
        try {
            await imagesService.getInspireImage()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    drawInspireImage() {
        const image = AppState.images
        document.body.style.backgroundImage = `url(${image.largeImgUrl})`
    }
}
