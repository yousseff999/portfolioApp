import styles from './styles.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, slideIn } from './animation';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const phrase = `Helping personal brands thrive in the digital world.`;
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description} id='about'>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map((word, index) => (
                        <span key={index} className={styles.mask}>
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span>
                        </span>
                    ))
                }
                </p>
                <motion.p variants={slideIn} animate={isInView ? "open" : "closed"}>
                    I help people, companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Magnetic>
                    <div className={styles.button}>
                        About me
                    </div>
                    </Magnetic>
                </div>
            </div>
        </div>
    )
}
