import React, { Component } from 'react';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            txtName: "",
            sltStatus: 1
        };
    };

    /*
        Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
        Phải gọi setState() nếu muốn render lại.
    */
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.jobObject.id,
            txtName: nextProps.jobObject.name,
            sltStatus: nextProps.jobObject.status
        });
    };

    onChangeHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    onHandlerSubmit = (event) => {
        event.preventDefault();

        this.props.onReturnDetail({
            id: this.state.id === 0 ? Math.floor(Math.random() * 1000) : this.state.id,
            name: this.state.txtName,
            status: this.state.sltStatus
        });
        this.setState({
            txtName: "",
            sltStatus: 0
        });
    };

    onHandlerHide =() => {
        this.props.onReturnHide();
    };

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <h3 className="panel-title">Thông tin</h3>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <span className="label label-danger" onClick={ this.onHandlerHide }>
                                    <i className="fa fa-times"></i>
                                </span>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form className="form-horizontal" onSubmit={ this.onHandlerSubmit }>
                                <div className="form-group">
                                    <label>Tên</label>
                                   <input type="text" name="txtName" className="form-control" value={ this.state.txtName } onChange={ this.onChangeHandler } />
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái</label>
                                    <select name="sltStatus" className="form-control" value={ this.state.sltStatus } onChange={ this.onChangeHandler }>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Lưu</button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="panel-footer">
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
