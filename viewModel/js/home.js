  var gData;
  $.getJSON('/js/status_data.json', function(data) {
  	//alert(JSON.stringify(data));
  	gData=data;
    //arrayServerStatus = data.arrayServerStatus;
    //arrayGameStatus = data.arrayGameStatus;
    //arrayTodayOperateStatus = data.arrayTodayOperateStatus;
    genField('ServerStatus');
    genField('GameStatus');
    genField('TodayOperateStatus');
  });

  function genField(classify)
  {
  	//alert(classify);
  	var s='';
  	if(classify=='ServerStatus')
  	{
  	  $('#serverstatus').empty();
      s+="<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-right:15px;\">";
      s+="  <thead>";
      s+="    <tr class=\"no_background\">";
      s+="    	<th colspan=2 style=\"color:black;text-align:left;background-color:#cccccc;\">伺服器狀況</th>";
      s+="    </tr>";
      s+="  </thead>";
      s+="  <tbody>";
      s+="      <tr>";
      s+="         <td class=\"table_tr_td_border\">伺服器名稱</td>";
      s+="         <td class=\"table_tr_td_border\">狀態</td>";
      s+="      </tr>";
      $.each(gData.arrayServerStatus, function(i,v) {
        s+="      <tr>";
        s+="         <td class=\"table_tr_td_border no_background\" style=\"color:black;\">"+v.name+"</td>";
        if(v.status=='正常')
        {
           s+="      <td class=\"table_tr_td_border no_background\"><img src=\"/images/green.png\"></td>";
        }
        else
        {
           s+="      <td class=\"table_tr_td_border no_background\"><img src=\"/images/red.png\"></td>";
        }
        s+="      </tr>";
      });
      s+="  </tbody>";
      s+="</table>";
      $('#serverstatus').html(s);
    }

  	if(classify=='GameStatus')
  	{
  	  $('#gamestatus').empty();
      s+="<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-right:15px;\">";
      s+="  <thead>";
      s+="    <tr class=\"no_background\">";
      s+="    	<th colspan=7 style=\"color:black;text-align:left;background-color:#cccccc;\">遊戲狀況</th>";
      s+="    </tr>";
      s+="  </thead>";
      s+="  <tbody>";
      s+="      <tr>";
      s+="          <td class=\"table_tr_td_border\">編號</td>";
      s+="          <td class=\"table_tr_td_border\">遊戲名稱</td>";
      s+="          <td class=\"table_tr_td_border\">狀態</td>";
      s+="          <td class=\"table_tr_td_border\">人數</td>";
      s+="          <td class=\"table_tr_td_border\">測試人數</td>";
      s+="          <td class=\"table_tr_td_border\">押分</td>";
      s+="          <td class=\"table_tr_td_border\">最後輸贏</td>";
      s+="      </tr>";
      $.each(gData.arrayGameStatus, function(i,v) {
        s+="          <tr>";
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">"+(i+1)+"</td>";
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">"+v.name+"</td>";
                 if(v.status=='正常')
                 {
        s+="            <td class=\"table_tr_td_border no_background\"><img src=\"/images/green.png\"></td>";
                 }
                 else
                 {
        s+="          	<td class=\"table_tr_td_border no_background\"><img src=\"/images/red.png\"></td>";
                 }
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">" + v.num_of_people + "</td>";
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">" + v.num_of_tester + "</td>";
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">" + v.charge_points + "</td>";
        s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">" + v.final_winlose + "</td>";
        s+="          </tr>";
      });
      s+="  </tbody>";
      s+="</table>";
      $('#gamestatus').html(s);
    }

  	if(classify=='TodayOperateStatus')
  	{
  	  $('#todayoperatestatus').empty();
      s+="<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">";
      s+="   <thead>";
      s+="    <tr class='no_background'>";
      s+="    	<th colspan=2 style='color:black;text-align:left;background-color:#cccccc;'>本日營運數據</th>";
      s+="    </tr>";
      s+="   </thead>";
      s+="   <tbody>";
      s+="      <tr>";
      s+="          <td class='table_tr_td_border'>項目</td>";
      s+="          <td class='table_tr_td_border'>今日數據</td>";
      s+="      </tr>";
      
      $.each(gData.arrayTodayOperateStatus, function(i,v) {
      s+="          <tr>";
      s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">"+v.item+"</td>";
      s+="          <td class=\"table_tr_td_border no_background\" style=\"color:black;\">"+v.data+"</td>";
      s+="          </tr>";
      });
      s+="   </tbody>";
      s+="</table>";
      $('#todayoperatestatus').html(s);
    }
  }

var sec=0;
var updateperiod;
function clock()
{
	sec++;
  $("#sec").html(toHHMMSS(sec)+"&nbsp;之前");
}
updateperiod=setInterval("clock()",1000);
