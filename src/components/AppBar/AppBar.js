import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Fade } from "react-reveal";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Toggle from 'react-toggle';
import Context from '../../theme/Context'
import "./Toggle.css"
import sun from '../../assets/images/sun.png'
import moon from '../../assets/images/moon.png'


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

    static contextType = Context;

    render() {
        const { classes } = this.props;
        const { state, dispatch } = this.context
        return (
            <Fade top duration={1000} distance="20px">
            <div className={classes.root}>
                <AppBar position="static" className='AppBar'>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Weather App
                        </Typography>

                            <Toggle
                                icons={{
                                    checked: (
                                        <img
                                            src={moon}
                                            width="16"
                                            height="16"
                                            role="presentation"
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    ),
                                    unchecked: (
                                        <img
                                            src={sun}
                                            width="16"
                                            height="16"
                                            role="presentation"
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    ),
                                }}
                                checked={state.isDark}
                                onChange={()=>{
                                    dispatch({ type: "TOGGLE_DARK_MODE" });
                                }}
                            />                        

                    </Toolbar>
                </AppBar>
            </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(MyAppBar);