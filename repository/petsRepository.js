// TODO - replace with a real data provider
const data = [
    {
        id: "1",
        name: "Dog",
        description: "The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf,[5][6] and the modern grey wolf is the dog's nearest living relative.[7] The dog was the first species to be domesticated,[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquely adapted to human behavior,[9] leading to a large number of domestic individuals[10] and the ability to thrive on a starch-rich diet that would be inadequate for other canids",
        image: "dog.jpg"
    },
    {
        id: "2",
        name: "Lizzard",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species,[1] ranging across all continents except Antarctica, as well as most oceanic island chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia; some lizards are more closely related to these two excluded groups than they are to other lizards. Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon. Most lizards are quadrupedal, running with a strong side-to-side motion. Others are legless, and have long snake-like bodies. Some such as the forest-dwelling Draco lizards are able to glide. They are often territorial, the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo. Lizards make use of a variety of antipredator adaptations, including venom, camouflage, reflex bleeding, and the ability to sacrifice and regrow their tails.",
        image: "lizzard.jpg"
    },
    {
        id: "3",
        name: "Rabbit",
        description: "Rabbits are small mammals in the family Leporidae (along with the hare) of the order Lagomorpha (along with the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds[1] of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit (or bunny) is, in many areas of the world, a part of daily life—as food, clothing, a companion, and a source of artistic inspiration. Although once considered rodents, lagomorphs like rabbits have been discovered to have diverged separately and earlier than their rodent cousins and have a number of traits rodents lack, like two extra incisors.",
        image: "rabbit.jpg"
    },
    {
        id: "4",
        name: "Cat",
        description: "Gregory is my beautiful gray Persian cat. He walks with pride and grace, performing a dance of disdain as he slowly lifts and lowers each paw with the delicacy of a ballet dancer. His pride, however, does not extend to his appearance, for he spends most of his time indoors watching television and growing fat. He enjoys TV commercials, especially those for Meow Mix and 9 Lives. His familiarity with cat food commercials has led him to reject generic brands of cat food in favor of only the most expensive brands. Gregory is as finicky about visitors as he is about what he eats, befriending some and repelling others. He may snuggle up against your ankle, begging to be petted, or he may imitate a skunk and stain your favorite trousers. Gregory does not do this to establish his territory, as many cat experts think, but to humiliate me because he is jealous of my friends. After my guests have fled, I look at the old fleabag snoozing and smiling to himself in front of the television set, and I have to forgive him for his obnoxious, but endearing, habits. Well, I think that is the best example of descriptive text. However if you think it is not the example you want, I have the other examples about descriptive text in this list below. If you agree that the above sample is a very good descriptive text about animal then let’s continue to analyze the generic structure.",
        image: "covid-cat.jpg"
    },
]

const getPet = (petId) => {
    return data.find(pet => pet.id == petId);
}

const getPets = (petId) => {
    return data.filter(pet => pet.id != petId);
}

module.exports = {
    getPet,
    getPets
}