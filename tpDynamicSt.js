const app = Vue.createApp({
  data() {
    return { 
      leInput: '', 
      leInputConfirm: '',
      selectCard1: false,
      selectCard2: false 
    };
  },
  methods: {
    afficherInput(event) {
      console.log(event);
      this.leInput = event.target.value;
      if(this.leInput=='hello'){
          this.selectCard1 = !this.selectCard1;
      } else if (this.leInput=='world'){
          this.selectCard2 = !this.selectCard2;
      }
    },
    afficherInputConfirm(event) {
      this.leInputConfirm = event.target.value;
    },
    selectCard(uneCard){
      if(uneCard==1){
          this.selectCard1 = !this.selectCard1;
      } else if (uneCard==2){
          this.selectCard2 = !this.selectCard2;
      }
    }
  },
});

app.mount('#monApp');


