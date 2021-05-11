import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
    return (


        <main className={styles.main}>
            <Headline title={props.title} emoji={props.emoji} onClick={props.onClick} code={props.code} />
            <Links emoji={props.emoji} emoji={props.emoji} emoji={props.emoji} emoji={props.emoji} />
        </main>

    )
}
