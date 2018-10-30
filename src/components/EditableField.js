import React from 'react';

class EditableField extends React.Component {
    state = {
        text: this.props.placeholder,
    };
    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (

            <div className="editable-box">
                {this.props.disabled &&
                    <p
                        className="editable-p"
                    >
                        {this.state.text}
                    </p>}
                {!this.props.disabled &&
                    <textarea
                        rows="2"
                        cols="30"
                        // className="summary__input"
                        value={this.state.text}
                        onChange={this.onTextChange}
                        className='editable-textarea'
                    />
                }
            </div>
        );

    }
}

export default EditableField;