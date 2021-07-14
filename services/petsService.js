const petRepo = require("../repository/petsRepository")

const getPet = (petId) => {
    return petRepo.getPet(petId);
}

const getPets = (petId) => {
    return petRepo.getPets(petId);
}

module.exports = {
    getPet,
    getPets
}