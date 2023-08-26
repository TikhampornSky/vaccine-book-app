import styles from './card.module.css'
import Image from 'next/image'

export default function Card({name, image}: {name: string, image: string}) {
    return (
        <div className={styles.card}>
            <div className='w-full h-5/6 relative'>
                <Image src={image} alt="Product Picture" objectFit='cover' fill={true}/>
            </div>
            <div className='w-full h-1/6 flex items-center justify-center'>
                <h1 className='text-center font-bold text-4xl'> {name} </h1>
            </div>
        </div>
    )
}