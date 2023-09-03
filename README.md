# vue_practice
This repository keeps my practice on VUE front end.

## Initiate the Develop Environment
Follow the [quick start](https://vuejs.org/guide/quick-start.html).

1. Open VSCode, install Volar extension.

2. Update Node.js to version 18.

3. Create a folder p1_chat_room. Will create the project here.

```
npm create vue@latest
```
Create project "char-room". Choose "No" to all.

4. Update npm.
```
npm install -g npm@10.0.0
```

5. Ceed to the project and start the project.
Use the mirror in China to install.
```
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm install
npm run dev
```

6. Visit the app at http://localhost:5173/

## Create a chat room app.
Taking a [chat-room on Github](https://github.com/Coffcer/vue-chat) as an example.

### The components:
1. The text box <TextBox>.

The text box below is a <textarea> binded to ref *inputContent*. Create a button for sending the message in the <textarea> and clean the *inputContent*. Add a keyup listener over ctrl + enter at the <textarea>. 

2. The chat history <CharHistory>.

Use a list to present the dialogs from boths sides. 

3. Add [Pinia](https://pinia.vuejs.org/) state management to synchronize the chat history.

Install Pinia:
```
cnpm install pinia
```

### Create a message interface.
Each message should have the speaker, timestamp and text. However, only typescript supports interface. Ignore it.

## Visit Restful API.
It is recommended to use [axios](https://github.com/axios/axios) to visit Restful APIs.

1. Install axios. 
```
cnpm install axios
```

2. Create an instance and return response data in an asynchronized way with Promise.
```
import axios from 'axios';

var instance = axios.create({
    headers: {
    'Content-Type': 'application/json'
    },
    timeout: 5000,
    baseURL: 'http://127.0.0.1:8080',
    withCredentials: false
})

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

```


## Install [Vuetify](https://vuetifyjs.com/zh-Hans/getting-started/installation/) to buetify components.

1. Install Vuetify through npm.
```
cnpm install vuetify --save
```

2. Add vuefity into App on main.js.
```
// Add Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)
```

3. Install [icons and fonts](https://vuetifyjs.com/zh-Hans/features/icon-fonts/).
Install the mdi icons first.
```
cnpm install @mdi/font -D
```
Then import it on main.js.
```
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
	...
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi
        }
    }
})

```

## Use Vuetify.

1. Use [<v-textarea>](https://vuetifyjs.com/en/components/textareas/).
Add clearable and counter function to the textarea. The clear-icon needs the mdi icon support.
```
<v-textarea clearable counter
        clear-icon="mdi-close-circle"
        label="Type ctrl + enter to send."
        v-model="inputContent" 
        @keyup.ctrl.enter="onKeyup">
        </v-textarea>
```

2. Replace <button> with [<v-btn>](https://vuetifyjs.com/zh-Hans/components/buttons/).
```
<v-btn variant="tonal" color="green" @click="sendMessage">Send</v-btn>
```


3. Buetify the chat history list.
Create a component for each chat item.


## Format date
```
cnpm install moment
```

```
import moment from 'moment';  
  
export default {  
  data() {  
    return {  
      date: new Date()  
    };  
  },  
  computed: {  
    formattedDate() {  
      return moment(this.date).format('YYYY-MM-DD HH:mm:ss');  
    }  
  }  
};
```
