import React, { Component } from 'react';

class Result extends Component {

    onHandlerEdit = (params) => {
        this.props.onListenEdit(params);
    };

    render() {
        
        let elm = this.props.dataResults.map((job, index) => {
            return  <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ job.name }</td>
                        <td>
                            { job.status === 1 ? "Kích hoạt" : "Ẩn" }
                        </td>
                        <td>
                            <button type="button" className="btn btn-warning" onClick={ () => { this.onHandlerEdit(job); } }>Sửa</button>&nbsp;
                            <button type="button" className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
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

export default Result;
