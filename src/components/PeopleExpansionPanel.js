import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


const styles = () => ({
    root: {
        marginTop: '20px',
        width: '100%',
    },
    heading: {
        fontSize: 15,
        // fontWeight: theme.typography.fontWeightRegular,
    },
});

function PeopleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>

            <Paper>
                <div className="peoplePage-info-column">
                    <img
                        alt='quans'
                        src={props.img}
                        className="peoplePage-img"
                    />
                    <Link to={`/people/${props.id}`} className="peoplePage-info-item">

                        {props.name}
                    </Link>
                    <p className="peoplePage-info-item long-item">
                        {props.title}
                    </p>
                    <p className="peoplePage-info-item">
                        {props.mobile}
                    </p>
                    <p className="peoplePage-info-item">
                        {props.email}
                    </p>

                </div>

            </Paper>
        </div>
    );
}


export default withStyles(styles)(PeopleExpansionPanel);