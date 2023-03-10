import styles from '/styles/Home.module.css'

export default function Des7() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/venus.png"
                        alt="Picture of venus"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>VENUS</h1>
                    <p className={styles.destip} >Tourism to Venus offers an otherworldly experience of surreal beauty and extreme conditions, an adventure for only the bravest of travelers.</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>1000 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>12 MONTHS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}