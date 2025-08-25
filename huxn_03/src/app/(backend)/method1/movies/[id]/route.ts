import { movies } from "@/data/moviesData";

//GET
export const GET = async (_req: Request , {params} : {params : {id : string}}) => {
    const {id} = await params;

    const movie = movies.find((m) => m.id === +id)

    return movie ? new Response(JSON.stringify(movie)) : new Response("Movies not Found", {status : 404})
}

//PATCH
export const PATCH = async(req: Request , {params} : {params : {id : string}}) => {
    const {id} = await params;

    const movie = movies.find((m) => m.id === +id);

    if(!movie) return new Response('Movie Not Found ', {status : 404});

    try {
        const updatedMovies = await req.json();

        const index = movies.findIndex((m) => m.id === +id)
        if(!index) return new Response('Movie Not Found ', {status : 404});

        movies[index] = {...movie, ...updatedMovies}
        return new Response(JSON.stringify(movies[index]), {status : 200})
        
    } catch (error) {
        return new Response(JSON.stringify({error : 'Failed to update the movie'}))
    }
}

//DELETE
export const DELETE = async(_req : Request, {params} : {params: {id : string}}) => {
    const {id} = await params;

    const index = movies.findIndex(m => m.id === +id);
    if(index === -1) return new Response(JSON.stringify({message : 'No Movie with this index exist'}), {status : 404});

    movies.splice(index, 1);

    return new Response(JSON.stringify({message : 'Movie deleted'}), {status : 200});
}