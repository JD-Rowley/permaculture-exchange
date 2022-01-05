import React from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_FILE } from '../utils/mutations';

function Upload() {
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    })

    const handleFileChange = e => {
        const file = e.target.files[0]
        if(!file){
            console.log('did not work')
            return
        } else {
            console.log(file)
            uploadFile({ variables: { file }})
        }
    }

    return (
        <div className='upload'>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default Upload;