interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{     author: string;     year: number; }
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {         author: 'Ed Sheeran',         year: 2015     }
}

const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

//console.log('Song:',audioPlayer);
//console.log('Duration:',audioPlayer);
//console.log('Author:',audioPlayer.details.author);
//console.log('Author: ',author);


//Desestructuracion de arreglos
const [ , , Gohan = 'Not found']: string[] = ['Vegeta','Buu'];

console.error('Personaje 3:', Gohan);

let dvz: string[] = ["Vegeta","Buu","Gohan"];
let [dvz1,dvz2,dvz3] = dvz;

console.log(dvz1);

export {};