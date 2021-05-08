
import styles from '../styles/Home.module.css'

export function Footer() {
    return (

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                サンクス by{' 大山純矢 '}
                <span className={styles.logo}>

                </span>
            </a>
        </footer>
    )
}
