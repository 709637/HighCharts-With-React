
import React, { useState } from 'react';

import { sessionData } from './Fakedata';
import './DrillDropdown.css';

const ChildsChild1 = (props) => {

    const [childflag, setchild] = useState(false);
    const [sessionId, setsessionId] = useState(0);
    const [parent, setparent] = useState(0);

    // let parent = '';
    // let sessionId = '';
    let callChild1 = (selectedData) =>{
       //this.childdata = sessionData[0].log_nodes.filter(data => data.session === session && data.parent === self);
    //const [childflag, setchild] = useState(0);
    console.log("Hrello", selectedData);
    setchild(childflag => !childflag)
    setparent(parent => selectedData.self);
    setsessionId(sessionId => selectedData.session);
        // sessionId = selectedData.session;
        // parent = selectedData.self;

    }

    //let NodeData = props.data.collection.filter(data => data.session === props.node);
    //const { sessionDataList, gantLogNodeList } = this.state;
    let NodeData = props.data.log_nodes.filter(data => data.session === props.sessionID && data.parent === props.parent);
    let data = NodeData.map(value => value);
    let passData = props.data;
    //if (!this.state.flag) return '';
    return (<div>
        {
            (
                NodeData.map((data) => {
                            // gantLogNodeList.collection.push(node);
                            // console.log(gantLogNodeList);
                            return (
                                <div className='indent'>
                                    <details className='bgcolor'>
                                        <summary onClick={() => callChild1(data)}>{data.category}</summary>
                                        {/* <ul>
                                          <li><span>{node.category}</span></li>
                                        </ul> */}
                                    </details>
                                    {/* <Button key={index} onClick={() => this.callChild1(node.session,node.self)}>{node.category}</Button> */}
                                    {/* <button key={index} onClick={() => this.callChild1(node.session, node.self)}>{node.category}</button> */}
                                    {/* <div>{
                                        this.state.childFlag ?
                                            <div>{this.callChild1(node.session, node.self)}</div> : null}</div> */}
                                
                                
                        {((data.self === parent) && childflag) &&
                            <ChildsChild1 parent={parent} sessionID={sessionId} data = {passData} />
                        }
                        </div>
                            
                            )
                })
            )
        }
    </div>
                        
        
    );
}
export default ChildsChild1;