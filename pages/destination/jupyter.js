import styles from '/styles/Home.module.css'

export default function Des5() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-mars.png"
                        alt="Picture of jupyter"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>JUPITER</h1>
                    <p className={styles.destip} >Make sure to pack your hiking boots before embarking on your journey to Olympus Mons, the tallest mountain in our solar system. With a height that is two and a half times greater than that of Everest, you'll need sturdy footwear to tackle its steep slopes and rocky terrain. Don't forget this essential piece of gear for your upcoming adventure!</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>455 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>5 MONTHS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}