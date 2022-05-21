import { client } from "../../lib/sanity/client";

export const get = async () => {
    const groq = `
    *[_type == "gallery"]|order(_createdAt desc){
        _id,
        _createdAt,
        title,
        description,
        mainImage,
    }
    `
    const res = await client.fetch(groq)

    return { body: res }
}

