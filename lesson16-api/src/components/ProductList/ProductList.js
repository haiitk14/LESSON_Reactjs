import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList() {
    return (

        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
            </div>
            <div className="panel-body">
                
                <button type="button" className="btn btn-primary">Thêm mới</button>
                
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

                            <ProductItem></ProductItem>
                            <ProductItem></ProductItem>
                            <ProductItem></ProductItem>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>




    );
}

export default ProductList;
