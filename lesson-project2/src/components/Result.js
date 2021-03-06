import React, { Component } from 'react';

class Result extends Component {

    onHandlerEdit = (params) => {
        this.props.onListenEdit(params);
    };

    onHandlerDelete = (id) => {
      this.props.onListenDelete(id);
    };
    
    render() {
        
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

export default Result;
