import { notFound } from 'next/navigation';

export default async function ReviewDetails(
    { params }:
        { params: Promise<{ reviewId: string, productId: string }> }
) {

    const reviewId = (await params).reviewId;
    const productId = (await params).productId;

    if (parseInt(reviewId) > 1000) {
        notFound();
    } else {
        return (
            <div>
                <h1>review {reviewId} for the product {productId}</h1>
            </div>
        )
    }
}