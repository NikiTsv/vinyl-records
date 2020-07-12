import React from 'react';
import {getPresignedUploadParams, uploadFile} from '../../services/upload';
import config from'../../config';

const getUploadParams = async name => {
    return await getPresignedUploadParams(name);
  }

const Uploader = (props) => {

    const onChangeHandler = async (event) => {
        const file = event.target.files[0];
        if(file){
            const { signedUrl, uploadFileName } = await getUploadParams(file.name);
            await uploadFile(file, signedUrl);
            const uploadedFileUrl = config.s3bucket + uploadFileName;
            console.log(props.fileUploaded, uploadedFileUrl);
            props.fileUploaded(uploadedFileUrl);
        }
    }

    return (
       <input type="file" name="file" onChange={onChangeHandler}/>
    )
  }

  export default Uploader