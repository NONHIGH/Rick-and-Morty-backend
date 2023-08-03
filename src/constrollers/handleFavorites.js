let myFavorites = [];


const postFav = (request, response) => {
    const favorite = request.body;
    myFavorites.push(favorite);
    return response.status(200).send(myFavorites);
}

const deleteFav = (request, response) => {
    const { id } = request.params;
    const indexCharacter = myFavorites.findIndex(fav => fav.id === Number(id));
    if (indexCharacter !== -1) {

        myFavorites.splice(indexCharacter, 1);
        myFavorites = myFavorites;
        return response.status(200).send(myFavorites);
    } else {
        return response.status(200).send(myFavorites);
    }

}


module.exports = {
    postFav,
    deleteFav
}
