import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "dzda5k1y",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-05-22"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
    return builder.image(source)
}