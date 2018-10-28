import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            <ExpansionPanel
            // defaultExpanded
            >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className="peoplePage-info-column">
                        <img
                            alt='quans'
                            src={props.img}
                            className="peoplePage-img"
                        />
                        <p className="peoplePage-info-item">
                            {props.name}
                        </p>
                        <p className="peoplePage-info-item">
                            {props.title}
                        </p>
                        <p className="peoplePage-info-item">
                            {props.mobile}
                        </p>
                        <p className="peoplePage-info-item">
                            {props.email}
                        </p>

                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    TBD
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}


export default withStyles(styles)(PeopleExpansionPanel);