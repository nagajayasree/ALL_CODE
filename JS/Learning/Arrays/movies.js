const movies = [ 
    {title : 'a',year : 2018,rating : 4.5},
    {title : 'b',year : 2018,rating : 4.7},
    {title : 'c',year : 2018,rating : 3},
    {title : 'd',year : 2017,rating : 4.5},
];

//movies in 2018  rating > 4
//sort by their rating
//descending order
//pick their title

/*
movies.sort(function(a,b){
    if(a.rating < b.rating) return 1;
    if(a.rating > b.rating) return -1;
    return 0;
});
console.log(movies);
*/

const titles = movies.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title);
console.log(titles);
//document.write(titles);


