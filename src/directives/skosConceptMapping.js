angular.module('ngSKOS')
.directive('skosConceptMapping', function(){
    return{
        restrict: 'A',
        scope: {
            mapping: '=skosConceptMapping',
            from: '=mappingFrom',
            to: '=mappingTo',
            select: '=select',
            saveLocation: '=saveLocation'
           
        },
        templateUrl: function(elem, attrs) {
            return attrs.templateUrl ?
                   attrs.templateUrl : 'template/skos-concept-mapping.html';
        },
        link: function link(scope, element, attr) {
            scope.selectFrom = function(concept) {
                scope.select("origin",concept);
            };
            scope.selectTo = function(concept) {
                scope.select("target",concept);
            };
            scope.saveMapping = function() {
                scope.mapping.timestamp = new Date().toISOString().slice(0, 10);
                // TODO: Use own database to specify 'source'
                scope.mapping.source = function() {};
                // TODO: Save current mapping to 'saveLocation'
            };
            scope.$watch('mapping');
        }
    }
});
