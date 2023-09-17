import instance from "./http";

const axiosInstance = instance

function getReplyPromise(quertion) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/chat/postMessage', {
            question: quertion
        })
        .then(response => {
            console.log('response: '+response)
            resolve(response)
        })
        .catch(error =>{
            console.log('error: '+error)
            reject(error)
        })
    })
}

export default getReplyPromise