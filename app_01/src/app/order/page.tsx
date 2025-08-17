"use client"

import { useRouter } from "next/navigation"

export default function OrderPage(){

    //programatic navigation
    const router = useRouter();
    const handleClick = () => {
        console.log('placing your order');
        router.push('/');
    }

    return (
        <>
        <h1>Order Page</h1>
        <p>Welcome to the order page!</p>
        <button onClick= {handleClick}>Place order</button>
        </>
    )
}