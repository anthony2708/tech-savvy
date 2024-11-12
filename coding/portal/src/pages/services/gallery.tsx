import { Component } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../css/index.module.css";
import GalleryFeatures from "../../components/Services/GalleryFeatures";

export default class Gallery extends Component<{}, {}> {
    render() {
        return (
            <Layout title={`Images Gallery`}
                description={translate({
                    id: 'gallery.desc',
                    message: 'Kho lưu trữ ảnh'
                })}>
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">
                            <Translate id="gallery.title">Kho lưu trữ ảnh từ VNUHCM-ITUS</Translate>
                        </h1>
                        <div className={styles.buttons}>
                            <Link className="button button--secondary button--lg" type="submit"
                                href="https://drive.google.com/drive/folders/1WrUQBzT5piurWyWmtOloK8y4Hl8ffHEx?usp=sharing"
                                target="_blank">
                                <Translate id="gallery.expand">
                                    Xem trọn vẹn
                                </Translate>
                            </Link>
                        </div>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <GalleryFeatures />
                    </div>
                </main>
            </Layout>
        );
    }
}