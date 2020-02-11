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
import { Box } from '@material-ui/core';
import { toast } from 'react-toastify';


class Taskboard extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        let { taskActionCreator } = this.props;
        let { fetchListTaskRequest } = taskActionCreator;
        fetchListTaskRequest();
    }

    renderBoard() {
        let xhtml = null;
        let { listTask } = this.props;
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
    showToast() {
        toast.error("Wow so easy !");
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
                    <Box ml="1">
                        <Button variant="contained" color="primary"
                            onClick={this.showToast}
                        >
                            <AddIcon /> Click me
                    </Button>
                    </Box>
                </div>
                {this.renderBoard()}
                {this.renderDialog()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    taskActionCreator: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func,
    })
}

const mapStatetoProps = (state) => {
    return {
        listTask: state.task.listStask
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