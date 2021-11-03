Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    titolo:"Hello Vueoolean - Todolist",
    coseDaFare:[],
    nuovoElemento:"",
    colorType:""
    
  },
  methods:{
    aggiungiElemento(){

      if (this.nuovoElemento.trim() === ""){
        return;
      }
//se elementoPresente è uguale ad uno degli el elementoi dell'array di riferimento return 
//elementoPresente === true;

      const elementoPresente = this.coseDaFare.some((elemento) =>{
        console.log(elemento);
        return elemento.text.toLowerCase() === this.nuovoElemento.trim().toLowerCase();
      })

// elementoPresente === true non fa nulla
      if(elementoPresente) {
        return ;
      }
      //else 

      this.coseDaFare.push(
        {text:this.nuovoElemento.trim(),
         col:this.colorType }
          );

      this.nuovoElemento ="";


    },
    cancella(indiceDaTogliere){
      this.coseDaFare.splice(indiceDaTogliere,1); 

    }

  }

});




