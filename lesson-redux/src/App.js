import React, { Component } from 'react';
import Search from './components/Search';
import Sort from './components/Sort';
import Result from './components/Result';
import Detail from './components/Detail';
import demo from './trainning/demo';

class App extends Component {

    constructor() {
        super();
        this.state = {
            col12: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
            col8: "col-xs-8 col-sm-8 col-md-8 col-lg-8",
            col4: "col-xs-4 col-sm-4 col-md-4 col-lg-4",
            isShowDetail: false,
            results: [
                {
                    id: 1,
                    name: "Lập trình cơ bản",
                    status: 1
                },
                {
                    id: 2,
                    name: "Lập trình nâng cao",
                    status: 1
                },
                {
                    id: 3,
                    name: "AAAAA",
                    status: 0
                },
                {
                    id: 4,
                    name: "BBBBBBB",
                    status: 0
                }
            ],
            jobObject: {
                id: 0,
                name: "",
                status: 0
            },
            isEdit: false,
            txtSearch: "",
            typeSort: "",
            
        }
    };

    onClickAdd = () => {

        var job = this.state.jobObject;
        job.id = 0;
        job.name = "";
        job.status = 0;
        this.setState({
            isShowDetail: !this.state.isShowDetail,
            jobObject: job
        });
    };

    onReturnDetail = (params) => {
        let arrNew = this.state.results;

        if (this.state.isEdit === false) {
            arrNew.push({
                id: params.id,
                name: params.name,
                status: Number(params.status)
            });
        } else {
            arrNew.map((job, index) => {

                if ( job.id === params.id ) {
                    job.name = params.name;
                    job.status = Number(params.status);
                }
            });
        }
        
        this.setState({ 
            results: arrNew,
            isShowDetail: false,
            isEdit: false
        });
    };

    onReturnHide = () => {

        this.setState({
            isShowDetail: false,
            isEdit: false,
        });
    };

    onListenEdit = (params) => {

        var someProperty = { ...this.state.jobObject } ;
        someProperty.id = params.id;
        someProperty.name = params.name;
        someProperty.status = params.status;
        this.setState({
            jobObject: someProperty,
            isShowDetail: true,
            isEdit: true
        });
    };

    onListenDelete = (id) => {
        var arrNew = this.state.results.filter(job => job.id !== id ); 

        this.setState({
            results: arrNew
        });
    };

    onListenSearch = (params) => {
        this.setState({
            txtSearch: params
        });
    };

    onListenTypeSort = (params) => {
        let arrNew2 = this.state.results;

        switch(params) {
            case "AZ":
                arrNew2.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            case "ZA":
                arrNew2.sort((a, b) => (a.name > b.name) ? 1 : -1);
                arrNew2.reverse();
                break;
            case "Hide":
                break;
            case "Active":
                break;
            default:
                break;

        }

        this.setState({
            typeSort: params,
            results: arrNew2
        });
    }

    render() {



        return (
            <div className="container">
                <div className="page-header">
                  <h1>Quản lý công việc</h1>
                </div>
                <div className="row">

                    <div className={ this.state.isShowDetail === true ? this.state.col4 : "hidden" }>
                        <Detail jobObject={ this.state.jobObject } onReturnDetail={ this.onReturnDetail } onReturnHide={ this.onReturnHide }></Detail>
                    </div>

                    <div className={ this.state.isShowDetail === true ? this.state.col8 : this.state.col12 }>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={ this.onClickAdd }><i className="fa fa-plus"></i> Thêm mới</button>
                        </div>
                        <div className="row form-group">
                            <Search txtSearch={ this.state.txtSearch } onListenSearch={ this.onListenSearch }></Search>
                            <Sort typeSort={ this.typeSort } onListenTypeSort={ this.onListenTypeSort }></Sort>
                        </div>
                        <div className="form-group">
                            <Result dataResults={ this.state.results } 
                                    onListenEdit={ this.onListenEdit } 
                                    onListenDelete={ this.onListenDelete } 
                                    txtSearch={ this.state.txtSearch }
                            ></Result>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
