app.controller('homeCtrl',function($scope,$http){
	$scope.title = "home";
	$http({
		url:'/v2/product/home/index?device_id=f69b80d62cc1bf808e1e0a8951568b5f&env=web&fromSource=shareshop-baidupz&platform=web&tdk=14917568186898034867&uuid=f69b80d62cc1bf808e1e0a8951568b5f&version=2.3.6',
		method:'POST',
		data:{
			lat:39.109237,
			lng: 117.174907
		}
	}).success(function(res){
		var clist=[];
		console.log(res.product_list);
		$scope.tabList=res.category_list;
		$scope.plist = res.product_list;
	}).error(function(res){
		console.log("falid")
	})
})
