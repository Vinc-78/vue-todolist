Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    titolo:"Hello Vueoolean - Todolist",
    coseDaFare:["prova","prova2"],
    nuovoElemento:"",
    
  },
  methods:{
    aggiungiElemento(){

      if (this.nuovoElemento.trim() === ""){
        return;
      }

      const elementoPresente = this.coseDaFare.some((el) =>{
        return el.toLowerCase() === this.nuovoElemento.trim().toLowerCase();
      })

      if(elementoPresente) {
        return;
      }

      this.coseDaFare.push(this.nuovoElemento.trim());

      this.nuovoElemento ="";


    }

  }

});




