import React, { Component } from 'react';

class Sort extends Component {
    constructor() {
        super();
        this.state = {
            icon: <i className="fa fa-check" aria-hidden="true"></i>,
            typeSort: ""
        }
    }

    onAZ = () => {
        this.props.onListenTypeSort("AZ");

        this.setState({
            typeSort: "AZ"
        });
    };

    onZA = () => {
        this.props.onListenTypeSort("ZA");

        this.setState({
            typeSort: "ZA"
        });
    };

    onHide = () => {
        this.props.onListenTypeSort("Hide");

        this.setState({
            typeSort: "Hide"
        });
    };

    onActive = () => {
        this.props.onListenTypeSort("Active");

        this.setState({
            typeSort: "Active"
        });
    }


    render() {
        let [iconAZ, iconZA, iconHide, iconActive] = "";

        switch(this.state.typeSort ) {
            case "AZ": 
                iconAZ = this.state.icon;
                break;
            case "ZA": 
                iconZA = this.state.icon;
                break;
            case "Hide": 
                iconHide = this.state.icon;
                break;
            case "Active": 
                iconActive = this.state.icon;   
                break;
            default:
                break;
        }

        return (
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sắp xếp &nbsp; <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>

                  </button>
                  <ul className="dropdown-menu">


                    <li><a onClick={ this.onAZ }><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Từ A - Z &nbsp; { iconAZ }</a></li>
                    <li><a onClick={ this.onZA }><i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Từ Z - A &nbsp; { iconZA }</a></li>
                    <li className="divider"></li>
                    <li><a onClick={ this.onHide }>Trạng thái Ẩn &nbsp; { iconHide }</a></li>
                    <li><a onClick={ this.onActive }>Trạng thái Kích hoạt &nbsp; { iconActive }</a></li>
                  </ul>
                </div>
              </div>
        );
    }
}

export default Sort;
