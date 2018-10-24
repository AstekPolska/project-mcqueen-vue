<template>
<li class="main-menu__list-item">
    <a :href="pagePath">{{ pageName }}</a>
</li>
</template>

<script>
export default {
    name: 'MainMenuListItem',
    props: {
        pagePath: {
            type: String,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors';
@import '../../styles/dimens';
@import '../../styles/mixins';
@import '../../styles/others';

$borderRadius: $spacing;

.main-menu__list-item {
    height: auto;
    background: $colorPrimary;
    transition: $animationTime;
    @include noselect;

    @include screen('phone') {
        width: 100%;
        margin: $spacingSmall 0;
        border-radius: 0;
        @include verticalBoxShadow(1px);
    }

    @include screen('tablet') {
        width: calc(100% - 2 * #{$spacingBig});
        margin: $spacingBig;
        border-radius: $spacing;
        @include verticalBoxShadow(4px);
    }

    a {
        width: calc(100% - 2* #{$spacing});
        height: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: $spacingBig $spacing;
        text-decoration: none;
        font-size: 2em;
        color: white;
        text-align: center;
    }
}
</style>
