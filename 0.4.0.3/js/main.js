$(document).ready(initialize);

function initialize(){
	$('.listTitle').click(toggleThemeList);
	$('.selector .theme').click(changeTheme);
	$('#upArrow').click(levelChange);
	$('#downArrow').click(levelChange);
}

function toggleThemeList(){
	if ($(this).siblings().css('display')==='none'){
		$('#controls').find('.theme').hide();
		$(this).siblings().css('display', 'block');
	}
	else{
		$(this).siblings().hide();
	}
}

function changeTheme(){
	var themeType = this.className.split(' ')[1];

	switch(themeType){
		case 'originTheme':
			$('#origin').text(this.textContent);
			break;
		case 'apprenticeTheme':
			$('#apprentice').text(this.textContent);
			break;	
		case 'expertTheme':
			$('#expert').text(this.textContent);
			break;
		case 'masterTheme':
			$('#master').text(this.textContent);
	}
}

function levelChange(){
	var current = parseInt($('#levelCount').text());

	if($(this).attr('id')==='upArrow'&&current<10){
		var newLevel = current + 1;
	}
	if($(this).attr('id')==='downArrow'&&current>0){
		var newLevel = current - 1;
	}

	$('#levelCount').text(newLevel);
}