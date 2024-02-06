//duplicate card
document.querySelector('#duplicate').addEventListener('click', function (event) {
    //No More than 10 cards
    console.log(document.querySelectorAll('.mycards my-card').length);
    if (document.querySelectorAll('my-card').length < 10) {
        const newCard = document.querySelector('my-card').cloneNode();
        document.querySelector('.mycards').appendChild(newCard);
    }
});

//Change Title
document.querySelector('#changetitle').addEventListener('click', function (e) {
    //document.querySelector('.card-title').innerHTML = "Worst Meme";
    var mycards = document.getElementsByTagName('my-card');
    if (mycards[0].cardtitle !== 'THE WORST MEME') {
        for (var i = 0; i < mycards.length; i++) {
            mycards[i].cardtitle = "THE WORST MEME";
        }
    }
    else {
        for (var i = 0; i < mycards.length; i++) {
            mycards[i].cardtitle = "THE BEST MEME";
        }
    }
});

//change image
document.querySelector('#changeimage').addEventListener('click', function (e) {
    //document.querySelector('.img').src = "https://github.com/elmsln.png";
    var mycards = document.getElementsByTagName('my-card');
        if (mycards[0].imageurl !== "https://github.com/elmsln.png") {
        for (var i = 0; i < mycards.length; i++) {
            mycards[i].imageurl = "https://github.com/elmsln.png";
        }
    }
    else {
        for (var i = 0; i < mycards.length; i++) {
            mycards[i].imageurl = "https://i.pinimg.com/originals/fb/30/d0/fb30d0ef2fd6304ebcb837a59afb8817.jpg";
        }
    }
});

//change bg color
document.querySelector('#changebg').addEventListener('click', function (e) {
    //change bg of all cards, toggle-able
    var mycards = document.getElementsByTagName('my-card');
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
        if (rs.getPropertyValue('--bgcolor') !== "black") {
        for (var i = 0; i < mycards.length; i++) {
            r.style.setProperty('--bgcolor', 'black');
        }
    }
    else {
        for (var i = 0; i < mycards.length; i++) {
            r.style.setProperty('--bgcolor', 'grey');;
        }
    }
});

//delete card
document.querySelector('#delete').addEventListener('click', function (e) {
    console.log(document.querySelectorAll('.mycards my-card').length);
    if (document.querySelectorAll('my-card').length !== 1) {
        document.querySelector('my-card').remove();
    }
});