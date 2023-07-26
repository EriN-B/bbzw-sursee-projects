let data = [{id: 1, title: "Avengers: Endgame", year: "2019"}, {
    id: 2,
    title: "Avengers: Infinity War",
    year: "2018"
}, {id: 3, title: "Captain America: The First Avenger", year: "2011"}, {
    id: 3,
    title: "Spider-Man: Far From Home",
    year: "2019"
},];

function getNextId() {
    return Math.max(...data.map((movie) => movie.id)) + 1;
}

function insert(movie) {
    movie.id = getNextId();
    data.push(movie);
}

function update(movie) {
    movie.id = parseInt(movie.id, 10);
    const index = data.findIndex((item) => item.id === movie.id);
    data[index] = movie;
}

export function getAll() {
    return Promise.resolve(data);
}

export function get(id) {
    return Promise.resolve(data.find((movie) => movie.id === id));
}

export function remove(id) {
    data = data.filter((movie) => movie.id !== id);
    return Promise.resolve();
}

export function save(movie) {
    if (movie.id === "") {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}
