import {client} from "./sanity.client"
import  imageUrlBuilder  from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(sources: any){
    return builder.image(sources)
}

export default urlFor;