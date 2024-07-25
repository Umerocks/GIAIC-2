/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/
function make_album(artist_name, album_title, num_tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (num_tracks !== undefined) {
        album.tracks = num_tracks;
    }
    return album;
}
var First_Album = make_album("Ali Azmat", "Junoon");
var Second_Album = make_album("Ali Azmat", "Junoon", 5);
console.log(First_Album);
console.log(Second_Album);
// interface musicAlbum{
//     artName:string;
//     albmTitle:string;
//     trackNum: number[];
//     };
// function make_album(artistName:string, albumTitle:string,...track: number[]):musicAlbum{
//     let album: musicAlbum={
//         artName: artistName,
//         albmTitle: albumTitle,
//         trackNum: track,
//     };
//     // if(album.trackNum[0] > 0){
//     // }
// // musicAlbum.artName = artistName;
// // musicAlbum.albmTitle = albumTitle;
// return album;
// }
// console.log(make_album("Ali Azmat", "Junoon"));
// console.log(make_album("Ali Azmat", "Junoon", 1));
