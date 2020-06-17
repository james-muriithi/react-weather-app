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

    state = {
        isDark: null
    }

    componentDidMount(){
        const { state } = this.context
        this.setState({isDark: state.isDark})
    }

    onChange = () =>{
        const {dispatch } = this.context
        this.setState({isDark: !this.state.isDark}, ()=>{
            dispatch({ type: "TOGGLE_DARK_MODE" })
        })

        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        console.log(this.state);
        return (
            <Fade top duration={1000} distance="20px">
            <div className={classes.root}>
                <AppBar position="static" className='AppBar'>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Weather App
                        </Typography>

                            {this.state.isDark !== 'null' && <Toggle
                                // defaultChecked={state.isDark}
                                icons={{
                                    checked: (
                                        <img
                                            src={moon}
                                            width="16"
                                            height="16"
                                            alt="moon"
                                            style={{ pointerEvents: 'none', width: '16px', heigth: '16px' }}
                                        />
                                    ),
                                    unchecked: (
                                        <img
                                            src={sun}
                                            width="16"
                                            height="16"
                                            alt="sun"
                                            style={{ pointerEvents: 'none', width:'16px', heigth: '16px' }}
                                        />
                                    ),
                                }}
                                aria-label="toggle dark mode"
                                checked={this.state.isDark}
                                onChange={this.onChange.bind(this)}
                            /> }                       

                    </Toolbar>
                </AppBar>
            </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(MyAppBar);