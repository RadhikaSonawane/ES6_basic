/*let myTodos ={
    day: 'Monday',
    meetings:0,
    meetDone: 0,


    summary: function(){
        return `You have ${this.meetings} meetings today!`
    },

    addMeeting : function(num){
        this.meetings = this.meetings + num;
     },
     meetingDone : function (num){
         this.meetDone = this.meetDone + num;
     },
     forDay : function (days){
          this.setOfDays = `${this.day} and ${days}`;
     },
}
myTodos.addMeeting(4)
myTodos.meetingDone('done')
console.log(myTodos.summary(this.meetings));
console.log(myTodos.meetingDone(this.meetDone));*/

//Assignment
// Handle meeting done
// Create a fn that reset entire day


let myTodos ={
    day : 'Monday',
    meetings : 0,
    meetDone : 0,


    addMeeting : function(num){
       this.meetings = this.meetings + num;
    },
    meetingDone : function (num){
        this.meetDone = this.meetDone + num;
    },
    forDay : function (days){
         this.setOfDays = `${this.day} and ${days}`;
    },




    summary  : function (){
        let total = this.meetings- this.meetDone;
        let newDays = this.setOfDays;
        return (`We have ${total} meeting left for the days of ${newDays}`)


    }, 
        resset : function (){
         this.meetings = 0;
         this.meetDone= 0
     },
    


}
// myTodos.resset()


myTodos.addMeeting(5);
myTodos.meetingDone(4);
myTodos.addMeeting(5);
myTodos.meetingDone(1);
myTodos.meetingDone(1);
myTodos.forDay('tuesday');


console.log(myTodos.summary());