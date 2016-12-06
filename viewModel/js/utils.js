function getParamValue(varname)
{
  var url = window.location.href;
  var qparts = url.split("?");
  var value = "";

  if (qparts.length == 0){return "";}
  //alert("qparts = "+qparts);
  var query = qparts[1];
  if(query)
  {
     var vars = query.split("&");
     for (i=0; i<vars.length; i++)
     {
       var parts = vars[i].split("=");
       if (parts[0] == varname)
       {
         value = parts[1];
         break;
       }
     }
     value = unescape(value);
     value.replace(/\+/g," ");
  }
  return value;
}

function getos()
{
	 var OsObject = "";
   if(navigator.userAgent.indexOf("MSIE")>0) {
        return "MSIE";
   }
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        return "Firefox";
   }
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
   } 
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
   }
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
        return "Gecko";
   }
}

function showHide(id,show)
{
	if(show)
	  document.getElementById(id).style.display='block';
	else
		document.getElementById(id).style.display='none';
}

jQuery.fn.center = function () {
  this.css("position","fixed");
  this.css("top",($(window).height() - this.height()) / 2+$(window).scrollTop() + "px");
  this.css("left",($(window).width() - this.width()) / 2+$(window).scrollLeft() + "px");
  //this.css("width",$(window).width());
  //this.css("height",$(window).height());
  return this;
}

//$('.target').center();
function Highlight_ValueChangedField()
{
  $('input,select,textarea, input[type="checkbox"]+label').on('mouseover',function(){
  //$('input,select,textarea').on('focusin',function(){
      if(!$(this).data('val'))
      {
      	//alert('aaaaa');
        $(this).data('val', $(this).val());
        console.log("Saving value " + $(this).val());
      }
  }).on('change',function(){
      //alert('111 $(this).data(val)='+$(this).data('val'));
      //alert('111 $(this).val()='+$(this).val());
      if($(this).data('val')!=$(this).val())
        $(this).css({"background-color":"#ffff88"});
        //$(this).removeClass("background_yellow background_white").addClass("background_yellow");
      else
      	$(this).css({"background-color":"#ffffff"});
      	//$(this).removeClass("background_yellow background_white").addClass("background_white");
  });
/*
  $('input[type="checkbox"]+label').mouseover(function(){
      if(!$(this).data('val'))
      {
      	//alert('bbbbb');
      	if($(this).is(":checked"))
          $(this).data('val', 'on');
        else
        	$(this).data('val', $(this).val());
        console.log("Saving value " + $(this).val());
      }
  }).on('change',function(){
      alert('222 $(this).data(val)='+$(this).data('val'));
      if($(this).data('val')!=$(this).val())
        $(this).css({"background-color":"#ffff88"});
      else
      	$(this).css({"background-color":"#ffffff"});
  });
*/
}

var sec=0;
var updateperiod;

function clock()
{
	sec++;
  $("#sec").html(toHHMMSS(sec)+"&nbsp;之前");
}
