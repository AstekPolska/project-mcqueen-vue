<template>
<div class="alphabet">
    <AlphabetLettersBar />
    <AlphabetMainSpace />
    <AlphabetSpellBar />
    <AlphabetImagesSpace />
    <AlphabetDialog />
</div>
</template>

<script>
import AlphabetLettersBar from './alphabetLettersBar/AlphabetLettersBar.vue';
import AlphabetMainSpace from './AlphabetMainSpace.vue';
import AlphabetSpellBar from './AlphabetSpellBar.vue';
import AlphabetImagesSpace from './alphabetImagesSpace/AlphabetImagesSpace.vue';
import AlphabetDialog from './alphabetDialog/AlphabetDialog.vue';

export default {
    name: 'Alphabet',
    components: {
        AlphabetLettersBar,
        AlphabetMainSpace,
        AlphabetSpellBar,
        AlphabetImagesSpace,
        AlphabetDialog
    }
}
</script>

<style lang="scss" scoped>
.alphabet{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
}
</style>
