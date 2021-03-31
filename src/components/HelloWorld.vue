<template>
    <div class="hello">
        <ul>
            <li>
                <router-link class="link-tag" to="/entranceGate">
                    001
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/entranceGateDemotion">
                    001-降级
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/noExit">
                    002
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/screenA">
                    003
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/screenADemotion">
                    003-降级
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/noEntry">
                    004
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/exitGate">
                    005
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/exitGateDemotion">
                    005-降级
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenB">
                    006
                </router-link>
            </li>

            <li>
                <router-link class="link-tag" to="/ScreenC">
                    007
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenF">
                    008
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenFDemotion">
                    008-降级
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenD">
                    009
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenE">
                    010
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenEDemotion">
                    010-降级
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/ScreenC">
                    011
                </router-link>
            </li>
            <li>
                <router-link class="link-tag" to="/generalMessage">
                    综合信息
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
    width: 1300px;
    margin: 0 auto;
}
li {
    display: inline-block;
    margin: 10px;
    font-size: 40px;
    text-align: center;
    width: 300px;
    border: 1px solid #ddd;
    height: 100px;
    line-height: 100px;
    vertical-align: top;
}
a {
    color: #42b983;
}
</style>
