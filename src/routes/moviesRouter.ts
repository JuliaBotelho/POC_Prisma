import { Router } from "express";
import { movieValidation } from "../middleware/validation_middleware.js";
import { authValidation } from "../middleware/auth_middleware.js";
import { inputMovie, reviewMovie, fetchMovies, moviesToReview ,showcaseGenres, favouriteMovie, showFavourites } from '../controller/movies_controllers.js';

const moviesRouter = Router();

moviesRouter.post('/movies', movieValidation, inputMovie);
moviesRouter.put('/movies', authValidation ,reviewMovie);
moviesRouter.get('/movies', moviesToReview);
moviesRouter.get('/reviews',fetchMovies);
moviesRouter.get('/genre',showcaseGenres);
moviesRouter.post('/favourites/:movieId',authValidation, favouriteMovie)
moviesRouter.get('/favourites', showFavourites)

export default moviesRouter;