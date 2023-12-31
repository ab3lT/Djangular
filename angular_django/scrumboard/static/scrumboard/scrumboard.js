 (function(){
            'use strict';

            angular.module('scrumboard.demo', [])
                .controller('ScrumboardController', ['$scope',ScrumboardController]);

            function ScrumboardController($scope){

                $scope.add = function (list, title){
                    var card = {
                        title: title
                    };
                    list.cards.push(card)
                }

                 $scope.data = [
                     {
                        name: "Django Demo",
                        cards: [
                            {
                                title: 'Create Models'
                            },
                            {
                                title: 'Create View'
                            },
                            {
                                title: 'Migrate Database'
                            }
                        ]
                    },
                     {
                         name: 'Angular Demo',
                         cards:[
                             {
                                 title: 'write Html'
                             },
                             {
                                 title: 'write Css'
                             },
                             {
                                 title: 'write Js'
                             },
                         ]
                     }
                 ];
            }
        }());