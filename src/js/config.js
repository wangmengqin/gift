require.config({
	baseUrl:"../js",
	paths:{
		"jquery":"lib/jquery-1.11.3",
		"cookie":"lib/jquery.cookie",
		"swiper":"plug/swiper.min",
		"layer":"plug/layer",
		"banner":"js/banner",
		"jslink":"js/jsSrc",
		"paging":"plug/jquery.pagination",
		"list":"js/list",
		"indexajax":"js/index",
		"detail":"js/detail",
		"shop":"js/shop",
		"regist":"js/register",
		"login":"js/login",
		"collect":"js/collect",
		"history":"js/history"
	},
	shim:{
		"paging":{
			deps:["jquery"],
			exports:"Pagination"
		},
		"cookie":{
			deps:["jquery"],
			exports:"Cookie"
		}
	}
})