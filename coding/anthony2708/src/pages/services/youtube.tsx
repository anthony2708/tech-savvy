import { Component } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import clsx from "clsx";
import styles from "../../css/index.module.css";
import custom from "../../css/YoutubeFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import YoutubeFeatures from "../../components/Services/YoutubeFeatures";

export default class Youtube extends Component<{}, { url: string, data: any }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { url: "", data: "" };
    }

    handleChange(event: { target: { value: any } }) {
        this.setState({ url: event.target.value });
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        try {
            const res = await axios.post('/api/download', { data: { url: this.state.url } });
            this.setState({ data: res.data });
        } catch (error) {
            this.setState({ data: error.response.data });
        }
    }

    render() {
        return (
            <Layout title={`Youtube Downloader`} description={
                translate({
                    id: 'youtube.desc',
                    message: 'Công cụ tải xuống video từ Youtube'
                })}>
                {/* Header */}
                < header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Youtube Downloader</h1>
                        <p className="hero__subtitle">
                            <Translate id='youtube.subtitle'>
                                Công cụ tải xuống video từ Youtube
                            </Translate>
                        </p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input className={custom.url} type="text"
                                    placeholder={translate({
                                        id: 'youtube.placeholder',
                                        message: 'Nhập địa chỉ video (ví dụ https://youtube.com)'
                                    })}
                                    name="url" value={this.state.url}
                                    onChange={this.handleChange.bind(this)} required />
                            </label>
                            <div className={styles.buttons}>
                                <input className="button button--secondary button--lg" type="submit"
                                    value={
                                        translate({
                                            id: 'youtube.submit',
                                            message: '🔍 Tìm kiếm'
                                        })
                                    } />
                            </div>
                        </form>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <YoutubeFeatures data={this.state.data} url={this.state.url} />
                    </div>
                </main>
            </Layout >
        );
    }
}