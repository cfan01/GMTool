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

var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
//var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var month=["","01","02","03","04","05","06","07","08","09","10","11","12"];
var d=new Date();
function createSelectTagChild(start,end,selected,special_case)
{
	var str=new String("");

	for(var i=start; i<=end; i++)
	{
		switch (special_case)
		{
			case "week":
				 if (i==selected)
					str+="<option value="+i+" selected>"+week[i]+"</option>";
				 else
					str+="<option value="+i+">"+week[i]+"</option>";
				 break;
			case "month":
				 if (i==selected)
					str+="<option value="+i+" selected>"+month[i]+"</option>";
				 else
					str+="<option value="+i+">"+month[i]+"</option>";
				 break;
			default:
				 if (i==selected)
					str+="<option value="+i+" selected>"+i+"</option>";
				 else
					str+="<option value="+i+">"+i+"</option>";
				 break;
		}
	}
	//document.writeln(str);
	return str;
}
function adjDate(y,m,d)
{
  var i,days;
  //alert("adjDate() "+m+" = "+$("#"+m).val());
  //alert("adjDate() "+d+" = "+$("#"+d+" option").length);
	switch(eval($("#"+m).val()))
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
		  //$('#'+d).empty(); // remove old options
		  //for(i=1;i<=31;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  for(i=$('#'+d+' option').length+1;i<=31;i++)
			   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  break;
		case 4:
		case 6:
		case 9:
		case 11:
		  //$('#'+d).empty(); // remove old options
		  //for(i=1;i<=30;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  if ($("#"+d+" option").length<=30)
		  {
		  	//alert('11111');
			  for(i=$("#"+d+" option").length+1;i<=30;i++)
			   //f.tDAY.options[i-1]=new Option(i,i);
			     $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  }
		  else
		  {
		  	//alert('22222');
			  for(i=$("#"+d+" option").length;i>30;i--)
			     //f.tDAY.options[i-1]= null;
			     $('#'+d+' option[value="'+i+'"]').remove();
		  }
		  break;
		case 2:
		  //$('#'+d).empty(); // remove old options
		  days = 28;
		  if(($('#'+y).val()%4) == 0) days=29;
		  //for(i=1;i<=days;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
	    for(i=$("#"+d+" option").length;i>days;i--)
			   //f.tDAY.options[i-1]= null;
			   //$('#'+d+' option[index='+i+']').remove();
			   $('#'+d+' option[value="'+i+'"]').remove();
		  break;
		default:
		  alert("some ERRORs in html!!");
		  break;
	}
	switch(eval($("#"+y).val()))
	{
		default:
		  //$('#'+d).empty(); // remove old options
		  if(eval($("#"+m).val())==2)
		  {
		    days = 28;
		    if(($('#'+y).val()%4)==0) days=29;
		    //for(i=1;i<=days;i++)
		    //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
	      if($("#"+d+" option").length<days)
	      {
 	        for(i=$("#"+d+" option").length+1;i<=days;i++)
 	           $('#'+d).append($("<option></option>").attr("value",i).text(i));
	      }
	      else
	      {
	        for(i=$("#"+d+" option").length;i>days;i--)
			       //f.tDAY.options[i-1]= null;
			       //$('#'+d+' option[index='+i+']').remove();
			       $('#'+d+' option[value="'+i+'"]').remove();
			  }
		  }
		  break;
  }
}

var n,now,day;
$(function(){
  now=new Date();
  now.setDate(now.getDate()-29);
  $("#fYEAR").val(now.getFullYear());
  $("#fMON").val(now.getMonth()+1);
  $("#fDAY").val(now.getDate());
  //$("#fHOUR").val(now.getHours());
  //$("#fMIN").val(now.getMinutes());
  now=new Date();
  $("#tYEAR").text(now.getFullYear());
  $("#tMON").text(now.getMonth()+1);
  $("#tDAY").text(now.getDate());
  //$("#tHOUR").text(now.getHours());
  //$("#tMIN").text(now.getMinutes());
  adjDate("fYEAR","fMON","fDAY");

  $("#fYEAR, #fMON, #fDAY").change(function() {
    //alert( "#fYEAR, #fMON, #fDAY change called." );
    //alert(parseInt($("#fDAY").val()));
    //now=new Date();
    now.setFullYear(parseInt($("#fYEAR").val()));
    now.setMonth(parseInt($("#fMON").val())-1);
    now.setDate(parseInt($("#fDAY").val())+29);
    //now.setDate(parseInt($("#fDAY").val())+14);
    $("#tYEAR").text(now.getFullYear());
    $("#tMON").text(now.getMonth()+1);
    $("#tDAY").text(now.getDate());
    //$("#tHOUR").text(now.getHours());
    //$("#tMIN").text(now.getMinutes());
    genQueryField();
  });
  genQueryField();
});

function genQueryField()
{
	var k=1;
  query_fields={};
  gamelists=[];
  query_fields["項目"]='item';
  var ofset = parseInt($('#fDAY option:last-child').val())-parseInt($('#fDAY').val())+1;
  if(ofset<30)
  {
    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#fDAY option:last-child').val());i++)
    {
      //query_fields.push(parseInt($('#fMON').val())+'/'+i);
      //query_fields[$('#fMON').val()+'/'+i]=$('#fMON').val()+'/'+i;
      query_fields[$('#fMON').val()+'/'+i]='d'+k;
      k++;
    }
    for(var i=1;i<=parseInt($('#tDAY').text());i++)
    {
      //query_fields.push(parseInt($('#tMON').text())+'/'+i);
      //query_fields[$('#tMON').text()+'/'+i]=$('#tMON').text()+'/'+i;
      query_fields[$('#tMON').text()+'/'+i]='d'+k;
      k++;
    }
  }
  else
  {
    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#tDAY').text());i++)
    {
      //query_fields.push(parseInt($('#fMON').val())+'/'+i);
      //query_fields[$('#fMON').val()+'/'+i]=$('#fMON').val()+'/'+i;
      query_fields[$('#fMON').val()+'/'+i]='d'+k;
      k++;
    }
  }

  $('#game_subject_lists input:checked').each(function() {
    var p=($(this).attr('name').split('ckb_'))[1];
    //alert('1...p = '+p);
    $.getJSON('/js/game.json', function(data) {
    	//alert('2.....p = '+p);
      $.each(data.Game_Subjects, function(i,v) {
      	//alert('3.....p = '+p);
      	//alert('v = '+JSON.stringify(v));
      	//alert('v[Object.keys(v)[0]] = '+JSON.stringify(v[Object.keys(v)[0]]));
      	if(p==v[Object.keys(v)[0]])
      	{
           t=Object.keys(v)[0];
           //alert('1.....t = '+t);
           //query_fields[t]=p;
           gamelists.push(game_subjects_obj[p]);
           //gamelists.push(t);
           return false;
        }
      });
      //alert('query_fields = '+JSON.stringify(query_fields));
      //alert('gamelists = '+JSON.stringify(gamelists));
    });
  });
  //alert(JSON.stringify(query_fields));
}

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
  if(classify=='TimeRangeTableSelection')
  {
  	$('#timerangetable').empty();
  	var s="";
    s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
    s+="  <tr>";
    s+="    <td style=\"width:12%;\">時間範圍</td>";
    s+="    <td style=\"font-weight:bold;text-align:left;\">";
    s+="    	<div style=\"float:left;width:4%;\">從</div>";
    s+="    	<div style=\"float:left;width:26%;\">";
  	s+="    	  <div style=\"float:left;width:40%;\">";
  	s+="    	  	<div style=\"float:left;width:75%\">";
    s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fYEAR\" id=\"fYEAR\">";
    s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
    s+="            </select>";
    s+="          </div>";
    s+="          <div style=\"float:left;width:25%\">年</div>";
  	s+="    	  </div>";
  	s+="    	  <div style=\"float:left;width:30%;\">";
  	s+="    	  	<div style=\"float:left;width:70%\">";
    s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fMON\" id=fMON>";
    s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
    s+="            </select>";
    s+="          </div>";
    s+="          <div style=\"float:left;width:30%\">月</div>";
  	s+="    	  </div>";
  	s+="    	  <div style=\"float:left;width:30%;\">";
  	s+="    	  	<div style=\"float:left;width:70%\">";
    s+="    	      <select style=\"font-size: 12px\" size=1 name=\"fDAY\" id=fDAY>";
    s+=                createSelectTagChild(1,31,d.getDate(),"");
    s+="            </select>";
    s+="          </div>";
    s+="          <div style=\"float:left;width:30%\">日</div>";
  	s+="    	  </div>";
  	//s+="    	  <div style=\"float:left;width:19%;\">";
  	//s+="    	  	<div style=\"float:left;width:70%\">";
    //s+="            <select style=\"font-size: 12px\" size=1 name=\"fHOUR\" id=\"fHOUR\">";
    //s+=                createSelectTagChild(0,23,d.getHours(),"");
    //s+="            </select>";
    //s+="          </div>";
    //s+="          <div style=\"float:left;width:30%\">時</div>";
  	//s+="    	  </div>";
  	//s+="    	  <div style=\"float:left;width:19%;\">";
  	//s+="    	  	<div style=\"float:left;width:70%\">";
    //s+="            <select style=\"font-size: 12px\" size=1 name=\"fMIN\" id=\"fMIN\">";
    //s+=                createSelectTagChild(0,59,d.getMinutes(),"");
    //s+="            </select>";
    //s+="          </div>";
    //s+="          <div style=\"float:left;width:30%\">分</div>";
  	//s+="    	  </div>";
  	s+="    	</div>";
  	s+="    	<div style=\"float:left;width:2%;text-align:center;\">到</div>";
  	s+="    	<div style=\"float:left;width:28%;\">";
  	s+="    	  <div style=\"float:left;width:26%;\">";
  	s+="    	  	<div id=\"tYEAR\" style=\"float:left;width:75%;text-align:center;\">";
    s+="          </div>";
    s+="          <div style=\"float:left;width:25%;\">年</div>";
  	s+="    	  </div>";
  	s+="    	  <div style=\"float:left;width:20%;\">";
  	s+="    	  	<div id=\"tMON\" style=\"float:left;width:70%;text-align:center;\">";
    s+="          </div>";
    s+="          <div style=\"float:left;width:20%;\">月</div>";
  	s+="    	  </div>";
  	s+="    	  <div style=\"float:left;width:30%;\">";
  	s+="    	  	<div id=\"tDAY\" style=\"float:left;width:70%;text-align:center;\">";
    s+="          </div>";
    s+="          <div style=\"float:left;width:30%\">日</div>";
  	s+="    	  </div>";
  	//s+="    	  <div style=\"float:left;width:19%;\">";
  	//s+="    	  	<div id=\"tHOUR\" style=\"float:left;width:70%\">";
    //s+="          </div>";
    //s+="          <div style=\"float:left;width:30%\">時</div>";
  	//s+="    	  </div>";
  	//s+="    	  <div style=\"float:left;width:19%;\">";
  	//s+="    	  	<div id=\"tMIN\" style=\"float:left;width:70%\">";
    //s+="          </div>";
    //s+="          <div style=\"float:left;width:30%\">分</div>";
  	//s+="    	  </div>";
  	s+="    	</div>";
  	s+="    </td>";
    s+="  </tr>";
    s+="</table>";
    //alert(s);
  	$('#timerangetable').html(s);
  }
}
genField('TimeRangeTableSelection');
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
	  url: '/api/business/history_online',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        //QueryResult=qdata.HistoryOnline_Info;//result;
	        QueryResult=result;
	        alert(JSON.stringify(QueryResult));
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
    	  	case "item":
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
