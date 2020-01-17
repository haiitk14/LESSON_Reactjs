import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        let { match } = this.props;
        console.log(match);
        return (
            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                    <form>
                    
                        <div className="form-group">
                            <label>Tên SP</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Giá SP</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái</label>
                        </div>
                        
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                Còn hàng
                            </label>
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                    
                </div>
            </div>
            
            

        );
    }
   
}

export default ProductActionPage;
