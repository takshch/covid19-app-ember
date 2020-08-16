window.addEventListener('DOMContentLoaded', function(){
	let scriptLinks = ['https://cdn.jsdelivr.net/npm/chartjs-adapter-moment@0.1.1',
		'https://cdn.jsdelivr.net/npm/moment@2.27.0'];
	scriptLinks.forEach(function(link){
		let scriptNode = document.createElement('script');
		scriptNode.setAttribute('src', link);
		document.body.appendChild(scriptNode);
	});
});