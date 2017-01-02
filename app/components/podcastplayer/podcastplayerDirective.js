webRelief.directive('podcastPlayer', podcastPlayer);

function podcastPlayer() {
    return {
        restrict: 'E',
        templateUrl: webRelief.APP_URLS.podcastplayer,
        link: podcastPlayerLink
    }
};

function podcastPlayerLink(scope, element, attr) {

    var audio = angular.element(element[0].querySelector('#audio-player'));
    var audioSeekBar = angular.element(element[0].querySelector('#audioSeekBar'));
    var audioVolume = angular.element(element[0].querySelector('#audio-volume'));
    var duration = angular.element(element[0].querySelector('#duration'));
    var playbutton = angular.element(element[0].querySelector('#play-button'));
    var pausebutton = angular.element(element[0].querySelector('#pause-button'))
    var infotwo = angular.element(element[0].querySelector('.info-two'));

    console.log(audioSeekBar); 
    //element.attr('superDirectiveStatus','true');
    showhideElement = function(elementClassesOrIds, flag){        
        elementClassesOrIds.forEach(function(strName){
             flag ? angular.element(element[0].querySelector(strName)).show(): angular.element(element[0].querySelector(strName)).hide();
        });       
    }

    togglePlayButton = function(){
        playbutton
            .removeClass("play-active")
            .addClass("play-inactive")
            .addClass("unchecked");
    }

    togglePauseButton = function(){
        pausebutton
            .children('.icon')
            .addClass("icon-pause")
            .removeClass("icon-play");
    }

    playbutton.on('click', function() {
         if (playbutton.hasClass("unchecked")) {
            //togglePlayButton()
            playbutton.hide();
            infotwo.addClass("info-active");

            pausebutton
             .addClass("scale-animation-active");

            showhideElement([".waves-animation-one", "#pause-button", ".seek-field", ".volume-icon", ".volume-field", ".info-two"], true);
            showhideElement([".waves-animation-two"], false);
            togglePauseButton();

            setTimeout(function() {
                showhideElement([".info-one"], false);
            }, 400);

            audio[0].play();
            audio[0].currentTime = 0;
         } else {
            //togglePlayButton();
            togglePauseButton();
            infotwo.removeClass("info-active");
            showhideElement([".waves-animation-one", "#pause-button", ".seek-field", ".volume-icon", ".volume-field", ".info-two"], false);
            showhideElement([".waves-animation-two"], true);

            setTimeout(function() {
               showhideElement([".info-one"], true);
            }, 150);

            audio.pause();
            audio.currentTime = 0;
         }
     });

    pausebutton.on('click', function() {
       pausebutton.children(".icon")
            .toggleClass("icon-pause")
            .toggleClass("icon-play");

         audio[0].paused ?   audio[0].play() :  audio[0].pause();        
    });

    playbutton.on('click', function() {
         setTimeout(function() {
         playbutton.children(".icon")
             .toggleClass("icon-play")
             .toggleClass("icon-cancel");
         }, 350);
    });

     angular.element(element[0].querySelector('.close')).on('click', function() {
          angular.element(element[0].querySelector('.ion-ios-close')).toggleClass("close-active");
     });

    audioVolume.on('oninput', function () {
        audio.volume = this.value / 100;
    });

    audioVolume.on('onchange', function () {
        audioVolume.oninput()
    });

    audioSeekBar.on('oninput', function () {
        audio.currentTime = audioSeekBar.value;
    });

    audioSeekBar.on('onchange', function () {
        audioSeekBar.oninput();
    });

    audio.on('ondurationchange', function () {
        audioSeekBar.min = 0;
        audioSeekBar.max = audio.duration;
        audioSeekBar.value = 0;
    });

    audio.on('ontimeupdate', function () {
        audioSeekBar.value = audio.currentTime;
    })
    
    audio.on("timeupdate", function() {   
     var s = parseInt(audio.currentTime % 60);
     var m = parseInt((audio.currentTime / 60) % 60);
     duration.innerHTML = m + ':' + s;
   }, false);

    Waves.init();
    Waves.attach(playbutton[0], ["waves-button", "waves-float"]);
    Waves.attach(pausebutton[0], ["waves-button", "waves-float"]);
}