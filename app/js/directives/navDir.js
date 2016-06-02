angular.module('taylorApp').directive('navDir', function() {

    function link(scope, elem, attrs) {
        var nav = document.getElementById('hamburger')
        elem.bind('click', function() {
            elem.parent().toggleClass('nav-height');
        })
    }

    return {
        restrict: 'A',
        link: link
    }
})
