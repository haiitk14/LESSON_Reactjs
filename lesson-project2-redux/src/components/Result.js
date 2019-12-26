import React, { Component } from 'react';
import { connect } from 'react-redux'; // kết nối store láy state
import * as actions from './../actions/index'


class Result extends Component {

    onHandlerEdit = (params) => {
        this.props.onListenEdit(params);
    };

    onHandlerDelete = (id) => {
      this.props.onDeleteTasks(id);
    };
    
    render() {
        console.log(this.props.dataResults);
        
        let elm = this.props.dataResults.map((job, index) => {
            let txtS = this.props.txtSearch;

            if (job.name.toLowerCase().includes(txtS.trim().toLowerCase())) {
                
                return  <tr key={index}>
                            <td>{ index + 1 }</td>
                            <td>{ job.name }</td>
                            <td>
                                { job.status === 1 ? "Kích hoạt" : "Ẩn" }
                            </td>
                            <td>
                                <button type="button" className="btn btn-warning" onClick={ () => { this.onHandlerEdit(job); } }>Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={ () => { this.onHandlerDelete(job.id); } }>Xóa</button>
                            </td>
                        </tr>
            }
        });

        return (
            <div>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                    { elm }
                </tbody>
              </table>
            </div>
        );
    } 

}
  
const mapStatetoProps = (state) => {
    return {
        dataResults: state.tasks
    }
 }
 // connect(mapStatetoProps, null)
 /*
    state: callback từ store ( reducer tổng trả về )
    dataResults : tên của props ở component hiện tại
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteTasks: (id) => {
            dispatch(actions.deleteTasks(id));
        }
    }
 }

export default connect(mapStatetoProps, mapDispatchToProps) (Result);
