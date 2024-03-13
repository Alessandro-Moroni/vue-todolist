const {createApp} = Vue;

createApp({
  data(){
    return{
      listTodo:[
       {
        word:'ciaoooo',
        cross: false,
        }
      ],

      taskEl:'',

      errorMsg: '',
      
    }
  },

  methods:{
    addTask(){
      if(this.taskEl.length > 5){

        this.listTodo.unshift(this.taskEl);
        this.taskEl = '';
        this.errorMsg = '';
      }else{
        this.errorMsg = 'Attenzione deve contenere almeno 5 caratteri';
      }
    },

    eliminaTask(index){
      this.listTodo.splice(index, 1)
    }
  }
}).mount('#app');