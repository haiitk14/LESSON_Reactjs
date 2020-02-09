import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends Component {
    render() {
        let { classes, task, status } = this.props;
        return (
            <Card >
                <CardContent>

                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={8}>
                            <Typography color="textSecondary" component="h2">
                                {task.title}
                            </Typography>
                            <p>
                                {task.description}
                            </p>
                        </Grid>
                        <Grid item xs={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={ classes.cardActions }>
                    <Fab color="primary" aria-label="add" size="small">
                        <EditIcon fontSize="small" />
                    </Fab>
                    <Fab color="secondary" aria-label="edit" size="small">
                        <DeleteIcon fontSize="small"/>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);