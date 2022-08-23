<template>
    <div id="app">
        <div class="nav">
            <ul>
                <li class="header-left" style="margin-top: 10px; "><img src="./assets/icon-menu.svg" alt="icon-menu"></li>
                <li class="header-left"><h1 class="header-name">Markdown</h1></li>
                <li class="header-left" style="margin-top: 10px;"><span class="document-icon"><img src="./assets/icon-document.svg" alt="document icon"></span></li>
                <li class="header-left-stacked" style="margin-top: 10px;"><span class="document-name">Document Name</span><br><textarea :value="file" class="file" style="background-color: black;border: 0px; color: white;" rows="2" cols="12"></textarea></li>
                <li class="header-right"><button @click="persist" class="header-button" ><img src="./assets/icon-save.svg" alt="save icon"> Save Changes</button></li>
                <li class="header-right" style="margin-top: 10px;"><button class="delete-button" onclick="window.localStorage.clear();"><img src="./assets/icon-delete.svg" alt="delete file icon"></button></li>
            </ul>     
        </div>
        <div class="container">
            <MarkdownEditor /> 
            <TextPreview />
        </div>
        
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MarkdownEditor from './components/MarkdownEditor.vue'
import TextPreview from './components/TextPreview.vue'

export default {
  name: 'App',
  components: {
    MarkdownEditor,
    TextPreview,
  }
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}
.nav {
    width: 100%;
    height: 75px;
    display: flex;
    background-color: black;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: white;
    width: 100%;
}
li {
    float: left;
}
.header-left {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
}
.header-left-stacked {
    display: block;
}
.header-right {
    display: flex;
    align-items: center;
    float: right;
    padding: 14px 16px;
}
.file {
    padding-top: 10px;
}
.header-button {
    background-color: #F39765;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
} 
.delete-button {
    background-color: black;
    border: none;
}
.container {
    height: 125vh;
    width: 100%;
    display: flex;
    background-color: #151619;
}
</style>
