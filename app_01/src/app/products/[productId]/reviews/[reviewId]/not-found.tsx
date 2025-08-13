"use client";

import { usePathname } from "next/navigation";

export default function NotFound(){

    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];

    return (
        <div className="flex items-center justify-center">
            <div className='items-center justify-center flex rounded-3xl flex-col w-100 h-100 border-1 border-red-700'>
                <h1 className="text-5xl text-red-400 font-extrabold">the review {reviewId} not found for the Product {productId}</h1>
               
            </div>
        </div>
    )
}