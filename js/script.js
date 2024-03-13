const {createApp} = Vue;

createApp({
  data(){
    return{
      listTodo:[
       {
        word:'spesa',
        cross: true,
        },
       {
        word:'correre',
        cross: false,
        },
       {
        word:'pulire casa',
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
        const newEl = {word:this.taskEl}
        this.listTodo.unshift(newEl)

        this.taskEl = '';
        this.errorMsg = '';
      }else{
        this.errorMsg = 'Attenzione deve contenere almeno 5 caratteri';
      }
    },

    deleteTask(index){
      this.listTodo.splice(index, 1)
    }
  }
}).mount('#app');