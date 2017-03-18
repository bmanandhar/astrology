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
        sign: "aquarius",
        reading: "Some reading",
        img: "images/aquarius.png"
        },

        {
        sign: "aries",
        reading: "Some reading",
        img: "images/aries.png"
        },

        {
        sign: "cancer",
        reading: "Some reading",
        img: "images/cancer.png"
        },

        {
        sign: "capricorn",
        reading: "Some reading",
        img: "images/capricorn.png"
        },

        {
        sign: "gemini",
        reading: "Some reading",
        img: "images/gemini.png"
        },

        {
        sign: "leo",
        reading: "Some reading",
        img: "images/leo.png"
        },

        {
        sign: "libra",
        reading: "Some reading",
        img: "images/libra.png"
        },

        {
        sign: "pisces",
        reading: "Some reading",
        img: "images/pisces.png"
        },

        {
        sign: "sagittarius",
        reading: "Some reading",
        img: "images/sagittarius.png"
        },

        {
        sign: "scorpio",
        reading: "Some reading",
        img: "images/scorpio.png"
        },

        {
        sign: "taurus",
        reading: "Some reading",
        img: "images/taurus.png"
        },

        {
        sign: "virgo",
        reading: "Some reading",
        img: "images/virgo.png"
        },
        ]

    for (var i=0; i < zodiacArray.length; i++) {
        if (zodiacArray[i].sign == userInput) {
            document.write(zodiacArray[i].sign)
        }
    }
}
