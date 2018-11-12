import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBars from '../material_style/AppBars'
import Header from '../styled/Header'
import Aboutme from '../styled/AboutMe';
import Projects from '../styled/Projects'

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
};

class HomePage extends Component {
    state = {
        title: ['Event Planer', 'FanSite'],
        description: [],
        proimage: []
    }
    render() {
        
        const { classes } = this.props;
        return (
            <div>
                <AppBars />
                <Header>Hello My name is Donovan</Header>
                <Aboutme />
                <Projects projectTitle={'Event Planner'} />
            </div>
        )
    }
}
HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
