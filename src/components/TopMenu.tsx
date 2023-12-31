import TopMenuItem from './TopMenuItem'
import styles from './topmenu.module.css'
import Image from 'next/image'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import { getServerSession } from 'next-auth'

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className={styles.menucontainer}>
            <Image src='/img/logo.png' className="h-full w-auto" alt="LogoPic" width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Booking' pageRef='/booking' />
            <TopMenuItem title='Hospitals' pageRef='/hospital' />
            <div className='flex flex-row absolute left-0 h-full whitespace-nowrap'>
                {
                    session ? <div className='w-4/5 my-auto font-sans text-gray-500 mx-8 text-xl'> <Link  href="/api/auth/signout"> Sign Out </Link> </div>
                    : <div className='w-4/5 my-auto font-sans text-gray-500 mx-8 text-xl'> <Link href="/api/auth/signin"> Sign In </Link> </div>
                }
                <TopMenuItem title='My Booking' pageRef='/mybooking' />
            </div>
        </div>
    )
}