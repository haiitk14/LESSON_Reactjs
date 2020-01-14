import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super();

        this.state = {
            isChecked: false
        }
    }
    onClick = (param) => {
        this.setState(
            {
                isChecked: param
            }
        )
    }

    render() {
        let {isChecked} = this.state;
        return (
            <div>
               Đây là trang liên hệ  <br/>
               
               <button type="button" className="btn btn-primary" onClick={() => { this.onClick(false) }}>Cho phép</button>
               <button type="button" className="btn btn-danger" onClick={() => { this.onClick(true) }}>Không cho phép</button>
               <Prompt 
                when={isChecked}
                message={ location => ("Bạn có chắt truy cập " + location.pathname) }
               >
               </Prompt>
               
            </div>
        );
    }

}

export default Contact;
