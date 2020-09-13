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
      if (personalMoviedDB.privat){   //Вставляется значение тру или фолс, а потом сравнивается снизу
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
      for (let i = 1; i < 2; i++){

        let genre = prompt(`Your favourite genre of films ${i}`);
       
        if (genre === '' || genre === null) {
          console.log('Вы ввели некорректные данные или не ввели их вообще');
          i--;
        } else{
          personalMoviedDB.genres[i - 1] = genre ;
        }
        
        personalMoviedDB.genres.forEach((item, i) =>{
          console.log(`Favourite genre number ${i + 1} - is ${item}`);
        });
        
        /*let genres = prompt(`write your favourite genre with koma ${i}`).toLowerCase();
        if (genres === '' || genres === null) {
          console.log('Вы ввели некорректные данные или не ввели их вообще');
          i--;
        } else{
          personalMoviedDB.genres = genres.split(', ');
          personalMoviedDB.genres.sort();
        }
        personalMoviedDB.genres.forEach((item, i) =>{
          console.log(`Favourite genre number ${i + 1} - is ${item}`);
        });*/
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