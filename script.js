"use strict";

const numberOfFilms = prompt('How much films are you see?', '');


const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
var   a = prompt('Last film if u seed?', ''),
      b = prompt('How are u rate it?', ''),
      c = prompt('Last film if u seed?', ''),
      d = prompt('How are u rate it?', '');

      for(let i = 1; i < 3; i++) {
          a = prompt('Last film if u seed?', '');
          a++ ; 
          b = prompt('How are u rate it?', '');
          b++ ;
          if (a == ""){
            a = prompt('Last film if u seed?', '');
          } else if (a == undefined){
            a = prompt('Last film if u seed?', '');  
          } else if (a.length > 50){
            a = prompt('Last film if u seed?', '');  
          }
          if (b ==""){
            b = prompt('How are u rate it?', '');
          } else if( b == undefined){
            b = prompt('How are u rate it?', '');
          } else if(b.length > 50){
            b = prompt('How are u rate it?', ''); 
          }
      }

      switch (personalMoviedDB.count){
          case personalMoviedDB.count>10:
          alert('Просмотрено довольно мало фильмов');
          break;
          case 10<= personalMoviedDB.count <= 30:
          alert('Вы классический зритель');
          break;
          case personalMoviedDB.count > 30:
            alert('Вы киноман');
            break;
            default:
                alert("Произошла ошибка");
      }
      /*if (personalMoviedDB.count < 10){
          alert('Просмотрено довольно мало фильмов');
      } else if (10 <= personalMoviedDB.count <= 30){
          alert('Вы классический зритель');
      } else if (personalMoviedDB.count > 30){
          alert('Вы киноман');
      }*/

      personalMoviedDB.movies[a] = b;

console.log(personalMoviedDB);