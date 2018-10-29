<template>
<li class="alphabet__letters-bar-list-item noselect"
>{{ letter }}</li>
</template>

<script>
export default {
    name: 'AlphabetLettersBarListItem',
    props: {
        letter: {
            // ToDo: uncomment when get real letters
            // type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/dimens';
@import '../../../styles/colors';

.alphabet__letters-bar-list-item {
    width: $appBarSize;
    height: $appBarSize;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    transform: rotate(90deg);
    color: white;
    cursor: pointer;
    &:hover {
        background: $itemHoverBackGround;
    }
}
</style>
