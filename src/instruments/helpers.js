export const mapGenreIdToGenreName = (id, genres = []) => {

    const genre = genres.find((item) => item.id === id);

    if (genre) {
        return genre.name;
    }

    return '';
};