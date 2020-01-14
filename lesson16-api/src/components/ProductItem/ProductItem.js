import React from 'react';

function ProductItem() {
    return (

        <tr>
            <td>1</td>
            <td>001</td>
            <td>Iphone 6</td>
            <td>
                <span className="label label-danger">Kích hoạt</span>
            </td>
            <td>

                <button type="button" className="btn btn-primary"><i className="fa fa-edit"></i> Chỉnh sửa</button>
                <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i> Xóa</button>

            </td>
        </tr>




    );
}

export default ProductItem;
