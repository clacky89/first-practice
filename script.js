"use strict";

const numberOfFilms = prompt('How much films are you see?', '');

const lastFilm = prompt('last seed film?', '');
const Rate = prompt('how much u rate it?', '');

const personalMoviedDB = {
    count: numberOfFilms,
    movies: {
        yourmovie : lastFilm, Rate
        },
    actors: {},
    genres: [],
    privat: false
};
 
console.log(personalMoviedDB);