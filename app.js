$(document).ready(function(){
	
	$('body').on('click', '.js-get-users', function(){
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			}).then(handleData, handleError)
	})
	
	
	
	
	
	
	
	
	
	
	
});