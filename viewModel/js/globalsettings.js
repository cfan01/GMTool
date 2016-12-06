var ck=0;
var gTitle,gCategory,gPage,gUrls,gAid,gPermission,gLoginuser,gLogintimes,gContent,gProperty;
/*Title
Category
Page
URLs
Account_ID
Login_Permission
Login_User
Login_Times
Content
User_Form_Index
UserFormContent
*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
            {pageLanguage: 'zh-TW'},
            'google_translate_element'
        );
    /*
       To remove the "powered by google",
       uncomment one of the following code blocks.
       NB: This breaks Google's Attribution Requirements:
       https://developers.google.com/translate/v2/attribution#attribution-and-logos
    */

    // Native (but only works in browsers that support query selector)
    if(typeof(document.querySelector) == 'function') {
        document.querySelector('.goog-logo-link').setAttribute('style', 'display: none');
        document.querySelector('.goog-te-gadget').setAttribute('style', 'font-size: 0');
    }
    
    // If you have jQuery - works cross-browser - uncomment this
    jQuery('.goog-logo-link').css('display', 'none');
    jQuery('.goog-te-gadget').css('font-size', '0');
}
        	
function clickModalLogout()
{
	 //alert('clickModalLogout');
	 //console.log('clickModalLogout');
   $.ajax({
   	 //cache: false,
   	 type: 'GET',
     //url: '/logout/<%= Account_ID %>',
     url: '/logout/'+gAid,

     success: function(result) {
     	   //alert(JSON.stringify(result));
         console.dir(JSON.stringify(result));
         if(!result.error){
         	  //alert('no error.................123');
         		document.location.href = '/';
         }
     }
   });
}

$("#logout").on("click", function() {
    clickModalLogout();
});

function setglobalparam(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10)
{
	gTitle=v1;
	gCategory=v2;
	gPage=v3;
	gUrls=v4;
	gAid=v5;
	gPermission=v6;
	gLoginuser=v7;
	gLogintimes=v8;
	gContent=v9;
	gProperty=v10;
}

function checkIfUserAlreadyLogin()
{
	  //alert('checkIfUserAlreadyLogin');
	  //console.log('checkIfUserAlreadyLogin');
	  //gAid=id;
    $.ajax({
    	//cache: false,
    	type: 'GET',
      //url: '/api/v1/accounts/<%= Account_ID %>',
      url: '/api/v1/accounts/'+gAid,

      success: function(result) {
      	  //alert(JSON.stringify(result));
          //console.log(JSON.stringify(result.using));
          if(!result.login.using){
          	/*
          	swal({
          		title: "Get Account Lists Failed!",
          		text: result.error,
          		type: "error",
          		confirmButtonText: "OK" 
          	},function(){
          	*/
          	document.location.href = '/logout';
          	//});
          }
          //else
          	//console.log('error@@@@@@@@@@@@@@@@@@');
      }
    });
    ck=setTimeout("checkIfUserAlreadyLogin()", 1000);
}
//checkIfUserAlreadyLogin();

function toHHMMSS(sec_num)
{
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  return hours+':'+minutes+':'+seconds;
}
