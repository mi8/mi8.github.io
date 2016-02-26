$(document).ready(function() {

    var bgArray = ['Background1.jpg', 'Background2.jpg', 'Background3.jpg' , 'Background4.jpg'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

    // $('body').css('background-image', bg);

    // If you have defined a path for the images
    var path = '../images/bg';

    // then you can put it right before the variable 'bg'
    $('body').css('background-image', path+bg);

}); 