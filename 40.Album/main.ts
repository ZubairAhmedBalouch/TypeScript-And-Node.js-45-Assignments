//Creating make_album function

function make_album(artist_name:string, album_title:string, tracks?:number){
    let album: {artist:string, title:string, tracks?:number} = {    //Created Object inside function
        artist: artist_name,        
        title: album_title,
    }
    if(tracks !== undefined){                     //used condition
        album.tracks = tracks;
    }

    return album;                               //return album function
}

//Calling three functions and three variables with differnt values. 

let album1 = make_album("Rahat Fateh Ali Khan", "Sitaron se Aage");  
console.log(album1)

let album2 = make_album("Abida Parveen", "Raqs-e-Bismil"); //created var: & stored function on it, as we print in console
console.log(album2);

let album3 = make_album("Atif Aslam", "Meri Kahani", 15);
console.log(album3);
