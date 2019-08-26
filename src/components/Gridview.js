import React, { Component } from 'react'
import { Row, Col } from 'antd';

class Gridview extends Component {
    render() {
      //  console.log(this.state.message)
        return (
            
            this.props.message.items.map((item) => (
                
                    <Col lg={8} md={8} sm={12} className="gutter-row" key={item.id}>
                        <div className="repolist repogrid">
                            <div className="author-header">
                                <div className="author-img">
                                    <img src="https://placekitten.com/g/64/64" className="avatar"/>
                                </div>
                                <div className="author-details">
                                    <h5>{item.full_name}</h5>
                                    <p className="small text-muted">View Profile</p>
                                </div>
                            </div>
                            <div className="repo-header">
                                <a className="reponame"> tmplinshi / Scale9 </a>
                                <p className="text-muted small">Built by · tmplinshi · {item.created_at} </p>
                            </div>
                            <div className="repo-body">
                                <p>{item.description}</p>
                            </div>
                            <div className="repo-footer">
                                <span> ABAP </span>
                            </div>
                        </div>
                    </Col>
            ))

        )
    }
}

export default Gridview
