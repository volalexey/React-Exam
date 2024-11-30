const Plant = require('../models/Plant');

module.exports.getAll = async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.status(200).json(plants);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.create = async (req, res) => {
    try {
        const {name, latinName, category, status, description} = req.body;
        const plant = await Plant.create({name, latinName, category, status, description});
        res.status(201).json(plant);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.update = async (req, res) => {
    try{
        const { name, latinName, category, status, description } = req.body;
        const [updated] = await Plant.update(
            { name, latinName, category, status, description },
            { where: { id: req.params.id } }
        );

        if (updated) {
            const updatedPlant = await Plant.findByPk(req.params.id);
            res.status(200).json(updatedPlant);
        } else {
            res.status(404).json({ error: 'Plant not found' });
        }
    }
    catch (error){
        console.log(error);
    }
}

module.exports.delete = async (req, res) => {
    try {
        const result = await Plant.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).json({ message: 'Plant deleted successfully' });
        } else {
            res.status(404).json({ error: 'Plant not found' });
        }
    }
    catch (error) {
        console.log(error);
    }
}