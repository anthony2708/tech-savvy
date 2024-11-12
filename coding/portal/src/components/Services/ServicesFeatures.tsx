import useBaseUrl from '@docusaurus/useBaseUrl';
// import React from 'react';
import clsx from 'clsx';
import styles from '../../css/HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
    link: string;
};


const FeatureList: FeatureItem[] = [
    {
        title: "Youtube Downloader",
        image: "/img/english/youtube_logo.svg",
        description: (
            <Translate id='services.feature1.desc'>
                Dịch vụ tải xuống các video từ YouTube, một cách đơn giản và an toàn.
            </Translate>
        ),
        link: "/services"
    },
    {
        title: "URL Shortener",
        image: "/img/english/url_logo.jpg",
        description: (
            <Translate id='services.feature2.desc'>
                Dịch vụ rút gọn URL, giúp chia sẻ đường dẫn với người khác.
            </Translate>
        ),
        link: "/services/url"
    },
    {
        title: "Scoreboard Review",
        image: "img/english/scoreboard.jpg",
        description: (
            <Translate id='services.feature3.desc'>
                Dịch vụ theo dõi điểm thi Tốt nghiệp THPT năm 2024,
                giúp bạn đưa ra quyết định chính xác nhất. 
            </Translate>
        ),
        link: "/services/scoreboard"
    },
    {
        title: "English L&T",
        image: "img/english/english_logo.jpg",
        description: (
            <Translate id='services.feature4.desc'>
                Dịch vụ dạy và học tiếng Anh trực tuyến, phục vụ nhu cầu của
                giáo viên và học viên.
            </Translate>
        ),
        link: "/services/courses"
    },
    {
        title: "Images Gallery",
        image: "img/english/gallery.jpg",
        description: (
            <Translate id='services.feature5.desc'>
                Dịch vụ lưu trữ ảnh trực tuyến, giúp bạn dễ dàng lưu trữ những tấm ảnh tuyệt đẹp.
            </Translate>
        ),
        link: "/services/gallery"
    },
    {
        title: "Status Coverage",
        image: "img/english/status.png",
        description: (
            <Translate id='services.feature6.desc'>
                Dịch vụ cập nhật trạng thái trực tiếp các trang web thường xuyên truy cập.
            </Translate>
        ),
        link: "https://status.builetuananh.name.vn/"
    }
]

function Feature({ title, image, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4 margin-vert--md')}>
            <div className="text--center">
                <img
                    className={styles.featureSvg}
                    alt={title}
                    src={useBaseUrl(image)}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="button button--primary button--md "
                    href={link}>
                    <Translate id='services.access'>
                        Truy cập
                    </Translate>
                </Link>
            </div>
        </div>
    );
}

export default function ServicesFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}