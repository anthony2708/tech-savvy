import { Component } from "react";
import Link from '@docusaurus/Link';
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../../css/index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import ServicesFeatures from "../../components/Services/ServicesFeatures";

export default class Services extends Component<{}, {}> {
    render() {
        return (
            <Layout title={`Services Portal`}
                description={translate({
                    id: 'services.desc',
                    message: 'Cổng dịch vụ tích hợp'
                })}>
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Services Portal</h1>
                        <p className="hero__subtitle">
                            <Translate id='services.subtitle'>
                                Cổng dịch vụ tích hợp</Translate>
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/guide">
                                Hướng dẫn - Guide
                            </Link>
                        </div>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <ServicesFeatures />
                    </div>
                </main>
            </Layout >
        );
    }
}