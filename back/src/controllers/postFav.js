const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: 'Complete all fields'})

        const favorite = await Favorite.create({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        })
        return res.status(200).json(favorite)

    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

module.exports = postFav;