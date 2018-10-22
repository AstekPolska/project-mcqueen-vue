<template>
<div>
    <LettersBar />
    <MainSpace />
    <SpellBar />
    <ImagesSpace />
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
    name: 'Alphabet'
}
</script>

<style lang="scss" scoped>

</style>
