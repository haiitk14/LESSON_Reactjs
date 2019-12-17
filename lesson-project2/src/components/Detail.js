import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
        <div>
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Thông tin</h3>
                </div>
                <div className="panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label>Tên</label>
                               <input type="text" name="txtName" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Tên</label>
                               <input type="text" name="txtName" className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Detail;
