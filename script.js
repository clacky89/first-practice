"use strict";

const personalMoviedDB = {
    count:   0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
      personalMoviedDB.count = +prompt('How much films are you see?', '');

      while (personalMoviedDB.count == '' || personalMoviedDB.count == null || isNaN(personalMoviedDB.count)) {
        personalMoviedDB.count = +prompt('How much films are you see?', '');    
      }
    },
    
    checkPrivat: function () {
      if (personalMoviedDB.privat == false){
        console.log(personalMoviedDB);
      }
    },

    toggleVisibleMyDB: function () {
      if (personalMoviedDB.privat){
        personalMoviedDB.privat = false;
      } else {
        personalMoviedDB.privat = true;
      }
    },

    rememberMyFilms: function () {
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
    },
    writeYourGenres: function () {
      for (let i = 1; i <= 3; i++){ 
        personalMoviedDB.genres[i - 1] = prompt(`Your favourite genre of films $ {i}`);
      }
    },
    detectPersonalLevel: function () {
      if (personalMoviedDB.count < 10){
        alert ('So low watched films');
      }else if (10 <= personalMoviedDB.count && personalMoviedDB.count <= 30){
        alert ('You are classical viewer');
      }else if (personalMoviedDB.count < 999999){
        alert ('You are Cinefyle');
      } else{
        alert ('Error');
      }
    }
};
personalMoviedDB.start ();
personalMoviedDB.checkPrivat ();
personalMoviedDB.rememberMyFilms ();
personalMoviedDB.writeYourGenres ();
personalMoviedDB.detectPersonalLevel ();