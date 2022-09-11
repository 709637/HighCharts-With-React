/* eslint-disable */
import React from 'react';

// eslint-disable-next-line
// import { RouteComponentProps } from 'react-router';
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
// import Gantt from './Gantt.component';
// import { SimpleGantt } from './SimpleGantt';
// import { divide } from 'lodash';
// import SmartGantt from './SmartGantt';
import { sessionData } from './Fakedata';
import { LogNodes, LogNodesList, SessionData, SessionDataList } from './SessionEntity';
import ChildCompnents from './ChildCompnents';
import './DrillDropdown.css';
// import { Button, Form, InputGroup } from 'react-bootstrap';
/**
 *
 *
 * @interface DrillDropDownParams
 */
// interface DrillDropDownParams {

// }
/**
 *
 *
 * @interface IDrillDropDownProps
 * @extends {RouteComponentProps<DrillDropDownParams>}
 * @summary Props for DrillDropDown Page.
 */
// interface IDrillDropDownProps extends RouteComponentProps<DrillDropDownParams> {

// }
/**
 *
 *
 * @interface IDrillDropDownState
 * @summary State for DrillDropDown Page.
 */
// interface IDrillDropDownState {
//     sessionDataList: SessionDataList;
//     gantLogNodeList: LogNodesList;
//     sessionID: string;
//     flag: boolean;
//     childFlag: boolean;
// }
/**
 *
 *
 * @export
 * @class DrillDropDown
 * @extends {React.Component<IDrillDropDownProps, IDrillDropDownState>}
 * @summary DrillDropDown Page.
 * @author Gavin Monroe
 */
export class DrillDropDown extends React.Component {
    /**
     *
     *
     *
     *
     * @return {*}
     * @memberof DrillDropDown
     */

    sessionDataList;

    constructor(props, sessionDataList) {
        super(props);
        this.sessionDataList = sessionDataList;
        this.state = {
            sessionDataList: new SessionDataList(sessionData),
            gantLogNodeList: new LogNodesList({}),
            sessionID: '',
            flag: false,
            childFlag: false,
            nodeSession: '',
            nodeSelf: ''

        }
        this.normalMethod = this.normalMethod.bind(this);
        this.callParent = this.callParent.bind(this);
        this.callChild1 = this.callChild1.bind(this);

    }

    //  data = {
    //    data: [
    //      { id: 1, text: 'OCBO.BROKER.API.v4.session', start_date: '2022-05-18T18:12:47.157+03:00', end_date: '2022-05-18T18:12:51.738+03:00', progress: 0.6 },
    //      { id: 2, text: 'OCBOApi.BrokerService.process', start_date: '2022-05-18T18:12:51.911+03:00', end_date: '2022-05-18T18:13:05.403+03:00', progress: 0.3 },
    //      { id: 3, text: 'OCBO.BROKER.API.globalbroker', start_date: '2022-05-18T18:13:05.564+03:00', end_date: '2022-05-18T18:13:16.951+03:00', progress: 0.8 },
    //      { id: 4, text: 'OCBO.BROKER.API.JoltTransform', start_date: '2022-05-18T18:13:17.125+03:00', end_date: '2022-05-18T18:14:03.566+03:00', progress: 0.2 },
    //    ],
    //    links: [
    //      { id: 1, source: 1, target: 2, type: '0' },
    //    ],
    //  };

    // <div>
    //     <div className="gantt-container">
    //         <Gantt tasks={this.data} />
    //     </div>
    // </div>
    //Google Ganttt
    //     <div>
    //     <SimpleGantt />
    //  </div>

    // {
    //   Data.map(data => {
    //     return(
    //       <ul>
    //       <li>{data.session}</li>
    //       <li>{data.self}</li>
    //       <li>{data.category}</li>
    //       <li>{data.start_date}</li>
    //       <li>{data.end_date}</li>
    //       <li>{data.duration}</li>
    //       <li>{data.parent}</li>
    //       <li>{data.result}</li>
    //       </ul>
    //     )
    //   })
    // }

    componentDidMount() {
        this.testMethod();
    }


    testMethod() {

        this.sessionDataList = new SessionDataList(sessionData);

        this.sessionDataList.collection.map((data1) => {
            // console.log(data1.format);
            // console.log(data1.version);
            // console.log(data1.session);
            data1.logNodes.collection.map((logData) => {
                // console.log(logData.category);
                // console.log(logData.startDate);
                // console.log(logData.endDate);
                // console.log(logData.duration);
                // console.log(logData.session);
                // console.log(logData.parent);
                // console.log(logData.self);
                // console.log(logData.result);
            });
        });

        this.sessionDataList.collection.map((data1) => {
            let parent = data1.logNodes.collection.filter(node => node.parent === null);
            //console.log(parent);
        });

        this.sessionDataList.collection.map((data1) => {
            let child = data1.logNodes.collection.filter(node => node.parent === '8a0ed10a-82f2-3e76-841f-610cd1dc9b1c');
            // console.log(child);
        });

    }

    callParent() {
        const { sessionDataList, gantLogNodeList } = this.state;
        let NodeData = sessionDataList.collection.filter(data => data.session === this.state.sessionID);
        let data = NodeData.map(value => value);
        if (!this.state.flag) return '';
        return (

            <div>
                {
                    (
                        NodeData.map((data) => {
                            return (
                                data.logNodes.collection.filter(node => node.parent === null).map((node, index) => {
                                    // gantLogNodeList.collection.push(node);
                                    // console.log(gantLogNodeList);
                                    return (
                                        <div>
                                            <details key={index}>
                                                <summary onClick={() => this.callChild1(node.session, node.self)}>{node.category}</summary>
                                                {/* <ul>
                                                  <li><span>{node.category}</span></li>
                                                </ul> */}
                                            </details>
                                            {/* <Button key={index} onClick={() => this.callChild1(node.session,node.self)}>{node.category}</Button> */}
                                            {/* <button key={index} onClick={() => this.callChild1(node.session, node.self)}>{node.category}</button> */}
                                            {/* <div>{
                                                this.state.childFlag ?
                                                    <div>{this.callChild1(node.session, node.self)}</div> : null}</div> */}
                                        
                                        
                                { true &&
                                    data.logNodes.collection.filter(node => node.parent === null).map((node, index) => {
                                        // gantLogNodeList.collection.push(node);
                                        // console.log(gantLogNodeList);
                                        return (
                                            <div>
                                                <details key={index}>
                                                    <summary onClick={() => this.callChild1(node.session, node.self)}>{node.category}</summary>
                                                    {/* <ul>
                                                      <li><span>{node.category}</span></li>
                                                    </ul> */}
                                                </details>
                                                {/* <Button key={index} onClick={() => this.callChild1(node.session,node.self)}>{node.category}</Button> */}
                                                {/* <button key={index} onClick={() => this.callChild1(node.session, node.self)}>{node.category}</button> */}
                                                {/* <div>{
                                                    this.state.childFlag ?
                                                        <div>{this.callChild1(node.session, node.self)}</div> : null}</div> */}
                                            </div>
                                        
                                        )
                                    })
                                }
                                </div>
                                    
                                    )
                                })
                            )
                        })
                    )
                }
            </div>
        )
    };

    callChild1(nodeId, parentId) {

        const { sessionDataList, gantLogNodeList } = this.state;
        // this.setState({ nodeSession: nodeId, nodeSelf: parentId });
        let NodeData = sessionDataList.collection.filter(data => data.session === nodeId);
        let data = NodeData.map(value => value);
        // if (!this.state.childFlag) return '';
        // this.forceUpdate();
        this.setState({ childFlag: true, nodeSession: nodeId, nodeSelf: parentId });

        return (
            <div>

                {

                    (
                  NodeData.map((data) => {
                     return (
                         data.logNodes.collection.filter(node => node.parent === parentId).map((node) => {
                            //gantLogNodeList.collection.push(node);
                        console.log(node.category)
                        console.log(gantLogNodeList);
                      return (
                        <details >
                        <summary onClick={() => this.callChild1(node.session,node.self)}>{node.category}</summary>
                        </details>
                             )
                          })
                        )
                       })
                     ) }
                
            </div>
        )
    };

    // callChild = (nodeId, parentId) => {
    //     const { sessionDataList } = this.state;
    //     const Node = sessionDataList.collection.filter(data => data.session === nodeId);
    //     Node.map((data) => {
    //         return (
    //             data.logNodes.collection.filter((node) => node.parent === parentId).map((node, index) => {
    //                 console.log(node.category)
    //                 return (
    //                     <div>
    //                         <h3>hi</h3>
    //                         <button>{node.category}</button>
    //                     </div>
    //                 )
    //             })
    //         )
    //     });
    // };

    getSessionId(id) {
        console.log('button print session id', id);
        this.callParent();
        return (
            <div>
                <h3>{this.callParent()}</h3>
            </div>
        )
    };

    normalMethod(temp) {
        console.log(temp);
        //let parentdata= sessionData.log_nodes.filter(a=>a.parent == null);
        this.setState({ childFlag : true })
    }

    render() {
        const { sessionDataList, sessionID } = this.state;
        return (
            <div>
                <h2>Display data</h2>
                {/* <span> {this.normalMethod(this.state.sessionID)}</span> */}
                {/* <input type='button' onClick={() =>this.normalMethod()}>Test</input> */}
                {/* <ul>
          {
            sessionDataList.collection.map((data1, index) => {
              return (
                <div>

                  <li key={index}>{data1.format}</li>
                  <li>{data1.version}</li>
                  <li>{data1.session}</li>


                  {
                    data1.logNodes.collection.map((logData, index) => {
                      return (
                        <div>
                          <li key={index}>{logData.category}</li>
                          <li>{logData.startDate}</li>
                          <li>{logData.endDate}</li>
                          <li>{logData.duration}</li>
                          <li>{logData.session}</li>
                          <li>{logData.parent}</li>
                          <li>{logData.self}</li>
                          <li>{logData.result}</li>
                        </div>
                      )

                    })}
                </div>

              )
            })


          }

        </ul> */}

                <div>
                    <input type="text"

                        onChange={(e) => {
                            this.setState({ sessionID: e.target.value,childFlag : false });
                        }}
                        placeholder="Session Id"
                    />
                    <button
                        onClick={() => {
                            this.normalMethod(this.state.sessionID);
                        }}
                    >
                        Search
                    </button>

                </div>

                {/* <div>{this.callParent()[{}]}</div> */}
                {this.state.childFlag && <ChildCompnents sessionID={this.state.sessionID} />}

                {/* <Button onClick={() => this.normalMethod()}>Button1 - Get Parent</Button>
        <Button onClick={() => this.callChild('8e2fcbc3-51b4-35a7-a0e2-7461e9335438')}>Button1 - Get Child</Button> */}

            </div>
        );

    }
}

export default DrillDropDown;