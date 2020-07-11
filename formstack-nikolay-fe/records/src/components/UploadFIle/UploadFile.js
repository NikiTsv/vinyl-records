import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import {getPresignedUploadParams, uploadFile} from '../../services/upload';
import config from'../../config';

const getUploadParams = async name => {
    return await getPresignedUploadParams(name);
  }

const Uploader = () => {

    const onChangeHandler = async (event) => {
        const file = event.target.files[0];
        const { signedUrl, uploadFileName } = await getUploadParams(file.name);
        await uploadFile(file, signedUrl)
        console.log('full file url', config.s3bucket + uploadFileName)
    }

    return (
       <input type="file" name="file" onChange={onChangeHandler}/>
    )
  }

  export default Uploader