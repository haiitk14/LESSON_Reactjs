import React, { Component } from 'react';
import { connect } from 'react-redux'; // kết nối store láy state
import * as actions from './../actions/index'

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            id:  0,
            txtName: "",
            sltStatus: "true"
        };
    };

    /*
        Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
        Phải gọi setState() nếu muốn render lại.
    */
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.itemEditing && nextProps.itemEditing.id) {
            this.setState({
                id: nextProps.itemEditing.id,
                txtName: nextProps.itemEditing.name,
                sltStatus: nextProps.itemEditing.status === true ? "true" : "false"
            });
        } else {
            this.onResetState();
        }
        
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
        this.props.onSaveTask({
            id: this.state.id,
            name: this.state.txtName,
            status: this.state.sltStatus === "true" ? true : false
        });
        this.onResetState();
    };

    onHandlerHide =() => {
        this.props.onReturnHide(false);
    };

    onResetState = () => {
        this.setState({
            id: 0,
            txtName: "",
            sltStatus: "true"
        });
    }

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
                                        <option value={false}>Ẩn</option>
                                        <option value={true}>Kích hoạt</option>
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

const mapStatetoProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
 }
 // connect(mapStatetoProps, null)
 /*
    state: callback từ store ( reducer tổng trả về )
    dataResults : tên của props ở component hiện tại
 */
 const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onReturnHide: (boolToogle) => {
             dispatch(actions.toggleForm(boolToogle));
        },
    }
 }

export default connect(mapStatetoProps, mapDispatchToProps)  (Detail);
