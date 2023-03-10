import styles from '/styles/Home.module.css'

export default function Des8() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/saturn.png"
                        alt="Picture of saturn"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>SATURN</h1>
                    <p className={styles.destip} >Tourism to Venus offers an otherworldly experience of surreal beauty and extreme conditions, an adventure for only the bravest of travelers.</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>2120 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>10 MONTHS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}