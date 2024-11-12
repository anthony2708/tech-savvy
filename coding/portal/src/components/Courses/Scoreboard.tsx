import { Component } from "react";
import custom from "../../css/YoutubeFeatures.module.css";

export default class CoursesScoreboard extends Component<{ data: any, id: string }, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.status === 200 && this.props.data.info != null) {
            return (
                <>
                    <div className="container">
                        <h1 className="text--center margin--lg">Scoreboard</h1>
                    </div>
                    <div className="container">
                        <table className={custom.table_center}>
                            <thead>
                                <tr>
                                    <th>Learner ID</th>
                                    <th>Full Name</th>
                                    <th>Progress 1</th>
                                    <th>Progress 2</th>
                                    <th>Progress 3</th>
                                    <th>Progress 4</th>
                                    <th>Progress 5</th>
                                    <th>Test 1</th>
                                    <th>Test 2</th>
                                    <th>Test 3</th>
                                    <th>Test 4</th>
                                    <th>Test 5</th>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.data.info.id}</td>
                                    <td>{this.props.data.info.name}</td>
                                    <td>{this.props.data.info.progress[0]}</td>
                                    <td>{this.props.data.info.progress[1]}</td>
                                    <td>{this.props.data.info.progress[2]}</td>
                                    <td>{this.props.data.info.progress[3]}</td>
                                    <td>{this.props.data.info.progress[4]}</td>
                                    <td>{this.props.data.info.test[0]}</td>
                                    <td>{this.props.data.info.test[1]}</td>
                                    <td>{this.props.data.info.test[2]}</td>
                                    <td>{this.props.data.info.test[3]}</td>
                                    <td>{this.props.data.info.test[4]}</td>
                                    <td>{this.props.data.info.final}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
        else
            return (
                <>
                    <div className="container">
                        <h1 className="text--center margin--lg">Scoreboard</h1>
                    </div>
                    <div className="container">
                        <table className={custom.table_center}>
                            <thead>
                                <tr>
                                    <th>Learner ID</th>
                                    <th>Full Name</th>
                                    <th>Progress 1</th>
                                    <th>Progress 2</th>
                                    <th>Progress 3</th>
                                    <th>Progress 4</th>
                                    <th>Progress 5</th>
                                    <th>Test 1</th>
                                    <th>Test 2</th>
                                    <th>Test 3</th>
                                    <th>Test 4</th>
                                    <th>Test 5</th>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={13}><b>No data from the learner.</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
    }
}