import { AppState } from "../AppState.js";
import { inspireService } from "../services/InspireService.js";
import { Pop } from "../utils/Pop.js";

export class InspireController {
    constructor() {
        console.log('load the data to the page');
        AppState.on()
        this.getInspirePicture()
    }

    async getInspirePicture() {
        try {
            await inspireService.getInspirePicture()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}