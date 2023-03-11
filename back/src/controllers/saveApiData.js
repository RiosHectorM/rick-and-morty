const axios = require('axios');
const { Character } = require('../DB_connection.js');


const getApiData = async () => {
    try {
        let allCharactersInfoApi = [];
        for(let i = 1; i < 6; i++){
            const apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            allCharactersInfoApi.push(apiData);
        }
        // console.log('esta es la info', allCharactersInfoApi[0].data.results);
        allCharactersInfoApi = await Promise.all(allCharactersInfoApi);
        let allCharactersInfoApi2 = allCharactersInfoApi.map(response => response.data.results.map(charac => {
            return {
                id: charac.id,
                name:charac.name,
                species:charac.species,
                status:charac.status,
                origin:charac.origin.name,
                gender:charac.gender,
                image:charac.image
            }
        }))
        // console.log('esto es la nueva info', allCharactersInfoApi2);
        let allCharacters = allCharactersInfoApi2.flat();
        // console.log('esta es la respuesta', allCharacters);
        return allCharacters;
    } catch (error) {
        return {error: error.message}
    }
}
// getApiData()


const saveApiData = async () => {
    try {
        const characterAll = await getApiData();
        await Character.bulkCreate(characterAll);
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData;