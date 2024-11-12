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
    // const [dateState, setDateState] = useState(new Date());
    // useEffect(() => {
    //   const timer = setInterval(() => { setDateState(new Date()); }, 1000);
    //   return () => { clearInterval(timer); };
    // });
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">
                    {
                        timeState
                        // dateState.toLocaleTimeString('vi-VN', {
                        //   hour12: false,
                        //   hour: '2-digit',
                        //   minute: '2-digit',
                        //   second: '2-digit',
                        // })
                    }
                </h1>
                <p className="hero__subtitle">
                    {
                        dateState
                        // dateState.toLocaleDateString('vi-VN', {
                        //   weekday: 'long',
                        //   day: '2-digit',
                        //   month: '2-digit',
                        //   year: 'numeric',
                        // })
                    } ({
                        engDateState
                        // dateState.toLocaleDateString('en-US', {
                        //   weekday: 'long',
                        //   day: '2-digit',
                        //   month: 'long',
                        //   year: 'numeric',
                        // })
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
                {/* <div className="text--center padding-horiz--md margin-horiz--lg">
                    <p className={styles.special}>
                        Hiện tại website đang trong quá trình bảo trì diện rộng từ <b>01/10 - 31/12/2024</b>. 
                    </p>
                    <h3>
                        Quý vị có thể truy cập vào trang web <a href="https://90days.builetuananh.name.vn">này </a> 
                        để tiếp tục theo dõi các bài viết mới nhất.
                    </h3>
                </div>
                
                <div className="text--center padding-horiz--md margin-horiz--lg">
                    <p className={styles.special}>
                        This website is currently under maintenance from <b>01/Oct - 31/Dec/2024</b>. 
                    </p>
                    
                    <h3>
                        To continue watching the latest posts, 
                        visit <a href="https://90days.builetuananh.name.vn">this website</a>. 
                        
                    </h3>
                </div> */}
                <ContactFeatures />
            </main>
        </ Layout>
    );
}