import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


class Listview extends Component {
    render() {
        //console.log(this.props.message)
        return (
            this.props.message.items.map((item) =>(
                <Row key={item.id} className="repolist">
                    <Col span={16}>                    
                        <div className="repo-header">
                            <a className="reponame"> {item.full_name} </a>
                            <p className="text-muted small">Built by · tmplinshi · August 18 2019</p>
                        </div>
                        <div className="repo-body">
                            <p>No description given.</p>
                        </div>
                        <div className="repo-footer">
                            <span> ABAP &nbsp; <FontAwesomeIcon icon={faStar} /> <span>0</span> &nbsp;   <FontAwesomeIcon icon={faInfoCircle} /> <span>0</span>  </span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img src="https://placekitten.com/g/64/64" className="avatar"/>
                    </Col>
                </Row>
            ))
            
        )
    }
}

export default Listview
