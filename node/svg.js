var xhrHandler = XhrManager.createXhrHander();

var callback = {
	success:function(responseText){
		var stats = eval('('+responseText+')');
		displayPageviews(stats);
	},
	failure:function(statusCode){
		throw new Error('Asynchronus request for stats failed.');
	}
};
xhrHandler.request('GET','/stats/getPageviews/?page=index.html',callback);

var PageStats = new Interface('PageStats',['getPageviews','getUniques','getBrowserShare','getTopSearchTerms','getMostVisitedPages']);
var StatsProxy = (function(){
	var xhrHandler = XhrManager.createXhrHander();
	var urls={
		pageviews:'/stats/getPageviews',
		uniques:'/stats/getUniques',
		browserShare:'/stats/getBrowserShare',
		topSearchIterms:'/stats/getTopSearchTerms',
		mostVisitedPages:'/stats/getMostVisitedPages'
	};

	function xhrFailure(){
		throw new Error('StatsProxy:Asynchronus request for stats failed.')
	}

	function fetchData(url,dataCallback,startDate)
})