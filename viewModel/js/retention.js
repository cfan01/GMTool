  var uuu = gUrls;
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
  var gs_selectoption;
  var subject_chkbox_id_lists=[];
  var query_fields;
  var QueryResult;
  var title_lists;
  var select_items;
	/*var AID = '<%= Account_ID %>';*/
	//alert('basic_report gAid = '+gAid);

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
    makeTitleLists();
  });
  makeTitleLists();
});

function makeTitleLists()
{
	var k=1;
  query_fields={};
  query_fields["項目"]='item';
  var ofset = parseInt($('#fDAY option:last-child').val())-parseInt($('#fDAY').val())+1;
  if(ofset<15)
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
  //alert(JSON.stringify(query_fields));
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
        $.each(data.Machine_Query_History_Available_Field_Options, function(i,v) {
        	//alert(i);
        	//alert(Object.keys(v)[0]);
        	//alert(v[Object.keys(v)]);
        	var exclude=0;
        	$.each(data.Machine_Query_History_Selected_Field_Options, function(j,val) {
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
        $.each(data.Machine_Query_History_Selected_Field_Options, function(i,v) {
        	var unmovable=0;
        	$.each(data.Machine_Query_History_Nonmove_Options, function(j,val) {
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
        $('#selected_fields option').each(function() {
        	var jsonstr={};
        	var v=this.value;
        	if((this.text).indexOf("*")!=-1)
        	  var k=this.text.split("*")[1];
        	else
        		var k=this.text;
          //alert('FilterLists jsonstr --> '+JSON.stringify(jsonstr));
          jsonstr[k]=this.value;
          selected_options.push(jsonstr);
          //alert('FilterLists --> '+JSON.stringify(selected_options));
          //alert('### FilterLists ###');
        });
        //alert('222 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
        genQueryDataLists(selected_options);
      });
      //alert('111 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      //genFilterLists(selected_options);
    }
  	if(classify=='TimeRangeTableSelection')
  	{
  		$('#timerangetable').empty();
  		var s="";
      s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
      s+="  <tr>";
      s+="    <td style=\"width:15%;\">時間範圍</td>";
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
    	s+="    	<div style=\"float:left;width:2%;text-align:center;\">~</div>";
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
           s+="<input type=\"radio\" name=\"game_subject\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
           s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
	      });
	      //alert(s);
	      //alert(subject_chkbox_id_lists);
	      $('#game_subject_lists').html(s);
        $('#game_subject_lists input').change(function() {
        	//alert("##### input state changed #####");
        	//genqueryDataArray();
        });
	    });
	  }
  }

  //genField('Available');
  //genField('Selected');
  genField('TimeRangeTableSelection');
  //genField('Game_Subject');

  var opt={
  	        dateFormat: 'yy/mm/dd',
	          showSecond: true,
            timeFormat: 'HH:mm:ss'
          };

var qdata;
$.getJSON('/js/business.json', function(data) {qdata=data});
function CompositeFilterData()
{
	var d={};
	//var t=[];
	d.begin=$("#fYEAR").val()+'/'+$("#fMON").val()+'/'+$("#fDAY").val();
	//d.begin=$("#fYEAR").val()+'/'+(($("#fMON").val()<10)?'0'+$("#fMON").val():$("#fMON").val())+'/'+(($("#fDAY").val()<10)?'0'+$("#fDAY").val():$("#fDAY").val());
	d.end=$("#tYEAR").text()+'/'+$("#tMON").text()+'/'+$("#tDAY").text();
	//d.end=$("#tYEAR").text()+'/'+(($("#tMON").text()<10)?'0'+$("#tMON").text():$("#tMON").text())+'/'+(($("#tDAY").text()<10)?'0'+$("#tDAY").text():$("#tDAY").text());
  //alert(JSON.stringify($('input[type=radio][name=filter]:checked').val()));
  //alert(JSON.stringify(d));
  //query_fields=[];

  //var q_fields=["daily_totallogin_times","daily_totallogin_people","dnu","dau","wau","mau","repeat_login_accounts",
  //              "normal_member_number","normal_member_logins","whitediamond_member_number","whitediamond_login_number",
  //              "bluediamond_member_number","bluediamond_login_number","goldendiamond_member_number","goldendiamond_login_number",
  //              "reddiamond_member_number","reddiamond_login_number","total_play_sec","grand_total_norepeat_players","pcu",
  //              "acu","number_of_transactions","transactions_total_Gcurrency","transactions_total_pumping_Gcurrency",
  //              "accumulated_transactions_total_Gcurrency","accumulated_transactions_total_pumping_Gcurrency"
  //             ];
  //d.q_fields = q_fields;
//  title_lists=[];
//  //var z = $('#fDAY option:last-child').val();
//  //var d1=parseInt($('#fDAY option:last-child').val());
//  //alert(d1);
//  var ofset = parseInt($('#fDAY option:last-child').val())-parseInt($('#fDAY').val())+1;
//  if(ofset<15)
//  {
//    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#fDAY option:last-child').val());i++)
//    {
//      title_lists.push(parseInt($('#fMON').val())+'/'+i);
//    }
//    for(var i=1;i<=parseInt($('#tDAY').text());i++)
//    {
//      title_lists.push(parseInt($('#tMON').text())+'/'+i);
//    }
//  }
//  else
//  {
//    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#tDAY').text());i++)
//    {
//      title_lists.push(parseInt($('#fMON').val())+'/'+i);
//    }
//  }
  //alert(title_lists);
	select_items=d;
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
	  url: '/api/business/retention',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        //QueryResult=qdata.Retention_Info;//result;
	        QueryResult=result;
	        //alert(JSON.stringify(QueryResult));
	      	genDisplayData(QueryResult);
	      	//genQueryResult(QueryResult);
        }
    }
  });
}

var DisplayData=[];
function genDisplayData(obj) {
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
    	for(var k=0;k<Object.keys(qdata.Retention_Fields).length;k++)
    	{
    		if(qdata.Retention_Fields[Object.keys(qdata.Retention_Fields)[k]] == p["item"])
    		{
    			u=Object.keys(qdata.Retention_Fields)[k];
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
	//var s='';
  //alert('genQueryResult k = '+JSON.stringify(k));
  setVueInstanceData(2,k);
  setVueInstanceData(3,100);
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","");
  $("#basicformModal_qpage1").css("display","");
  $("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","");
	$("#searchresult #tbody2").css("display","none");
	//$("#searchresult table #tbody1 tr:first-child td").css("background-color","yellow");
}
