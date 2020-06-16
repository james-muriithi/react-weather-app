import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Fade } from "react-reveal";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import InfoIcon from '@material-ui/icons/InfoOutlined';
import Toggle from 'react-dark-mode-toggle';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        display: 'block',
        textAlign: 'left'
    },
    img:{
        width: '50px',
        height: '50px',
        marginRight: '10px'
    }
})

class MyAppBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fade top duration={700} distance="20px">
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#4c04a6'}}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Weather App
                        </Typography>

                        <Toggle
                            speed={2}
                            checked={false}
                            onChange={() =>{
                                console.log('clicked');
                            }}
                            size={60}
                        />

                    </Toolbar>
                </AppBar>
            </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(MyAppBar);