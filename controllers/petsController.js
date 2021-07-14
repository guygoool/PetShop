var express = require('express')
var router = express.Router()
var petService = require('../services/petsService')

router.get("/", (req, res) => {
    const petId = 4;
    const petProfile = petService.getPet(petId);
    const pets = petService.getPets(petId);

    res.render("pages/petProfilePage", { title: petProfile.name, petProfile: petProfile, pets: pets });
});

router.get("/:id", (req, res) => {
    const petId = req.params.id;
    const petProfile = petService.getPet(petId);
    const pets = petService.getPets(petId);

    res.render("pages/petProfilePage", { title: petProfile.name, petProfile: petProfile, pets: pets });
});

module.exports = router
