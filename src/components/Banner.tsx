'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const covers = ['/img/cover-1.jpg', '/img/cover-2.jpg', '/img/cover-3.jpg', '/img/cover-4.jpg']
    const [index, setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt="cover" fill={true} objectFit='cover' />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.bannerText}>
                    <h1 className='text-4xl font-medium'> เชิญชวนประชาชนทุกคนมาร่วมฉีดวัคซีน </h1>
                    <h2 className='text-xl font-serif'> วันที่ 1 มกราคม - 1 กุมภาพันธ์ </h2>
                    <h2 className='text-xl font-serif'> ณ ศูนย์ประชุมแห่งชาติ </h2>
                </div>
            </div>
        </div>
    )
}