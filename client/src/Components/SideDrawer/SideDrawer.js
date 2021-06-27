import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div 
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[{ text: 'Account', icon:'account_circle' }, { text: 'Orders', icon: 'local_mall' }, { text: 'Offers', icon: 'credit_card' }].map((el, index) => (
                    <ListItem button key={el.text} style={{ marginTop: '10px' }}>
                        <i class="material-icons">{el.icon}</i>
                        <ListItemText primary={el.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[{ text: 'Contact Us', icon:'phone' }, { text: 'FAQ', icon: 'question_answer' }, { text: 'Logout', icon: 'call_made' }].map((el, index) => (
                    <ListItem button key={el.text} style={{marginTop:'10px'}}>
                        <i class="material-icons">{el.icon}</i>
                        <ListItemText primary={el.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} style={{ backgroundColor: 'black', height: '10vh', width: '50vh' }} className='white-text'>CLICK TO VIEW YOUR  <i className="material-icons">shopping_cart</i></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
