const data = {
    users: [
        {
            id: 1,
            name: 'Gajinho'
        },
        {
            id: 2,
            name: 'Gajão'
        }
    ],
    movies: [
        {
            id: 1,
            idUser: 1,
            name: 'Back to The Future',
            year: 1985,
            genre: 'Adventure',
            duration: 116
        }
    ],
    series: [
        {
            id: 1,
            idUser: 1,
            name: 'Alf',
            year: 1986,
            genre: 'Comedy',
        }
    ],
    seasons: [
        {
            id: 1,
            idSerie: 1,
            number: 1
        }
    ],
    episodes: [
        {
            id: 1,
            idSeason: 1,
            name: 'Strangers in the Night',
            number: 2,
            duration: 24.485,
        }
    ]
}

module.exports = data