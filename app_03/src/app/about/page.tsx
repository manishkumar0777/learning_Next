import { log } from "console";
import { cookies } from "next/headers"

// this is to make the static page to be rendered dynamically
// export const dynamic = 'force-dynamic'


const About = async ({searchParams}: {searchParams : Promise<{}>}) => {

  const search = await searchParams;
  log(search);
    
  // This will make the static page to be rendered dynamically
    const myCookies = await cookies();
    log(myCookies);
  
    return (
    <div>About</div>
  )
}

export default About