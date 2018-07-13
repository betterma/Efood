// user_btn.onclick = function(){
//     location.href="index.html";
// }
// home_btn.onclick = function(){
//         location.href="update.html";
//     }




var app = angular.module("myApp",['ng','ngRoute','ngAnimate']);

app.controller("myCtrl",function($scope,$location){
			$scope.lists=[
						{name:"糖醋排骨",price:10,cot:0},
						{name:"铁板鱿鱼",price:9,cot:0},
						{name:"红焖羊肉",price:8,cot:0},
						{name:"酱爆鸡丁",price:10,cot:0},
						{name:"抹茶羊羹",price:20,cot:0},
						{name:"一品豆腐",price:9,cot:0},
						{name:"鱼香肉丝",price:10,cot:0},
						{name:"番茄炒蛋",price:9,cot:0},
						{name:"兰州拉面",price:8,cot:0},
						{name:"香菇肉丝",price:10,cot:0},
						{name:"羊肉泡馍",price:20,cot:0},
						{name:"小炒肉",price:9,cot:0}
			];
			$scope.good1 = false;
			$scope.good2 = false;
			$scope.time=new Date().getFullYear()+"年"+"7"+"月"+new Date().getDate()+"日"+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
			$scope.sum = function(){
						var a = 0;
						for(var i=0;i<this.lists.length;i++){
								a+=this.lists[i].price*this.lists[i].cot;
							}
						return a;
			};
            $scope.result = function(){
                var res = this.sum();
                if(this.good1){
                    res = Math.floor(this.sum()*0.8);
                }
                if(this.good2&&this.sum()>=50){
                    res = this.sum()-5;
                }
                return res;
            };
            
            $scope.show = function(){
                document.querySelector("#list").style.display="block";
            };
            $scope.unshow = function() {
                document.querySelector("#list").style.display = "none";
            };
            $scope.toIndex = function(){
            	$location.path("/index");
			};
            $scope.toFirst = function(){
            	$location.path("/first");
			};
            $scope.toUpdate = function(){
            	$location.path("/update");
			};
			$scope.toLogin = function(){
				$location.path("/login");
			};
			$scope.delete = function(index){
				$scope.lists.splice(index,1);
			};

			$scope.add_name = '';

			$scope.add_price = 0;

			$scope.add = function(){
				$scope.add_name = document.querySelector("#add_name").value;
				$scope.add_price = (document.querySelector("#add_price").value);
				if($scope.add_name!='' && $scope.add_price!=0 && $scope.lists[0].name != $scope.add_name) {
                    $scope.lists.unshift({name: $scope.add_name, price: $scope.add_price});
                }
			};
    		$scope.showone = 0;
			$scope.show_add = function(){
				$scope.showone = $scope.showone==0?1:0;
			}
	});
app.config(function ($routeProvider) {
	$routeProvider.when('/index',{templateUrl:'temp/index.html'})
		.when('/first',{templateUrl:'temp/first.html'})
		.when('/update',{templateUrl:'temp/update.html'})
		.when('/login',{templateUrl:'temp/login.html'})
		.when('/',{templateUrl:'temp/first.html'})
		.otherwise({redirectTo:"first"});
});
