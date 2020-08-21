"use strict";

const numberOfFilms = prompt('How much films are you see?', '');


const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
const a = prompt('Last film if u seed?', ''),
      b = prompt('How are u rate it?', ''),
      c = prompt('Last film if u seed?', ''),
      d = prompt('How are u rate it?', '');

      personalMoviedDB.movies[a] = b;
      personalMoviedDB.movies[c] = d;

console.log(personalMoviedDB);