import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src="/img/cover.jpg" alt="cover" fill={true} objectFit='cover' />
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