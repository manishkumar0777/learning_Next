export const metadata = {
  title : 'proj 5',
  description : 'page to show diffrent fonts used'
}

import { Bebas_Neue, Protest_Revolution , Major_Mono_Display} from 'next/font/google'
import { MdDescription } from 'react-icons/md'


//to use you need to 
const bebasNeue = Bebas_Neue({
    subsets : ['latin'],
    weight : "400"
})

const protestRevolution = Protest_Revolution({
  weight : '400'
})

const majorMonoDisplay = Major_Mono_Display({
  weight : '400'
})

const Fonts = () => {
  return (
    <div className='min-h-screen p-8 bg-gray-900'>
        <h1 className={`text-gray-200 text-9xl ${bebasNeue.className}`}>EVERYONE Everyone</h1>
        <p className={`text-gray-200 text-9xl ${protestRevolution.className}`}>EVERYONE Everyone</p>
        <p className={`text-gray-200 text-9xl ${majorMonoDisplay.className}`}>EVERYONE Everyone</p>
    </div>
  )
}

export default Fonts