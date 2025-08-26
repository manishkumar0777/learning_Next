import { movies } from "@/data/moviesData";
import { NextRequest } from "next/server";


export const POST = async (req : Request) => {
    let movie = await req.json();

    const newMovie = {...movie};
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie));
}

export const GET = async (req : NextRequest) => {
    const searchParams =  req.nextUrl.searchParams;
    const query = searchParams.get('query');

    const filteredMovies = query ? movies.filter(m => m.name.toLowerCase().includes(query)) : movies;
    
    return new Response(JSON.stringify(filteredMovies), {status : 200})
}