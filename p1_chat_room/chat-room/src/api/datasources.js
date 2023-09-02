import instance from "./http";

const axiosInstance = instance

function getReplyPromise(quertion) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/askquestion', {
            question: quertion
        })
        .then(response => {
            resolve(response)
        })
        .catch(error =>{
            console.log('error: '+error)
            reject(error)
        })
    })
}

export default getReplyPromise