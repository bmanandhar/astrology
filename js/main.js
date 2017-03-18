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
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading"
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading"
        img: "img/path.pic"
        },

        {
        sign: "Some sign",
        reading: "Some reading",
        img: "img/path.pic"
        }
        ]

    for (var i=0; i < zodiacArray.length; i++) {
        if (zodiacArray[i].sign == userInput) {
            document.write(zodiacArray[i].sign)
        }
    }
}
