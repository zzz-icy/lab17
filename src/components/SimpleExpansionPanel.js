import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
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

function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Contact Us</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant='h4'>
                        Advanced Center for Electronics<br />
                        Department of Physics<br />
                        Dedman College of Humanities and Sciences<br />
                        Southern Methodist University<br />
                        3215 Daniel Ave.<br />
                        Dallas, Texas 75275-0175<br />
                        (214) 768-1472 Phone<br />
                        (214) 768-1472 Fax
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}


export default withStyles(styles)(SimpleExpansionPanel);