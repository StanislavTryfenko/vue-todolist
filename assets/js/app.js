const { createApp } = Vue

createApp({
    data(){
        return{
            tasksList:[],
            inputTask: {},
            newTask: '',
        }
    },
    methods: {
        takeTask(){
            if (this.newTask.length > 0 ) {
                this.tasksList.push({
                    text: this.newTask,
                    done: false,
                });  
            };
            this.newTask = '';
        },
        toggleTask(index){
            this.tasksList.splice(index, 1)
        },
    },
}).mount('#app')