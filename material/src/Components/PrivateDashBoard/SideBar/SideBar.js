import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { withRouter } from "react-router";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import ROUTES from '../../../routes'


const SideBar = (props) => {

  const [open, setOpen] = useState(true)
  const [selectedKey, setSelectedKey] = useState('')

  const classes = useStyles()
  useEffect(() => {
    const { path } = props.match
    const indexKey = 'menu1'
    const menuActive = [
      {path: '/menu1', key: 'menu1'},
      {path: '/menu2', key: 'menu2'},
    ]
    if (path === '/admin') {
      setSelectedKey(indexKey)
      // props.history.push('/admin/menu1')
    } else {
      for (let i = 0; i < menuActive.length; i++) {
        if (path.indexOf(menuActive[i].path) > -1) {
          setSelectedKey(menuActive[i].key)
        }
      }
    }
  }, [])

  const onOpenSelected = (data) => {
    console.log(data);
    const { history } = props;

    switch (data) {
      case "menu1":
        history.push("/admin/menu1");
        break;
      case "menu2":
        history.push("/admin/menu2");
        break;
      default:
        break;
    }
  };

  const renderList = () => {
    let listMenu = null;
    listMenu = (
      <div className={classes.drawerContainer}>
        <List component="div" className={classes.listPadding}>
          <NavLink
            to="/admin/menu1"
            activeClassName={classes.menuLinkActive}
          >
            <ListItem
              onClick={() => onOpenSelected(selectedKey)}
              className={classes.menuItem}
              button
            >
              <ListItemText>
                <Typography className={classes.itemText}>
                  Menu1
                </Typography>
              </ListItemText>
              <ListItemIcon>
                <Icon className={classes.iconMenu}>announcement</Icon>
              </ListItemIcon>
            </ListItem>
          </NavLink>

          <NavLink
            to="/admin/menu2"
            activeClassName={classes.menuLinkActive}
          >
            <ListItem
              onClick={() => onOpenSelected(selectedKey)}
              className={classes.menuItem}
              button
            >
              <ListItemText>
                <Typography className={classes.itemText}>menu2</Typography>
              </ListItemText>
              <ListItemIcon>
                <Icon className={classes.iconMenu}>system_update_alt</Icon>
              </ListItemIcon>
            </ListItem>
          </NavLink>

        </List>
      </div>
    );

    return listMenu;
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
    // onClose={() => setOpen(true)}
    >
      {renderList()}
    </Drawer>
  )
}

export default withRouter(SideBar)
