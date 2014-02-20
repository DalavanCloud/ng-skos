var cocodaDemo = angular.module('cocodaDemo', ['ngSKOS','jsonText']);
cocodaDemo.run(function($rootScope) {
    $rootScope.sampleConcept = {
        ancestors: [ 
            { 'prefLabel': { en: 'root' } },
            { 'prefLabel': { en: 'child' } }
        ],
        notation: 'UN',
        prefLabel: { 
            en: 'nuclear physics', 
            de: 'Kernphysik' 
        },
        note: { en: ['this is a note'] },
        narrower: [
            { 
                prefLabel: { 
                    en: 'general, textbooks',
                    de: 'Allgemeines, Lehrbücher'
                } 
            },
        ],
        broader: [
            { 
                prefLabel: { 
                    en: 'physics',
                    de: 'Physik'
                } 
            },
        ]
    };
});
