	//var Basic_Form_Nonmove_Options=["GBID","暱稱","註冊入口","會員級別","目前G幣"];
  var userformidx = gUrls[gUrls.indexOf('_game_history')-1];
  //alert(userformidx);
  var uuu = gUrls;
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
  var gs_selectoption;
  var selecteditems=[];
  var select_items={};
  var query_fields;
  var QueryResult;
  var numlossFields;
  var queryDay;
	/*var AID = '<%= Account_ID %>';*/
	//alert('basic_report gAid = '+gAid);

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
  $("#basicformModal").css("display","none");
  $("#basicformModal_str").css("display","none");
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

  //dayloss = parseInt($('#sel_dayloss').val());
  //$('#game_subject_lists input:checked').each(function() {
  //  var p=($(this).attr('name').split('ckb_'))[1];
  //  //alert('1...p = '+p);
  //  $.getJSON('/js/game.json', function(data) {
  //  	//alert('2.....p = '+p);
  //    $.each(data.Game_Subjects, function(i,v) {
  //    	//alert('3.....p = '+p);
  //    	//alert('v = '+JSON.stringify(v));
  //    	//alert('v[Object.keys(v)[0]] = '+JSON.stringify(v[Object.keys(v)[0]]));
  //    	if(p==v[Object.keys(v)[0]])
  //    	{
  //         t=Object.keys(v)[0];
  //         //alert('1.....t = '+t);
  //         //query_fields[t]=p;
  //         gamelists.push(game_subjects_obj[p]);
  //         //gamelists.push(t);
  //         return false;
  //      }
  //    });
  //    //alert('query_fields = '+JSON.stringify(query_fields));
  //    //alert('gamelists = '+JSON.stringify(gamelists));
  //  });
  //});
  //alert(JSON.stringify(query_fields));
  //alert('dayloss='+JSON.stringify(dayloss));
}

  function genField(classify)
  {
  	//alert(classify);
  	if(classify=='Available')
  	{
  	  var $el = $("#avail_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/rf_field_data.json', function(data) {
      	//alert(JSON.stringify(data));
      	//JSON.parse(data);
        $.each(data.Game_History_Available_Field_Options, function(i,v) {
        	//alert(i);
        	//alert(Object.keys(v)[0]);
        	//alert(v[Object.keys(v)]);
        	var exclude=0;
        	$.each(data.Game_History_Selected_Field_Options, function(j,val) {
        	  //if(value=="GBID" || value=="暱稱" || value=="註冊入口" || value=="會員級別" || value=="目前G幣")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	exclude=1;
        	  	return;
        	  }
        	});
        	//alert('exclude = '+exclude);
          if(!exclude)
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Available ###');
        });
      });
    }
  	if(classify=='Selected')
  	{
  	  var $el = $("#selected_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/rf_field_data.json', function(data) {
        $.each(data.Game_History_Selected_Field_Options, function(i,v) {
        	var unmovable=0;
        	$.each(data.Game_History_Nonmove_Options, function(j,val) {
        	  //if(value=="GBID" || value=="暱稱" || value=="註冊入口" || value=="會員級別" || value=="目前G幣")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	unmovable = 1;
        	  	return;
        	  }
        	});
          if(unmovable)
          {
        	  $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text('*'+Object.keys(v)[0]).css("color","red"));
        	  //$el.append($("<option></option>").attr("value", i).text('*'+value).addClass('redText'));
        	}
          else
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Selected ###');
          //alert($('#selected_fields option').length);
        });
        //alert($('#selected_fields option').length);
        genField('FilterLists');
      });
    }
  	if(classify=='FilterLists')
  	{
  		selected_options = [];
  		//alert('### FilterLists ###');
  		//alert('FilterLists selected_options length--> '+ $('#selected_fields option').length);
      $.getJSON('/js/rf_field_data.json', function(data) {
        for(var i=0;i<data.Game_History_Has_Index.length;i++)
        {
        	//alert('sss='+data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]]);
        	$('#switch_'+data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]]).hide();
        	if(data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]]=="gametime")
        	  $('#switch_gametime_quick').hide();
        }
        query_fields={};
        $('#selected_fields option').each(function() {
        	var jsonstr={};
        	var v=this.value;
        	if((this.text).indexOf("*")!=-1)
        	  var k=this.text.split("*")[1];
        	else
        		var k=this.text;
          //alert('FilterLists jsonstr --> '+JSON.stringify(jsonstr));
          query_fields[k]=this.value;
          jsonstr[k]=this.value;
          selected_options.push(jsonstr);
          //alert('FilterLists --> '+JSON.stringify(selected_options));
          //alert('### FilterLists ###');
          for(var i=0;i<data.Game_History_Has_Index.length;i++)
          {
          	//alert('v1='+v);
          	//$('#switch_'+data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]]).hide();
          	//alert(data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]]);
          	if(v==data.Game_History_Has_Index[i][Object.keys(data.Game_History_Has_Index[i])[0]])
          	{
          		//alert('v2='+v);
          		$('#switch_'+v).show();
          		//if(v=="gbid") alert('zzzzzzzzzzzzzzzzzzzzzzzzz');
          		if(v=="gametime")
          		  $('#switch_gametime_quick').show();
          		break;
          	}
          }
        });
        //alert('222 genFilterLists(query_fields) => '+JSON.stringify(query_fields));
        //query_fields=selected_options;
        //genQueryItemLists(selected_options);
      });
      //alert('111 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      //genFilterLists(selected_options);
    }
  	//if(classify=='TimeTableSelection')
  	//{
  	//	$('#querytimetable').empty();
  	//	var s="";
    //  s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
    //  s+="  <tr>";
    //  s+="    <td style=\"width:15%;\">查詢時間</td>";
    //  s+="    <td style=\"font-weight:bold;text-align:left;\">";
    //  s+="    	<div style=\"float:left;width:4%;display:none;\">從</div>";
    //  s+="    	<div style=\"float:left;width:46%;\">";
    //	s+="    	  <div style=\"float:left;width:24%;\">";
    //	s+="    	  	<div style=\"float:left;width:75%\">";
    //  s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fYEAR\" id=\"fYEAR\">";
    //  s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:25%\">年</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fMON\" id=fMON>";
    //  s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%\">月</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;display:none;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="    	      <select style=\"font-size: 12px\" size=1 name=\"fDAY\" id=fDAY>";
    //  s+=                createSelectTagChild(1,31,d.getDate(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%;display:none;\">日</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;display:none;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="            <select style=\"font-size: 12px\" size=1 name=\"fHOUR\" id=\"fHOUR\">";
    //  s+=                createSelectTagChild(0,23,d.getHours(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%;display:none;\">時</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;display:none;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="            <select style=\"font-size: 12px\" size=1 name=\"fMIN\" id=\"fMIN\">";
    //  s+=                createSelectTagChild(0,59,d.getMinutes(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%;display:none;\">分</div>";
    //	s+="    	  </div>";
    //	s+="    	</div>";
    //	s+="    	<div style=\"float:left;width:4%;display:none;\">到</div>";
    //	s+="    	<div style=\"float:left;width:46%;display:none;\">";
    //	s+="    	  <div style=\"float:left;width:24%;\">";
    //	s+="    	  	<div style=\"float:left;width:75%\">";
    //  s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"tYEAR\",\"tMON\",\"tDAY\"); size=1 name=\"tYEAR\" id=\"tYEAR\">";
    //  s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:25%\">年</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"tYEAR\",\"tMON\",\"tDAY\"); size=1 name=\"tMON\" id=\"tMON\">";
    //  s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%\">月</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="    	      <select style=\"font-size: 12px\" size=1 name=\"tDAY\" id=\"tDAY\">";
    //  s+=                createSelectTagChild(1,31,d.getDate(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%\">日</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="            <select style=\"font-size: 12px\" size=1 name=\"tHOUR\" id=\"tHOUR\">";
    //  s+=                createSelectTagChild(0,23,d.getHours(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%\">時</div>";
    //	s+="    	  </div>";
    //	s+="    	  <div style=\"float:left;width:19%;\">";
    //	s+="    	  	<div style=\"float:left;width:70%\">";
    //  s+="            <select style=\"font-size: 12px\" size=1 name=\"tMIN\" id=\"tMIN\">";
    //  s+=                createSelectTagChild(0,59,d.getMinutes(),"");
    //  s+="            </select>";
    //  s+="          </div>";
    //  s+="          <div style=\"float:left;width:30%\">分</div>";
    //	s+="    	  </div>";
    //	s+="    	</div>";
    //	s+="    </td>";
    //  s+="  </tr>";
    //  s+="</table>";
    //  //alert(s);
  	//	$('#querytimetable').html(s);
  	//	adjDate("tYEAR","tMON","tDAY");
    //}
    if(classify=='TimeTableSelection')
    {
    	$('#querytimetable').empty();
    	var s="";
      s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
      s+="  <tr>";
      s+="    <td style=\"font-weight:bold;text-align:left;width:12%;\">查詢時間：</td>";
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
    	$('#querytimetable').html(s);
    	//adjDate("tYEAR","tMON","tDAY");
    }

	  if(classify=='GameSubjectSelectOption')
	  {
      gs_selectoption="";
      //$('#gs_selection').empty(); // remove old options
      $.getJSON('/js/game.json', function(data) {
      	//alert(JSON.stringify(data));
        $.each(data.Game_Subjects, function(i,v) {
      	   //alert(i);
      	   //var c=(i==0)?"checked":"";
    	     //alert(Object.keys(v)[0]);
    	     //alert('v['+i+'] = '+ JSON.stringify(v));
           gs_selectoption+="<option value='"+v[Object.keys(v)[0]]+"'>"+Object.keys(v)[0]+"</option>";
	      });
	      //alert(gs_selectoption);
	      //alert(subject_chkbox_id_lists);
	      //$('#gs_selection').html(s);
        genField('GameSubjectFilter');
	    });
	  }
	  if(classify=='GameSubjectFilter')
	  {
      var s="";
      $('#gs_selection').empty(); // remove old options
      s+="<div id='gamesubject' style='width:13%;float:left'>";
      s+=" <select id='sel_gamesubject' name='sel_gamesubject'>";
      s+= gs_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='more' style='float:left;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/more.png' onclick=\"showHide('gamesubject1',1);showHide('or',1);showHide('more',0);showHide('more1',1);showHide('less',1)\">";
      s+="</div>";
      s+="<div id='or' style='float:left;display:none;'>";
      s+=" &nbsp;or&nbsp;";
      s+="</div>";
      s+="<div id='gamesubject1' style='width:13%;float:left;display:none;'>";
      s+=" <select id='sel_gamesubject1' name='sel_gamesubject1'>";
      s+= gs_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='more1' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/more.png' onclick=\"showHide('gamesubject2',1);showHide('or1',1);showHide('more1',0);showHide('less',0);showHide('less1',1);\">";
      s+="</div>";
      s+="<div id='or1' style='float:left;display:none;'>";
      s+=" &nbsp;or&nbsp;";
      s+="</div>";
      s+="<div id='less' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/less.png' onclick=\"showHide('gamesubject1',0);showHide('or',0);showHide('more',1);showHide('more1',0);showHide('less',0)\">";
      s+="</div>";
      s+="<div id='gamesubject2' style='width:13%;float:left;display:none;'>";
      s+=" <select id='sel_gamesubject2' name='sel_gamesubject2'>";
      s+= gs_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='less1' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/less.png' onclick=\"showHide('gamesubject2',0);showHide('or1',0);showHide('more1',1);showHide('less1',0);showHide('less',1);\">";
      s+="</div>";
      //alert(s);
      $('#gs_selection').html(s);
      //CompositeFilterData();
      //checkSelectOption();
      /*$('img').click(function()
      {
        if (this.id == 'sel_gamesubject1')
        {
           alert('sel_gamesubject1');
      
	      }
	    });*/
	  }
  }

  //genField('Available');
  //genField('Selected');
  genField('TimeTableSelection');
  //genField('GameSubjectSelectOption');

function checkSelectOption()
{
	var t=[];
	alert($('#sel_gamesubject').val());
	for(var i=1;i<=2;i++)
	{
		if($('#gamesubject'+i).css('display')!='none')
		{
		  alert($('#sel_gamesubject'+i).val());
		  //Game_Subjects_Obj
	  }
	}
}

  var opt={
  	        dateFormat: 'yy/mm/dd',
	          showSecond: true,
            timeFormat: 'HH:mm:ss'
          };

	$.ajax({
		type: 'GET',
    //url: '/api/v1/accounts/<%= Account_ID %>',
    url: '/api/v1/accounts/'+gAid,

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
            LoginAccounts = result;
            //alert(JSON.stringify(LoginAccounts));
            //genField('Available');
            //genField('Selected');
            //genField('FilterLists');
        }
    }
  });

  function SaveCancel(n)
  {
  	if(n==1)
  	{
      //$("#save_basic").button().on("click", function() {
      dialog.dialog("open");
      //});
    }
  	if(n==2)
  	{
  		 location.reload();
    }
  }

  $.getJSON('/js/menu.json', function(d) {
  	arrContent = d.arrayContent;
  	//alert(JSON.stringify(arrContent));
  });

  dialog = $("#dialog-form").dialog({
     autoOpen: false,
     height: 160,
     width: 250,
     modal: true,
     buttons: {
       "OK": function() { SaveForms(1);},
       "Cancel": function() {
         dialog.dialog( "close" );
       }
     }
     /*
     close: function() {
       //form[0].reset();
       //allFields.removeClass( "ui-state-error" );
     }*/
  });
  $(".ui-dialog-titlebar").hide();

var qdata;
$.getJSON('/js/business.json', function(data) {qdata=data;});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sCompositeFilterData()
{
	var d={};
	//var t=[];
	d.begin=$("#fYEAR").val()+'/'+$("#fMON").val()+'/'+$("#fDAY").val();
	//d.begin=$("#fYEAR").val()+'/'+(($("#fMON").val()<10)?'0'+$("#fMON").val():$("#fMON").val())+'/'+(($("#fDAY").val()<10)?'0'+$("#fDAY").val():$("#fDAY").val());
	d.end=$("#tYEAR").text()+'/'+$("#tMON").text()+'/'+$("#tDAY").text();

  ////alert(JSON.stringify($('input[type=radio][name=filter]:checked').val()));
  //if($('input[type=radio][name=filter]:checked').length != 0)
  //{
  //  var r=$('input[type=radio][name=filter]:checked').val();
  //  d[r]=$("#"+r).val();
  //}
  //alert($("#sel_thenvip").val());
  //checkSelectOption();
	//alert($('#sel_gamesubject').val());
	//alert(game_subjects_obj[$('#sel_gamesubject').val()]);
  d.dayloss=parseInt($("#sel_dayloss").val());

  //query_fields=qdata.History_VIP_Members_Fields;
  //alert(JSON.stringify(query_fields));
  //alert(JSON.stringify(d));
	select_items=d;
	//alert(JSON.stringify(select_items));
}

function sRequestDBdata()
{
  //alert('RequestDBdata');
  //alert(JSON.stringify(select_items));
	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  //url: 'http://172.16.210.16:3000/api/memberlog/game',
	  //url: 'http://172.16.18.63/api/memberlog/game',
	  url: '/api/business/numberloss',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        QueryResult=result;
	        //alert(JSON.stringify(QueryResult));
	      	sgenDisplayData(QueryResult);
	      	//genQueryResult(QueryResult);
        }
    }
  });
}

var sDisplayData=[];
function sgenDisplayData(obj) {
	//alert('genDisplayData');
	//alert(JSON.stringify(query_fields));
	//alert('genDisplayData received obj=>'+ JSON.stringify(obj));
	//alert('obj length = '+Object.keys(obj).length);
	var d=[];
	var s={};
	var r,u;
  
  //if(Object.keys(obj).length)
  if(obj.length)
  {
	  $.each(obj, function(i,p) {
    	//alert(JSON.stringify(i));
    	//alert(JSON.stringify(p));
    	for(var k=0;k<Object.keys(qdata.Numberloss_Fields).length;k++)
    	{
    		if(qdata.Numberloss_Fields[Object.keys(qdata.Numberloss_Fields)[k]] == p["item"])
    		{
    			u=Object.keys(qdata.Numberloss_Fields)[k];
    			//alert(u);
    			break;
    		}
    	}
    	s={};
      $.each(query_fields, function(j,q) {
	      //alert(JSON.stringify(j));
	      //alert(JSON.stringify(q));
    	  //if(Object.keys(v)[0]==Object.keys(val)[0])
    	  r="N/A";
    	  switch(q)
    	  {
    	  	case "item":
    	  	      r=u;
    	  	      break;
          default:
                r=p[q];
    	  	      break;
    	  }
    	  s[j]=r;
    	  //alert(JSON.stringify(s));
    	});
 	    d.push(s);
 	    //alert(JSON.stringify(d));
      sDisplayData = d;
      //alert("zzzzzzzzzzzzzz");
      sgenQueryResult(sDisplayData);
    }/*,function() {
    	alert("---------------2----------------------");
    	genQueryResult(DisplayData,query_fields);
    }*/);
  }
  else
  	sgenQueryResult(d);
}

function sgenQueryResult(k) {
	//alert('sgenQueryResult');
	var s='';
  //alert('sgenQueryResult k = '+JSON.stringify(k));
  //setVueInstanceData(2,k);
  //alert('sgenQueryResult query_fields = '+JSON.stringify(query_fields));
  $("#div_searchresult").empty();
  s+='<table><tr><td style=\'font-weight:bold;text-align:left;border:0;background-color:#cccccc;\'>流失數報表</td></tr></table>';
  s+='<table id="simplequerytable">';
  s+='  <thead>';
  s+='    <tr>';
  for(var i=0;i<Object.keys(query_fields).length;i++)
  s+='      <th>'+Object.keys(query_fields)[i]+'</th>';
  s+='    </tr>';
  s+='  </thead>';
  s+='  <tbody id="tbody1" class="table-body">';
	//$.each(k, function(i,p) {
  //	alert(JSON.stringify(i));
  //	alert(JSON.stringify(p));
  //});
  if(k.length)
  {
    for(var j=0;j<k.length;j++)
    {
      s+='      <tr>';
      for(var r=0;r<Object.keys(k[j]).length;r++)
      {
    	  //alert('Object.keys(k[j])[r] = '+JSON.stringify(Object.keys(k[j])[r]));
        if((j==1)&&(r>0))
          s+='        <td><a href="javascript:;" onclick="getDetails(\''+Object.keys(k[j])[r]+'\')">'+k[j][Object.keys(k[j])[r]]+'</a></td>';
        else
          s+='        <td>'+k[j][Object.keys(k[j])[r]]+'</td>';
      }
      s+='      </tr>';
    }
  }
  else
  {
    s+='    	<tr>';
    s+='    		<td colspan='+Object.keys(query_fields).length+' style="text-align:center;font-size:26px;height:300px;">';
    s+='    			未查詢到符合的資料';
    s+='    		</td>';
    s+='     </tr>';
  }
  s+='  </tbody>';
  s+='</table>';
  $('#div_searchresult').html(s);
}

function SimpleQueryResult() {
  var s='';

  $("#sformModal_str").css("display","none");
  $("#basicformModal").css("display","none");
  $("#basicformModal").empty();
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","none");
  $("#basicformModal_qpage1").css("display","none");
	$("#searchresult").css("display","none");
	$("#searchresult #tbody1").css("display","none");
	$("#searchresult #tbody2").css("display","none");
  $("#div_searchresult").empty();
  s+='<table><tr><td style=\'font-weight:bold;text-align:left;border:0;background-color:#cccccc;\'>流失數報表</td></tr></table>';
  s+='<table id="simplequerytable">';
  s+='  <thead>';
  s+='    <tr>';
  for(var i=0;i<Object.keys(query_fields).length;i++)
    s+='      <th>'+Object.keys(query_fields)[i]+'</th>';
  s+='    </tr>';
  s+='  </thead>';
  s+='  <tbody id="tbody2" class="table-body">';
  s+='    	<tr>';
  s+='    		<td colspan='+Object.keys(query_fields).length+' style="text-align:center;font-size:26px;height:300px;">';
  s+='    			查詢中,請稍候 ...<br><br><img src="/images/progress.gif">';
  s+='    		</td>';
  s+='     </tr>';
  s+='  </tbody>';
  s+='</table>';
  $('#div_searchresult').html(s);
  sCompositeFilterData();
  sRequestDBdata();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function CompositeFilterData(n)
{
	var d={};

	//d.begin=$("#fYEAR").val()+'/'+$("#fMON").val()+'/'+$("#fDAY").val();
	////d.begin=$("#fYEAR").val()+'/'+(($("#fMON").val()<10)?'0'+$("#fMON").val():$("#fMON").val())+'/'+(($("#fDAY").val()<10)?'0'+$("#fDAY").val():$("#fDAY").val());
	//d.end=$("#tYEAR").text()+'/'+$("#tMON").text()+'/'+$("#tDAY").text();
  
  var qday=n.split("/")[0];
  //alert("qday = "+qday);
  if(qday == $("#fMON").val())
    d.day=$("#fYEAR").val()+'/'+n;
  else
    d.day=$("#tYEAR").text()+'/'+n;
  queryDay = d.day;
  //d.dayloss=parseInt($("#sel_dayloss").val());
  
  //query_fields=qdata.History_VIP_Members_Fields;
  //alert(JSON.stringify(query_fields));
  //alert(JSON.stringify(d));
	select_items=d;
	//alert(JSON.stringify(select_items));
}

function RequestDBdata()
{
  //alert('RequestDBdata');
  //alert(JSON.stringify(select_items));
	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  //url: 'http://172.16.210.16:3000/api/memberlog/game',
	  //url: 'http://172.16.18.63/api/memberlog/game',
	  url: '/api/business/numberloss_details',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        //QueryResult=qdata.History_VIP_Members_Info;//result;
	        QueryResult=result;
	        //alert(JSON.stringify(QueryResult));
	      	genDisplayData(QueryResult);
	      	//genQueryResult(QueryResult);
        }
    }
  });
}

var DisplayData=[];
//function genDisplayData(obj) {
//	//alert('genDisplayData');
//	//alert(JSON.stringify(query_fields));
//	//alert('genDisplayData received obj=>'+ JSON.stringify(obj));
//	//alert('obj length = '+Object.keys(obj).length);
//	var d=[];
//	var s={};
//	var r,u;
//  
//  //if(Object.keys(obj).length)
//  if(obj.length)
//  {
//	  $.each(obj, function(i,p) {
//    	//alert(JSON.stringify(i));
//    	//alert(JSON.stringify(p));
//    	for(var k=0;k<Object.keys(qdata.Numberloss_Fields).length;k++)
//    	{
//    		if(qdata.Numberloss_Fields[Object.keys(qdata.Numberloss_Fields)[k]] == p["item"])
//    		{
//    			u=Object.keys(qdata.Numberloss_Fields)[k];
//    			//alert(u);
//    			break;
//    		}
//    	}
//    	s={};
//      $.each(query_fields, function(j,q) {
//	      //alert(JSON.stringify(j));
//	      //alert(JSON.stringify(q));
//    	  //if(Object.keys(v)[0]==Object.keys(val)[0])
//    	  r="N/A";
//    	  switch(q)
//    	  {
//    	  	case "item":
//    	  	      r=u;
//    	  	      break;
//          default:
//                r=p[q];
//    	  	      break;
//    	  }
//    	  s[j]=r;
//    	  //alert(JSON.stringify(s));
//    	});
// 	    d.push(s);
// 	    //alert(JSON.stringify(d));
//      DisplayData = d;
//      //alert("zzzzzzzzzzzzzz");
//      genQueryResult(DisplayData);
//    }/*,function() {
//    	alert("---------------2----------------------");
//    	genQueryResult(DisplayData,query_fields);
//    }*/);
//  }
//  else
//  	genQueryResult(d);
//}

function genDisplayData(obj) {
	//alert('genDisplayData');
	//alert(JSON.stringify(qdata.Numberloss_Lists));
	//alert('genDisplayData received obj=>'+ JSON.stringify(obj));
	//alert('obj length = '+Object.keys(obj).length);
	var d=[];
	var s={};
	var r;

  if(obj.length)
  {
	  $.each(obj, function(i,p) {
    	//alert(JSON.stringify(i));
    	//alert(JSON.stringify(p));
    	s={};
      $.each(qdata.Numberloss_Lists, function(j,q) {
	      //alert(JSON.stringify(j));
	      //alert(JSON.stringify(q));
    	  //if(Object.keys(v)[0]==Object.keys(val)[0])
    	  r="N/A";
    	  switch(q)
    	  {
    	  	case "gbid":
    	  	      r=p.gbid;
    	  	      break;
          case "nickname":
                r=p.nickname;
    	  	      break;
          case "then_vip":
    	  	      r=p.then_vip;
    	  	      break;
          case "then_level":
    	  	      r=p.then_level;
    	  	      break;
          case "then_accumulated_gift_nt":
    	  	      r=p.then_accumulated_gift_nt;
    	  	      break;
          case "then_remain_Gcurrency":
    	  	      r=p.then_remain_Gcurrency;
    	  	      break;
          case "then_remain_luckymoney":
    	  	      r=p.then_remain_luckymoney;
    	  	      break;
          case "lastlogintime":
    	  	      r=p.lastlogintime;
    	  	      break;
          default:
    	  	      break;
    	  }
    	  s[j]=r;
    	  //alert(JSON.stringify(s));
    	});
 	    d.push(s);
 	    //alert(JSON.stringify(d));
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

function genQueryResult(k) {
	//alert('genQueryResult');
	//var s='';
  //alert('genQueryResult k = '+JSON.stringify(k));
  setVueInstanceData(2,k);
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","");
  $("#basicformModal_qpage1").css("display","");
  $("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","");
	$("#searchresult #tbody2").css("display","none");
	//$("#searchresult table #tbody1 tr:second-child td").wrap('<a href="/index.html"></a>');
	//$("#searchresult table #tbody1 tr:eq(1)").css("background-color","yellow");
	//$("#searchresult table #tbody1 tr").eq(1).find("td").css("background-color","yellow");
	//$("#searchresult #querytable #tbody1 tr:eq(2) td").css("background-color","yellow");
	//$("#searchresult table tbody1 tr:last").addClass("yellow");  // select the second row
	//alert('genQueryResultaaaaaaaaaaaaaa');
}

function getDetails(n) {
	//numlossFields={};
	//numlossFields=qdata.Numberloss_Lists;
	//numlossFields["項目"]='item';
  setVueInstanceData(1,qdata.Numberloss_Lists);
  CompositeFilterData(n);
  $("#basicformModal").css("display","");
  $("#basicformModal").css("padding-top","18px");
  $("#basicformModal").empty();
  var s='';
  s+='<div style="font-weight:bold;text-align:left;border:0;background-color:#cccccc;width:50%;float:left;">流失數清單</div>';
  s+='<div style="font-weight:bold;text-align:left;border:0;background-color:#cccccc;float:left;">('+queryDay+')</div>';
  $("#basicformModal").html(s);
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","none");
  $("#basicformModal_qpage1").css("display","none");
	$("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","none");
	$("#searchresult #tbody2").css("display","");
  RequestDBdata();
  //genDisplayData(result);
  //genQueryResult(DisplayData,query_fields);
}
