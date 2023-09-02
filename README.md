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





