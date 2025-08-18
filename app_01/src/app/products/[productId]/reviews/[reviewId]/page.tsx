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

    function generateNum(count: number) {
        return Math.floor(Math.random() * count);
    }

    const random = generateNum(2);

    if(random === 1) {
        throw new Error("Error in Loading the reviews");
    }

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