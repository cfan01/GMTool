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
         s+="<input type=\"checkbox\" name=\"ckb_"+v[Object.keys(v)[0]]+"\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
         s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
	    });
	    //alert(s);
	    //alert(subject_chkbox_id_lists);
	    $('#game_subject_lists').html(s);
      $('#game_subject_lists input').change(function() {
      	//alert("##### input state changed #####");
      	genqueryDataArray();
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

var arrD=['a','b','c','d'];
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
		$("#dialog-form").show();
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

function genqueryDataArray()
{
	//alert("genqueryDataArray");
	var s="",t;
	selecteditems = [];
  $('#game_subject_lists input:checked').each(function() {
  	var d={};
    var k= ($(this).attr('name').split('ckb_'))[1];
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
      $.each(data.Game_Monitor_Info, function(i,v) {
      	if(k==Object.keys(v)[0])
      	{
      		//alert('4.....k = '+k);
      		//alert('5.....t = '+t);
          s+="    <div id=\"subjectquery_"+k+"\" style=\"width:50%;float:left;border:1px solid #000000;\">";
          s+="      <div style=\"padding:0px 20px;background-color:#ffffff;\">";
          s+="        <div style=\"float:left;text-align:left;width:35%;padding:16px 0 0 0;\">"+t+" (66/130)</div>";
          s+="      	<div style=\"float:left;text-align:right;width:65%;padding:16px 0 0 0;\">";
          //s+="           更新時間：&nbsp;<span id=\"sec\"></span>";
          //s+="           <a class=\"waves-light btn blue\" id=\"getlatest\" onclick=\"\">擷取最新</a>";
          s+="           <div style=\"width:75%;float:left\">";
          s+="             更新時間：&nbsp;&nbsp;<span id='sec'></span>&nbsp;&nbsp;";
          s+="            </div>";
          s+="            <div style=\"width:10%;float:left\">";
          s+="              <a href=\"#\" class=\"wrapper\" onclick=\"location.href='/game/game_monitor'\"><span class=\"t4\">擷取最新</span><img id='img2' src='/images/button_6blue.png'></a>";
          s+="            </div>";
          s+="        </div>";
          s+="      </div>";
          s+="      <ul class=\"collapsible\" data-collapsible=\"expandable\">";
          s+="        <li>";
          s+="          <div class=\"collapsible-header\" style=\"background-color:#ffffff;\"><i class=\"material-icons\">play_arrow</i>最新情報</div>";
          s+="          <div class=\"collapsible-body\" style=\"text-align:center;background-color:#ffffff;\">";
          s+="          	<div style=\"width:100%;float:left;padding:0 20px;\">";
          s+="              <table id=\"newintelligence\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#ffffff\">";
          s+="                <tbody>";
          s+="                  <tr>";
          s+="                     <td style=\"width:26%;\">使用人數：</td>";
          s+="                     <td style=\"width:24%;\">"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.number_in_use.normal,"",0)+"(測:"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.number_in_use.tester,"",0)+")</td>";
          s+="                     <td style=\"width:50%;\">開始統計時間：</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>保留人數：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.reserved_number,"",0)+"</td>";
          s+="                     <td>2016/9/2  16:45:33</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>遊戲局數：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.num_of_Board,"",0)+"</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>總押注：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.total_bet,"",0)+"</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>總得分：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.total_score,"",0)+"</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>最後總得分：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.final_total_score,"",0)+"</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>遊戲實際RTP：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.real_rtp,"",4)+"%</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>遊戲總輸贏：</td>";
          s+="                     <td>"+accounting.formatMoney(v[Object.keys(v)[0]].Latest_News.total_winlose,"",0)+"</td>";
          s+="                  </tr>";
          s+="                </tbody>";
          s+="              </table>";
          s+="            </div>";
          s+="          </div>";
          s+="        </li>";
          s+="        <li>";
          s+="          <div class=\"collapsible-header active\" style=\"background-color:#ffffff;\"><i class=\"material-icons\">play_arrow</i>遊戲設定</div>";
          s+="          <div class=\"collapsible-body\" style=\"text-align:center;background-color:#ffffff;\">";
          //s+="            <!--<div id="gameSettingLists">-->
          s+="          	<div style=\"width:100%;float:left;padding:0 20px;background-color:#ffffff;\">";
          s+="              <table id=\"gameConditionSetting\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\" bgcolor=\"#ffffff\">";
          s+="                <tbody>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	<div>進入條件：&nbsp;LV <input type=\"text\" id=\"lv\" name=\"lv\" value=\""+v[Object.keys(v)[0]].Game_Settings.condition.lv+"\" size=\"3\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"> (含)以上</div>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 遊戲開關：<br>";
          s+="                     	 <table id=\"game_switch\" bgcolor=\"#EAEAEA\">";
          s+="                         <tbody>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">安卓開關：</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:75%\">";
          s+="                               <select id=\"android_switch\" name=\"android_switch\">";
          s+="                                 <option value=\"close_comingsoon\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.android_switch=="close_comingsoon"?"selected":"")+">關閉遊戲_預告掛維護(預設)</option>";
          s+="                                 <option value=\"close_staytuned\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.android_switch=="close_staytuned"?"selected":"")+">關閉遊戲_敬請期待</option>";
          s+="                                 <option value=\"close_off\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.android_switch=="close_off"?"selected":"")+">關閉遊戲_下架</option>";
          s+="                                 <option value=\"open\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.android_switch=="open"?"selected":"")+">打開遊戲</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">WEB開關：</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:75%\">";
          s+="                               <select id=\"web_switch\" name=\"web_switch\">";
          s+="                                 <option value=\"close_comingsoon\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.web_switch=="close_comingsoon"?"selected":"")+">關閉遊戲_預告掛維護(預設)</option>";
          s+="                                 <option value=\"close_staytuned\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.web_switch=="close_staytuned"?"selected":"")+">關閉遊戲_敬請期待</option>";
          s+="                                 <option value=\"close_off\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.web_switch=="close_off"?"selected":"")+">關閉遊戲_下架</option>";
          s+="                                 <option value=\"open\" "+(v[Object.keys(v)[0]].Game_Settings.game_switch.web_switch=="open"?"selected":"")+">打開遊戲</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">踢離時間：</td>";
          s+="                     	 	   	 <td style=\"text-align:left;width:75%\">";
          s+="                               <input type=\"text\" id=\"kick_off_time\" name=\"kick_off_time\" maxlength=4 style=\"text-align:center;\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.game_switch.kick_off_time,"",0)+"\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></input>&nbsp;秒";
          s+="                     	 	   	 </td>";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 		   <td colspan=2><font color=\"#666666\">(時間到開始踢除主題內玩家至大廳，於下次開啟後進入保留)</font></td>";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">預告時間：</td>";
          s+="                     	 	   	 <td style=\"text-align:left;width:75%\">";
          s+="                               <input type=\"text\" id=\"comingsoon_time\" name=\"comingsoon_time\" maxlength=4 style=\"text-align:center;\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.game_switch.comingsoon_time,"",0)+"\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></input>&nbsp;秒";
          s+="                     	 	   	 </td>";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">預告內容：</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:75%\">";
          s+="                               <textarea id=\"comingsoon_content\" style=\"background-color:#ffffff\">"+v[Object.keys(v)[0]].Game_Settings.game_switch.comingsoon_content+"</textarea>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   </tr>";
          s+="                        	 <tr>";
          s+="                     	 		   <td colspan=2><font color=\"#666666\">(出現時間各於 一開始 、預告時間與倒數10秒 各出現一次)</font></td>";
          s+="                     	 	   </tr>";
          s+="                     	 	 </tbody>";
          s+="                       </table>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 <div style=\"float:left;width:18%;\">比倍開關：</div>";
          s+="                     	 <div style=\"float:left;width:82%;\">";
          s+="                     	   <select id=\"multiple_switch\" name=\"multiple_switch\">";
          s+="                           <option value=\"open\" "+(v[Object.keys(v)[0]].Game_Settings.multiple_switch=="open"?"selected":"")+">打開(預設)</option>";
          s+="                           <option value=\"close\" "+(v[Object.keys(v)[0]].Game_Settings.multiple_switch=="close"?"selected":"")+">關閉</option>";
          s+="                         </select>";
          s+="                       </div>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                    <td style=\"width:100%\" colspan=2>";
          s+="                     	<div style=\"float:left;width:23%;\">";
          s+="                		    <input type=\"checkbox\" id=\"ckb_largest_winscore\" name=\"ckb_largest_winscore\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.largest_winscore.ckb_largest_winscore==true?"checked":"")+">";
          s+="                		    <label for=\"ckb_largest_winscore\">最大贏分：</label>";
          s+="                		  </div>";
          s+="                      <div style=\"float:left;width:77%;\">";
          s+="                        <input type=\"text\" name=\"largest_winscore\" id=\"largest_winscore\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.largest_winscore.largest_winscore,"",0)+"\" size=\"40%\" style=\"background-color:#cccccc;width:100%\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                      </div>";
          s+="                    </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style='width:100%' colspan=2>";
          s+="                        分台、押分與台數設定：<br>";
          s+="                        <div id=\"table-wrapper\">";
          s+="                          <div id=\"table-scroll\">";
          s+="                            <table id=\"howmanyscoremachine\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:200%;\">";
          s+="                              <thead style=\"background-color:#666666;color:white;\">";
          s+="                                  <tr>";
          s+="                                    <th style=\"width:7%\">分台編號</th>";
          s+="                                    <th style=\"width:6%\">總開關</th>";
          s+="                                    <th style=\"width:7%\">單線押注</th>";
          s+="                                    <th style=\"width:7%\">押注層數</th>";
          s+="                                    <th style=\"width:7%\">開運金層</th>";
          s+="                                    <th style=\"width:7%\">外贈開關</th>";
          s+="                                    <th style=\"width:12%\">頁籤名稱顯示</th>";
          s+="                                    <th style=\"width:7%\">開放台數</th>";
          s+="                                    <th style=\"width:7%\">台數上限</th>";
          s+="                                    <th style=\"width:10%\">台號範圍</th>";
          s+="                                  </tr>";
          s+="                              </thead>";
          s+="                              <tbody style=\"background-color:#EAEAEA\">";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">1</td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"switch_g1\" name=\"switch_g1\" class=\"filled-in\">";
          s+="                		                <label for=\"switch_g1\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"single_bet1\" id='single_bet1' value=\"10\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"bet_level1\" id='bet_level1' value=\"10\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"luckymoney_level1\" id='luckymoney_level1' value=\"1\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"outsidegifts_switch1\" name=\"outsidegifts_switch1\" class=\"filled-in\">";
          s+="                		                <label for=\"outsidegifts_switch1\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"page_name1\" id='page_name1' value=\"900分台\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"open_machinenum1\" id='open_machinenum1' value=\"80\" style=\"width:100%;\"></td>";
          s+="                                  <td name=\"m_uplimit1\" id='m_uplimit1'>500</td>";
          s+="                                  <td name=\"m_range1\" id='m_range1'>1~80</td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">2</td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"switch_g2\" name=\"switch_g2\" class=\"filled-in\">";
          s+="                		                <label for=\"switch_g2\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"single_bet2\" id='single_bet2' value=\"10\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"bet_level2\" id='bet_level2' value=\"10\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"luckymoney_level2\" id='luckymoney_level2' value=\"1\" style=\"width:100%;\"></td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"outsidegifts_switch2\" name=\"outsidegifts_switch2\" class=\"filled-in\">";
          s+="                		                <label for=\"outsidegifts_switch2\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"page_name2\" id='page_name2' value=\"900分台\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"open_machinenum2\" id='open_machinenum2' value=\"80\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                  <td name=\"m_uplimit2\" id='m_uplimit2'>500</td>";
          s+="                                  <td name=\"m_range2\" id='m_range2'>1~80</td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">3</td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"switch_g3\" name=\"switch_g3\" class=\"filled-in\">";
          s+="                		                <label for=\"switch_g3\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"single_bet3\" id='single_bet3' value=\"10\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"bet_level3\" id='bet_level3' value=\"10\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"luckymoney_level3\" id='luckymoney_level3' value=\"1\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"outsidegifts_switch3\" name=\"outsidegifts_switch3\" class=\"filled-in\">";
          s+="                		                <label for=\"outsidegifts_switch3\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"page_name3\" id='page_name3' value=\"900分台\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"open_machinenum3\" id='open_machinenum3' value=\"80\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                  <td name=\"m_uplimit3\" id='m_uplimit3'>500</td>";
          s+="                                  <td name=\"m_range3\" id='m_range3'>1~80</td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">4</td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"switch_g4\" name=\"switch_g4\" class=\"filled-in\">";
          s+="                		                <label for=\"switch_g4\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"single_bet4\" id='single_bet4' value=\"10\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"bet_level4\" id='bet_level4' value=\"10\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"luckymoney_level4\" id='luckymoney_level4' value=\"1\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"outsidegifts_switch4\" name=\"outsidegifts_switch4\" class=\"filled-in\">";
          s+="                		                <label for=\"outsidegifts_switch4\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"page_name4\" id='page_name4' value=\"900分台\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"open_machinenum4\" id='open_machinenum4' value=\"80\" style=\"width:100%;background-color:#cccccc;\"></td>";
          s+="                                  <td name=\"m_uplimit4\" id='m_uplimit4'>500</td>";
          s+="                                  <td name=\"m_range4\" id='m_range4'>1~80</td>";
          s+="                                </tr>";
          s+="                              </tbody>";
          s+="                            </table>";
          s+="                          </div>";
          s+="                        </div>";
          s+="                     </td>";
          s+="                  </tr>";
          /*s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 押注設定：<br>";
          s+="                     	 <table id=\"bet_setting\" bgcolor=\"#EAEAEA\">";
          s+="                     	 	<tr>";
          s+="                     	 		<td style=\"width:25%;\">基礎單線押注：</td>";
          s+="                     	 		<td style=\"width:25%;\"><input type=\"text\" name=\"basic_singlelinebet\" id=\"basic_singlelinebet\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.bet_setting.basic_singlelinebet,"",0)+"\" size=\"40%\" style=\"width:100%\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          s+="                     	 		<td style=\"width:21%;\">押注層數：</td>";
          s+="                     	 		<td style=\"width:29%;\"><input type=\"text\" name=\"bet_level\" id=\"bet_level\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.bet_setting.bet_level,"",0)+"\" size=\"40%\" style=\"width:100%\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          s+="                     	 	</tr>";
          s+="                       </table>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                        幾分台設定：<br>";
          s+="                        <div id=\"table-wrapper\">";
          s+="                          <div id=\"table-scroll\">";
          s+="                            <table id=\"howmanyscoremachine\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\">";
          s+="                              <thead style=\"background-color:#666666;color:white;\">";
          s+="                                  <tr>";
          s+="                                    <th style=\"width:5%\">&nbsp;</th>";
          s+="                                    <th style=\"width:20%\">押注倍率</th>";
          s+="                                    <th style=\"width:25%\">頁籤名稱顯示</th>";
          s+="                                    <th style=\"width:50%\">台號</th>";
          s+="                                  </tr>";
          s+="                              </thead>";
          s+="                              <tbody style=\"background-color:#EAEAEA\">";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"ckb_howmanyscore0\" name=\"ckb_howmanyscore0\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.ckb_howmanyscore0==true?"checked":"")+">";
          s+="                		                <label for=\"ckb_howmanyscore0\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\">1:1</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"name_show0\" id=\"name_show0\" value=\""+v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.name_show0+"\" style=\"width:100%;background-color:#cccccc;\"></td>";
          //s+="                                  <td><div id=\"machine_num_"+k+"_a\"></div></td>";
          s+="                                  <td id=\"machine_num0\">";
          s+="                                    <div style=\"width:70%;float:left;padding-bottom:5px;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_0a\" name=\"fmachine_num_"+k+"_0a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_0a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_0a\" name=\"tmachine_num_"+k+"_0a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.tmachine_num_"+k+"_0a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_0a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") !="") )
          s+="                                    <div id=\"entry_more_"+k+"_a\" style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id=\"entry_more_"+k+"_a\" style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_1a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_1a',1);";
          s+="                                                                                showHide('entry_less_"+k+"_a',1)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") !="")
          s+="                                    <div id='entry_"+k+"_1a' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_1a' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_1a\" name=\"fmachine_num_"+k+"_1a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_1a\" name=\"tmachine_num_"+k+"_1a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.tmachine_num_"+k+"_1a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a")!="")) )
          s+="                                    <div id='entry_more_"+k+"_1a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_1a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_2a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2a',1);";
          s+="                                                                                showHide('entry_less_"+k+"_a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1a',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_1a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") !="")) )
          s+="                                    <div id='entry_less_"+k+"_a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_1a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_a',0)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") !="")
          s+="                                    <div id='entry_"+k+"_2a' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_2a' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_2a\" name=\"fmachine_num_"+k+"_2a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_2a\" name=\"tmachine_num_"+k+"_2a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.tmachine_num_"+k+"_2a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") !="")) )
          s+="                                    <div id='entry_more_"+k+"_2a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_2a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_3a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3a',1);";
          s+="                                                                                showHide('entry_less_"+k+"_1a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2a',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_2a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") !="")) )
          s+="                                    <div id='entry_less_"+k+"_1a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_1a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_2a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1a',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") !="")
          s+="                                    <div id='entry_"+k+"_3a' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_3a' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_3a\" name=\"fmachine_num_"+k+"_3a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_3a\" name=\"tmachine_num_"+k+"_3a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.tmachine_num_"+k+"_3a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_4a") !="")) )
          s+="                                    <div id='entry_more_"+k+"_3a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_3a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_4a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_3a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3a',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_3a") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_4a") !="")) )
          s+="                                    <div id='entry_less_"+k+"_2a' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_2a' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_3a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1a',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2a',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_4a") !="")
          s+="                                    <div id='entry_"+k+"_4a' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_4a' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_4a\" name=\"fmachine_num_"+k+"_4a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_4a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_4a\" name=\"tmachine_num_"+k+"_4a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.tmachine_num_"+k+"_4a")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore0.fmachine_num_"+k+"_4a") !="")
          s+="                                    <div id='entry_less_"+k+"_3a' style=\"float:left;cursor:pointer;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_3a' style=\"float:left;display:none;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_4a',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3a',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3a',1);";
          s+="                                                                                showHide('entry_less_"+k+"_2a',1);\">";
          s+="                                    </div>";
          s+="                                  </td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"ckb_howmanyscore1\" name=\"ckb_howmanyscore1\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.ckb_howmanyscore1==true?"checked":"")+">";
          s+="                		                <label for=\"ckb_howmanyscore1\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\">1:2</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"name_show1\" id=\"name_show1\" value=\""+v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.name_show1+"\" style=\"width:100%;background-color:#cccccc;\"></td>";
          //s+="                                  <td><div id=\"machine_num_"+k+"_b\"></div></td>";
          s+="                                  <td id=\"machine_num1\">";
          s+="                                    <div style=\"width:70%;float:left;padding-bottom:5px;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_0b\" name=\"fmachine_num_"+k+"_0b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_0b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_0b\" name=\"tmachine_num_"+k+"_0b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.tmachine_num_"+k+"_0b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_0b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") !="") )
          s+="                                    <div id=\"entry_more_"+k+"_b\" style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id=\"entry_more_"+k+"_b\" style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_1b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_1b',1);";
          s+="                                                                                showHide('entry_less_"+k+"_b',1)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") !="")
          s+="                                    <div id='entry_"+k+"_1b' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_1b' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_1a\" name=\"fmachine_num_"+k+"_1b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_1b\" name=\"tmachine_num_"+k+"_1b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.tmachine_num_"+k+"_1b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") !="")) )
          s+="                                    <div id='entry_more_"+k+"_1b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_1b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_2b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2b',1);";
          s+="                                                                                showHide('entry_less_"+k+"_b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1b',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_1b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") !="")) )
          s+="                                    <div id='entry_less_"+k+"_b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_1b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_b',0)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") !="")
          s+="                                    <div id='entry_"+k+"_2b' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_2b' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_2b\" name=\"fmachine_num_"+k+"_2b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_2b\" name=\"tmachine_num_"+k+"_2b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.tmachine_num_"+k+"_2b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") !="")) )
          s+="                                    <div id='entry_more_"+k+"_2b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_2b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_3b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3b',1);";
          s+="                                                                                showHide('entry_less_"+k+"_1b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2b',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_2b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") !="")) )
          s+="                                    <div id='entry_less_"+k+"_1b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_1b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_2b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1b',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") !="")
          s+="                                    <div id='entry_"+k+"_3b' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_3b' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_3b\" name=\"fmachine_num_"+k+"_3b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_3b\" name=\"tmachine_num_"+k+"_3b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.tmachine_num_"+k+"_3b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_4b") !="")) )
          s+="                                    <div id='entry_more_"+k+"_3b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_3b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_4b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_3b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3b',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_3b") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_4b") !="")) )
          s+="                                    <div id='entry_less_"+k+"_2b' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_2b' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_3b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1b',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2b',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_4b") !="")
          s+="                                    <div id='entry_"+k+"_4b' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_4b' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_4b\" name=\"fmachine_num_"+k+"_4b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_4b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_4b\" name=\"tmachine_num_"+k+"_4b\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.tmachine_num_"+k+"_4b")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore1.fmachine_num_"+k+"_4b") !="")
          s+="                                    <div id='entry_less_"+k+"_3b' style=\"float:left;cursor:pointer;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_3b' style=\"float:left;display:none;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_4b',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3b',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3b',1);";
          s+="                                                                                showHide('entry_less_"+k+"_2b',1);\">";
          s+="                                    </div>";
          s+="                                  </td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"ckb_howmanyscore2\" name=\"ckb_howmanyscore2\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.ckb_howmanyscore2==true?"checked":"")+">";
          s+="                		                <label for=\"ckb_howmanyscore2\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\">1:5</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"name_show2\" id=\"name_show2\" value=\""+v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.name_show2+"\" style=\"width:100%;background-color:#cccccc;\"></td>";
          //s+="                                  <td><div id=\"machine_num_"+k+"_c\"></div></td>";
          s+="                                  <td id=\"machine_num2\">";
          s+="                                    <div style=\"width:70%;float:left;padding-bottom:5px;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_0c\" name=\"fmachine_num_"+k+"_0c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_0c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_0c\" name=\"tmachine_num_"+k+"_0c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.tmachine_num_"+k+"_0c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_0c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") !="") )
          s+="                                    <div id=\"entry_more_"+k+"_c\" style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id=\"entry_more_"+k+"_c\" style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_1c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_1c',1);";
          s+="                                                                                showHide('entry_less_"+k+"_c',1)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") !="")
          s+="                                    <div id='entry_"+k+"_1c' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_1c' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_1c\" name=\"fmachine_num_"+k+"_1a\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_1c\" name=\"tmachine_num_"+k+"_1c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.tmachine_num_"+k+"_1c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") !="")) )
          s+="                                    <div id='entry_more_"+k+"_1c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_1c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_2c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2c',1);";
          s+="                                                                                showHide('entry_less_"+k+"_c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1c',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_1c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") !="")) )
          s+="                                    <div id='entry_less_"+k+"_c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_1c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_c',0)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") !="")
          s+="                                    <div id='entry_"+k+"_2c' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_2c' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_2c\" name=\"fmachine_num_"+k+"_2c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_2c\" name=\"tmachine_num_"+k+"_2c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.tmachine_num_"+k+"_2c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") !="")) )
          s+="                                    <div id='entry_more_"+k+"_2c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_2c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_3c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3c',1);";
          s+="                                                                                showHide('entry_less_"+k+"_1c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2c',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_2c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") !="")) )
          s+="                                    <div id='entry_less_"+k+"_1c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_1c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_2c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1c',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") !="")
          s+="                                    <div id='entry_"+k+"_3c' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_3c' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_3c\" name=\"fmachine_num_"+k+"_3c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_3c\" name=\"tmachine_num_"+k+"_3c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.tmachine_num_"+k+"_3c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_4c") !="")) )
          s+="                                    <div id='entry_more_"+k+"_3c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_3c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_4c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_3c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3c',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_3c") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_4c") !="")) )
          s+="                                    <div id='entry_less_"+k+"_2c' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_2c' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_3c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1c',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2c',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_4c") !="")
          s+="                                    <div id='entry_"+k+"_4c' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_4c' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_4c\" name=\"fmachine_num_"+k+"_4c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_4c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_4c\" name=\"tmachine_num_"+k+"_4c\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.tmachine_num_"+k+"_4c")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore2.fmachine_num_"+k+"_4c") !="")
          s+="                                    <div id='entry_less_"+k+"_3c' style=\"float:left;cursor:pointer;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_3c' style=\"float:left;display:none;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_4c',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3c',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3c',1);";
          s+="                                                                                showHide('entry_less_"+k+"_2c',1);\">";
          s+="                                    </div>";
          s+="                                  </td>";
          s+="                                </tr>";
          s+="                                <tr>";
          s+="                                	<td style=\"text-align:center;\">";
          s+="               		            		  <input type=\"checkbox\" id=\"ckb_howmanyscore3\" name=\"ckb_howmanyscore3\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.ckb_howmanyscore3==true?"checked":"")+">";
          s+="                		                <label for=\"ckb_howmanyscore3\"></label>";
          s+="                                	</td>";
          s+="                                	<td style=\"text-align:center;\">1:10</td>";
          s+="                                	<td style=\"text-align:center;\"><input type=\"text\" name=\"name_show3\" id=\"name_show3\" value=\""+v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.name_show3+"\" style=\"width:100%;background-color:#cccccc;\"></td>";
          //s+="                                  <td><div id=\"machine_num_"+k+"_d\"></div></td>";
          s+="                                  <td id=\"machine_num3\">";
          s+="                                    <div style=\"width:70%;float:left;padding-bottom:5px;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_0d\" name=\"fmachine_num_"+k+"_0d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_0d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_0d\" name=\"tmachine_num_"+k+"_0d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.tmachine_num_"+k+"_0d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_0d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") !="") )
          s+="                                    <div id=\"entry_more_"+k+"_d\" style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id=\"entry_more_"+k+"_d\" style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_1d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_1d',1);";
          s+="                                                                                showHide('entry_less_"+k+"_d',1)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") !="")
          s+="                                    <div id='entry_"+k+"_1d' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_1d' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_1d\" name=\"fmachine_num_"+k+"_1d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_1d\" name=\"tmachine_num_"+k+"_1d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.tmachine_num_"+k+"_1d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") !="")) )
          s+="                                    <div id='entry_more_"+k+"_1d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_1d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_2d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2d',1);";
          s+="                                                                                showHide('entry_less_"+k+"_d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1d',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_1d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") !="")) )
          s+="                                    <div id='entry_less_"+k+"_d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_1d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_d',0)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") !="")
          s+="                                    <div id='entry_"+k+"_2d' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_2d' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_2d\" name=\"fmachine_num_"+k+"_2d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_2d\" name=\"tmachine_num_"+k+"_2d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.tmachine_num_"+k+"_2d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") !="")) )
          s+="                                    <div id='entry_more_"+k+"_2d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_2d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_3d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3d',1);";
          s+="                                                                                showHide('entry_less_"+k+"_1d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2d',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_2d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") !="")) )
          s+="                                    <div id='entry_less_"+k+"_1d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_1d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_2d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_2d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_1d',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") !="")
          s+="                                    <div id='entry_"+k+"_3d' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_3d' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_3d\" name=\"fmachine_num_"+k+"_3d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_3d\" name=\"tmachine_num_"+k+"_3d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.tmachine_num_"+k+"_3d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_4d") !="")) )
          s+="                                    <div id='entry_more_"+k+"_3d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_more_"+k+"_3d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/more.png' onclick=\"showHide('entry_"+k+"_4d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_3d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3d',1);\">";
          s+="                                    </div>";
                                              if( (eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") =="") ||
                                                  ((eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_3d") !="")&&(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_4d") !="")) )
          s+="                                    <div id='entry_less_"+k+"_2d' style=\"float:left;cursor:pointer;display:none;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_2d' style=\"float:left;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_3d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_2d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_1d',1);";
          s+="                                                                                showHide('entry_more_"+k+"_2d',1);\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_4d") !="")
          s+="                                    <div id='entry_"+k+"_4d' style=\"width:70%;float:left;padding-bottom:5px;\">";
                                              else
          s+="                                    <div id='entry_"+k+"_4d' style=\"width:70%;float:left;padding-bottom:5px;display:none;\">";
          s+="                                      <input type=\"text\" id=\"fmachine_num_"+k+"_4d\" name=\"fmachine_num_"+k+"_4d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_4d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">~<input type=\"text\" id=\"tmachine_num_"+k+"_4d\" name=\"tmachine_num_"+k+"_4d\" value=\""+eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.tmachine_num_"+k+"_4d")+"\" style=\"text-align:center;width:43%;background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">";
          s+="                                    </div>";
                                              if(eval("v[Object.keys(v)[0]].Game_Settings.howmanyscoremachine.howmanyscore3.fmachine_num_"+k+"_4d") !="")
          s+="                                    <div id='entry_less_"+k+"_3d' style=\"float:left;cursor:pointer;\">";
                                              else
          s+="                                    <div id='entry_less_"+k+"_3d' style=\"float:left;display:none;cursor:pointer;\">";
          s+="                                     &nbsp;<img src='/images/less.png' onclick=\"showHide('entry_"+k+"_4d',0);";
          s+="                                                                                showHide('entry_less_"+k+"_3d',0);";
          s+="                                                                                showHide('entry_more_"+k+"_3d',1);";
          s+="                                                                                showHide('entry_less_"+k+"_2d',1);\">";
          s+="                                    </div>";
          s+="                                  </td>";
          s+="                                </tr>";
          s+="                              </tbody>";
          s+="                            </table>";
          s+="                          </div>";
          s+="                        </div>";
          s+="                     </td>";
          s+="                  </tr>";*/
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 <div style=\"float:left;width:18%;\">機率設定：</div>";
          s+="                     	 <div style=\"float:left;width:82%;\">";
          s+="                     	  <select id=\"probability_setting\" name=\"probability_setting\">";
          s+="                          <option value=\"96\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==96?"selected":"")+">預設值(96%)</option>";
          s+="                          <option value=\"98\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==98?"selected":"")+">98%</option>";
          s+="                          <option value=\"100\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==100?"selected":"")+">100%</option>";
          s+="                          <option value=\"102\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==102?"selected":"")+">102%</option>";
          s+="                          <option value=\"94\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==94?"selected":"")+">94%</option>";
          s+="                          <option value=\"92\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==92?"selected":"")+">92%</option>";
          s+="                          <option value=\"90\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==90?"selected":"")+">90%</option>";
          s+="                          <option value=\"88\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==88?"selected":"")+">88%</option>";
          s+="                          <option value=\"80\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==80?"selected":"")+">80%</option>";
          s+="                          <option value=\"70\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==70?"selected":"")+">70%</option>";
          s+="                          <option value=\"60\" "+(v[Object.keys(v)[0]].Game_Settings.probability_setting==60?"selected":"")+">60%</option>";
          s+="                        </select>";
          s+="                       </div>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                  	 <td style=\"width:100%\" colspan=2>";
          s+="                       <div style=\"float:left;width:35%;\">";
          s+="                		     <input type=\"checkbox\" id=\"ckb_compensate\" name=\"ckb_compensate\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.compensate.ckb_compensate==true?"checked":"")+">";
          s+="                		     <label for=\"ckb_compensate\">不中獎幾局補償：</label>";
          s+="                       </div>";
          s+="                       <div style=\"float:left;width:65%;\">";
          s+="                       	 <input type=\"text\" id=\"compensate_set\" name=\"compensate_set\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.compensate.compensate_set,"",0)+"\" size=\"5%\" style=\"background-color:#cccccc;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\">&nbsp;局";
          s+="                       </div>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 獨立彩金設定：<br>";
          s+="                     	 <table id=\"bet_setting\" bgcolor=\"#EAEAEA\">";
          s+="                     	 	<tr>";
          s+="                     	 		<td style=\"width:35%;\">獨立彩金抽取%數：</td>";
          s+="                     	 		<td style=\"width:20%;\"><input type=\"text\" name=\"individual_winnings_retrieve_pa\" id=\"individual_winnings_retrieve_pa\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.individual_winnings_retrieve_pa,"",2)+"\" size=\"40%\" style=\"width:50%\" onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==46)'>%</td>";
          s+="                     	 		<td style=\"width:20%;\">基本水位：</td>";
          s+="                     	 		<td style=\"width:25%;\"><input type=\"text\" name=\"basic_level\" id=\"basic_level\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.basic_level,"",0)+"\" size=\"40%\" style=\"width:100%\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          s+="                     	 	</tr>";
          s+="                       </table>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td style=\"width:100%\" colspan=2>";
          s+="                     	 自動模式 預設值設定：<br>";
          s+="                     	 <table id=\"automode_defaultsetting\" bgcolor=\"#EAEAEA\">";
          s+="                         <thead>";
          s+="                           <tr>";
          s+="                             <th style=\"text-align:center;width:25%;background-color:#303030;color:#ffffff;\">項目</th>";
          s+="                             <th style=\"text-align:center;width:25%;background-color:#303030;color:#ffffff;\">是否勾選</th>";
          s+="                             <th style=\"text-align:center;width:25%;background-color:#303030;color:#ffffff;\">設定值</th>";
          //s+="                             <!--<th style="text-align:center;width:25%;background-color:#303030;color:#ffffff;">押一下單位</th>-->";
          s+="                           </tr>";
          s+="                         </thead>";
          s+="                         <tbody>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">局數</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">";
          s+="                               <select id=\"board_switch\" name=\"board_switch\">";
          s+="                                 <option value=\"yes\" "+(v[Object.keys(v)[0]].Game_Settings.board_num.board_switch=="yes"?"selected":"")+">是</option>";
          s+="                                 <option value=\"no\" "+(v[Object.keys(v)[0]].Game_Settings.board_num.board_switch=="no"?"selected":"")+">否</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\"><input type=\"text\" id=\"number_of_board\" name=\"number_of_board\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.board_num.number_of_board,"",0)+"\" size=\"5%\" style=\"text-align:center;width:100%;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          //s+="                     	 	   	 <!--<td style="text-align:center;width:25%"><input type="text" id="compensate_set" name="compensate_set" value="1" size="5%" style="text-align:center;"></td>-->";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">G幣</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">";
          s+="                               <select id=\"g_switch\" name=\"g_switch\">";
          s+="                                 <option value=\"yes\" "+(v[Object.keys(v)[0]].Game_Settings.g_money.g_switch=="yes"?"selected":"")+">是</option>";
          s+="                                 <option value=\"no\" "+(v[Object.keys(v)[0]].Game_Settings.g_money.g_switch=="no"?"selected":"")+">否</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\"><input type=\"text\" id=\"g_money\" name=\"g_money\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.g_money.g_money,"",0)+"\" size=\"5%\" style=\"text-align:center;width:100%;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          //s+="                     	 	   	 <!--<td style="text-align:center;width:25%"><input type="text" id="compensate_set" name="compensate_set" value="1" size="5%" style="text-align:center;"></td>-->";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">進入Bonus</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">";
          s+="                               <select id=\"bonus_switch\" name=\"bonus_switch\">";
          s+="                                 <option value=\"yes\" "+(v[Object.keys(v)[0]].Game_Settings.enter_bonus.bonus_switch=="yes"?"selected":"")+">是</option>";
          s+="                                 <option value=\"no\" "+(v[Object.keys(v)[0]].Game_Settings.enter_bonus.bonus_switch=="no"?"selected":"")+">否</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\"></td>";
          //s+="                     	 	   	 <!--<td style="text-align:center;width:25%"><input type="text" id="bonus" name="bonus" value="1" size="5%" style="text-align:center;width:100%;"></td>-->";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">中獎倍數</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">";
          s+="                               <select id=\"winning_multiple_switch\" name=\"winning_multiple_switch\">";
          s+="                                 <option value=\"yes\" "+(v[Object.keys(v)[0]].Game_Settings.winning_multiple.winning_multiple_switch=="yes"?"selected":"")+">是</option>";
          s+="                                 <option value=\"no\" "+(v[Object.keys(v)[0]].Game_Settings.winning_multiple.winning_multiple_switch=="no?"?"selected":"")+">否</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\"><input type=\"text\" id=\"winning_multiple\" name=\"winning_multiple\" value=\""+accounting.formatMoney(v[Object.keys(v)[0]].Game_Settings.winning_multiple.winning_multiple,"",0)+"\" size=\"5%\" style=\"text-align:center;width:100%;\" onkeypress=\"return (event.charCode>=48&&event.charCode<=57)\"></td>";
          //s+="                     	 	   	 <!--<td style="text-align:center;width:25%"><input type="text" id="winning_multiple" name="winning_multiple" value="1" size="5%" style="text-align:center;width:100%;"></td>-->";
          s+="                     	 	   </tr>";
          s+="                     	 	   <tr>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">中彩金</td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\">";
          s+="                               <select id=\"set_switch\" name=\"set_switch\">";
          s+="                                 <option value=\"yes\" "+(v[Object.keys(v)[0]].Game_Settings.winnings.winnings_switch=="yes"?"selected":"")+">是</option>";
          s+="                                 <option value=\"no\" "+(v[Object.keys(v)[0]].Game_Settings.winnings.winnings_switch=="no"?"selected":"")+">否</option>";
          s+="                               </select>";
          s+="                     	 	   	 </td>";
          s+="                     	 	   	 <td style=\"text-align:center;width:25%\"></td>";
          //s+="                     	 	   	 <!--<td style="text-align:center;width:25%"><input type="text" id="set_val" name="set_val" value="1" size="5%" style="text-align:center;width:100%;"></td>-->";
          s+="                     	 	   </tr>";
          s+="                     	 	 </tbody>";
          s+="                       </table>";
          s+="                     </td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>";
          s+="                		   <input type=\"checkbox\" id=\"ckb_lucky_money_use\" name=\"ckb_lucky_money_use\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.ckb_lucky_money_use==true?"checked":"")+" value=\"on\">";
          s+="                		   <label for=\"ckb_lucky_money_use\">可否使用開運金</label>";
          s+="                     </td>";
          s+="                     <td>&nbsp;</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td>";
          s+="                		   <input type=\"checkbox\" id=\"ckb_gift_switch\" name=\"ckb_gift_switch\" class=\"filled-in\" "+(v[Object.keys(v)[0]].Game_Settings.ckb_gift_switch==true?"checked":"")+" value=\"on\">";
          s+="                		   <label for=\"ckb_gift_switch\">外贈開關</label>";
          s+="                     </td>";
          s+="                     <td>&nbsp;</td>";
          s+="                  </tr>";
          s+="                  <tr>";
          s+="                     <td colspan=2 style=\"text-align:center;\"><a id=\"save\" href=\"#\" class=\"wrapper\" onclick=\"SaveCancel(1)\"><span class=\"t4\">變更設定</span><img id='img2' src='/images/button_6blue.png'></a></td>";
          s+="                  </tr>";
          s+="                </tbody>";
          s+="              </table>";
          s+="            </div>";
          //s+="            <!--</div>-->";
          s+="         </div>";
          s+="        </li>";
          s+="      </ul>";
          s+="    </div>";
          //alert(s);
          d[k]=s;
      		selecteditems.push(d);
      		//alert('111 selecteditems = '+JSON.stringify(selecteditems));
      	}
      });
      //alert('selecteditems = '+JSON.stringify(selecteditems));
    });
  });
}

/*function howmanyscoremachineStyle()
{
  for(var i=1;i<=4;i++)
  {
    if($("#howmanyscoremachine #switch_g"+i).is(":checked"))
    {
    	 //alert('checked');
    	 $("#single_bet"+i).css({"background-color":"#ffffff"});
    	 $("#bet_level"+i).css({"background-color":"#ffffff"});
    	 $("#luckymoney_level"+i).css({"background-color":"#ffffff"});
    	 $("#outsidegifts_switch"+i).css({"background-color":"#ffffff"});
    	 $("#page_name"+i).css({"background-color":"#ffffff"});
    	 $("#open_machinenum"+i).css({"background-color":"#ffffff"});
    	 $("#single_bet"+i).prop("disabled", false);
    	 $("#bet_level"+i).prop("disabled", false);
    	 $("#luckymoney_level"+i).prop("disabled", false);
    	 $("#outsidegifts_switch"+i).prop("disabled", false);
    	 $("#page_name"+i).prop("disabled", false);
    	 $("#open_machinenum"+i).prop("disabled", false);
    }
    else
    {
    	 //alert('Unchecked');
    	 $("#single_bet"+i).css({"background-color":"#cccccc"});
    	 $("#bet_level"+i).css({"background-color":"#cccccc"});
    	 $("#luckymoney_level"+i).css({"background-color":"#cccccc"});
    	 $("#outsidegifts_switch"+i).css({"background-color":"#cccccc"});
    	 $("#page_name"+i).css({"background-color":"#cccccc"});
    	 $("#open_machinenum"+i).css({"background-color":"#cccccc"});
    	 $("#single_bet"+i).prop("disabled", true);
    	 $("#bet_level"+i).prop("disabled", true);
    	 $("#luckymoney_level"+i).prop("disabled", true);
    	 $("#outsidegifts_switch"+i).prop("disabled", true);
    	 $("#page_name"+i).prop("disabled", true);
    	 $("#open_machinenum"+i).prop("disabled", true);
    }
  }
}*/

function howmanyscoremachineStyle()
{
  //alert("aaaaa");
	//if($(this).is(":checked"))
	for(var i=1;i<=4;i++)
	{
	  if($("#howmanyscoremachine #switch_g"+i).is(":checked"))
	  {
	  	//alert('checked');
	  	//alert(i);
	  	//alert($("#single_bet"+i).data('val'))
	  	$("#single_bet"+i).css({"background-color":"#ffffff"});
      if($("#single_bet"+i).data('val'))
      {
        if($("#single_bet"+i).data('val')!=$("#single_bet"+i).val())
          $("#single_bet"+i).css({"background-color":"#ffff88"});
        else
          $("#single_bet"+i).css({"background-color":"#ffffff"});
      }
      else
      	$("#single_bet"+i).css({"background-color":"#ffffff"});
	  	$("#single_bet"+i).prop("disabled", false);
      /***************************************************************/
      if($("#bet_level"+i).data('val'))
      {
        if($("#bet_level"+i).data('val')!=$("#bet_level"+i).val())
          $("#bet_level"+i).css({"background-color":"#ffff88"});
        else
          $("#bet_level"+i).css({"background-color":"#ffffff"});
      }
      else
      	$("#bet_level"+i).css({"background-color":"#ffffff"});
	  	$("#bet_level"+i).prop("disabled", false);
      /***************************************************************/
      if($("#luckymoney_level"+i).data('val'))
      {
        if($("#luckymoney_level"+i).data('val')!=$("#luckymoney_level"+i).val())
          $("#luckymoney_level"+i).css({"background-color":"#ffff88"});
        else
          $("#luckymoney_level"+i).css({"background-color":"#ffffff"});
      }
      else
      	$("#luckymoney_level"+i).css({"background-color":"#ffffff"});
	  	$("#luckymoney_level"+i).prop("disabled", false);
      /***************************************************************/
      if($("#page_name"+i).data('val'))
      {
        if($("#page_name"+i).data('val')!=$("#page_name"+i).val())
          $("#page_name"+i).css({"background-color":"#ffff88"});
        else
          $("#page_name"+i).css({"background-color":"#ffffff"});
      }
      else
      	$("#page_name"+i).css({"background-color":"#ffffff"});
	  	$("#page_name"+i).prop("disabled", false);
      /***************************************************************/
      if($("#open_machinenum"+i).data('val'))
      {
        if($("#open_machinenum"+i).data('val')!=$("#open_machinenum"+i).val())
          $("#open_machinenum"+i).css({"background-color":"#ffff88"});
        else
          $("#open_machinenum"+i).css({"background-color":"#ffffff"});
      }
      else
      	$("#open_machinenum"+i).css({"background-color":"#ffffff"});
	  	$("#open_machinenum"+i).prop("disabled", false);
	  }
	  else
	  {
	  	//alert('Unchecked');
	  	$("#single_bet"+i).css({"background-color":"#cccccc"});
	  	$("#single_bet"+i).prop("disabled", true);
	  	$("#bet_level"+i).css({"background-color":"#cccccc"});
	  	$("#bet_level"+i).prop("disabled", true);
	  	$("#luckymoney_level"+i).css({"background-color":"#cccccc"});
	  	$("#luckymoney_level"+i).prop("disabled", true);
	  	$("#outsidegifts_switch"+i).css({"background-color":"#cccccc"});
	  	$("#outsidegifts_switch"+i).prop("disabled", true);
	  	$("#page_name"+i).css({"background-color":"#cccccc"});
	  	$("#page_name"+i).prop("disabled", true);
	  	$("#open_machinenum"+i).css({"background-color":"#cccccc"});
	  	$("#open_machinenum"+i).prop("disabled", true);
	  }
	}
}

function queryResult()
{
  //alert('queryResult selecteditems = '+JSON.stringify(selecteditems));
	var s='';

  $('#div_subjectquery').empty();
  if(selecteditems.length!=0)
  {
    s+="<table>";
  	for(var i=0;i<selecteditems.length;i++)
  	{
  		//alert(Object.keys(selecteditems[i])[0]);
  		//alert(selecteditems[i][Object.keys(selecteditems[i])[0]]);
      if(!(i%2))
        s+="<tr><td>";
      s+=selecteditems[i][Object.keys(selecteditems[i])[0]];
      if((i%2))
        s+="</td></tr>";
      //$("#subjectquery_"+Object.keys(selecteditems[i])[0]+" .collapsible-header").css({"background-color":"#ffffff"});
      //$("#subjectquery_"+Object.keys(selecteditems[i])[0]+" .collapsible-body").css({"background-color":"#ffffff"});
    }
    s+="</table>";
  }
  //alert('queryResult s ==> '+s);
  $('#div_subjectquery').html(s);
  sec=0;
  clearInterval(updateperiod);
  updateperiod=setInterval("clock()",1000);

/* Add event initialization -- Begin */
  /*** Important --- must add the following codes to activiate Collapsible ***/
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  if($("#ckb_largest_winscore").is(":checked"))
  {
     $("#largest_winscore").css({"background-color":"#ffffff"});
     $("#largest_winscore").prop('disabled',false);
  }
  else
  {
     $("#largest_winscore").css({"background-color":"#cccccc"});
     $("#largest_winscore").prop('disabled',true);
  }

  if($("#ckb_compensate").is(":checked"))
  {
     $("#compensate_set").css({"background-color":"#ffffff"});
     $("#compensate_set").prop('disabled',false);
  }
  else
  {
     $("#compensate_set").css({"background-color":"#cccccc"});
     $("#compensate_set").prop('disabled',true);
  }
  //$("#howmanyscoremachine #ckb_howmanyscore0").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore1").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore2").trigger("click");
  //$("#howmanyscoremachine #ckb_howmanyscore3").trigger("click");
  howmanyscoremachineStyle();

  /* Add event initialization -- End */
  /* Add event listener -- Begin */
  $("#howmanyscoremachine input[type='checkbox']").change(function()
  {
     howmanyscoremachineStyle();
  });

  $("#ckb_largest_winscore").click(function()
  {
  	//alert('ckb_largest_winscore is clicked');
    if($(this).is(":checked"))
    {
    	if($("#largest_winscore").data('val'))
    	{
        if($("#largest_winscore").data('val')!=$("#largest_winscore").val())
          $("#largest_winscore").css({"background-color":"#ffff88"});
        else
          $("#largest_winscore").css({"background-color":"#ffffff"});
      }
      else
      	$("#largest_winscore").css({"background-color":"#ffffff"});
      $("#largest_winscore").prop('disabled',false);
    }
    else
    {
       $("#largest_winscore").css({"background-color":"#cccccc"});
       $("#largest_winscore").prop('disabled',true);
    }
  });
  
  $("#ckb_compensate").click(function()
  {
    if($(this).is(":checked"))
    {
    	if($("#compensate_set").data('val'))
    	{
        if($("#compensate_set").data('val')!=$("#compensate_set").val())
          $("#compensate_set").css({"background-color":"#ffff88"});
        else
          $("#compensate_set").css({"background-color":"#ffffff"});
      }
      else
      	$("#compensate_set").css({"background-color":"#ffffff"});
      $("#compensate_set").prop('disabled',false);
    }
    else
    {
       $("#compensate_set").css({"background-color":"#cccccc"});
       $("#compensate_set").prop('disabled',true);
    }
  });

  Highlight_ValueChangedField();
  /*$(function() {
    // Handler for .ready() called.
  	$("input").data('val', $("input").val());
  	console.log("Saving value " + $("input").val());
  });*/
  /* Add event listener -- End */

}
