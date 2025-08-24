import Image from 'next/image';
import AnImage from '../../../../public/nextimg.jpg';

const Imagen = () => {
  return (
    <div className='w-full p-8 min-h-screen flex flex-row'>
        <div className='w-1/2'>
            <Image src={AnImage} alt='war.img' />
        </div>
        <div className='w-1/2'>
            <Image width={800} height={400} alt='externalImage' src='https://imgs.search.brave.com/6HewzNScMXFuRHhr1vU6FkQTSoe1K7aDkdxh5KDY8aA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNWstZGVza3Rv/cC05cndhNDcwOWc2/Mnh2aG91LmpwZw'/>
        </div>
        
    </div>
  )
}

export default Imagen