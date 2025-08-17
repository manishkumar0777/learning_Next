import { log } from "console";
import Link from "next/link";


export default async function ArticlePage(
    {params, searchParams} :
     {
        params : Promise<{articleId : string}>,
        searchParams : Promise<{lang?: 'en' | 'fr' | 'es'}>
     }
    ){

        //extracting parameters
        const {articleId} = await params;
        log(articleId);
        const {lang = 'en'} = await searchParams; // you can provide default value like this
        log(lang); 
    return (
        <div>
            <h1>Article {articleId} </h1>
            <p>Read in {lang}</p>

            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </div>
    )
}