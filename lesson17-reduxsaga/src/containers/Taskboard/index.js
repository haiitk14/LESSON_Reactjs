import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "Read IT",
        status: 0
    },
    {
        id: 2,
        title: "Play game",
        description: "Liên quân mobile",
        status: 1
    },
    {
        id: 1,
        title: "Sing song",
        description: "Waiting for love",
        status: 2
    }
];

class Taskboard extends Component {
    state = {
        open: false
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
}

export default withStyles(styles)(Taskboard);