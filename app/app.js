;var webRelief = angular.module('webRelief', ['ngMaterial']);

webRelief.config( function( $mdIconProvider,  $mdThemingProvider){
    $mdIconProvider.iconSet("avatar", './assets/svg/avatars.svg', 128);
    $mdThemingProvider.theme('default')
         .primaryPalette('brown')
         .accentPalette('blue');
});

webRelief.run(function($log){
    $log.debug("webRelief + ngMaterial running...");
});

webRelief.APP_ROOT = 'http://127.0.0.1:8080/';
webRelief.APP_URLS = {
    humpodcast: webRelief.APP_ROOT  + 'app/components/humanpodcast/humpodcast.html',
    playpodcastModal: webRelief.APP_ROOT  + 'app/components/dialogs/playpodcast.html',
    podcastplayer: webRelief.APP_ROOT + 'app/components/podcastplayer/podcastplayer.html'
};