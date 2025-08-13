export default async function Reviews({params} : {params : Promise<{productId : string}>}){
    const productId = (await params).productId;
    return (
        <div>
            <h1>Reviews for Product {productId}</h1>
        </div>
    )
}