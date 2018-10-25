<template>
<div>
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

</style>
