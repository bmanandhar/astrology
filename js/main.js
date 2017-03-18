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
        sign: "Some sign",
        reading: "Some reading",
        img: "images/aquarius.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/aries.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/cancer.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/capricorn.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/gemini.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/leo.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/libra.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/pisces.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/sagittarius.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/scorpio.png"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "images/taurus.png"
        },

        {
        sign: "Some sign",
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
