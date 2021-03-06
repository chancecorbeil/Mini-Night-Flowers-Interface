// Granim Animations

 $(document).ready(function() {

// Background gradient animations and functions
var granimInstance = new Granim({
    element: '#fullscreengradientcanvas',
    name: 'interactive-gradient',
    elToSetClassOn: 'body',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        },
        "granim-bgcolors-1": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 2000
        },
        "granim-bgcolors-2": {  
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE']
            ],
            transitionSpeed: 10000
        },
        "granim-bgcolors-3": {
            gradients: [ ['#00ABE9', '#FF2ADC'] ],
            loop: false
        },
        "granim-bgcolors-4": {
            gradients: [ ['#B90029', '#590073'] ],
            loop: false
        },
        "granim-bgcolors-5": {
            gradients: [ ['#12FFF7', '#1A2980'] ],
            loop: false
        },
        "granim-bgcolors-6": {
            gradients: [ ['#FFB817', '#FF00EA'] ],
            loop: false
        },
        "granim-bgcolors-7": {
            gradients: [ ['#158B00', '#5A00FF'] ],
            loop: false
        },
        "granim-bgcolors-8": {
            gradients: [
                ['#590073', '#B90029'],
                ['#B90029', '#590073']
            ],
            transitionSpeed: 500
        },
        "granim-bgcolors-9": {
            gradients: [
                ['#0071BC', '#22B573'],
                ['#22B573', '#FCEE21'],
                ['#FCEE21', '#EA6044'],
                ['#EA6044', '#D4145A'],
                ['#D4145A', '#813A87'],
                ['#813A87', '#0071BC']
            ],
            transitionSpeed: 500
        },
        "granim-bgcolors-10": {
            gradients: [
                ['#0071BC', '#22B573'],
                ['#22B573', '#FCEE21'],
                ['#FCEE21', '#EA6044'],
                ['#EA6044', '#D4145A'],
                ['#D4145A', '#813A87'],
                ['#813A87', '#0071BC']
            ],
            transitionSpeed: 100
        },
        "granim-bgcolors-11": {
            gradients: [
                ['#0071BC', '#22B573'],
                ['#22B573', '#FCEE21'],
                ['#FCEE21', '#EA6044'],
                ['#EA6044', '#D4145A'],
                ['#D4145A', '#813A87'],
                ['#813A87', '#0071BC']
            ],
            transitionSpeed: 500
        },
        "granim-bgcolors-12": {
            gradients: [
                ['#FF3F3F', '#FF9D15'],
                ['#FF9D15', '#F7FF15'],
                ['#F7FF15', '#2BE900'],
                ['#2BE900', '#2AEAFF'],
                ['#2AEAFF', '#C500FF'],
                ['#C500FF', '#FF3F3F']
            ],
            transitionSpeed: 500
        },
        "granim-bgcolors-13": {
            gradients: [
                ['#00B7BF', '#8D00E9'],
                ['#8D00E9', '#FF2A4E'],
                ['#FF2A4E', '#000000'],
                ['#000000', '#000000'],
                ['#000000', '#FF2AD0'],
                ['#FF2AD0', '#FFF915'],
                ['#FFF915', '#00B7BF']
            ],
            transitionSpeed: 1000
        },
        "granim-bgcolors-14": {
            gradients: [ ['#158B00', '#5A00FF'] ],
            loop: false
        },
        "granim-bgcolors-15": {
            gradients: [ ['#158B00', '#5A00FF'] ],
            loop: false
            }
    }
});

// With jQuery
$('.bgcolors-1').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-1');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-1')
});
$('.bgcolors-2').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-2');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-2')
});
$('.bgcolors-3').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-3');
    granimInstance.changeDirection('top-bottom');
    setClass('.bgcolors-3')
});
$('.bgcolors-4').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-4');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-4')
});
$('.bgcolors-5').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-5');
    granimInstance.changeDirection('radial');
    setClass('.bgcolors-5')
});
$('.bgcolors-6').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-6');
    granimInstance.changeDirection('radial');
    setClass('.bgcolors-6')
});
$('.bgcolors-7').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-7');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-7')
});
$('.bgcolors-8').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-8');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-8')
});
$('.bgcolors-9').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-9');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-9')
});
$('.bgcolors-10').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-10');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-10')
});
$('.bgcolors-11').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-11');
    granimInstance.changeDirection('radial');
    setClass('.bgcolors-11')
});
$('.bgcolors-12').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-12');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-12')
});
$('.bgcolors-13').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-13');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-13')
});
$('.bgcolors-14').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-14');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-14')
});
$('.bgcolors-15').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('granim-bgcolors-15');
    granimInstance.changeDirection('diagonal');
    setClass('.bgcolors-15')
});

function setClass(element) {
    $('body a').removeClass('active');
    $(element).addClass('active');
};

});