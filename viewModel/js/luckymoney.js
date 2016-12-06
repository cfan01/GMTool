  var subject_chkbox_id_lists = [];
  //var d;

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
  	  });
  	}
  }
  //genField('Game_Subject');

  $('input[type=radio][name=gamesubject]').change(function() {
     if (this.value == '所有') {
        //$("#subject_individual").prop("disabled", true);
        $.each(subject_chkbox_id_lists, function(i,v) {
          $("#"+v).prop('checked', true);
          $("#"+v).prop("disabled", true);
        });
     }
     else if (this.value == '個別') {
        $.each(subject_chkbox_id_lists, function(i,v) {
          $("#"+v).prop('checked', false);
          $("#"+v).prop("disabled", false);
        });
     }
  });
/*
  $("#largest_winscore").click(function() {
    $("#lv").css({"background-color":"#ffffff"});
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

var selecteditems=[];
/*
$('#game_subject_lists input').change(function() {
	alert("##### input state changed #####");
	genqueryDataArray();
});
*/
function genqueryDataArray() {
	//alert("genqueryDataArray");
	var s,t,d,machinenum;
	selecteditems = [];
  //$('#game_subject_lists input:checked').each(function() {
  //$('#game_subject_lists input:checked').each(function() {
  	//var d={};
    //var k= ($(this).attr('name').split('ckb_'))[1];

    $.getJSON('/js/game.json', function(data) {
      //$.each(data.JP_Monitor_Info, function(i,v) {
      	//alert('aaa Object.keys(v)[0] = '+Object.keys(v)[0]);
      	//if(k==Object.keys(v)[0])
      	//{
      		//alert('4.....k = '+k);
      		//alert('5.....t = '+t);
      		//$.each(v[Object.keys(v)[0]], function(j,r) {
      			d={};
      			s='';
      			//alert('j='+j);
      			//alert('r='+JSON.stringify(r));
      			//machinenum=((j<10)?("00"+(j+1)):((10<=j<100)?("0"+j):j));
      			//alert('machinenum = '+machinenum);
            /*s+="<div style="padding:10px 45px;background-color:#CCCCCC;width:100%;height:45px;">
            s+="  <div style="float:left;text-align:left;width:12%;">自動即時更新：</div>
            s+="  <div style="float:left;">
            s+="  	<input type="radio" id="autoupdate_yes" name="autoupdate" value="yes">
            s+="  	<label for="autoupdate_yes">是</label>&nbsp;&nbsp;&nbsp;
            s+="    <input type="radio" id="autoupdate_no" name="autoupdate" value="no" checked>
            s+="    <label for="autoupdate_no">否</label>
            s+="  </div>
            s+="</div>
            */
            s+="<div style=\"padding:10px 45px;background-color:#ffffff;width:100%;height:55px\">";
            s+="	<div style=\"float:left;text-align:left;width:35%;\">";
            s+="     <font color=\"#666666\">開始統計時間：<br>2016/9/2  16:45:33</font>";
            s+="  </div>";
            s+="	<div style=\"float:left;text-align:right;width:65%;\">";
            s+="     更新時間：&nbsp;<span id=\"sec\">00:00:33&nbsp;之前</span>";
            s+="     <a class=\"waves-light btn blue\" id=\"cancel\" onclick=\"location.href='/game/jp_monitor'\">擷取最新</a>";
            //s+="     <!--<a href="javascript:;"><img src='/images/getlatest.png'></a>-->
            s+="  </div>";
            s+="</div>";
            s+="<ul class=\"collapsible\" data-collapsible=\"expandable\">";
            s+="  <li>";
            s+="    <div class=\"collapsible-header active\"><i class=\"material-icons\">play_arrow</i>最新情報</div>";
            s+="    <div class=\"collapsible-body\" style=\"text-align:center;\">";
            s+="      <table id=\"newintelligence\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:50%;\" bgcolor=\"#ffffff\">";
            s+="        <tr>";
            s+="           <td style=\"width:25%;text-align:right;\">累積投注額：</td>";
            s+="           <td style=\"width:20%;text-align:left;\">"+data.JP_Monitor_Info.Latest_News.cumulative_bets+"</td>";
            s+="           <td>&nbsp;</td>";
            s+="           <td>&nbsp;</td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="           <td style=\"width:25%;text-align:right;\">JP總累積得分：</td>";
            s+="           <td style=\"width:20%;text-align:left;\">"+data.JP_Monitor_Info.Latest_News.total_cumulative_score+"</td>";
            s+="           <td>&nbsp;</td>";
            s+="           <td>&nbsp;</td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="           <td style=\"width:25%;text-align:right;\">實際抽取%：</td>";
            s+="           <td style=\"width:20%;text-align:left;\">"+data.JP_Monitor_Info.Latest_News.real_extraction+"%</td>";
            s+="           <td>&nbsp;</td>";
            s+="           <td>&nbsp;</td>";
            s+="        </tr>";
            s+="      </table>";
            s+="      <table id=\"gameConditionSetting\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#ffffff\">";
            s+="        <tr>";
            s+="           <td style=\"width:100%\" colspan=2>";
            s+="        	   <input type=\"checkbox\" id=\"jp_threshold\" name=\"jp_threshold\" class=\"filled-in\">";
            s+="        	   <label for=\"jp_threshold\">顯示彩金拉取額門檻</label>";
            s+="           	 <table id=\"game_switch\" bgcolor=\"#EAEAEA\">";
            s+="               <thead>";
            s+="                 <tr>";
            s+="                   <th style=\"text-align:center;width:20%;background-color:#303030;color:#ffffff;\">JP項目</th>";
            s+="                   <th style=\"text-align:center;width:20%;background-color:#303030;color:#ffffff;\">累積中獎次數</th>";
            s+="                   <th style=\"text-align:center;width:20%;background-color:#303030;color:#ffffff;\">累積得分</th>";
            s+="                   <th style=\"text-align:center;width:20%;background-color:#303030;color:#ffffff;\">當前分數</th>";
            s+="                   <th id=\"th_jp_threshold\" style=\"text-align:center;width:20%;background-color:#303030;color:#ffffff;display:none;\">彩金拉取額門檻</th>";
            s+="                 </tr>";
            s+="               </thead>";
            s+="               <tbody>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">Grand(JP1)</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP1.cumulative_numofwins+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP1.cumulative_score+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP1.current_score+"</td>";
            s+="           	 	   	 <td id=\"td_jp_threshold_0\" style=\"text-align:center;width:20%;display:none;\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP1.jp_threshold+"</td>";
            s+="                 </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">Major(JP2)</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP2.cumulative_numofwins+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP2.cumulative_score+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP2.current_score+"</td>";
            s+="           	 	   	 <td id=\"td_jp_threshold_1\" style=\"text-align:center;width:20%;display:none;\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP2.jp_threshold+"</td>";
            s+="                 </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">Minor(JP3)</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP3.cumulative_numofwins+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP3.cumulative_score+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP3.current_score+"</td>";
            s+="           	 	   	 <td id=\"td_jp_threshold_2\" style=\"text-align:center;width:20%;display:none;\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP3.jp_threshold+"</td>";
            s+="                 </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">Mini(JP4)</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP4.cumulative_numofwins+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP4.cumulative_score+"</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:20%\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP4.current_score+"</td>";
            s+="           	 	   	 <td id=\"td_jp_threshold_3\" style=\"text-align:center;width:20%;display:none;\">"+data.JP_Monitor_Info.Latest_News.jp_threshold_show.JP4.jp_threshold+"</td>";
            s+="                 </tr>";
            s+="               </tbody>";
            s+="             </table>";
            s+="           </td>";
            s+="        </tr>";
            s+="      </table>";
            s+="    </div>";
            s+="  </li>";
            s+="  <li>";
            s+="    <div class=\"collapsible-header active\"><i class=\"material-icons\">play_arrow</i>連線彩金設定</div>";
            s+="    <div class=\"collapsible-body\" style=\"text-align:center;\">";
            s+="      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#CCCCCC\">";
            s+="        <tr>";
            s+="          <td>共同拱的遊戲有：</td>";
            s+="          <td>&nbsp;</td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="          <td style=\"width:100%\" colspan=2>";
            s+="          	<div id=\"game_subject_lists\" style=\"float:left;width:100%;\">";

                      $.each(data.Game_Subjects, function(i,v) {
                         alert(i);
                         //$.each(data.JP_Monitor_Info.JP_Settings.common_game_lists, function(j,r) {
                         for(var j=0;j<data.JP_Monitor_Info.JP_Settings.common_game_lists.length;j++)
                         {
                           alert(v[Object.keys(v)[0]]);
                           alert(data.JP_Monitor_Info.JP_Settings.common_game_lists[j]);
                           var c=(data.JP_Monitor_Info.JP_Settings.common_game_lists[j]==v[Object.keys(v)[0]])?"checked":"";
                           alert('c='+c);
                           break;
                         }
                         //});
    	                   //alert(Object.keys(v)[0]);
    	                   //alert('v['+i+'] = '+ JSON.stringify(v));
    	                   //subject_chkbox_id_lists.push("ckb_"+v[Object.keys(v)[0]]);
                         s+="<input type=\"checkbox\" name=\"ckb_"+v[Object.keys(v)[0]]+"\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
                         s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
  	                  });
  	                  //alert(s);
  	                  //alert(subject_chkbox_id_lists);

            s+="            </div>";
            s+="          </td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="           <td style=\"width:100%\" colspan=2>";
            s+="           	 參數設定：<br>";
            s+="           	 <table bgcolor=\"#EAEAEA\">";
            s+="               <thead>";
            s+="                 <tr>";
            s+="                   <th style=\"text-align:center;width:10%;background-color:#303030;color:#ffffff;\">JP項目</th>";
            s+="                   <th style=\"text-align:center;width:17%;background-color:#303030;color:#ffffff;\">每次補入Base<br>(基本水位)</th>";
            s+="                   <th style=\"text-align:center;width:17%;background-color:#303030;color:#ffffff;\">彩金上限Limit<br>(最高水位)</th>";
            s+="                   <th style=\"text-align:center;width:17%;background-color:#303030;color:#ffffff;\">每次押注<br>抽取%</th>";
            s+="                   <th style=\"text-align:center;width:17%;background-color:#303030;color:#ffffff;\">押注門檻<br>(以上才可拉)</th>";
            s+="                   <th style=\"text-align:center;width:22%;background-color:#303030;color:#ffffff;\">彩金可否拉取</th>";
            s+="                 </tr>";
            s+="               </thead>";
            s+="               <tbody>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;width:10%\">Grand(JP1)</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:17%\"><input type=\"text\" id=\"base_set0\" name=\"base_set0\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.base_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;width:17%\"><input type=\"text\" id=\"uplimit_set0\" name=\"uplimit_set0\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.uplimit_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;width:17%\"><input type=\"text\" id=\"bet_retrieve_pa0\" name=\"bet_retrieve_pa0\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.bet_retrieve_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:17%\"><input type=\"text\" id=\"bet_threshold0\" name=\"bet_threshold0\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.bet_threshold_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;width:22%\">";
            s+="           	 	   	 	  <input type=\"radio\" id=\"jp_retrieve_yes0\" name=\"jp_retrieve1\" value=\"yes\" width=\"15%\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.jp_retrieve1=="yes"?"checked":"")+">";
            s+="   	                  <label for=\"jp_retrieve_yes0\">可拉(預設)</label>&nbsp;&nbsp;&nbsp;";
            s+="                      <input type=\"radio\" id=\"jp_retrieve_no0\" name=\"jp_retrieve1\" value=\"no\" width=\"15%\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP1.jp_retrieve1=="no"?"checked":"")+">";
            s+="                      <label for=\"jp_retrieve_no0\">鎖定</label>";
            s+="           	 	   	 </td>";
            s+="           	 	   </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;\">Major(JP2)</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"base_set1\" name=\"base_set1\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.base_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"uplimit_set1\" name=\"uplimit_set1\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.uplimit_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_retrieve_pa1\" name=\"bet_retrieve_pa1\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.bet_retrieve_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_threshold1\" name=\"bet_threshold1\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.bet_threshold_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\">";
            s+="           	 	   	 	  <input type=\"radio\" id=\"jp_retrieve_yes1\" name=\"jp_retrieve2\" value=\"yes\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.jp_retrieve2=="yes"?"checked":"")+">";
            s+="   	                  <label for=\"jp_retrieve_yes1\">可拉(預設)</label>&nbsp;&nbsp;&nbsp;";
            s+="                      <input type=\"radio\" id=\"jp_retrieve_no1\" name=\"jp_retrieve2\" value=\"no\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP2.jp_retrieve2=="no"?"checked":"")+">";
            s+="                      <label for=\"jp_retrieve_no1\">鎖定</label>";
            s+="           	 	   	 </td>";
            s+="           	 	   </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;\">Minor(JP3)</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"base_set2\" name=\"base_set2\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.base_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"uplimit_set2\" name=\"uplimit_set2\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.uplimit_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_retrieve_pa\" name=\"bet_retrieve_pa2\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.bet_retrieve_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_threshold2\" name=\"bet_threshold2\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.bet_threshold_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\">";
            s+="           	 	   	 	  <input type=\"radio\" id=\"jp_retrieve_yes2\" name=\"jp_retrieve3\" value=\"yes\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.jp_retrieve3=="yes"?"checked":"")+">";
            s+="   	                  <label for=\"jp_retrieve_yes2\">可拉(預設)</label>&nbsp;&nbsp;&nbsp;";
            s+="                      <input type=\"radio\" id=\"jp_retrieve_no2\" name=\"jp_retrieve3\" value=\"no\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP3.jp_retrieve3=="no"?"checked":"")+">";
            s+="                      <label for=\"jp_retrieve_no2\">鎖定</label>";
            s+="           	 	   	 </td>";
            s+="           	 	   </tr>";
            s+="           	 	   <tr>";
            s+="           	 	   	 <td style=\"text-align:center;\">Mini(JP4)</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"base_set3\" name=\"base_set3\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.base_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"uplimit_set3\" name=\"uplimit_set3\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.uplimit_set+"\" width=\"5%\" style=\"text-align:center;\"></td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_retrieve_pa3\" name=\"bet_retrieve_pa3\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.bet_retrieve_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\"><input type=\"text\" id=\"bet_threshold3\" name=\"bet_threshold3\" value=\""+data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.bet_threshold_pa+"\" style=\"text-align:center;width:50%;\">%</td>";
            s+="           	 	   	 <td style=\"text-align:center;\">";
            s+="           	 	   	 	  <input type=\"radio\" id=\"jp_retrieve_yes3\" name=\"jp_retrieve4\" value=\"yes\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.jp_retrieve4=="yes"?"checked":"")+">";
            s+="   	                  <label for=\"jp_retrieve_yes3\">可拉(預設)</label>&nbsp;&nbsp;&nbsp;";
            s+="                      <input type=\"radio\" id=\"jp_retrieve_no3\" name=\"jp_retrieve4\" value=\"no\" "+(data.JP_Monitor_Info.JP_Settings.parameter_settings.JP4.jp_retrieve4=="no"?"checked":"")+">";
            s+="                      <label for=\"jp_retrieve_no3\">鎖定</label>";
            s+="           	 	   	 </td>";
            s+="           	 	   </tr>";
            s+="           	 	 </tbody>";
            s+="             </table>";
            s+="           </td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="          <td colspan=2 style=\"color:red;font-weight:bold;\">※限\"營運前期\"操作、手動給獎前鎖定使用，不可忘記解鎖以致達最高水位</td>";
            s+="        </tr>";
            s+="        <tr>";
            s+="          <td colspan=2 style=\"color:red;font-weight:bold;\">※指定給JP後不會自動解鎖，必須回來這裡手動解除</td>";
            s+="        </tr>";
            s+="      </table>";
            s+="    </div>";
            s+="  </li>";
            s+="</ul>";
            s+="<div style=\"padding:10px 45px;background-color:#ffffff;width:100%;height:60px;\">";
            s+="  <div style=\"text-align:center;\"><a id=\"save\" class=\"btn waves-effect waves-light\">變更設定</a></div>";
            s+="</div>";

            //alert(s);
            //d[machinenum]=s;
            //alert('d='+JSON.stringify(d));
      		  //selecteditems.push(d);
      		  //alert('111 selecteditems = '+JSON.stringify(selecteditems));
      	  //});
      	//}
      //});
      //alert('selecteditems = '+JSON.stringify(selecteditems));
    });
  //});
}

function queryResult()
{
  //alert('queryResult');
	var s='';

  $('#show_result').empty();
  $.getJSON('/js/game.json', function(data) {
    s+="<div style=\"padding:10px 45px 0 45px;background-color:#ffffff;width:100%;height:50px\">";
    s+="	<div style=\"float:left;text-align:left;width:35%;padding-top:10px;\">";
    s+="     開運金總額："+accounting.formatMoney(data.Luckymoney_Info.Luckymoney.totalamount,"",0);
    s+="  </div>";
    s+="	<div style=\"float:left;text-align:right;width:65%;\">";
    s+="     更新時間：&nbsp;<span id=\"sec\">00:00:33&nbsp;之前</span>";
    s+="     <a class=\"waves-light btn blue\" id=\"cancel\" onclick=\"location.href='/game/luckymoney'\">擷取最新</a>";
    s+="  </div>";
    s+="</div>";
    s+="<ul class=\"collapsible\" data-collapsible=\"expandable\">";
    s+="  <li>";
    s+="    <div class=\"collapsible-header active\"><i class=\"material-icons\">play_arrow</i>開運金設定</div>";
    s+="    <div class=\"collapsible-body\" style=\"text-align:center;padding-left:45px;\">";
    s+="      <table id=\"newintelligence\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:50%;\" bgcolor=\"#ffffff\">";
    s+="        <tr>";
    s+="           <td style=\"width:25%;text-align:left;\">開運金領取後使用期限</td>";
    s+="           <td style=\"width:20%;text-align:left;\"><input type=\"text\" id=\"luckymoney_expire\" name=\"luckymoney_expire\" value=\""+data.Luckymoney_Info.Luckymoney.expiration+"\" maxlength=\"2\" size=\"3\" onkeypress=\"return (event.charCode>=48&amp;&amp;event.charCode<=57)\" style=\"text-align:center;width:20%\">&nbsp;日</td>";
    s+="        </tr>";
    s+="        <tr>";
    s+="           <td colspan=2 style=\"width:25%;text-align:left;\"><input type=\"checkbox\" id=\"clear_all\" name=\"clear_all\" class=\"filled-in\"><label for=\"clear_all\">立即清除所有帳號開運金</label></td>";
    s+="        </tr>";
    s+="        <tr>";
    s+="          <td colspan=2 style=\"color:red;font-weight:bold;\">※無法清除信件內的開運金，勾選按下變更設定成功後生效，</td>";
    s+="        </tr>";
    s+="        <tr>";
    s+="          <td colspan=2 style=\"color:red;font-weight:bold;\">生效後回到未勾選狀態。建議與維護時間配合</td>";
    s+="        </tr>";
    s+="      </table>";
    s+="    </div>";
    s+="  </li>";
    s+="  <li>";
    s+="    <div class=\"collapsible-header active\"><i class=\"material-icons\">play_arrow</i>小提示內容編輯</div>";
    s+="    <div class=\"collapsible-body\" style=\"text-align:center;padding-left:45px;\">";
    s+="      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#ffffff\">";
    s+="        <tr>";
    s+="          <td>";
    s+="          	<textarea id=\"s_hint\" style=\"background-color:#ffffff;width:80%;height:100px;\">";
    s+=data.Luckymoney_Info.Hint.Small;
    s+="            </textarea>";
    s+="          </td>";
    s+="        </tr>";
    s+="        <tr>";
    s+="          <td colspan=2 style=\"color:red;font-weight:bold;\">※ 字串變數{0}代表後台使用者設定的使用期限天數</td>";
    s+="        </tr>";
    s+="      </table>";
    s+="    </div>";
    s+="  </li>";
    s+="  <li>";
    s+="    <div class=\"collapsible-header active\"><i class=\"material-icons\">play_arrow</i>大提示內容編輯</div>";
    s+="    <div class=\"collapsible-body\" style=\"text-align:center;padding-left:45px;\">";
    s+="      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#ffffff\">";
    s+="        <tr>";
    s+="          <td>";
    s+="          	<textarea id=\"b_hint\" style=\"background-color:#ffffff;width:80%;height:180px;\">";
    s+=data.Luckymoney_Info.Hint.Big;
    s+="            </textarea>";
    s+="          </td>";
    s+="        </tr>";
    s+="      </table>";
    s+="    </div>";
    s+="  </li>";
    s+="</ul>";
    s+="<div style=\"padding:10px 45px;background-color:#ffffff;width:100%;height:60px;\">";
    s+="  <div style=\"text-align:center;\"><a id=\"save\" class=\"btn waves-effect waves-light\">變更設定</a></div>";
    s+="</div>";

    //alert(s);
    $('#show_result').html(s);
    //alert('===============================');
    /* Add event initialization -- Begin */
      /*** Important --- must add the following codes to activiate Collapsible ***/
      $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    /* Add event initialization -- End */
    /* Add event listener -- Begin */
  /* Add event listener -- End */
  });
}
