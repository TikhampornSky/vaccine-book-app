import styles from './knowledge.module.css'

export default function Knowledge() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={styles.card}>
                <h1> ความรู้เบื้องต้นเกี่ยวกับวัคซีน </h1>
                <br></br>
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <ul className={styles.topic}>
                        <li> วัคซีนคืออะไร ? </li>
                            <div className={styles.description}>
                                <p> วัคซีน คือ เครื่องมือสำคัญในการป้องกันโรค โดยเป็นการจำลองการติดเชื้อโดยใช้เชื้อโรคที่เป็นสาเหตุ อาจเป็นเชื้อที่ตายแล้ว ที่ยังไม่ตายแต่ถูกทำให้อ่อนแอลง หรือบางส่วนของเชื้อที่ไม่สามารถก่อให้เกิดการติดเชื้อได้แล้ว ฉีดเข้าไปกระตุ้นระบบภูมิคุ้มกันของร่างกายให้สร้างภูมิขึ้นมาต่อสู้กับเชื้อโรคดังกล่าวโดยไม่ต้องมีอาการเจ็บป่วยเกิดขึ้นจริง  </p>
                            </div>
                            <br></br>
                        <li> ทำไมถึงต้องฉีดวัคซีน ? </li>
                            <div className={styles.description}>
                                <p> การฉีดวัคซีนช่วยป้องกันตัวคุณเองและคนรอบข้างจากการเจ็บป่วยรุนแรงและการเสียชีวิต โดยในแต่ละปีวัคซีนสามารถลดอัตราการเสียชีวิตจากโรคต่างๆ ได้ถึงประมาณ 3 ล้านคนเลยทีเดียว </p>
                                <p> นอกจากนี้ การฉีดวัคซีนยังช่วยเพิ่มภูมิคุ้มกันหมู่ หรือ Herd immunity ซึ่งจะเกิดขึ้นเมื่อมีคนจำนวนมากพอที่ได้รับวัคซีน ทำให้ป้องกันการติดเชื้อไปยังผู้ที่ไม่สามารถฉีดวัคซีนได้ เช่น ผู้ที่มีโรคประจำตัวบางชนิด ผู้มีภูมิคุ้มกันอ่อนแอ เด็กอายุต่ำกว่า 2 เดือน และมีกรณีที่วัคซีนช่วยกำจัดโรคให้สูญพันธุ์จนไม่ต้องมีการฉีดวัคซีนอีกต่อไป ได้แก่ โรคฝีดาษที่ในอดีตเคยคร่าชีวิตผู้คนไปหลายร้อยล้านคน </p>
                            </div>
                            <br></br>
                        <li> การฉีดวัคซีน ปลอดภัยหรือไม่ ? </li>
                            <div className={styles.description}>
                                <p> วัคซีนที่ผลิตขึ้นมาจะต้องผ่านการทดสอบประสิทธิภาพและความปลอดภัยจนมั่นใจได้ว่าจะไม่เป็นอันตรายต่อผู้ที่ฉีดวัคซีน ซึ่งมักต้องใช้เวลาหลายปีในการทดลองขั้นต่างๆ จนกว่าจะได้รับการอนุมัติจากองค์การอนามัยโลก (WHO) ทั้งยังมีการติดตามผลข้างเคียงจากการใช้วัคซีนนั้นๆ อย่างต่อเนื่อง </p>
                                <p> อย่างไรก็ตามในกรณีเกิดโรคระบาดรุนแรงที่ไม่เคยพบมาก่อน อาจมีการอนุมัติให้ใช้วัคซีนในกรณีฉุกเฉิน แต่วัคซีนเหล่านี้ก็ยังต้องผ่านเกณฑ์มาตรฐานทางความปลอดภัยและประสิทธิภาพในเบื้องต้นอยู่ดี รวมทั้งการพิจารณาชั่งน้ำหนักอย่างถี่ถ้วนว่าการอนุมัติใช้ฉุกเฉินนี้จะมีประโยชน์ในการป้องกันมากกว่าความเสี่ยงหรืออันตรายที่จะเกิดจากการฉีดวัคซีน </p>
                            </div>
                            <br></br>
                    </ul>
                    <div className='ref'>
                        <p style={{fontWeight: '800'}} > ขอขอบคุณข้อมูลจาก: 
                            <a href='https://primocare.com/%E0%B8%A7%E0%B8%B1%E0%B8%84%E0%B8%8B%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%89/' 
                            style={{textDecoration: 'underline', fontWeight: 'normal'}}> วัคซีน ทำไมถึงต้องฉีด ตอบทุกข้อสงสัยก่อนฉีดวัคซีน </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}