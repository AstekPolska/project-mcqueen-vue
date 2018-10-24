<template>
<div class="main-menu">
    <div class="main-menu__list">
        <MainMenuListItem 
            v-for="(page, index) in pages"
            :key="index"
            :pagePath="page.path"
            :pageName="page.name.toUpperCase()"
        />
    </div>
</div>
</template>

<script>
import MainMenuListItem from './MainMenuListItem.vue';

export default {
    name: 'MainMenu',
    components: {
        MainMenuListItem
    },
    data() {
        return {
            pages
        };
    }
}

const pages = [
    pageConstructor('Alfabet', '/alphabet'),
    pageConstructor('Liczenie', '/numbers'),
    pageConstructor('Dodawanie', '/adding')
];

function pageConstructor(name, path) {
    return {
        name,
        path
    };
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors';
@import '../../styles/dimens';

.main-menu {
    width: 100%;
    height: 100%;
    background: $colorPrimaryExtraLight;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    overflow: auto;
}

.main-menu__list {
    width: 100%;
    height: 100%;
    max-width: $menuItemMaxWidth;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
