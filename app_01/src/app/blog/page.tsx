import Link from 'next/link';


export default async function About() {

    // this is intentional delay is just to load this page 2 second late so i can watch the loading page
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Intentional Delay') 
        },2000);
    })
    return (
        <div>
            <h1>Blog</h1>
            <Link href='/'>Home</Link>
        </div>
    )
}