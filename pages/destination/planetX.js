import styles from '/styles/Home.module.css'

export default function Des5() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-europa.png"
                        alt="Picture of europa"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>PLANETX</h1>
                    <p className={styles.destip} >If you love mistery</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>755 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>5 YEARS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}