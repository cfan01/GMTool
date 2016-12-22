var subject_chkbox_id_lists=[];
var select_items;
var gamelists;
var query_fields;
var QueryResult;
var game_subjects_obj= {"sea_paradise":1,
	                      "gowin_car":2,
 	                      "general_bio":3,
 	                      "hunt_magic_tower":4,
                        "dignity_in_troubled_times":5,
                        "qiao_fortuna":6,
                        "mayan_adventure":7,
                        "fishing_master":8,
                        "beach_volleyball":9,
                        "grand_theft_auto_legends":10,
                        "galaxy_expedition":11,
                        "great_pirates":12
                       };

function genField(classify)
{
	//alert(classify);
	if(classify=='Game_Subject')
	{
    var s="";
    $('#game_subject_lists').empty(); // remove old options
    $.getJSON('/js/game.json', function(data) {
    	//alert(JSON.stringify(data));
      $.each(data.Game_Subjects, function(i,v) {
    	   //alert(i);
    	   var c=(i==0)?"checked":"";
  	     //alert(Object.keys(v)[0]);
  	     //alert('v['+i+'] = '+ JSON.stringify(v));
  	     subject_chkbox_id_lists.push("ckb_"+v[Object.keys(v)[0]]);
         s+="<input type=\"checkbox\" name=\"ckb_"+v[Object.keys(v)[0]]+"\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
         s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
	    });
	    //alert(s);
	    //alert(subject_chkbox_id_lists);
	    $('#game_subject_lists').html(s);
      $('#game_subject_lists input').change(function() {
      //	//alert("##### input state changed #####");
      	genQueryField();
      });
      genQueryField();
	  });
	}
}
genField('Game_Subject');

$(function(){
  $('input[type=radio][name=gamesubject]').change(function()
  {
     if (this.value == '所有')
     {
        //$("#subject_individual").prop("disabled", true);
        $.each(subject_chkbox_id_lists, function(i,v)
        {
          $("#"+v).prop('checked', true);
          $("#"+v).prop("disabled", true);
        });
     }
     else if (this.value == '個別')
     {
        $.each(subject_chkbox_id_lists, function(i,v)
        {
          $("#"+v).prop('checked', false);
          $("#"+v).prop("disabled", false);
        });
     }
     genQueryField();
  });
  
  $('input[type=radio][name=vipfilter]').change(function()
  {
     if (this.value == '所有')
     {
        $("#normal").prop('checked', true);
        $("#normal").prop("disabled", true);
        $("#whitediamond").prop('checked', true);
        $("#whitediamond").prop("disabled", true);
        $("#bluediamond").prop('checked', true);
        $("#bluediamond").prop("disabled", true);
        $("#goldendiamond").prop('checked', true);
        $("#goldendiamond").prop("disabled", true);
        $("#reddiamond").prop('checked', true);
        $("#reddiamond").prop("disabled", true);
     }
     else if (this.value == '個別')
     {
        $("#normal").prop('checked', false);
        $("#normal").prop("disabled", false);
        $("#whitediamond").prop('checked', false);
        $("#whitediamond").prop("disabled", false);
        $("#bluediamond").prop('checked', false);
        $("#bluediamond").prop("disabled", false);
        $("#goldendiamond").prop('checked', false);
        $("#goldendiamond").prop("disabled", false);
        $("#reddiamond").prop('checked', false);
        $("#reddiamond").prop("disabled", false);
     }
     //genQueryField();
  });
  //$('#game_subject_lists input').change(function() {
	//  //alert("##### input state changed #####");
	//  genQueryField();
  //});
  //genQueryField();
});

dialog = $("#dialog-form").dialog({
   autoOpen: false,
   width: 500,
   height: 350,
   modal: true,
   buttons: {
     "確認": function() { dialog.dialog("close"); SaveForm();},
     "取消": function() {
       dialog.dialog("close");
     }
   }
   /*
   close: function() {
     //form[0].reset();
     //allFields.removeClass( "ui-state-error" );
   }*/
});
$(".ui-dialog-titlebar").hide();

function SaveForm()
{
	//alert("SaveForm");
	$('#loading_process').show();
  //$('#loading_img_background').width($(document).width());
  //$('#loading_img_background').height($(document).height());
  //$('#loading_img_background').show();
  //$('#loading_img').center();
  //$('#loading_img').show();
  //$('#loading_img_background').css("display","block");
  //$('#loading_img').css("display","block");
  setTimeout("hide_loading()",3000);
}

function hide_loading()
{
	//$('#loading_process').hide();
	location.reload();
}

function SaveCancel(n)
{
	if(n==1)
	{
		$("#dialog-form").show();
    dialog.dialog("open");
  }
	if(n==2)
	{
		 location.reload();
  }
}

//var selecteditems=[];
/*
$('#game_subject_lists input').change(function() {
	alert("##### input state changed #####");
	genQueryField();
});
*/

function genQueryField()
{
	//alert("genQueryField");
	var k=new Date();
	query_fields={};
	gamelists=[];
  var r=k.getFullYear()+'/'+((k.getMonth()+1)<10?'0'+(k.getMonth()+1):(k.getMonth()+1))+'/'+((k.getDate())<10?'0'+k.getDate():k.getDate());
  query_fields[r]="today";
  $('#game_subject_lists input:checked').each(function() {
    var k= ($(this).attr('name').split('ckb_'))[1];
    //alert('1...k = '+k);
    $.getJSON('/js/game.json', function(data) {
    	//alert('2.....k = '+k);
      $.each(data.Game_Subjects, function(i,v) {
      	//alert('3.....k = '+k);
      	//alert('v = '+JSON.stringify(v));
      	//alert('v[Object.keys(v)[0]] = '+JSON.stringify(v[Object.keys(v)[0]]));
      	if(k==v[Object.keys(v)[0]])
      	{
           t=Object.keys(v)[0];
           //alert('1.....t = '+t);
           query_fields[t]=k;
           gamelists.push(game_subjects_obj[k]);
           //gamelists.push(t);
           return false;
        }
      });
      //alert('query_fields = '+JSON.stringify(query_fields));
      //alert('gamelists = '+JSON.stringify(gamelists));
    });
  });
}

var qdata,qdata1;
$.getJSON('/js/game.json', function(data) {qdata1=data});
$.getJSON('/js/business.json', function(data) {qdata=data});
function CompositeFilterData()
{
	var t,d={};
	var b=[];
  $('#vipfilter_lists input:checked').each(function() {
    var j= $(this).attr('id');
    //alert('j = '+j);
    b.push(j);
  });
  d.vip=b;
  d.gamesubject=gamelists;
  select_items=d;
  //alert('select_items = '+JSON.stringify(select_items));
}

function RequestDBdata()
{
  //alert('RequestDBdata');
  //alert(JSON.stringify(select_items));
  //alert(JSON.stringify(qdata));
	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  //url: 'http://172.16.210.16:3000/api/memberlog/game',
	  //url: 'http://172.16.18.63/api/memberlog/game',
	  url: '/api/business/realtime_online',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        //QueryResult=qdata.RealTimeOnline_Info;//result;
	        QueryResult=result;
	        //alert(JSON.stringify(QueryResult));
	      	genDisplayData(QueryResult);
	      	//genQueryResult(QueryResult);
        }
    }
  });
}

var slot=["00：00","00：15","00：30","00：45","01：00","01：15","01：30","01：45","02：00","02：15","02：30","02：45",
          "03：00","03：15","03：30","03：45","04：00","04：15","04：30","04：45","05：00","05：15","05：30","05：45",
          "06：00","06：15","06：30","06：45","07：00","07：15","07：30","07：45","08：00","08：15","08：30","08：45",
          "09：00","09：15","09：30","09：45","10：00","10：15","10：30","10：45","11：00","11：15","11：30","11：45",
          "12：00","12：15","12：30","12：45","13：00","13：15","13：30","13：45","14：00","14：15","14：30","14：45",
          "15：00","15：15","15：30","15：45","16：00","00：15","16：30","16：45","17：00","17：15","17：30","17：45",
          "18：00","18：15","18：30","18：45","19：00","00：15","19：30","19：45","20：00","20：15","20：30","20：45",
          "21：00","21：15","21：30","21：45","22：00","00：15","22：30","22：45","23：00","23：15","23：30","23：45"];


var DisplayData=[];
function genDisplayData(obj) {
	//alert('genDisplayData');
	//alert('query_fields = '+JSON.stringify(query_fields));
	//alert('genDisplayData received obj=>'+ JSON.stringify(obj));
	var d=[];
	var s={};
	var r;

  //query_fields=qdata1.Game_Subjects;
	//alert(JSON.stringify(query_fields));
  if(obj.length)
  {
	  $.each(obj, function(i,p) {
    	//alert(JSON.stringify(i));
    	//alert(JSON.stringify(p));
    	s={};
      $.each(query_fields, function(j,q) {
	      //alert(JSON.stringify(j));
	      //alert(JSON.stringify(q));
    	  r="N/A";
    	  switch(q)
    	  {
    	  	case "today":
    	  	      r=slot[i];
    	  	      //alert('r='+r);
    	  	      break;
          default:
                r=p[q];
                //alert('r='+r);
                //alert('default');
    	  	      break;
    	  }
    	  s[j]=r;
    	  //alert('s='+JSON.stringify(s));
    	});
 	    d.push(s);
 	    //alert('d='+JSON.stringify(d));
      DisplayData = d;
      //alert("zzzzzzzzzzzzzz");
      genQueryResult(DisplayData);
    }/*,function() {
    	alert("---------------2----------------------");
    	genQueryResult(DisplayData,query_fields);
    }*/);
  }
  else
  	genQueryResult(d);
}

function queryResult() {
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","none");
  $("#basicformModal_qpage1").css("display","none");
	$("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","none");
	$("#searchresult #tbody2").css("display","");
	setVueInstanceData(1,query_fields);
  CompositeFilterData();
  RequestDBdata();
  //genDisplayData(result);
  //genQueryResult(DisplayData,query_fields);
}

function genQueryResult(k) {
	//alert('genQueryResult');
	var s='';
  //alert('genQueryResult k = '+JSON.stringify(k));
  setVueInstanceData(2,k);
  setVueInstanceData(3,24);
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","");
  $("#basicformModal_qpage1").css("display","");
  $("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","");
	$("#searchresult #tbody2").css("display","none");
}
