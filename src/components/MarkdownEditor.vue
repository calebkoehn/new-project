<template>
    <div class="container">
        <div class="left-body">
            <div id="left-body-header">
                <h4>Markdown</h4>
                <!-- <span class="preview-mobile"><img src="./assets/"  alt="show icon"></span> -->
            </div>
            <!-- <textarea class="text-editor"></textarea> -->
            <textarea class="editor" :value="input" @input="update"></textarea>
        </div>
    </div>
</template>

<script>
    import marked from 'marked';
    export default {
        // name: 'MarkdownEditor',
        data() {
            return {
                input: ""
            }
        },
        computed: {
            compiledPreview: function () {
                return marked(this.input, {sanitize: true});
            }
        },
        methods: {
            update: function (evt) {
                this.input = evt.target.value;
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

</style>