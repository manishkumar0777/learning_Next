import { notFound } from 'next/navigation';

import { Metadata } from 'next';
type Props = {
    params: Promise<{reviewId : string, productId: string}>
}

//Metadata - dynamic function
export const generateMetadata = async ({params}:Props) : Promise<Metadata> => {
    const {reviewId , productId} = await params;
    return {
        title : `review ${reviewId} for the product ${productId}`
    }
}

export default async function ReviewDetails({ params }: Props) {

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