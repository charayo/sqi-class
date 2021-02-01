var john = {
    firstName: 'John',
    lastName: 'Smith',
    age : 23,
    bills: [124, 48, 268, 180, 42],
     calcTips: function(){
         this.tips = [];
         this.paid = [];
         for (i=0; i<this.bills.length; i++) {
             var percentage;
             if (this.bills[i] < 50){
                 percentage = 0.2
             } else if (this.bills[i] >= 50 && this.bills[i] <= 200){
                        percentage = 0.15
             } else {
                percentage = 0.1
             }            
                 this.tips[i] = this.bills[i] * percentage
                 this.paid[i] = this.bills[i] + (this.bills[i] * percentage)
         }
     }
     
}
john.calcTips();
console.log(john);