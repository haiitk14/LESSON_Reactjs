import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Taskboard from '../Taskboard/index.js';
import theme from './../../commons/Theme/index.js';
import styles from './styles.js';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';

const store = configureStore();


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Taskboard></Taskboard>
                </ThemeProvider>
                <ToastContainer />
            </Provider>

        );
    }

}

export default withStyles(styles)(App);
