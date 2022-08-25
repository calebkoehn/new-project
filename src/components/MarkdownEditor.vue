<template>
    <div class="container">
        <div class="left-body">
            <div id="left-body-header">
                <h4>Markdown</h4>
                <span class="preview-mobile"><img src="../assets/icon-show-preview.svg"  alt="show icon"></span>
            </div>
            <textarea class="editor" v-model="input"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MarkdownEditor',
        data() {
            return {
                input: ""
            }
        }, 
        mounted: function() {
            this.input = this.$store.state.data;
        },
        
        watch: {
            input(now) {
                this.$emit('updatePreview', now);
            }
        }
    }

</script>

<style>
.left-body {
    float: left;
    width: 97%;
    padding-left: 10px;
}
#left-body-header {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.editor {
    background-color: black;
    color: grey;
    height: 100%;
    width: 100%;
    border: none;
    margin-top: 2%;
}
@media only screen and (min-width: 710px){
    span.preview-mobile{
        display: none;
    }
}
@media only screen and (max-width: 600px){
    div.left-body{
        display: inline-block;
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
}

</style>