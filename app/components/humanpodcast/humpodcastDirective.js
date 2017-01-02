webRelief.directive('humPodcast', humPodcast);

function humPodcast() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: webRelief.APP_URLS.humpodcast,
        controller: humPodCastController
    }
};

function humPodCastController($scope, _playpodcast) {
    $scope.podcasts = buildGridModel({
        icon: "avatar:svg-",
        title: "Podcast-",
        background: "",
        shortDesc: "A nice and brief description of this awesome podcast"
    });

    function buildGridModel(tileTmpl) {
        var it, results = [];
        for (var j = 0; j < 11; j++) {
            it = angular.extend({}, tileTmpl);
            it.icon = it.icon + (j + 1);
            it.title = it.title + (j + 1);
            it.span = { row: 1, col: 1 };

            switch (j + 1) {
                case 1:
                    it.background = "red";
                    it.span.row = it.span.col = 1;
                    break;

                case 2: it.background = "green"; break;
                case 3: it.background = "darkBlue"; break;
                case 4:
                    it.background = "blue";
                    it.span.col = 1;
                    break;

                case 5:
                    it.background = "yellow";
                    it.span.row = it.span.col = 1;
                    break;

                case 6: it.background = "pink"; break;
                case 7: it.background = "darkBlue"; break;
                case 8: it.background = "purple"; break;
                case 9: it.background = "deepBlue"; break;
                case 10: it.background = "lightPurple"; break;
                case 11: it.background = "yellow"; break;               
            }

            results.push(it);
        }
        
        return results;
    }

    $scope.showpodcast = function (podcast) {       
        _playpodcast(podcast);
    }
}