import { config } from '../App.config';
import { AsyncStorage } from 'react-native';
import store from 'react-native-simple-store';
import * as constants from '../common/constants';

const baseHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const createService = (postfixUrl, endpoint, method, data) => {
    return new Promise((resolve, reject) => {
        store.get(constants.USER_INFO).then((storedInfo) => {
            const { accessToken, id } = storedInfo;

            const authHeaders = {
                'FbAuthorization': accessToken,
                'UserId': id
            }

            const options = {
                method: method,
                headers: {
                    ...baseHeaders,
                    ...authHeaders,
                },
            };

            if(data){
                const body = JSON.stringify(data);
                options.body = body;
            }

            const request = new Request(
                `${config.apiUrl}${postfixUrl}/${endpoint}`,
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
        get: (endpoint) => {
            return createService(postfixUrl, endpoint, 'GET');
        },
        post: (endpoint, data) => {
            return createService(postfixUrl, endpoint, 'POST', data);
        }
    }
}

/* Example Usage
    post to items/like
    post to items/dislike
*/

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
