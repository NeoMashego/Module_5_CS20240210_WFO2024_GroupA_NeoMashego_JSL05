// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Save The Hero", artist: "Beyonce", genre: "Pop" },
    { title: "Your Power", artist: "Billi Eilish", genre: "Indie-Folk" },
    { title: "Nice", artist: "The Carters", genre: "R&B" },
    { title: "Risky", artist: "Elaine", genre: "R&B" },
    { title: "Another Hole in the Head", artist: "Nickelback", genre: "Light-Mental" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
let guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Light-Metal",
    "Groot": "Indie-Folk",
    // Add preferences for Drax, Rocket, and Groot
};

guardians = [
    { name: "Star-Lord", genre: "Rock" },
    { name: "Gamora", genre: "Pop" },
    { name: "Drax", genre: "R&B" },
    { name: "Rocket", genre: "Light-Metal" },
    { name: "Groot", genre: "Indie-Folk" },
]

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return guardians.map(g => {
        songs.find(s => s.genre === g.genre);
        return `${guardians.name}'s Playlist ${songs.title} by ${songs.artist}`
    })
}

// Call generatePlaylist and display the playlists for each Guardian
console.log(generatePlaylist(guardians, songs));

let playlists = document.getElementById("playlists");
playlists.innerHTML = generatePlaylist(guardians, songs);


