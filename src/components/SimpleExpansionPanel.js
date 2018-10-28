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
                    <div className="panel-details-group">
                        <p className=''>
                            Advanced Center for Electronics
                    </p>

                        <p className=''>
                            Department of Physics
                    </p>

                        <p className=''>
                            Dedman College of Humanities and Sciences
                    </p>

                        <p className=''>
                            Southern Methodist University
                    </p>

                        <p className=''>
                            3215 Daniel Ave.
                    </p>

                        <p className=''>
                            Dallas, Texas 75275-0175
                    </p>

                        <p className=''>
                            (214) 768-1472 Phone
                    </p>

                        <p className=''>
                            (214) 768-1472 Fax
                    </p>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}


export default withStyles(styles)(SimpleExpansionPanel);