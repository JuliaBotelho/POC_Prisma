import { checkIfReviewed, inputFavourite } from "../repository/repository.js";

export async function isAbletoFavourite(movieId:number, userId: number){

    const movieSelected = await checkIfReviewed(movieId)
    
    if(movieSelected.status === false){
        throw console.error("You need to review a movie to favourite it"); 
        return;  
    }
    if(Number(movieSelected.userId) !== Number(userId)){
        throw console.error("Conflito de usuários");
        return;
    }

    await inputFavourite(movieId,userId)
    return(movieSelected.movie)
}