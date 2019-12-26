import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            txtSearch: ""
        }
    };

    onHandlerChange = (event) => {
        let value = event.target.value;
        this.setState({
            txtSearch: value
        });
    };

    onClickSearch = () => {
        this.props.onListenSearch(this.state.txtSearch);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" value={ this.state.txtSearch } onChange={ this.onHandlerChange } />
                    <span className="input-group-btn">
                          <button className="btn btn-primary" type="button" onClick={ this.onClickSearch }><i className="fa fa-search"></i></button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
