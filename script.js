"use strict";

const numberOfFilms = prompt('How much films are you see?', '');


const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
  const a = prompt('Last film if u seed?', ''),
        b = prompt('How are u rate it?', '');

        personalMoviedDB.movies[a] = b;
        
  if (a != null && b != null && a != '' && b != '' && a.length < 50){
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMoviedDB.count < 10){
  alert ('So low watched films');
}else if (10 <= personalMoviedDB.count && personalMoviedDB.count < 30){
  alert ('You are classical viewer');
}else if (personalMoviedDB.count > 999999){
  alert ('You are Cineman');
} else{
  alert ('Error');
}

console.log(personalMoviedDB);

//Нормальная версия