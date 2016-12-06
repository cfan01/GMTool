var subject_chkbox_id_lists=[];

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
         s+="<input type=\"radio\" name=\"game_subject\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
         s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
	    });
	    //alert(s);
	    //alert(subject_chkbox_id_lists);
	    $('#game_subject_lists').html(s);
	    genqueryDataArray2();
      $('#game_subject_lists input').change(function() {
      	//alert("##### input state changed #####");
      	genqueryDataArray2();
      });
	  });
	}
	if(classify=='Machine_num')
	{
    draw_machine_num('a');
    draw_machine_num('b');
    draw_machine_num('c');
    draw_machine_num('d');
  }
}
genField('Game_Subject');
//genField('Machine_num');

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
});

//var arrD=['a','b','c','d'];
//$("#howmanyscoremachine #howmanyscore0").trigger("click");
//$("#howmanyscoremachine #howmanyscore1").trigger("click");
//$("#howmanyscoremachine #howmanyscore2").trigger("click");
//$("#howmanyscoremachine #howmanyscore3").trigger("click");

/*$("#subjectquery_    #howmanyscoremachine tbody tr").on("click", function(){
  $("#howmanyscoremachine #howmanyscore0").trigger("click");
});
*/

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
    dialog.dialog("open");
  }
	if(n==2)
	{
		 location.reload();
  }
}

var select_items=[];
var selecteditems=[];
/*
$('#game_subject_lists input').change(function() {
	alert("##### input state changed #####");
	genqueryDataArray();
});
*/

function CompositeFilterData() {
	//alert("CompositeFilterData");
	select_items = [];
  $('#game_subject_lists input:checked').each(function() {
    var k= ($(this).attr('id').split('ckb_'))[1];
    //alert(k);
    $.getJSON('/js/game.json', function(data) {
      $.each(data.Game_Subjects, function(i,v) {
      	//alert(i);
      	//alert(Object.keys(v)[0]);
      	//alert(v[Object.keys(v)]);
      	var d={};
      	//if(k.indexOf(v[Object.keys(v)])!=-1)
      	if(k==v[Object.keys(v)])
      	{
      		d.title=Object.keys(v)[0];
      		d.label=v[Object.keys(v)];
      		select_items.push(d);
      		//alert('111 select_items = '+JSON.stringify(select_items));
      	}
      });
    });
    //alert('select_items = '+JSON.stringify(select_items));
  });
}

function RequestDBdata()
{
  alert('RequestDBdata');
	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  url: 'http://172.16.210.16/api',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	      	GenQueryHtmlStr(obj);
        }
    }
  });
}

function GenQueryHtmlStr(obj)
{
	var s,t,d,machinenum;
	selecteditems = [];
	alert('genQueryHtmlStr');
  $('#game_subject_lists input:checked').each(function() {
    var k= ($(this).attr('id').split('ckb_'))[1];
    //alert('1.....k = '+k);
    $.getJSON('/js/game.json', function(data) {
      $.each(data.Equipment_Monitor_Info, function(i,v) {
      	//alert('aaa Object.keys(v)[0] = '+Object.keys(v)[0]);
      	if(k==Object.keys(v)[0])
      	{
      		//alert('4.....k = '+k);
      		//alert('5.....t = '+t);
      		$.each(v[Object.keys(v)[0]], function(j,r) {
      			d={};
      			s='';
      			//alert('j='+j);
      			//alert('r='+JSON.stringify(r));
      			machinenum=((j<10)?("00"+(j+1)):((10<=j<100)?("0"+j):j));
      			//alert('machinenum = '+machinenum);
      	  if(r.tester)
          s+="<div id=\"subjectquery_"+machinenum+"\" style=\"width:20%;background-color:#D1FFA4;float:left;border:1px solid #000000;\">";
          else
          s+="<div id=\"subjectquery_"+machinenum+"\" style=\"width:20%;background-color:#ffffff;float:left;border:1px solid #000000;\">";
          s+=" <table id=\"equipment_num1\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\">";
          s+="   <tbody>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:40%;\">機台編號：</td>";
          s+="        <td style=\"text-align:left;width:60%;\">"+machinenum+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:40%;\">押注倍率：</td>";
          s+="        <td style=\"text-align:left;\">"+r.bet_rate+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">使用者暱稱：</td>";
          s+="        <td style=\"text-align:left;\">"+r.nickname+/*暱稱一二三四*/"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">使用者RTP：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.rtp,"",4)+"%</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">狀態：</td>";
          s+="        <td style=\"text-align:left;\" colspan=2>";
                    if(r.status=="using")
          s+="        	<div style=\"float:left;width:50%;\">使用</div>";
                    else
          s+="        	<div style=\"float:left;width:50%;\">保留</div>";
          s+="         <div style=\"float:left;width:50%;\">";
          s+="          <select id=\"status_select\">";
          s+="            <option value=\"reset\">重置</option>";
          s+="            <option value=\"kickoff\">踢離</option>";
          s+="            <option selected=\"\" value=\"na\">N/A</option>";
          s+="          </select>";
          s+="         </div>";
          s+="        </td>";
          s+="     </tr>";
          s+="   </tbody>";
          s+=" </table>";
          s+=" <ul class=\"collapsible\" data-collapsible=\"expandable\">";
          s+="   <li>";
          if(r.tester)
          {
            s+="     <div class=\"collapsible-header\" style=\"background-color:#D1FFA4;\"><i class=\"material-icons\">play_arrow</i>機台擁有者資訊</div>";
            s+="     <div class=\"collapsible-body\" style=\"text-align:center;padding:0 18px;background-color:#D1FFA4;\">";
          }
          else
          {
            s+="     <div class=\"collapsible-header\" style=\"background-color:#ffffff;\"><i class=\"material-icons\">play_arrow</i>機台擁有者資訊</div>";
            s+="     <div class=\"collapsible-body\" style=\"text-align:center;padding:0 18px;background-color:#ffffff;\">";
          }
          //s+="     	<!--<div style='width:100%;'>-->
          s+="         <div id=\"table-wrapper\">";
          s+="           <div id=\"table-scroll\">";
          s+="             <table id=\"equip_owner_info\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#E4E4E4\">";
          s+="               <tbody>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;width:40%;\">GBID：</td>";
          s+="                    <td style=\"text-align:left;width:60%;\">"+r.Equip_Owner_Info.gbid+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">LV：</td>";
          s+="                    <td style=\"text-align:left;\">"+r.Equip_Owner_Info.lv+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">會員級別：</td>";
          s+="                    <td style=\"text-align:left;\">"+r.Equip_Owner_Info.memberlevel+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">G幣：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.g_money,"",0)+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">開運金：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.luckymoney,"",0)+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">個人RTP：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.personalrtp,"",4)+"%</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">本月押分：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.chargepointsthismonth,"",0)+"</td>";
          s+="                 </tr>";
          s+="               </tbody>";
          s+="             </table>";
          s+="           </div>";
          s+="         </div>";
          //s+="       <!--</div>-->
          s+="     </div>";
          s+="   </li>";
          s+=" </ul>";
          s+=" <table id=\"equipment_num2\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\">";
          s+="   <tbody>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:50%;\">機台遊戲局數：</td>";
          s+="        <td style=\"text-align:left;width:50%;\">"+accounting.formatMoney(r.gameboardnumber,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總押注：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.total_bet,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總得分：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.total_score,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台最後總得分：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.final_total_score,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">進入條件：</td>";
          s+="        <td style=\"text-align:left;\">"+r.condition+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台實際RTP：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.real_rtp,"",4)+"%</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總輸贏：</td>";
          s+="        <td style=\"text-align:left;\"><font color=\"red\">"+accounting.formatMoney(r.total_winlose,"",0)+"</font></td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機器人：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"no_placement\" "+(r.robot_placement==98?"selected":"")+">不安插(預設)</option>";
          s+="            <option value=\"placement\" "+(r.robot_placement==98?"selected":"")+">安插</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機率設定：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option selected=\"\" value=\"96% (預設)\">96% (預設)</option>";
          s+="            <option value=\"98\" "+(r.probability_setting==98?"selected":"")+">98%</option>";
          s+="            <option value=\"100\" "+(r.probability_setting==100?"selected":"")+">100%</option>";
          s+="            <option value=\"102\" "+(r.probability_setting==102?"selected":"")+">102%</option>";
          s+="            <option value=\"96\" "+(r.probability_setting==96?"selected":"")+">96%</option>";
          s+="            <option value=\"94\" "+(r.probability_setting==94?"selected":"")+">94%</option>";
          s+="            <option value=\"92\" "+(r.probability_setting==92?"selected":"")+">92%</option>";
          s+="            <option value=\"90\" "+(r.probability_setting==90?"selected":"")+">90%</option>";
          s+="            <option value=\"88\" "+(r.probability_setting==88?"selected":"")+">88%</option>";
          s+="            <option value=\"80\" "+(r.probability_setting==80?"selected":"")+">80%</option>";
          s+="            <option value=\"70\" "+(r.probability_setting==70?"selected":"")+">70%</option>";
          s+="            <option value=\"60\" "+(r.probability_setting==60?"selected":"")+">60%</option>";
          s+="            <option value=\"50\" "+(r.probability_setting==50?"selected":"")+">50%</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定大獎：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"BG\" "+(r.big_prize==""?"selected":"")+">BG</option>";
          s+="            <option value=\"FG\" "+(r.big_prize==""?"selected":"")+">FG</option>";
          s+="            <option value=\"each_prize\" "+(r.big_prize==98?"selected":"")+">各獎項</option>";
          s+="            <option value=\"na\" "+(r.big_prize=="na"?"selected":"")+">N/A</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定小獎：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"na\" "+(r.small_prize=="na"?"selected":"")+">N/A</option>";
          s+="            <option value=\"small_prize1\" "+(r.small_prize==""?"selected":"")+">小獎代碼1</option>";
          s+="            <option value=\"small_prize2\" "+(r.small_prize==""?"selected":"")+">小獎代碼2</option>";
          s+="            <option value=\"small_prize3\" "+(r.small_prize==""?"selected":"")+">小獎代碼3</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定連線彩金：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"JP1\" "+(r.specific_jp==""?"selected":"")+">JP1</option>";
          s+="            <option value=\"JP2\" "+(r.specific_jp==""?"selected":"")+">JP2</option>";
          s+="            <option value=\"JP3\" "+(r.specific_jp==""?"selected":"")+">JP3</option>";
          s+="            <option value=\"JP4\" "+(r.specific_jp==""?"selected":"")+">JP4</option>";
          s+="            <option value=\"na\" "+(r.specific_jp==""?"selected":"")+">N/A</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td colspan=2 style=\"text-align:center;\"><a id=\"save\" class=\"btn waves-effect waves-light\" onclick=\"SaveCancel(1)\">變更設定</a></td>";
          s+="     </tr>";
          s+="   </tbody>";
          s+=" </table>";
          s+="</div>";

          //alert(s);
          d[machinenum]=s;
          //alert('d='+JSON.stringify(d));
      		selecteditems.push(d);
      		//alert('111 selecteditems = '+JSON.stringify(selecteditems));
      	  });
      	}
      });
      //alert('selecteditems = '+JSON.stringify(selecteditems));
    });
  });
}

function genqueryDataArray() {
	//alert("genqueryDataArray");
	CompositeFilterData();
	RequestDBdata();
	//GenQueryHtmlStr();
}

function genqueryDataArray2(obj)
{
	var s,t,d,machinenum;
	selecteditems = [];
  $('#game_subject_lists input:checked').each(function() {
    var k= ($(this).attr('id').split('ckb_'))[1];
    //alert('1.....k = '+k);
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
           return false;
        }
      });
      //alert('2.....t = '+t);
      $.each(data.Equipment_Monitor_Info, function(i,v) {
      	//alert('aaa Object.keys(v)[0] = '+Object.keys(v)[0]);
      	if(k==Object.keys(v)[0])
      	{
      		//alert('4.....k = '+k);
      		//alert('5.....t = '+t);
      		$.each(v[Object.keys(v)[0]], function(j,r) {
      			d={};
      			s='';
      			//alert('j='+j);
      			//alert('r='+JSON.stringify(r));
      			machinenum=((j<10)?("00"+(j+1)):((10<=j<100)?("0"+j):j));
      			//alert('machinenum = '+machinenum);
      	  if(r.tester)
          s+="<div id=\"subjectquery_"+machinenum+"\" style=\"width:20%;background-color:#D1FFA4;float:left;border:1px solid #000000;\">";
          else
          s+="<div id=\"subjectquery_"+machinenum+"\" style=\"width:20%;background-color:#ffffff;float:left;border:1px solid #000000;\">";
          s+=" <table id=\"equipment_num1\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\">";
          s+="   <tbody>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:40%;\">機台編號：</td>";
          s+="        <td style=\"text-align:left;width:60%;\">"+machinenum+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:40%;\">押注倍率：</td>";
          s+="        <td style=\"text-align:left;\">"+r.bet_rate+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">使用者暱稱：</td>";
          s+="        <td style=\"text-align:left;\">"+r.nickname+/*暱稱一二三四*/"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">使用者RTP：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.rtp,"",4)+"%</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">狀態：</td>";
          s+="        <td style=\"text-align:left;\" colspan=2>";
                    if(r.status=="using")
          s+="        	<div style=\"float:left;width:50%;\">使用</div>";
                    else
          s+="        	<div style=\"float:left;width:50%;\">保留</div>";
          s+="         <div style=\"float:left;width:50%;\">";
          s+="          <select id=\"status_select\">";
          s+="            <option value=\"reset\">重置</option>";
          s+="            <option value=\"kickoff\">踢離</option>";
          s+="            <option selected=\"\" value=\"na\">N/A</option>";
          s+="          </select>";
          s+="         </div>";
          s+="        </td>";
          s+="     </tr>";
          s+="   </tbody>";
          s+=" </table>";
          s+=" <ul class=\"collapsible\" data-collapsible=\"expandable\">";
          s+="   <li>";
          if(r.tester)
          {
            s+="     <div class=\"collapsible-header\" style=\"background-color:#D1FFA4;\"><i class=\"material-icons\">play_arrow</i>機台擁有者資訊</div>";
            s+="     <div class=\"collapsible-body\" style=\"text-align:center;padding:0 18px;background-color:#D1FFA4;\">";
          }
          else
          {
            s+="     <div class=\"collapsible-header\" style=\"background-color:#ffffff;\"><i class=\"material-icons\">play_arrow</i>機台擁有者資訊</div>";
            s+="     <div class=\"collapsible-body\" style=\"text-align:center;padding:0 18px;background-color:#ffffff;\">";
          }
          //s+="     	<!--<div style='width:100%;'>-->
          s+="         <div id=\"table-wrapper\">";
          s+="           <div id=\"table-scroll\">";
          s+="             <table id=\"equip_owner_info\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#E4E4E4\">";
          s+="               <tbody>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;width:40%;\">GBID：</td>";
          s+="                    <td style=\"text-align:left;width:60%;\">"+r.Equip_Owner_Info.gbid+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">LV：</td>";
          s+="                    <td style=\"text-align:left;\">"+r.Equip_Owner_Info.lv+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">會員級別：</td>";
          s+="                    <td style=\"text-align:left;\">"+r.Equip_Owner_Info.memberlevel+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">G幣：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.g_money,"",0)+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">開運金：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.luckymoney,"",0)+"</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">個人RTP：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.personalrtp,"",4)+"%</td>";
          s+="                 </tr>";
          s+="                 <tr>";
          s+="                    <td style=\"text-align:right;\">本月押分：</td>";
          s+="                    <td style=\"text-align:left;\">"+accounting.formatMoney(r.Equip_Owner_Info.chargepointsthismonth,"",0)+"</td>";
          s+="                 </tr>";
          s+="               </tbody>";
          s+="             </table>";
          s+="           </div>";
          s+="         </div>";
          //s+="       <!--</div>-->
          s+="     </div>";
          s+="   </li>";
          s+=" </ul>";
          s+=" <table id=\"equipment_num2\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\">";
          s+="   <tbody>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;width:50%;\">機台遊戲局數：</td>";
          s+="        <td style=\"text-align:left;width:50%;\">"+accounting.formatMoney(r.gameboardnumber,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總押注：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.total_bet,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總得分：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.total_score,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台最後總得分：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.final_total_score,"",0)+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">進入條件：</td>";
          s+="        <td style=\"text-align:left;\">"+r.condition+"</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台實際RTP：</td>";
          s+="        <td style=\"text-align:left;\">"+accounting.formatMoney(r.real_rtp,"",4)+"%</td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機台總輸贏：</td>";
          s+="        <td style=\"text-align:left;\"><font color=\"red\">"+accounting.formatMoney(r.total_winlose,"",0)+"</font></td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機器人：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"no_placement\" "+(r.robot_placement==98?"selected":"")+">不安插(預設)</option>";
          s+="            <option value=\"placement\" "+(r.robot_placement==98?"selected":"")+">安插</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">機率設定：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option selected=\"\" value=\"96% (預設)\">96% (預設)</option>";
          s+="            <option value=\"98\" "+(r.probability_setting==98?"selected":"")+">98%</option>";
          s+="            <option value=\"100\" "+(r.probability_setting==100?"selected":"")+">100%</option>";
          s+="            <option value=\"102\" "+(r.probability_setting==102?"selected":"")+">102%</option>";
          s+="            <option value=\"96\" "+(r.probability_setting==96?"selected":"")+">96%</option>";
          s+="            <option value=\"94\" "+(r.probability_setting==94?"selected":"")+">94%</option>";
          s+="            <option value=\"92\" "+(r.probability_setting==92?"selected":"")+">92%</option>";
          s+="            <option value=\"90\" "+(r.probability_setting==90?"selected":"")+">90%</option>";
          s+="            <option value=\"88\" "+(r.probability_setting==88?"selected":"")+">88%</option>";
          s+="            <option value=\"80\" "+(r.probability_setting==80?"selected":"")+">80%</option>";
          s+="            <option value=\"70\" "+(r.probability_setting==70?"selected":"")+">70%</option>";
          s+="            <option value=\"60\" "+(r.probability_setting==60?"selected":"")+">60%</option>";
          s+="            <option value=\"50\" "+(r.probability_setting==50?"selected":"")+">50%</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定大獎：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"BG\" "+(r.big_prize==""?"selected":"")+">BG</option>";
          s+="            <option value=\"FG\" "+(r.big_prize==""?"selected":"")+">FG</option>";
          s+="            <option value=\"each_prize\" "+(r.big_prize==98?"selected":"")+">各獎項</option>";
          s+="            <option value=\"na\" "+(r.big_prize=="na"?"selected":"")+">N/A</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定小獎：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"na\" "+(r.small_prize=="na"?"selected":"")+">N/A</option>";
          s+="            <option value=\"small_prize1\" "+(r.small_prize==""?"selected":"")+">小獎代碼1</option>";
          s+="            <option value=\"small_prize2\" "+(r.small_prize==""?"selected":"")+">小獎代碼2</option>";
          s+="            <option value=\"small_prize3\" "+(r.small_prize==""?"selected":"")+">小獎代碼3</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td style=\"text-align:right;\">指定連線彩金：</td>";
          s+="        <td style=\"text-align:left;\">";
          s+="          <select id=\"u45229_input\">";
          s+="            <option value=\"JP1\" "+(r.specific_jp==""?"selected":"")+">JP1</option>";
          s+="            <option value=\"JP2\" "+(r.specific_jp==""?"selected":"")+">JP2</option>";
          s+="            <option value=\"JP3\" "+(r.specific_jp==""?"selected":"")+">JP3</option>";
          s+="            <option value=\"JP4\" "+(r.specific_jp==""?"selected":"")+">JP4</option>";
          s+="            <option value=\"na\" "+(r.specific_jp==""?"selected":"")+">N/A</option>";
          s+="          </select>";
          s+="        </td>";
          s+="     </tr>";
          s+="     <tr>";
          s+="        <td colspan=2 style=\"text-align:center;\"><a id=\"save\" href=\"#\" class=\"wrapper\" onclick=\"SaveCancel(1)\"><span class=\"t4\">變更設定</span><img id='img2' src='/images/button_6blue.png'></a></td>";
          s+="     </tr>";
          s+="   </tbody>";
          s+=" </table>";
          s+="</div>";

          //alert(s);
          d[machinenum]=s;
          //alert('d='+JSON.stringify(d));
      		selecteditems.push(d);
      		//alert('111 selecteditems = '+JSON.stringify(selecteditems));
      	  });
      	}
      });
      //alert('selecteditems = '+JSON.stringify(selecteditems));
    });
  });
}

function queryResult1()
{
	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  //url: '/api/v1/accounts/<%= Account_ID %>',
	  url: 'http://172.16.210.16/api',

	  success: function(result) {
	      //console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
        }
    }
  });
}

function queryResult()
{
  //alert('queryResult selecteditems = '+JSON.stringify(selecteditems));
	var s='';

  $('#div_subjectquery').empty();
  //alert('selecteditems length = '+selecteditems.length);
  if(selecteditems.length!=0)
  {
    s+="<table>";
  	for(var i=0;i<selecteditems.length;i++)
  	{
  		//alert(Object.keys(selecteditems[i])[0]);
  		//alert(selecteditems[i][Object.keys(selecteditems[i])[0]]);
      if((i%5)==0)
      {
        s+="<tr><td>";
        //alert('i='+i+' ((i%5)==0)');
      }
      s+=selecteditems[i][Object.keys(selecteditems[i])[0]];
      /*if( ((i%5)!=0)&&(selecteditems.length<5) )
      {
        s+="</td></tr>";
        alert('((i%5)!=0)');
      }*/
      //$("#subjectquery_"+Object.keys(selecteditems[i])[0]+" .collapsible-header").css({"background-color":"#ffffff"});
      //$("#subjectquery_"+Object.keys(selecteditems[i])[0]+" .collapsible-body").css({"background-color":"#ffffff"});
    }
    s+="</table>";
  }
  //alert('queryResult s ==> '+s);
  $('#div_subjectquery').html(s);

/* Add event initialization -- Begin */
  /*** Important --- must add the following codes to activiate Collapsible ***/
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  if($("#ckb_largest_winscore").is(":checked"))
  {
     $("#largest_winscore").css({"background-color":"#ffffff"});
  }
  else
  {
     $("#largest_winscore").css({"background-color":"#cccccc"});
  }

  if($("#ckb_compensate").is(":checked"))
  {
     $("#compensate_set").css({"background-color":"#ffffff"});
  }
  else
  {
     $("#compensate_set").css({"background-color":"#cccccc"});
  }
  //$("#howmanyscoremachine #ckb_howmanyscore0").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore1").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore2").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore3").trigger("click");
  for(var i=0;i<4;i++)
  {
    if($("#howmanyscoremachine #ckb_howmanyscore"+i).is(":checked"))
    {
    	 //alert('checked');
    	 $("#name_show"+i).css({"background-color":"#ffffff"});
    	 $("#name_show"+i).prop("disabled", false);
      //for(var j=0;j<5;j++)
      {
      	 //alert("i="+i);
      	 //alert(arrD[i]);
        $("#machine_num"+i+" input[type='text']").css({"background-color":"#ffffff"});
        $("#machine_num"+i+" input[type='text']").prop("disabled", false);
      }
    }
    else
    {
    	 //alert('Unchecked');
    	 $("#name_show"+i).css({"background-color":"#cccccc"});
    	 $("#name_show"+i).prop("disabled", true);
      //for(var j=0;j<5;j++)
      {
      	 //alert("i="+i);
      	 //alert(arrD[i]);
        $("#machine_num"+i+" input[type='text']").css({"background-color":"#cccccc"});
        $("#machine_num"+i+" input[type='text']").prop("disabled", true);
      }
    }
  }
  /* Add event initialization -- End */
  /* Add event listener -- Begin */
  $("#howmanyscoremachine input[type='checkbox']").change(function() {
  	  var i=this.parentNode.parentNode.rowIndex-1;
  	  //alert('i = '+i);
  	  if($(this).is(":checked"))
  	  {
  	  	 //alert('checked');
  	  	 $("#name_show"+i).css({"background-color":"#ffffff"});
  	  	 $("#name_show"+i).prop("disabled", false);
        //for(var j=0;j<5;j++)
        {
        	 //alert("i="+i);
        	 //alert(arrD[i]);
          $("#machine_num"+i+" input[type='text']").css({"background-color":"#ffffff"});
          $("#machine_num"+i+" input[type='text']").prop("disabled", false);
        }
  	  }
  	  else
  	  {
  	  	 //alert('Unchecked');
  	  	 $("#name_show"+i).css({"background-color":"#cccccc"});
  	  	 $("#name_show"+i).prop("disabled", true);
        //for(var j=0;j<5;j++)
        {
        	 //alert("i="+i);
        	 //alert(arrD[i]);
          $("#machine_num"+i+" input[type='text']").css({"background-color":"#cccccc"});
          $("#machine_num"+i+" input[type='text']").prop("disabled", true);
        }
  	  }
  });
  
  $("#ckb_largest_winscore").click(function()
  {
  	//alert('ckb_largest_winscore is clicked');
    if($(this).is(":checked"))
    {
       $("#largest_winscore").css({"background-color":"#ffffff"});
    }
    else
    {
       $("#largest_winscore").css({"background-color":"#cccccc"});
    }
  });
  
  $("#ckb_compensate").click(function()
  {
    if($(this).is(":checked"))
    {
       $("#compensate_set").css({"background-color":"#ffffff"});
    }
    else
    {
       $("#compensate_set").css({"background-color":"#cccccc"});
    }
  });
  /* Add event listener -- End */
}

sec=0;
clearInterval(updateperiod);
updateperiod=setInterval("clock()",1000);
