export {}

class Me { 
   static isPrgramer: boolean = true;
   static firstName: string = 'Atsushi';
   static lastName: string = 'Ishida';
   
   static work() {
       //return "Hey, guys! Are you interested in TypeScript? Let's div into TypeScript!!";
       return `Hey, guys!  This is ${this.firstName} Are you interested in TypeScript? Let's div into TypeScript!!`;
   }
}


//let me = new Me();
//console.log(me.isPrgramer);


console.log(Me.isPrgramer);
console.log(Me.work());