// import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../../css/HomepageFeatures.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
    link: string;
}

const FeatureList: FeatureItem[] = [
    {
        title: "Certificates (IELTS, TOEIC)",
        image: "/img/english/ielts.png",
        description: (
            <>
                All videos for IELTS, TOEIC and General English courses.
            </>
        ),
        link: "https://youtube.com/playlist?list=PLf3wHYF1azzBx6mZSTZq0ZoQD23V88i2B"
    },
    {
        title: "Academic Vocabulary",
        image: "/img/english/English.jpg",
        description: (
            <>
                All videos for Academic Vocabulary in Use course.
            </>),
        link: "https://youtube.com/playlist?list=PLf3wHYF1azzDO_H2c6lecji_1xXOE39jr"
    }
]

function Feature({ title, image, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <img
                    className={styles.featureCourses}
                    alt={title}
                    src={useBaseUrl(image)}
                />
            </div>
            <div className="text--center padding-horiz--md margin-vert--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="button button--primary button--md margin-vert--md"
                    href={link}>Watch videos 🎥</Link>
            </div>
        </div>
    );
}

export default function CoursesFeatures(): JSX.Element {
    return (
        <>
            <div className="container">
                <h1 className="text--center margin--lg">English Courses</h1>
            </div>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
