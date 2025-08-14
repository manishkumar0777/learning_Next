import { Metadata } from "next";

type Props = {
    params: Promise<{productId : string}>
}

//MetaData -> Dynamic genrateMetadata Fxn

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        },100);
    })
    return {
        title: `Product ${title} details`
    }
}

export default async function ProductDetails({params} : Props){
    const productid = (await params).productId;
    return (
        <div>
            <h1>Product Details for {productid}</h1>
        </div>
    )
}