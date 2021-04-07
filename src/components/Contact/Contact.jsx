import React from 'react';
import {
  Card,
  CardContent,
  IconButton,
  Box,
  CardActionArea,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import styles from './styles.module.css';
import ListItem from '@material-ui/core/ListItem';

function Conact({ id, name, number, delContact }) {
  return (
    <ListItem disableGutters={true}>
      <Card variant="outlined" className={styles.card}>
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <p>
                {name}: {number}
              </p>
              <IconButton
                color="primary"
                component="span"
                onClick={() => delContact(id)}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    delContact: value => dispatch(actions.delContact(value)),
  };
};

export default connect(null, mapDispatchToProps)(Conact);
