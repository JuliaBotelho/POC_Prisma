import prisma from "../database/database.js";
import { user } from "../protocols/user.js";
import { movie, seenMovie } from "../protocols/movie.js";

export async function createUser(userData: user) {

    await prisma.users.create({
        data: {
            "userName": userData.userName,
            "password": userData.password
        }
    })
}

export async function loginUser(user: string, token: string) {

    await prisma.users.update({
        where: {
            userName:user
        },
        data: {
            "token":token
        }

    })
}


export async function fetchUser(token: string) {

    return prisma.users.findFirst({
        where: {
            token: token
        }
    })
}

export async function fetchLoggedUser(userName: string) {

    return prisma.users.findFirst({
        where: {
            userName: userName
        }
    })
}

export async function newMovie(movie: movie) {

    await prisma.movies.create({
        data: {
            "movie": movie.movie,
            "availableOn": movie.availableOn,
            "genre": movie.genre
        }
    })
}

export async function updateMovie(seenMovie: seenMovie, userId: number) {

    await prisma.movies.update({
        where: {
            id: seenMovie.id
        },
        data: {
            "userId": userId,
            "status": true,
            "note": seenMovie.note
        }

    })
}

export async function moviesYetToReview() {

    return prisma.movies.findMany({
        where:{
            status:false
        }
    })
}

export async function showcaseMovies() {

    return prisma.movies.findMany({
        where:{
            status:true
        },
        select:{
            movie:true,
            note: true,
            availableOn:true,
            genre:true,
            userId:true,
            users:{
                select:{
                    userName:true
                }
            }
        }
    })
}

export async function fetchMoviesByGenre() {
    return prisma.movies.groupBy({
       by: ["genre"],
       _count:{
        movie:true
       },
    })
}

export async function checkIfReviewed(movieId:number){

    return prisma.movies.findUnique({
        where:{
            id:movieId
        }
    })
}

export async function inputFavourite(movieId: number, userId: number){

    await prisma.favourites.create({
        data:{
            "userfavId": userId,
            "movieId":movieId
        }
    })
}

export async function fetchFavourites(){

    return prisma.favourites.findMany({
        select:{
            movieId:true,
            userfavId:true,
            users:{
                select:{
                    userName:true
                }
            },
            movies:{
                select:{
                    movie:true,
                    genre:true
                }
            }
        }
    })
}