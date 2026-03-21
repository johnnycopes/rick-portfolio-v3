import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url"
import { projectId, dataset } from "../env"

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => builder.image(source)
