import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Phone from '@material-ui/icons/Phone';
import Scanner from '@material-ui/icons/Scanner';
import SMUlogo from '../images/SMUlogo.png';

const styles = () => ({
    root: {
        marginTop: '20px',
        width: '100%',
    },
    icon: {
        fontSize: 18,
        marginRight: 10
    },
});

function AddressExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <p className="panelsummary-p">Contact Us</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="panel-details-group">
                        <div className="address-group">

                            <p>
                                Advanced Center for Electronics
                    </p>
                        </div>

                        <div className="address-group">

                            <p>
                                Department of Physics
                    </p>
                        </div>

                        <div className="address-group">

                            <p>
                                Dedman College of Humanities and Sciences
                    </p>
                        </div>

                        <div className="address-group">

                            <p>

                                Southern Methodist University
                    </p>
                        </div>

                        <div className="address-group">

                            <p>

                                3215 Daniel Ave.
                    </p>
                        </div>

                        <div className="address-group">

                            <p>
                                Dallas, Texas 75275-0175
                    </p>
                        </div>

                        <div className="address-group">
                            <Phone className={classes.icon} />
                            <p>
                                (214) 768-1472
                            </p>
                        </div>
                        <div className="address-group">
                            <Scanner className={classes.icon} />
                            <p>
                                (214) 768-1472 Fax
                    </p>
                        </div>
                        <img alt="smulogo" src={SMUlogo} className="smulogo" />

                    </div>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}


export default withStyles(styles)(AddressExpansionPanel);