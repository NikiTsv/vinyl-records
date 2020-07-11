import config from '../config';

export const getPresignedUploadParams = (fileName) =>{
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({fileName})
        }

        const request = new Request(config.api + 'signed-url', {...options})

        fetch(request).then((res) => {

            res.json().then(result => {
                resolve({
                    signedUrl: result.signedUrl,
                    uploadFileName: result.picture
                })
            }).catch(err => {
                console.error(err)
                reject(err)
            })

        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
}

export const uploadFile = (file, signedUrl) =>{
    return new Promise((resolve, reject) => {
        const options = {
            method: 'PUT',
            body: file,
            headers: { 'Content-Type': '*/*' }
        }

        const request = new Request(signedUrl, {...options})
        fetch(request).then((res) => {
            resolve({})
        }).catch(err => {
            console.log('upload file error', err);
        })
    })

}