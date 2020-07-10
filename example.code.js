import { config } from '../App.config';
import { AsyncStorage } from 'react-native';
import store from 'react-native-simple-store';
import * as constants from '../common/constants';

const baseHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const createService = (postfixUrl, actionUrl, method, data) => {
    return new Promise((resolve, reject) => {
        store.get(constants.USER_INFO).then((storedInfo) => {
            const { accessToken, id } = storedInfo;

            const authHeaders = {
                'FbAuthorization': accessToken,
                'UserId': id
            }

            const options = {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    ...baseHeaders,
                    ...authHeaders,
                },
            };
            const request = new Request(
                `${config.apiUrl}${postfixUrl}/${actionUrl}`,
                { ...options }
            );

            return fetch(request).then(resp => {
                resolve(resp.json())
            }).catch(err => {
                reject(err)
            })

        }).catch(err => {
            reject(err)
        })
    };
})


export const httpService = (postfixUrl) => {
    return {
        get: (actionUrl) => {
            return createService(postfixUrl, actionUrl, 'GET');
        },
        post: (actionUrl, data) => {
            return createService(postfixUrl, actionUrl, 'POST', data);
        }
    }
}

/* Example Usage */

import { httpService } from './httpService';

const postfixUrl = '/items';
const http = httpService(postfixUrl);

export const likeDislikeItem = (itemId, isLiked) => {
    if (isLiked) {
        http.post('like', itemId).then(res => {
            console.log(res)
        });
    }
    else {
        http.post('unlike', itemId).then(res => {
            console.log(res)
        });
    }
}
