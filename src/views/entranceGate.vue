<template>
    <div>
        <headerbox showTip="true"></headerbox>
        <broadcast></broadcast>
        <rightinfo></rightinfo>
    </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
import rightinfo from '../components/rightinfo.vue';
export default {
    name: '进站检票',
    components: {
        broadcast,
        headerbox,
        rightinfo
    }
};
</script>

<style></style>
