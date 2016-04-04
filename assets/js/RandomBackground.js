$(document).ready(function() {

    var bgArray = ['Background5.jpg', 'Background5.jpg', 'Background5.jpg' , 'Background5.jpg'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

    // $('body').css('background-image', bg);

    // If you have defined a path for the images
    var path = '../images/bg';

    // then you can put it right before the variable 'bg'
    $('body').css('background-image', path+bg);

}); 