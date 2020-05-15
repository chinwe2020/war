function moveElements(source, target) {
    for (var i = 0; i < source.length; i++) {
        var element = source[i];
        if (element) {
            source.splice(i, 1);
            target.push(element);
            i--;
        }
    } 
}

function selectionMoveCheck(element) {
   if (element.selected) {
       element.selected = false;
       return true;
   }
}

$scope.remove = function () {
    moveElements($scope.appliedObjects, $scope.objects, selectionMoveCheck);
}

$scope.add = function () {
    moveElements($scope.objects, $scope.appliedObjects, selectionMoveCheck);
}