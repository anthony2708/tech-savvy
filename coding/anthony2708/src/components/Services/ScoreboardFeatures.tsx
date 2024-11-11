import { Component } from "react";
import custom from "../../css/YoutubeFeatures.module.css";
import Translate from "@docusaurus/Translate";

export default class ScoreboardFeatures extends Component<{ data: any, sbd: string }, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.error_message == "Success" && this.props.data.data != null) {
            let scoreData = Object.values(this.props.data.data);
            if (scoreData[0][0] != undefined)
               {
                    return (
                        <>
                            <div>
                                <table className={custom.table_center}>
                                    <thead>
                                        <tr>
                                            <th><Translate id="scoreboard.id">Số báo danh</Translate></th>
                                            <th><Translate id="scoreboard.math">Toán</Translate></th>
                                            <th><Translate id="scoreboard.literature">Ngữ văn</Translate></th>
                                            <th><Translate id="scoreboard.physics">Vật lý</Translate></th>
                                            <th><Translate id="scoreboard.chemistry">Hóa học</Translate></th>
                                            <th><Translate id="scoreboard.biology">Sinh học</Translate></th>
                                            <th><Translate id="scoreboard.history">Lịch sử</Translate></th>
                                            <th><Translate id="scoreboard.geography">Địa lý</Translate></th>
                                            <th><Translate id="scoreboard.civic">GDCD</Translate></th>
                                            <th><Translate id="scoreboard.foreign">Ngoại ngữ</Translate></th>
                                            <th><Translate id="scoreboard.langcode">Mã môn NN</Translate></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>{scoreData[0][0]["sbd"]}</b></td>
                                            <td>{scoreData[0][0]["dm01"] < 0 ? "" : scoreData[0][0]["dm01"]}</td>
                                            <td>{scoreData[0][0]["dm02"] < 0 ? "" : scoreData[0][0]["dm02"]}</td>
                                            <td>{scoreData[0][0]["dm03"] < 0 ? "" : scoreData[0][0]["dm03"]}</td>
                                            <td>{scoreData[0][0]["dm04"] < 0 ? "" : scoreData[0][0]["dm04"]}</td>
                                            <td>{scoreData[0][0]["dm05"] < 0 ? "" : scoreData[0][0]["dm05"]}</td>
                                            <td>{scoreData[0][0]["dm08"] < 0 ? "" : scoreData[0][0]["dm08"]}</td>
                                            <td>{scoreData[0][0]["dm09"] < 0 ? "" : scoreData[0][0]["dm09"]}</td>
                                            <td>{scoreData[0][0]["dm10"] < 0 ? "" : scoreData[0][0]["dm10"]}</td>
                                            <td>{scoreData[0][0]["dm07"] < 0 ? "" : scoreData[0][0]["dm07"]}</td>
                                            <td>{scoreData[0][0]["dmText"] == "" ? "" : scoreData[0][0]["dmText"]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    );
                }
            else if (scoreData[0][0] === undefined){
                return (
                    <>
                        <div>
                            <table className={custom.table_center}>
                                <thead>
                                    <tr>
                                        <th><Translate id="scoreboard.id">Số báo danh</Translate></th>
                                        <th><Translate id="scoreboard.math">Toán</Translate></th>
                                        <th><Translate id="scoreboard.literature">Ngữ văn</Translate></th>
                                        <th><Translate id="scoreboard.physics">Vật lý</Translate></th>
                                        <th><Translate id="scoreboard.chemistry">Hóa học</Translate></th>
                                        <th><Translate id="scoreboard.biology">Sinh học</Translate></th>
                                        <th><Translate id="scoreboard.history">Lịch sử</Translate></th>
                                        <th><Translate id="scoreboard.geography">Địa lý</Translate></th>
                                        <th><Translate id="scoreboard.civic">GDCD</Translate></th>
                                        <th><Translate id="scoreboard.foreign">Ngoại ngữ</Translate></th>
                                        <th><Translate id="scoreboard.langcode">Mã môn NN</Translate></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colSpan={12}><b>
                                        <Translate id="scoreboard.nodata">
                                            Không tìm thấy thí sinh
                                        </Translate>
                                    </b></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </>
                );
            }
        }
        else
            return (
                <>
                    <div>
                        <table className={custom.table_center}>
                            <thead>
                                <tr>
                                    <th><Translate id="scoreboard.id">Số báo danh</Translate></th>
                                    <th><Translate id="scoreboard.math">Toán</Translate></th>
                                    <th><Translate id="scoreboard.literature">Ngữ văn</Translate></th>
                                    <th><Translate id="scoreboard.physics">Vật lý</Translate></th>
                                    <th><Translate id="scoreboard.chemistry">Hóa học</Translate></th>
                                    <th><Translate id="scoreboard.biology">Sinh học</Translate></th>
                                    <th><Translate id="scoreboard.history">Lịch sử</Translate></th>
                                    <th><Translate id="scoreboard.geography">Địa lý</Translate></th>
                                    <th><Translate id="scoreboard.civic">GDCD</Translate></th>
                                    <th><Translate id="scoreboard.foreign">Ngoại ngữ</Translate></th>
                                    <th><Translate id="scoreboard.langcode">Mã môn NN</Translate></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={12}><b>
                                        <Translate id="scoreboard.nodata">
                                            Không có dữ liệu điểm thi
                                        </Translate>
                                    </b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
    }
}