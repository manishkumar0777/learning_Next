// export async function GET() {
//     return new Response('Hello from http')
    
// }

//data
import { movies } from "@/data/moviesData";
 

export const GET = async () => {
    return Response.json(movies)
}

export const POST = async (req : Request) => {
    let movie = await req.json();

    const newMovie = {...movie};
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie));
}