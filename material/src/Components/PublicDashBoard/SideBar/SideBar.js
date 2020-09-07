import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import ROUTES from '../../../routes'


const SideBar = (props) => {
  const history=useHistory()
  const [open, setOpen] = useState(true)
  const [selectedKey, setSelectedKey] = useState('')
  
  const classes = useStyles()
  // const path = props.history;
  console.log(props,'sidebar');

  useEffect(() => {

  }, [])

  const list = () => {
    // let xhtml = <div className={classes.list}>
    //   <List component="div">
    //     {ROUTES.map(route => {
    //       return (<ListItem className={classes.listItem}>
    //         {route.path}
    //       </ListItem>)
    //     })}
    //   </List>
    // </div>
    // return xhtml
  }
  return (
    <Drawer
      anchor='left'
      // open={true}
      onClose={() => setOpen(false)}>
      {list()}
    </Drawer>
  )
}

export default SideBar
