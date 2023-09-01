import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({name, image}: {name: string, image: string}) {
    return (
        <InteractiveCard name={name}>
            <div className='w-96 h-96 bg-slate-200 shadow-md rounded-lg p-4 m-5'>
                <div className='w-full h-5/6 relative'>
                    <Image src={image} alt="Product Picture" objectFit='cover' fill={true}
                    className="border-2 border-black p-2" />
                </div>
                <div className='w-full h-1/6 flex items-center justify-center'>
                    <h1 className='text-center font-bold text-3xl mt-3'> {name} </h1>
                </div>
            </div>
        </InteractiveCard>
    )
}