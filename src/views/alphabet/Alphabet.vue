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
import LettersBar from './alphabetLettersBar/AlphabetLettersBar.vue';
import MainSpace from './AlphabetMainSpace.vue';
import SpellBar from './AlphabetSpellBar.vue';
import ImagesSpace from './alphabetImagesSpace/AlphabetImagesSpace.vue';
import Dialog from './alphabetDialog/AlphabetDialog.vue';

export default {
    name: 'Alphabet'
}
</script>

<style lang="scss" scoped>

</style>
