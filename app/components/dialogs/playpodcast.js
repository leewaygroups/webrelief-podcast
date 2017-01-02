webRelief.factory('_playpodcast', function ($mdDialog) {
    var parentEl = angular.element(document.body);
    return function (podcast) {
        $mdDialog.show({
            parent: parentEl,
            //targetEvent: $event,
            templateUrl: webRelief.APP_URLS.playpodcastModal,
            locals: {
                podcast: podcast
            },
            controller: podcastPlayController
        });
    }
});

function podcastPlayController($scope, $mdDialog, podcast) { 
    $scope.podcast = podcast; 

    $scope.closeDialog = function () {       
        $mdDialog.hide();
    }
}