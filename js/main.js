var object = {
property1 : true,
property1 : true,
property1 : true,
property1 : true,
}

var pic = document.getElementById('pic')
pic.src = object.

function zodiac() {
    var userInput = document.getElementById('id')
    var zodiaArray = [

        {
        birth: "(Jan. 20-Feb. 18)",
        sign: "aquarius",
        reading: "Teamwork wins the game. Support your crew. Let them know how much they mean to you.",
        img: "images/aquarius.png"
        },

        {
        birth: "(March 21-April 19)",
        sign: "aries",
        reading: "Investigate and explore your surroundings.",
        img: "images/aries.png"
        },

        {
        birth: "(June 21-July 22)",
        sign: "cancer",
        reading: "Dance, exercise and otherwise move your body.",
        img: "images/cancer.png"
        },

        {
        birth: "(Dec. 22-Jan. 19)",
        sign: "capricorn",
        reading: "Savor simple pleasures.",
        img: "images/capricorn.png"
        },

        {
        birth: "(May 21-June 20)",
        sign: "gemini",
        reading: "Your partner could require delicate negotiations.",
        img: "images/gemini.png"
        },

        {
        birth: "(July 23-Aug. 22)",
        sign: "leo",
        reading: "Put your feelings into words and share them with someone you love",
        img: "images/leo.png"
        },

        {
        birth: "(Sept. 23-Oct. 22)",
        sign: "libra",
        reading: "Express your passion through your writing, images and film.",
        img: "images/libra.png"
        },

        {
        birth: "(Feb. 19-March 20)",
        sign: "pisces",
        reading: "Somebody out there loves you.",
        img: "images/pisces.png"
        },

        {
        birth: "(Nov. 22-Dec. 21)",
        sign: "sagittarius",
        reading: "You're especially brilliant and creative.",
        img: "images/sagittarius.png"
        },

        {
        birth: "(Oct. 23-Nov. 21)",
        sign: "scorpio",
        reading: "Now things are getting fun! There's plenty of action, and it's profitable.",
        img: "images/scorpio.png"
        },

        {
        birth: "(April 20-May 20)",
        sign: "taurus",
        reading: "Talk to your partner about what you'd love to do.",
        img: "images/taurus.png"
        },

        {
        birth: "(Aug. 23-Sept. 22)",
        sign: "virgo",
        reading: "Today is a 7 -- Discuss home improvement ideas with your family.",
        img: "images/virgo.png"
        },
        ]

    for (var i=0; i < zodiacArray.length; i++) {
        if (zodiacArray[i].sign == userInput) {
            document.write(zodiacArray[i].sign)
        }
    }
}
