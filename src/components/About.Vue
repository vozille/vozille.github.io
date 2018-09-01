<template>
    <div>
        <div class="col-md-3">
            {{message}}
            {{akash}}
        </div>
        <div>
            <button></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data: {
            message: null
        },
        created: function () {
            this.SetAboutMessage()
        },
        methods: {
            SetAboutMessage: function(){
                this.message = "This is an about page. These pages are very important"
            }
        },
        props: {
            akash: Object
        }
    }
</script>

<style lang="scss">
    @import './node_modules/bootstrap/scss/bootstrap.scss';
</style>

