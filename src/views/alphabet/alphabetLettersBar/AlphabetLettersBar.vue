<template>
<div class="alphabet_letters-bar">
    <ul class="alphabet__letters-bar-list">
        <!-- TEMP -->
        <AlphabetLettersBarListItem v-for="index in 100" :key="index" :letter="index" />
    </ul>
</div>
</template>

<script>
import AlphabetLettersBarListItem from './AlphabetLettersBarListItem.vue';

export default {
    name: 'AlphabetLettersBar',
    components: {
        AlphabetLettersBarListItem
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins';
@import '../../../styles/dimens';
@import '../../../styles/others';

.alphabet_letters-bar {
    font-size: calc(#{$appBarSize} * 0.6);
    transition: height $animationTime;
    @include baseAppBar;

    @include lanscapeMode {
        @include screen('phablet') {
            font-size: calc(#{$appBarSizeSmall} * 0.6);
            height: $appBarSizeSmall;
        }
    }
}

.alphabet__letters-bar-list {
    $lettersBarListFixMargin: calc(50vw - (#{$appBarSize} / 2));

    width: $appBarSize;
    height: 100vw;
    margin: calc(#{$lettersBarListFixMargin} * -1) 0 0 $lettersBarListFixMargin;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    overflow-x: hidden;
    overflow-y: overlay;
    transform: rotate(-90deg);
    transition: $animationTime;
    @include verticalStyledScrollBar;

    @include lanscapeMode {
        @include screen('phablet') {
            $lettersBarListFixMargin: calc(50vw - (#{$appBarSizeSmall} / 2));
            width: $appBarSizeSmall;
            margin: calc(#{$lettersBarListFixMargin} * -1) 0 0 $lettersBarListFixMargin;
        }
    }
}
</style>
