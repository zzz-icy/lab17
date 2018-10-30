import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


class AccessDialog extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleClose = () => {
        this.props.onClose(this.state.value);
        this.setState({
            value: ''
        });
    };


    render() {
        const { classes, onClose, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose}  {...other}>
                <DialogTitle id="simple-dialog-title">Please Password to Edit:</DialogTitle>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="accessInput"
                    />
                    <button
                        onClick={this.handleClose}
                        className='confirmBtn'
                    >
                        Confirm
                    </button>

                </div>
            </Dialog>
        );
    }
}

export default AccessDialog;