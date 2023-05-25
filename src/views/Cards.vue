<template>
  <div>
    <h2>My Flashcards</h2>
    <div v-if="!showDefinition">
      <h3>{{ currentCard.term }}</h3>
      <button @click="showDefinition = true">Show Definition</button>
    </div>
    <div v-else>
      <h3>{{ currentCard.definition }}</h3>
      <button @click="speakText(currentCard.definition)">Speak Definition</button>
    </div>
    <button @click="showNextCard">Next Card</button>
  </div>
</template>

<script>
export default {
  name: 'contactPage',
  data() {
    return {
      flashcards: [
        { id: 1, term: 'HTML', definition: 'HyperText Markup Language' },
        { id: 2, term: 'CSS', definition: 'Cascading Style Sheets' },
        { id: 3, term: 'JS', definition: 'JavaScript' }
      ],
      currentIndex: 0,
      showDefinition: false,
      speechSynthesis: window.speechSynthesis
    };
  },
  computed: {
    currentCard() {
      return this.flashcards[this.currentIndex];
    }
  },
  methods: {
    showNextCard() {
      this.showDefinition = false; // 重置显示定义的状态
      this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
    },
    speakText(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      this.speechSynthesis.speak(utterance);
    }
  },
  watch: {
    showDefinition(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.speakText(this.currentCard.definition);
        });
      }
    }
  }
};
</script>
<style>
h3 {
  color: black;
}
</style>