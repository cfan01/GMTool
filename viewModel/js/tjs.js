
$(document).ready(function(){
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );

    //Disbable cache for all jQuery AJAX requests
    $.ajaxSetup({cache:false});

    /*$('#temp .article #nav .btns #rt0 #rl0 a').click(function() {
    	alert('click');
    	$(this).addClass("active");
    });
    */

	/*$('a[href*=#],area[href*=#]').click(function() {
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
	
	$('#keywords').example(function() {
		return $(this).attr('title');
	}, { className: 'inputcolor' });
	*/
});
	
function formsearch(){		
   	var keywords = $('input:text[name="keywords"]').val();	
	var akeywords = $('input:text[name="keywords"]').attr('title');
  	if(keywords == "" || keywords == akeywords){
        alert('隢贝撓�亥���𨅯�讠��㮾��𨅯��!');
		document.searchform.keywords.focus();
		return false;
    }
	window.location.href = "/search.php?keywords="+encodeURIComponent(keywords);
}

$('#searchform').bind('keypress', function(e){
	if (e.keyCode == 13){		
		formsearch();
		return false;
	}
});
