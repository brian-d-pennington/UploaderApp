import React from 'react';
import axios from 'axios';

class InputFile extends React.Component {
    state = {
        selectedFile: null
    }
    
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    FileUploadHandler = () => {

        axios.post('gs://uploaderapp-25018.appspot.com/')
    }
    
    render() {
        return (
        <div className="input-file ui segment">
            <form className="ui form">
                <div className="field">
                    <label>File to upload</label>
                    <input type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.FileUploadHandler}>Upload</button>
                </div>
            </form>
        </div>
        );
    }
}

export default InputFile;