module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense", "A person is never to old to learn", "A smile is your personal welcome mat", "A pleasant surprise is waiting for you", "A light heart carries you through all the hard times"];

        let randomIndex1 = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex1];

        res.status(200).send(randomFortune);
    }
}
