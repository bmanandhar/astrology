
// Taurus (April 20-May 20)



// Virgo (Aug. 23-Sept. 22)

// Scorpio (Oct. 23-Nov. 21)
// Sagittarius (Nov. 22-Dec. 21)


// Pisces (Feb. 19-March 20)
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
        reading: "Some reading",
        img: "images/aquarius.png"
        },

        {
        birth: "(March 21-April 19)",
        sign: "aries",
        reading: "Some reading",
        img: "images/aries.png"
        },

        {
        birth: "(June 21-July 22)",
        sign: "cancer",
        reading: "Some reading",
        img: "images/cancer.png"
        },

        {
        birth: "(Dec. 22-Jan. 19)",
        sign: "capricorn",
        reading: "Some reading",
        img: "images/capricorn.png"
        },

        {
        birth: "(May 21-June 20)",
        sign: "gemini",
        reading: "Some reading",
        img: "images/gemini.png"
        },

        {
        birth: "(July 23-Aug. 22)",
        sign: "leo",
        reading: "Some reading",
        img: "images/leo.png"
        },

        {
        birth: "(Sept. 23-Oct. 22)",
        sign: "libra",
        reading: "Some reading",
        img: "images/libra.png"
        },

        {
        birth: "(Feb. 19-March 20)",
        sign: "pisces",
        reading: "Some reading",
        img: "images/pisces.png"
        },

        {
        birth: "(Nov. 22-Dec. 21)",
        sign: "sagittarius",
        reading: "Some reading",
        img: "images/sagittarius.png"
        },

        {
        birth: "(Oct. 23-Nov. 21)",
        sign: "scorpio",
        reading: "Some reading",
        img: "images/scorpio.png"
        },

        {
        birth: "(April 20-May 20)",
        sign: "taurus",
        reading: "Some reading",
        img: "images/taurus.png"
        },

        {
        birth: "(Aug. 23-Sept. 22)",
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
