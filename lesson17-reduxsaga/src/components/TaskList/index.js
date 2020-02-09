import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';
import Grid from '@material-ui/core/Grid';

class TaskList extends Component {
    render() {
        let { taskFilter, status } = this.props;
        return (
            <Grid item md={4} xs={12} >
                <Box color="text.primary" mt={2} mb={2}>
                    <div>
                        {status.label}
                    </div>
                </Box>

                <div>
                    {
                        taskFilter.map(task => {
                            return (
                                <TaskItem
                                    task={task}
                                    status={status}
                                    key={task.id + '-' + task.title}
                                ></TaskItem>
                            )
                        })
                    }
                </div>
            </Grid>

        );
    }
}
export default withStyles(styles)(TaskList);