import React from 'react';
import quans from '../images/peoplePhoto/quans.png';
import EditableField from '../components/EditableField';
import AccessDialog from '../components/AccessDialog';

class IndividualPage extends React.Component {
    state = {
        open: false,
        disabled: true,
        auth: false,
        // inputvalue: ''
    };
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({
            // inputvalue: value,
            open: false,
            disabled: value === '123' ? false : true,
        });

    };

    handleSave = () => {
        this.setState({
            disabled: true,
        });
    }


    render() {
        return (

            <div className="page-header">
                <div className="content-container">
                    <div className="individual-container-row">
                        <img alt='avatar' src={quans} className="individual-img" />
                        <div className="individual-container-colomn largePadding">
                            <h3>Sun, Quan</h3>
                            <h4>Title</h4>
                            <EditableField
                                open={this.state.open}
                                disabled={this.state.disabled}
                                placeholder='your title goes here...'
                            />
                            <h4>Biography</h4>
                            <EditableField
                                open={this.state.open}
                                disabled={this.state.disabled}
                                placeholder='your introduction goes here...'
                            />

                        </div>
                        {
                            !this.state.disabled
                            &&
                            <button
                                style={{ height: '10%', marginTop: 12 }}
                                onClick={this.handleSave}
                            >
                                save
                            </button>
                        }

                        {
                            this.state.disabled
                            &&
                            <button
                                style={{ height: '10%', marginTop: 12 }}
                                onClick={this.handleClickOpen}
                            >
                                Edit
                            </button>
                        }
                        <AccessDialog
                            // inputvalue={this.state.inputvalue}
                            open={this.state.open}
                            onClose={this.handleClose}
                        />
                    </div>

                </div>
            </div>
        );

    }
}

export default IndividualPage;