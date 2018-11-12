import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const ButtonHolder = styled.div`
    marginLeft: -12,
    marginRight: 20,
`
const A = styled.a`
text-decoration: none;
color: Orange`
class MenuIconBars extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <ButtonHolder>
                    <IconButton color="inherit"
                        aria-label="Menu" 
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <MenuIcon />
                    </IconButton>
                </ButtonHolder>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}><A href="https://github.com/thedon122?tab=repositories" >Github</A></MenuItem>
                    <MenuItem onClick={this.handleClose}><A href="https://www.linkedin.com/in/donovan-williams-615036b9/">Linkedin</A></MenuItem>
                    <MenuItem onClick={this.handleClose}><A href="https://young-fjord-21221.herokuapp.com/">Project</A></MenuItem>
                </Menu>
            </div>
        );
    }
}

export default MenuIconBars;