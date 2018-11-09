import React from 'react';

class EditableField extends React.Component {
    // state = {
    //     text: this.props.placeholder,
    // };
    // onTextChange = (e) => {
    //     this.setState({
    //         text: e.target.value
    //     });
    // }

    render() {
        return (

            <div className="editable-box">
                {this.props.disabled &&
                    <p
                        className="editable-p"
                    >
                        {this.props.placeholder}
                    </p>}
                {!this.props.disabled &&
                    <textarea
                        rows="2"
                        cols="30"
                        // className="summary__input"
                        // defaultValue={this.state.text}
                        onChange={this.props.onTextChange}
                        className='editable-textarea'
                        defaultValue={this.props.placeholder}
                    />
                }
            </div>
        );

    }
}

export default EditableField;