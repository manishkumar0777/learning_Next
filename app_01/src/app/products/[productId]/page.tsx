export default async function ProductDetails({params} : {params: Promise<{productId: string}>}){
    const productid = (await params).productId;
    return (
        <div>
            <h1>Product Details for {productid}</h1>
        </div>
    )
}