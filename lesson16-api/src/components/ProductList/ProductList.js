import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        let { children } = this.props;

        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>
                <div className="panel-body">


                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>

                                {children}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }

}

export default ProductList;
