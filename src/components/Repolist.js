import React, { Component } from 'react'
import { Row, Col, Select } from 'antd';
import axios from 'axios';
import Listview from './Listview';
import Gridview from './Gridview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';


const { Option } = Select;

const githubToken = '3749b10d4b8f17f072050071a2515ece98f232d7';
class Repolist extends Component{
    
    constructor(props) {
        super(props);      
        this.state = {
          current: 0,
          message : []
        };
      }
      
    toggle(index) {
        this.setState({
          current: index
        })
    }


    getUsers = async () => {
        let res =await axios.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc' ,{
            headers:{
                        "Authorization": "token "+githubToken
                    }
                })
                const {data:message} = res;

                this.setState({message})
                
    };


    componentDidMount() {
            this.getUsers();
    }
    render(){


        const { message } = this.state;
        console.log(this.state.message)
        return(
            <div>
                <div>                
                <header>
                    <Row gutter={16}>
                        <Col lg={10} md={10} sm={12} xs={24}>
                        <span className="days-title">8 days ago </span> <span className="date"> August 15, 2019 – August 22, 2019 </span>                
                        </Col>
                        <Col lg={14} md={12} sm={12} xs={24}>
                        <span>
                            <button className="button-style">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a Languages"
                                    optionFilterProp="children"                    
                                    filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </button>
                        </span>
                        <span>
                            <button className="button-style">
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a Languages"
                                optionFilterProp="children"                    
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </button>
                        </span>
                        <span>
                        <ul className="gridlist">
                            <li>
                            <a className="gridview" onClick={this.toggle.bind(this, 1)}><FontAwesomeIcon icon={faList} />&nbsp;List</a>                        
                            </li>  
                            <li>
                            <a onClick={this.toggle.bind(this, 2)}><FontAwesomeIcon icon={faTable} />&nbsp;Grid</a>                       
                            </li>  
                        </ul>
                        </span>
                        </Col>
                    </Row>
                </header>    
                
                <div className={`collapsible ${this.state.current === 1 ? 'open ': ''}`}>      
                    {(this.state.message.length !==0) ?  <Listview message = {this.state.message} />  : null}            
                </div>
                <div className={`collapsible  ${this.state.current === 2 ? 'open ': ''}`}>
                    {(this.state.message.length !==0) ? <Row gutter={16}> <Gridview message = {this.state.message} /> </Row> : null}
                </div>
            </div>
                
            </div>
        )
    }
}


export default Repolist;