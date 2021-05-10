
import styles from '../styles/Home.module.css'

export function Headline(props) {
    console.log(props)
    return (
        <div>
            <h1 className={styles.title}>
                {props.emoji}, <a href="https://nextjs.org">{props.title}</a>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{props.title}</code>
            </p>

        </div>

    )
}