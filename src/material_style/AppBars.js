import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MenuIconBars from './MenuIconBars';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        textAlign: 'center',
    }
};
const A = styled.a`
text-decoration: none;
color: Orange`
function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div>

            <AppBar position="static" color="default">
                <Toolbar>
                    <Hidden smUp >
                    <MenuIconBars />
                    </Hidden>
                    <Hidden only="xs" >

                        <Typography variant="title" color="inherit">
                            <Grid container spacing={24}>
                                <Grid item md={4} lg={4}>
                                    <Button color="inherit" className={classes.button}><A href="https://github.com/thedon122?tab=repositories" >Github</A></Button>
                                </Grid>
                                <Grid item md={4} lg={4}>
                                    <Button color="inherit" className={classes.button}><A href="https://www.linkedin.com/in/donovan-williams-615036b9/">Linkedin</A></Button>
                                </Grid>
                                <Grid item md={4} lg={4}>
                                    <Button color="inherit" className={classes.button}><A href="https://young-fjord-21221.herokuapp.com/">Project </A></Button>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Hidden>
                </Toolbar>
            </AppBar>

        </div>
    )
}
ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonAppBar);