<template>
    <div class="hello">
        <ul>
            <li>
                <router-link class="link-tag" to="/entranceGate">
                    进站检票
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/noEntry">
                    禁止进站
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/noExit">
                    禁止出站
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/exitGate">
                    出站检票
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/entranceGate">
                    进站检票
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lint-tag {
    display: block !important;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
