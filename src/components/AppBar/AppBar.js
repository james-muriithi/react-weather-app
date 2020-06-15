import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/InfoOutlined';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        display: 'block',
        textAlign: 'left'
    }
})

class MyAppBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#4c04a6'}}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Weather App
                        </Typography>

                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <InfoIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(MyAppBar);