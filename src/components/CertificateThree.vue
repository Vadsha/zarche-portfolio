<template>
    <div class="bg-black fixed top-0 pt-3 z-50 max-sm:pt-52 bg-opacity-80 mx-auto h-screen">
        <span @click="show" class="flex cursor-pointer text-white max-sm:mr-2 mr-20 text-3xl justify-end">X</span>
        <img class="w-[60%] max-sm:w-[90%] mx-auto" :src="ImagePath" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ImagePath : './Third.jpg'
            }
        },
        methods: {
            show() {
                this.$emit('show', 'hide');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>