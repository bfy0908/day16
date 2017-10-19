/**
 * Created by Administrator on 2017/10/18.
 */
app.directive("shopcarItem", function () {
    return {
        restrict: "EA",
        scope: {
            item: "=item",
            index: "@index"
        },
        templateUrl: "App/View/_shoppingcar.html",
        controller:"shoppingcarItemController"
    }
});