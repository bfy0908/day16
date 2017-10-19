/**
 * Created by Administrator on 2017/10/18.
 */
var app = angular.module("Myapp", ["ui.router"]);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('shoppingcar', {
        url: "/shoppingcar",
        templateUrl: "./App/View/shoppingcar.html",
        controller: "shoppingcarController"
    });
    $urlRouterProvider.otherwise("/shoppingcar");
});