
import { Handheld } from "../src/Models";



name = () => GogoAnime().name;
getEpisodes = () => GogoAnime().getEpisodes()

export class GogoAnime extends Handheld {
    name = "GogoAnime"

    getEpisodes = () => {
        return "Hello From the gogogANime file"
    } ;


}
