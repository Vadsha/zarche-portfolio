<template>
    <div class="bg-black z-50 w-full fixed bg-opacity-80 top-0 max-sm:pt-40 h-screen">
        <span @click="show" class="flex cursor-pointer text-white max-sm:mr-8 mr-12 pt-3 text-3xl justify-end">X</span>
        <img class="w-1/3 mx-auto max-sm:w-[80%]" :src="ImagePath" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ImagePath : './First.jpg'
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