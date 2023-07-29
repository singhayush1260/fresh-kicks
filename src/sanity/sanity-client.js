import { createClient } from "@sanity/client";
//import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
export const sanityClient=createClient({
    projectId:'3vscmy7k', 
    dataset:'production',
    apiVersion:"1",
    useCdn:true
})
// const builder=ImageUrlBuilder(sanityClient);
// export const urlFor=(source)=>builder.image(source)