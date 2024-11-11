import { Component } from "react";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent"
import axios from "axios";
import clsx from "clsx";
import styles from "../../css/index.module.css";
import custom from "../../css/YoutubeFeatures.module.css";
import CoursesAnnouncement from '../../components/Courses/_announcement.mdx';
import CoursesScoreboard from "../../components/Courses/Scoreboard";
import CourseFeatures from "../../components/Courses/Features";

export default class Courses extends Component<{}, { id: string, data: any }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { id: "", data: "" };
    }

    handleChange(event: { target: { value: any } }) {
        this.setState({ id: event.target.value });
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        try {
            const res = await axios.post('/api/score', { data: { id: this.state.id } });
            this.setState({ data: res.data });
        } catch (error) {
            this.setState({ data: error.message });
        }
    }

    render() {
        return (
            <Layout title={`ELT`} description="English Language Teaching & Learning System">
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">English L&T</h1>
                        <p className="hero__subtitle">English Language Teaching & Learning System</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input className={custom.url} type="text"
                                    placeholder="Please enter your ID to check the score." minLength={6}
                                    maxLength={6} name="id" value={this.state.id}
                                    onChange={this.handleChange.bind(this)} required />
                            </label>
                            <div className={styles.buttons}>
                                <input className="button button--secondary button--lg" type="submit"
                                    value="🔍 Search" />
                            </div>
                        </form>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <CoursesScoreboard data={this.state.data} id={this.state.id} />
                    </div>
                    <div className="container">
                        <MDXContent>
                            <div className={custom.announcement}>
                                <CoursesAnnouncement />
                            </div>
                        </MDXContent>
                    </div>
                    <div className="container">
                        <CourseFeatures />
                    </div>
                </main>
            </Layout >
        );
    }
}