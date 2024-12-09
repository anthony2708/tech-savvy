// import { Component } from "react";
// import Layout from "@theme/Layout";
// import axios from "axios";
// import clsx from "clsx";
// import styles from "../../css/index.module.css";
// import custom from "../../css/YoutubeFeatures.module.css";
// import Translate, { translate } from "@docusaurus/Translate";
// import ScoreboardFeatures from "../../components/Services/ScoreboardFeatures";
// import Link from "@docusaurus/Link";

// export default class Scoreboard extends Component<{}, { sbd: string, data: any }> {
//     constructor(props: {} | Readonly<{}>) {
//         super(props);
//         this.state = { sbd: "", data: "" };
//     }

//     handleChange(event: { target: { value: any } }) {
//         this.setState({ sbd: event.target.value });
//     }

//     async handleSubmit(event: { preventDefault: () => void }) {
//         event.preventDefault();
//         try {
//             const res = await axios.get("/api/scoreboard",
//                 {
//                     params: {
//                         type: 0,
//                         keyword: this.state.sbd,
//                         kythi: "THPT",
//                         nam: 2024,
//                         cumthi: 0
//                     }
//                 })
//             this.setState({ data: res.data });
//         } catch (error) {
//             this.setState({ data: error.response.data });
//         }
//     }

//     render() {
//         return (
//             <Layout title={`Scoreboard Review`} description={
//                 translate({
//                     id: "scoreboard.desc",
//                     message: "Tra cứu điểm thi Tốt nghiệp THPT 2024"
//                 })
//             }>
//                 {/* Header */}
//                 < header className={clsx("hero hero--primary", styles.heroBanner)} >
//                     <div className="container">
//                         <h1 className="hero__title">Scoreboard Review</h1>
//                         <p className="hero__subtitle">
//                             <Translate id="scoreboard.subtitle">
//                                 Tra cứu điểm thi Tốt nghiệp THPT 2024
//                             </Translate>
//                         </p>
//                         <form onSubmit={this.handleSubmit.bind(this)}>
//                             <label>
//                                 <input className={custom.url} type="number"
//                                     placeholder={
//                                         translate({
//                                             id: "scoreboard.placeholder",
//                                             message: "Nhập số báo danh",
//                                         })
//                                     } minLength={8}
//                                     maxLength={8} name="sbd" value={this.state.sbd}
//                                     onChange={this.handleChange.bind(this)} required />
//                             </label>
//                             <div className={styles.buttons}>
//                                 <input className="button button--secondary button--lg" type="submit"
//                                     value={
//                                         translate({
//                                             id: "scoreboard.submit",
//                                             message: "🔍 Tra cứu",
//                                         })
//                                     } />
//                             </div>
//                         </form>
//                     </div>
//                 </header >
//                 {/* End of Header */}
//                 < main >
//                     <div className="container">
//                         <ScoreboardFeatures data={this.state.data} sbd={this.state.sbd} />
//                     </div>
//                     <div className="container">
//                         <p>
//                             <Translate id="scoreboard.note">
//                                 Mã môn Ngoại ngữ kỳ thi Tốt nghiệp THPT 2024
//                             </Translate>
//                         </p>
//                         <ul>
//                             <li><b>N1</b>: <Translate id="scoreboard.english">Tiếng Anh</Translate></li>
//                             <li><b>N2</b>: <Translate id="scoreboard.russian">Tiếng Nga</Translate></li>
//                             <li><b>N3</b>: <Translate id="scoreboard.french">Tiếng Pháp</Translate></li>
//                             <li><b>N4</b>: <Translate id="scoreboard.chinese">Tiếng Trung Quốc</Translate></li>
//                             <li><b>N5</b>: <Translate id="scoreboard.german">Tiếng Đức</Translate></li>
//                             <li><b>N6</b>: <Translate id="scoreboard.japanese">Tiếng Nhật</Translate></li>
//                             <li><b>N7</b>: <Translate id="scoreboard.korean">Tiếng Hàn</Translate></li>
//                         </ul>
//                     </div>
//                     <div className={clsx("container", custom.point)}>
//                         <Link className="button button--primary button--md"
//                             href="https://github.com/anthony2708/tech-savvy/blob/main/assets/THPTQG/score_analysis_2024.ipynb"
//                             hrefLang="en">
//                             <Translate id="scoreboard.analysis">
//                                 Xem phân tích phổ điểm 📊
//                             </Translate>
//                         </Link>
//                     </div>
//                 </main >
//             </Layout >
//         );
//     }
// }