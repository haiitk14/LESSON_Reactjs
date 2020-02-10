import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
import PropTypes from 'prop-types';

const listTask = [

];

class Taskboard extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        let { taskActionCreator } = this.props;
        let { fetchListTask } = taskActionCreator;
        //fetchListTask();
    }

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        let taskFilter = listTask.filter(
                            task => task.status === status.value
                        );
                        return (
                            <TaskList
                                taskFilter={taskFilter}
                                status={status}
                                key={status.value}
                            >

                            </TaskList>
                        )
                    })
                }
            </Grid>
        )
        return xhtml;
    }
    handleClose = () => {
        this.setState({
            open: false
        });
    }
    openDialog = () => {
        this.setState({
            open: true
        });
    }
    renderDialog() {
        let xhtml = null;
        let { open } = this.state;
        xhtml = (
            <TaskForm
                open={open}
                closeDialog={this.handleClose}
            >

            </TaskForm>
        )
        return xhtml;
    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="contained" color="primary"
                        onClick={this.openDialog}
                    >
                        <AddIcon /> Thêm mới công việc
                    </Button>
                </div>
                {this.renderBoard()}
                {this.renderDialog()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    taskActionCreator: PropTypes.shape({
        fetchListTask: PropTypes.func,
    })
}

const mapStatetoProps = (state) => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreator: bindActionCreators(taskActions, dispatch)
    }
}

export default withStyles(styles)(
    connect(
        mapStatetoProps,
        mapDispatchToProps
    )(Taskboard)
);