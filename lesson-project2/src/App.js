import React, { Component } from 'react';
import Search from './components/Search';
import Sort from './components/Sort';
import Result from './components/Result';
import Detail from './components/Detail';

class App extends Component {

    constructor() {
        super();
        this.state = {
            col12: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
            col8: "col-xs-8 col-sm-8 col-md-8 col-lg-8",
            col4: "col-xs-4 col-sm-4 col-md-4 col-lg-4",
            isAdd: false,
            
        }
    };

    onClickAdd = () => {
        this.setState({
            isAdd: !this.state.isAdd
        });
    };

    render() {

        return (
            <div className="container">
                <div className="page-header">
                  <h1>Quản lý công việc</h1>
                </div>
                <div className="row">

                    <div className={ this.state.isAdd === true ? this.state.col4 : "hidden" }>
                        <Detail></Detail>
                    </div>

                    <div className={ this.state.isAdd === true ? this.state.col8 : this.state.col12 }>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.onClickAdd}><i className="fa fa-plus"></i> Thêm mới</button>
                        </div>
                        <div className="row form-group">
                            <Search></Search>
                            <Sort></Sort>
                        </div>
                        <div className="form-group">
                            <Result></Result>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
