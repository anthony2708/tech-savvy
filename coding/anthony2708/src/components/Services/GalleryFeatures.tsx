// import React from 'react';
import styles from '../../css/HomepageFeatures.module.css';
import gallery from '../../css/GalleryFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

type FeatureItem = {
    image: string;
    description: string;
}

const FeatureList: FeatureItem[] = [
    {
        image: "/img/graduation/1.jpg",
        description: "Picture 1"
    },
    {
        image: "/img/graduation/2.jpg",
        description: "Picture 2"
    },
    {
        image: "/img/graduation/3.jpg",
        description: "Picture 3"
    },
    {
        image: "/img/graduation/4.jpg",
        description: "Picture 4"
    },
    {
        image: "/img/graduation/5.jpg",
        description: "Picture 5"
    },
    {
        image: "/img/graduation/6.jpg",
        description: "Picture 6"
    },
    {
        image: "/img/graduation/7.jpg",
        description: "Picture 7"
    },
    {
        image: "/img/graduation/8.jpg",
        description: "Picture 8"
    },
    {
        image: "/img/graduation/9.jpg",
        description: "Picture 9"
    },
    {
        image: "/img/graduation/10.jpg",
        description: "Picture 10"
    },
    {
        image: "/img/graduation/11.jpg",
        description: "Picture 11"
    },
    {
        image: "/img/graduation/12.jpg",
        description: "Picture 12"
    },
    {
        image: "/img/graduation/13.jpg",
        description: "Picture 13"
    },
    {
        image: "/img/graduation/19.jpg",
        description: "Picture 14"
    },
    {
        image: "/img/graduation/15.jpg",
        description: "Picture 15"
    },
    {
        image: "/img/graduation/14.jpg",
        description: "Picture 16"
    },
    {
        image: "/img/graduation/16.jpg",
        description: "Picture 17"
    },
    {
        image: "/img/graduation/17.jpg",
        description: "Picture 18"
    },
    {
        image: "/img/graduation/20.jpg",
        description: "Picture 19"
    },
    {
        image: "/img/graduation/18.jpg",
        description: "Picture 19"
    },
]

function Feature({ image, description }: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center">
                <img
                    className={gallery.pictures}
                    alt={description}
                    src={useBaseUrl(image)}
                />
            </div>
        </div>
    );
}

export default function GalleryFeatures(): JSX.Element {
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
    );
}