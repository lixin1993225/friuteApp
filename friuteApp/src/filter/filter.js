app.filter('product',function(){
	return function(list){
		var arr=[];
		for(var i=0;i<list.length;i++){
			if(list.price[i]){
				arr.push(list[i])
			}
		};
		return arr;
	}
})
