// Question-4) write a class to calculate uber price.
// Answer-->


class UberPrice{
constructor(baseFare,travelTime,travelDistance,bookingFee,tipping){
 this.baseFare = baseFare;
 this.travelTime = travelTime;
 this.travelDistance = travelDistance;
 this.bookingFee = bookingFee;
 this.tipping = tipping;
}
getTotalFare(){
    let costPerMinute=2.8;
    let costPerMile=10;
    return `${this.baseFare +costPerMinute*this.travelTime+costPerMile*this.travelDistance+this.bookingFee+this.tipping} `
}
}



let tripFare1=new UberPrice(130,50,30,100,50);//130+140+300+100+50=720
console.log(tripFare1.getTotalFare());
let tripFare2= new UberPrice(130,40,25,67,50);//130+112+250+67+50=609
console.log(tripFare2.getTotalFare());


