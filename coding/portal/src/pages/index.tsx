import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import HomepageFeatures from '../components/Home/HomepageFeatures';
import ContactFeatures from '../components/Home/ContactFeatures';

function HomepageHeader() {
    const [dateState, setDateState] = useState(null);
    const [timeState, setTimeState] = useState(null);
    const [engDateState, setEngDateState] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeState(new Date().toLocaleString('vi-VN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }));
        }, 1000);
        const date = setDateState(new Date().toLocaleDateString('vi-VN', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }));
        const engDate = setEngDateState(new Date().toLocaleDateString('en', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }));
        return () => {
            clearInterval(timer);
            engDate;
            date;
        };
    }, []);
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">
                    {
                        timeState
                    }
                </h1>
                <p className="hero__subtitle">
                    {
                        dateState
                    } ({
                        engDateState
                    })
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="./docs/90days">
                        <Translate id='homepage.button'>90 ngày DevOps ♾</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout
            title={translate({
                id: 'homepage.title',
                message: 'Trang chủ',
            })}
            description={translate({
                id: 'homepage.desc',
                message: 'Anthony Bùi Lê Tuấn Anh',
            })}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <ContactFeatures />
            </main>
        </ Layout>
    );
}