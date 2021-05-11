
import styles from '../styles/Home.module.css'

export function Footer(props) {
    return (

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                サンクス by {props.name}
                <span className={styles.logo}>

                </span>
            </a>
        </footer>
    )
}

