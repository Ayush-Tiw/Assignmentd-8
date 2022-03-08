// Question-1) The class movie is stated below.An instance of class Movie represent a film
//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// Answer->

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(array){
        let pgMovie=[];
        for(let i= 0;i<array.length;i++){
            if(array[i].rating=="PG"){
                pgMovie.push(array[i]);
                console.log(pgMovie);
            };
            
        };

    };
};




let film1= new Movie("Chennai Express","Red Chillies","PG");
let film2=new Movie("Bahubali","Dharma production","IMDB10");
let film3= new Movie("Bajrangi Bhaijaan","Blur Production");
let film4= new Movie("Casino Royale","Eon Production","PG13");
let film5= new Movie("KGF","First Production","PG");

console.log(Movie.getPG([film1,film2,film3,film4,film5]));
