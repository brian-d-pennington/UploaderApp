import React from 'react';

class InputFile extends React.Component {
    render() {
        return (
        <div className="input-file ui segment">
            <form className="ui form">
                <div className="field">
                    <label>File to upload</label>
                    <input type="text" />
                </div>
            </form>
        </div>
        );
    }
}

export default InputFile;