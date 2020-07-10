import config from '../config';

export const getAll = (username) => {
    return new Promise((resolve, reject) => {

        const encodedValue = encodeURIComponent(username);

        fetch(`${config.api}?username=${encodedValue}`).then((res) => {
            resolve(res.json())
        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
}