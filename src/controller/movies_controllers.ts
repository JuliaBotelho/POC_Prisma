import { Request, Response } from 'express';
import { newMovie, updateMovie, moviesYetToReview, showcaseMovies, fetchMoviesByGenre, fetchFavourites } from '../repository/repository.js'
import { movie, seenMovie } from '../protocols/movie.js';
import { isAbletoFavourite } from '../services/services.js';

export async function inputMovie(req: Request, res: Response) {
    const movie = req.body as movie;

    try {
        const entry = newMovie(movie);
        res.status(200).send(`Inserted movie`)

    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function reviewMovie(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)
    const review = req.body as seenMovie;

    try {
        const update = updateMovie(review, userId);
        res.status(200).send(`You reviewed this movie`)

    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function moviesToReview(req: Request, res: Response) {
    try {
        const notReviewedMovies = await moviesYetToReview();
        res.status(200).send(notReviewedMovies)

    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function fetchMovies(req: Request, res: Response) {

    try {
        const allReviewedMovies = await showcaseMovies();
        res.status(200).send(allReviewedMovies)

    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function showcaseGenres(req: Request, res: Response) {

    try {
        const byGenres = fetchMoviesByGenre();
        res.status(200).send(await byGenres)

    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function favouriteMovie(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId)
    const movieId = Number(req.params.movieId)
    try {
        const movieName = await isAbletoFavourite(movieId,userId)
        res.status(200).send(`${movieName} is now a favourite`)
    } catch {
        return res.sendStatus(400);
    }
}

export async function showFavourites(req: Request, res: Response) {

    try{
        const favourites = await fetchFavourites();
        res.send(favourites);
        
    }catch{
        return res.sendStatus(400);
    }
}