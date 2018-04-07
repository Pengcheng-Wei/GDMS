function logout(){
	$.dialog({
		type: 'confirm',
	    content: '您确定要退出系统吗？',
	    ok: function () {
	    	document.location.href="../signin.jsp";
	    	},
	    cancel: function () {},
	    autofocus: true
    }).showModal();
}    




function toggleSide() {
	if (!$('.ue-menu-left').data('isClose')) {
    	$('.ue-menu-right').css({'border-left':'1px solid #ddd'}).animate({left:'0px'}, "slow");
    	$('.ue-menu-left').css({'z-index':'auto'});
    	$('.ue-menu-left').data('isClose', true);
	} else {
    	$('.ue-menu-right').css({'border-left':'none'}).animate({left:'260px'}, "slow");
    	$('.ue-menu-left').data('isClose', false);
	}
}
 