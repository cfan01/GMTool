/*{
   "Available_Field_Options" : ["GBID","註冊手機","註冊入口","註冊時間","暱稱","預設暱稱","人氣指數","會員級別","下月級別","前兩月儲值",
                               "前兩月押分","LV","累積經驗值","目前G幣","開運金","總寶物數量","虛寶卡數量","道具數量","姓名","E-mail",
                               "身分證字號","生日","年齡","轉點總次數","轉出總次數","轉入總次數","轉點總金額","轉出總金額","轉入總金額","轉點手續費",
                               "總儲值次數","總儲值金額NT$","儲值金額NT$_GP","儲值金額NT$_MA","儲值金額NT$_Web","儲值金額NT$_小額","儲值金額NT$_通路卡","儲值金額NT$_IOS","帳號狀態","開始停權時間",
                               "聊天狀態","開始禁言時間","異動說明","最後登入平台","會員位置","最後登入時間","最後登出時間","登入次數","累積登入時間","累積遊戲時間",
                               "最後IP","個人RTP","機率名單","輸贏淨得","總押分","總押分_G幣","總押分_開運金","總得分","最後總得分_G幣","最後總得分_開運金",
                               "總外贈得分","最後總得分","遊戲局數","SLOTS局數","牌桌類局數","某類1Game局數","某類2Game局數","比倍總次數","比倍總得分","JP總次數",
                               "JP總得分","本月押分","本月儲值NT$","本月轉出額","本月轉入額","上月轉出額","上月轉入額","轉點總人數","後台修改G幣","後台修改開運金",
                               "地址","性別"
                             ],
  "Basic_Form_Selected_Field_Options" : ["GBID","暱稱","註冊入口","註冊手機","會員位置","LV","會員級別","目前G幣","開運金","帳號狀態","聊天狀態"],
  "Game_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","機率名單","個人RTP","總押分","總得分","總外贈得分","JP總得分","最後總得分","輸贏淨得","遊戲局數"],
  "Gift_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","目前G幣","開運金","總儲值次數","總儲值金額NT$","儲值金額NT$_GP","儲值金額NT$_MA","儲值金額NT$_Web"],
  "Point_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","目前G幣","轉點總次數","轉出總金額","轉入總金額","轉點手續費"],
  "Login_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","LV","目前G幣","會員位置","註冊入口","最後登入平台","最後登入時間","登入次數","累積登入時間","累積遊戲時間"],
  "Basic_Form_Nonmove_Options" : ["GBID","暱稱","註冊入口","會員級別","目前G幣"]
}
*/

var aid = "            <tr>"+
           "              <td style='width:4%'>"+
           "              	<input type='checkbox' name='ckb_aid' id='ckb_aid' class='filled-in'><\/input>"+
           "                <label for='ckb_aid'><\/label>"+
           "              <\/td>"+
           "              <td style='width:16%'>GameBarID<\/td>"+
           "              <td>"+
           "              	 <input type='text' id='aid' name='aid' maxlength=9 style='width:55%;text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
           "              <\/td>"+
           "            <\/tr>";

var registermobile = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_registermobile' id='ckb_registermobile' class='filled-in'><\/input>"+
                     "                <label for='ckb_registermobile'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>註冊手機<\/td>"+
                     "              <td>"+
                     "              	 <input type='text' id='registermobile' name='registermobile' maxlength=10 style='width:55%;text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "              <\/td>"+
                     "            <\/tr>";

var regentry = "            <tr>"+
               "              <td style='width:4%'>"+
               "              	<input type='checkbox' name='ckb_regentry' id='ckb_regentry' class='filled-in'><\/input>"+
               "                <label for='ckb_regentry'><\/label>"+
               "              <\/td>"+
               "              <td style='width:10%'>註冊入口<\/td>"+
               "              <td>"+
               "              	<div id='sdiv_regentry' style='width:10%;float:left'>"+
               "                 <select id='sel_regentry' name='sel_regentry'>"+
               "                   <option value='superadmin'>測試用<\/option>"+
               "                   <option value='admin'>AnGP<\/option>"+
               "                   <option value='user'>AnMa<\/option>"+
               "                   <option value='user'>IOS<\/option>"+
               "                   <option value='user'>WEB<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='regentry_more' style='float:left;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_regentry1',1);"+
               "                                                               showHide('regentry_or',1);"+
               "                                                               showHide('regentry_more',0);"+
               "                                                               showHide('regentry_more1',1);"+
               "                                                               showHide('regentry_less',1)\">"+
               "                <\/div>"+
               "                <div id='regentry_or' style='float:left;display:none;'>"+
               "                 &nbsp;or&nbsp;"+
               "                <\/div>"+
               "              	<div id='sdiv_regentry1' style='width:10%;float:left;display:none;'>"+
               "                 <select id='sel_regentry1' name='sel_regentry1'>"+
               "                   <option value='superadmin'>測試用<\/option>"+
               "                   <option value='admin'>AnGP<\/option>"+
               "                   <option value='user'>AnMa<\/option>"+
               "                   <option value='user'>IOS<\/option>"+
               "                   <option value='user'>WEB<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='regentry_more1' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_regentry2',1);"+
               "                                                               showHide('regentry_or1',1);"+
               "                                                               showHide('regentry_more1',0);"+
               "                                                               showHide('regentry_more2',1);"+
               "                                                               showHide('regentry_less',0);"+
               "                                                               showHide('regentry_less1',1);\">"+
               "                <\/div>"+
               "                <div id='regentry_or1' style='float:left;display:none;'>"+
               "                 &nbsp;or&nbsp;"+
               "                <\/div>"+
               "                <div id='regentry_less' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_regentry1',0);"+
               "                                                               showHide('regentry_or',0);"+
               "                                                               showHide('regentry_more',1);"+
               "                                                               showHide('regentry_more1',0);"+
               "                                                               showHide('regentry_less',0)\">"+
               "                <\/div>"+
               "              	<div id='sdiv_regentry2' style='width:10%;float:left;display:none;'>"+
               "                 <select id='sel_regentry2' name='sel_regentry2'>"+
               "                   <option value='superadmin'>測試用<\/option>"+
               "                   <option value='admin'>AnGP<\/option>"+
               "                   <option value='user'>AnMa<\/option>"+
               "                   <option value='user'>IOS<\/option>"+
               "                   <option value='user'>WEB<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='regentry_more2' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_regentry3',1);"+
               "                                                               showHide('regentry_or2',1);"+
               "                                                               showHide('regentry_more2',0);"+
               "                                                               showHide('regentry_less1',0);"+
               "                                                               showHide('regentry_less2',1);\">"+
               "                <\/div>"+
               "                <div id='regentry_or2' style='float:left;display:none;'>"+
               "                 &nbsp;or&nbsp;"+
               "                <\/div>"+
               "                <div id='regentry_less1' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_regentry2',0);"+
               "                                                               showHide('regentry_or1',0);"+
               "                                                               showHide('regentry_less1',0);"+
               "                                                               showHide('regentry_more2',0);"+
               "                                                               showHide('regentry_less',1);"+
               "                                                               showHide('regentry_more1',1);\">"+
               "                <\/div>"+
               "              	<div id='sdiv_regentry3' style='width:10%;float:left;display:none;'>"+
               "                 <select id='sel_regentry3' name='sel_regentry3'>"+
               "                   <option value='superadmin'>測試用<\/option>"+
               "                   <option value='admin'>AnGP<\/option>"+
               "                   <option value='user'>AnMa<\/option>"+
               "                   <option value='user'>IOS<\/option>"+
               "                   <option value='user'>WEB<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='regentry_less2' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_regentry3',0);"+
               "                                                               showHide('regentry_less2',0);"+
               "                                                               showHide('regentry_or2',0);"+
               "                                                               showHide('regentry_more2',1);"+
               "                                                               showHide('regentry_less1',1);\">"+
               "                <\/div>"+
               "              <\/td>"+
               "            <\/tr>";

var registertime = "            <tr>"+
                   "              <td style='width:4%'>"+
                   "              	<input type='checkbox' name='ckb_registertime' id='ckb_registertime' class='filled-in'><\/input>"+
                   "                <label for='ckb_registertime'><\/label>"+
                   "              <\/td>"+
                   "              <td style='width:10%'>註冊時間<\/td>"+
                   "              <td>"+
                   "              	 <input type='text' id='fregistertime' name='fregistertime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                   "              	 <input type=\"text\" id='tregistertime' name='tregistertime' style='text-align:center;width:25%'>"+
                   "              <\/td>"+
                   "            <\/tr>";

var nickname = "            <tr>"+
               "              <td style='width:4%'>"+
               "              	<input type='checkbox' name='ckb_nickname' id='ckb_nickname' class='filled-in'><\/input>"+
               "                <label for='ckb_nickname'><\/label>"+
               "              <\/td>"+
               "              <td style='width:10%'>暱稱<\/td>"+
               "              <td>"+
               "              	 <input type='text' id='nickname' name='nickname' style='width:55%;text-align:center;' maxlength=12><\/input>"+
               "              <\/td>"+
               "            <\/tr>";

var defaultnickname = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_defaultnickname' id='ckb_defaultnickname' class='filled-in'><\/input>"+
                      "                <label for='ckb_defaultnickname'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>預設暱稱<\/td>"+
                      "              <td>"+
                      "              	 <input type='text' id='defaultnickname' name='defaultnickname' style='width:55%;text-align:center;' maxlength=12><\/input>"+
                      "              <\/td>"+
                      "            <\/tr>";

var popularityindex = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_popularityindex' id='ckb_popularityindex' class='filled-in'><\/input>"+
                      "                <label for='ckb_popularityindex'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>人氣指數<\/td>"+
                      "              <td>"+
                      "              	<div id='sdiv_popularityindex' style='width:5%;float:left'>"+
                      "                 <select id='sel_popularityindex' name='sel_popularityindex'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='popularityindex_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_popularityindex' style='width:16%;float:left'>"+
                      "                 <input type='text' id='popularityindex' name='popularityindex' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='popularityindex_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_popularityindex1',1);"+
                      "                                                               showHide('popularityindex_space1',1);"+
                      "                                                               showHide('tdiv_popularityindex1',1);"+
                      "                                                               showHide('popularityindex_and',1);"+
                      "                                                               showHide('popularityindex_more',0);"+
                      "                                                               showHide('popularityindex_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='popularityindex_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='sdiv_popularityindex1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='sel_popularityindex1' name='sel_popularityindex1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='popularityindex_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_popularityindex1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='popularityindex1' name='popularityindex1' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='popularityindex_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_popularityindex1',0);"+
                      "                                                               showHide('popularityindex_space1',0);"+
                      "                                                               showHide('tdiv_popularityindex1',0);"+
                      "                                                               showHide('popularityindex_and',0);"+
                      "                                                               showHide('popularityindex_more',1);"+
                      "                                                               showHide('popularityindex_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var memberlevel = "            <tr>"+
                  "              <td style='width:4%'>"+
                  "              	<input type='checkbox' name='ckb_memberlevel' id='ckb_memberlevel' class='filled-in'><\/input>"+
                  "                <label for='ckb_memberlevel'><\/label>"+
                  "              <\/td>"+
                  "              <td style='width:10%'>會員級別<\/td>"+
                  "              <td>"+
                  "              	<div id='sdiv_memberlevel' style='width:10%;float:left'>"+
                  "                 <select id='sel_memberlevel' name='sel_memberlevel'>"+
                  "                   <option value='normal'>一般<\/option>"+
                  "                   <option value='whitediamond'>白鑽<\/option>"+
                  "                   <option value='bluediamond'>藍鑽<\/option>"+
                  "                   <option value='reddiamond'>紅鑽<\/option>"+
                  "                   <option value='goldendiamond'>金鑽<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='memberlevel_more' style='float:left;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_memberlevel1',1);"+
                  "                                                               showHide('memberlevel_or',1);"+
                  "                                                               showHide('memberlevel_more',0);"+
                  "                                                               showHide('memberlevel_more1',1);"+
                  "                                                               showHide('memberlevel_less',1)\">"+
                  "                <\/div>"+
                  "                <div id='memberlevel_or' style='float:left;display:none;'>"+
                  "                 &nbsp;or&nbsp;"+
                  "                <\/div>"+
                  "              	<div id='sdiv_memberlevel1' style='width:10%;float:left;display:none;'>"+
                  "                 <select id='sel_memberlevel1' name='sel_memberlevel1'>"+
                  "                   <option value='normal'>一般<\/option>"+
                  "                   <option value='whitediamond'>白鑽<\/option>"+
                  "                   <option value='bluediamond'>藍鑽<\/option>"+
                  "                   <option value='reddiamond'>紅鑽<\/option>"+
                  "                   <option value='goldendiamond'>金鑽<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='memberlevel_more1' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_memberlevel2',1);"+
                  "                                                               showHide('memberlevel_or1',1);"+
                  "                                                               showHide('memberlevel_more1',0);"+
                  "                                                               showHide('memberlevel_more2',1);"+
                  "                                                               showHide('memberlevel_less',0);"+
                  "                                                               showHide('memberlevel_less1',1);\">"+
                  "                <\/div>"+
                  "                <div id='memberlevel_or1' style='float:left;display:none;'>"+
                  "                 &nbsp;or&nbsp;"+
                  "                <\/div>"+
                  "                <div id='memberlevel_less' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_memberlevel1',0);"+
                  "                                                               showHide('memberlevel_or',0);"+
                  "                                                               showHide('memberlevel_more',1);"+
                  "                                                               showHide('memberlevel_more1',0);"+
                  "                                                               showHide('memberlevel_less',0)\">"+
                  "                <\/div>"+
                  "              	<div id='sdiv_memberlevel2' style='width:10%;float:left;display:none;'>"+
                  "                 <select id='sel_memberlevel2' name='sel_memberlevel2'>"+
                  "                   <option value='normal'>一般<\/option>"+
                  "                   <option value='whitediamond'>白鑽<\/option>"+
                  "                   <option value='bluediamond'>藍鑽<\/option>"+
                  "                   <option value='reddiamond'>紅鑽<\/option>"+
                  "                   <option value='goldendiamond'>金鑽<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='memberlevel_more2' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_memberlevel3',1);"+
                  "                                                               showHide('memberlevel_or2',1);"+
                  "                                                               showHide('memberlevel_more2',0);"+
                  "                                                               showHide('memberlevel_less1',0);"+
                  "                                                               showHide('memberlevel_less2',1);\">"+
                  "                <\/div>"+
                  "                <div id='memberlevel_or2' style='float:left;display:none;'>"+
                  "                 &nbsp;or&nbsp;"+
                  "                <\/div>"+
                  "                <div id='memberlevel_less1' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_memberlevel2',0);"+
                  "                                                               showHide('memberlevel_or1',0);"+
                  "                                                               showHide('memberlevel_less1',0);"+
                  "                                                               showHide('memberlevel_more2',0);"+
                  "                                                               showHide('memberlevel_less',1);"+
                  "                                                               showHide('memberlevel_more1',1);\">"+
                  "                <\/div>"+
                  "              	<div id='sdiv_memberlevel3' style='width:10%;float:left;display:none;'>"+
                  "                 <select id='sel_memberlevel3' name='sel_memberlevel3'>"+
                  "                   <option value='normal'>一般<\/option>"+
                  "                   <option value='whitediamond'>白鑽<\/option>"+
                  "                   <option value='bluediamond'>藍鑽<\/option>"+
                  "                   <option value='reddiamond'>紅鑽<\/option>"+
                  "                   <option value='goldendiamond'>金鑽<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='memberlevel_less2' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_memberlevel3',0);"+
                  "                                                               showHide('memberlevel_less2',0);"+
                  "                                                               showHide('memberlevel_or2',0);"+
                  "                                                               showHide('memberlevel_more2',1);"+
                  "                                                               showHide('memberlevel_less1',1);\">"+
                  "                <\/div>"+
                  "              <\/td>"+
                  "            <\/tr>";

var nextmonmemberlevel = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_nextmonmemberlevel' id='ckb_nextmonmemberlevel' class='filled-in'><\/input>"+
                         "                <label for='ckb_nextmonmemberlevel'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>下月級別<\/td>"+
                         "              <td>"+
                         "              	<div id='sdiv_nextmonmemberlevel' style='width:10%;float:left'>"+
                         "                 <select id='sel_nextmonmemberlevel' name='sel_nextmonmemberlevel'>"+
                         "                   <option value='normal'>一般<\/option>"+
                         "                   <option value='whitediamond'>白鑽<\/option>"+
                         "                   <option value='bluediamond'>藍鑽<\/option>"+
                         "                   <option value='reddiamond'>紅鑽<\/option>"+
                         "                   <option value='goldendiamond'>金鑽<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_more' style='float:left;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_nextmonmemberlevel1',1);"+
                         "                                                               showHide('nextmonmemberlevel_or',1);"+
                         "                                                               showHide('nextmonmemberlevel_more',0);"+
                         "                                                               showHide('nextmonmemberlevel_more1',1);"+
                         "                                                               showHide('nextmonmemberlevel_less',1)\">"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_or' style='float:left;display:none;'>"+
                         "                 &nbsp;or&nbsp;"+
                         "                <\/div>"+
                         "              	<div id='sdiv_nextmonmemberlevel1' style='width:10%;float:left;display:none;'>"+
                         "                 <select id='sel_nextmonmemberlevel1' name='sel_nextmonmemberlevel1'>"+
                         "                   <option value='normal'>一般<\/option>"+
                         "                   <option value='whitediamond'>白鑽<\/option>"+
                         "                   <option value='bluediamond'>藍鑽<\/option>"+
                         "                   <option value='reddiamond'>紅鑽<\/option>"+
                         "                   <option value='goldendiamond'>金鑽<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_more1' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_nextmonmemberlevel2',1);"+
                         "                                                            showHide('nextmonmemberlevel_or1',1);"+
                         "                                                            showHide('nextmonmemberlevel_more1',0);"+
                         "                                                            showHide('nextmonmemberlevel_more2',1);"+
                         "                                                            showHide('nextmonmemberlevel_less',0);"+
                         "                                                            showHide('nextmonmemberlevel_less1',1);\">"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_or1' style='float:left;display:none;'>"+
                         "                 &nbsp;or&nbsp;"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_less' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_nextmonmemberlevel1',0);"+
                         "                                                               showHide('nextmonmemberlevel_or',0);"+
                         "                                                               showHide('nextmonmemberlevel_more',1);"+
                         "                                                               showHide('nextmonmemberlevel_more1',0);"+
                         "                                                               showHide('nextmonmemberlevel_less',0)\">"+
                         "                <\/div>"+
                         "              	<div id='sdiv_nextmonmemberlevel2' style='width:10%;float:left;display:none;'>"+
                         "                 <select id='sel_nextmonmemberlevel2' name='sel_nextmonmemberlevel2'>"+
                         "                   <option value='normal'>一般<\/option>"+
                         "                   <option value='whitediamond'>白鑽<\/option>"+
                         "                   <option value='bluediamond'>藍鑽<\/option>"+
                         "                   <option value='reddiamond'>紅鑽<\/option>"+
                         "                   <option value='goldendiamond'>金鑽<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_more2' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_nextmonmemberlevel3',1);"+
                         "                                                               showHide('nextmonmemberlevel_or2',1);"+
                         "                                                               showHide('nextmonmemberlevel_more2',0);"+
                         "                                                               showHide('nextmonmemberlevel_less1',0);"+
                         "                                                               showHide('nextmonmemberlevel_less2',1);\">"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_or2' style='float:left;display:none;'>"+
                         "                 &nbsp;or&nbsp;"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_less1' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_nextmonmemberlevel2',0);"+
                         "                                                               showHide('nextmonmemberlevel_or1',0);"+
                         "                                                               showHide('nextmonmemberlevel_less1',0);"+
                         "                                                               showHide('nextmonmemberlevel_more2',0);"+
                         "                                                               showHide('nextmonmemberlevel_less',1);"+
                         "                                                               showHide('nextmonmemberlevel_more1',1);\">"+
                         "                <\/div>"+
                         "              	<div id='sdiv_nextmonmemberlevel3' style='width:10%;float:left;display:none;'>"+
                         "                 <select id='sel_nextmonmemberlevel3' name='sel_nextmonmemberlevel3'>"+
                         "                   <option value='normal'>一般<\/option>"+
                         "                   <option value='whitediamond'>白鑽<\/option>"+
                         "                   <option value='bluediamond'>藍鑽<\/option>"+
                         "                   <option value='reddiamond'>紅鑽<\/option>"+
                         "                   <option value='goldendiamond'>金鑽<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='nextmonmemberlevel_less2' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_nextmonmemberlevel3',0);"+
                         "                                                               showHide('nextmonmemberlevel_less2',0);"+
                         "                                                               showHide('nextmonmemberlevel_or2',0);"+
                         "                                                               showHide('nextmonmemberlevel_more2',1);"+
                         "                                                               showHide('nextmonmemberlevel_less1',1);\">"+
                         "                <\/div>"+
                         "              <\/td>"+
                         "            <\/tr>";

var prev2monthgift = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_prev2monthgift' id='ckb_prev2monthgift' class='filled-in'><\/input>"+
                     "                <label for='ckb_prev2monthgift'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>前兩月儲值<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_prev2monthgift' style='width:5%;float:left'>"+
                     "                 <select id='sel_prev2monthgift' name='sel_prev2monthgift'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='prev2monthgift_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_prev2monthgift' style='width:16%;float:left'>"+
                     "                 <input type='text' id='prev2monthgift' name='prev2monthgift' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='prev2monthgift_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_prev2monthgift1',1);"+
                     "                                                               showHide('prev2monthgift_space1',1);"+
                     "                                                               showHide('tdiv_prev2monthgift1',1);"+
                     "                                                               showHide('prev2monthgift_and',1);"+
                     "                                                               showHide('prev2monthgift_more',0);"+
                     "                                                               showHide('prev2monthgift_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='prev2monthgift_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_prev2monthgift1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_prev2monthgift1' name='sel_prev2monthgift1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='prev2monthgift_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_prev2monthgift1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='prev2monthgift1' name='prev2monthgift1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='prev2monthgift_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_prev2monthgift1',0);"+
                     "                                                               showHide('prev2monthgift_space1',0);"+
                     "                                                               showHide('tdiv_prev2monthgift1',0);"+
                     "                                                               showHide('prev2monthgift_and',0);"+
                     "                                                               showHide('prev2monthgift_more',1);"+
                     "                                                               showHide('prev2monthgift_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var prev2monthchargepoints = "            <tr>"+
                             "              <td style='width:4%'>"+
                             "              	<input type='checkbox' name='ckb_prev2monthchargepoints' id='ckb_prev2monthchargepoints' class='filled-in'><\/input>"+
                             "                <label for='ckb_prev2monthchargepoints'><\/label>"+
                             "              <\/td>"+
                             "              <td style='width:10%'>前兩月押分<\/td>"+
                             "              <td>"+
                             "              	<div id='sdiv_prev2monthchargepoints' style='width:5%;float:left'>"+
                             "                 <select id='sel_prev2monthchargepoints' name='sel_prev2monthchargepoints'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='prev2monthchargepoints_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='tdiv_prev2monthchargepoints' style='width:16%;float:left'>"+
                             "                 <input type='text' id='prev2monthchargepoints' name='prev2monthchargepoints' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='prev2monthchargepoints_more' style='float:left;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_prev2monthchargepoints1',1);"+
                             "                                                               showHide('prev2monthchargepoints_space1',1);"+
                             "                                                               showHide('tdiv_prev2monthchargepoints1',1);"+
                             "                                                               showHide('prev2monthchargepoints_and',1);"+
                             "                                                               showHide('prev2monthchargepoints_more',0);"+
                             "                                                               showHide('prev2monthchargepoints_less',1)\">"+
                             "                <\/div>"+
                             "                <div id='prev2monthchargepoints_and' style='float:left;display:none;'>"+
                             "                 &nbsp;and&nbsp;"+
                             "                <\/div>"+
                             "              	<div id='sdiv_prev2monthchargepoints1' style='width:5%;float:left;display:none;'>"+
                             "                 <select id='sel_prev2monthchargepoints1' name='sel_prev2monthchargepoints1'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='prev2monthchargepoints_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='tdiv_prev2monthchargepoints1' style='width:16%;float:left;display:none;'>"+
                             "                 <input type='text' id='prev2monthchargepoints1' name='prev2monthchargepoints1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='prev2monthchargepoints_less' style='float:left;display:none;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_prev2monthchargepoints1',0);"+
                             "                                                               showHide('prev2monthchargepoints_space1',0);"+
                             "                                                               showHide('tdiv_prev2monthchargepoints1',0);"+
                             "                                                               showHide('prev2monthchargepoints_and',0);"+
                             "                                                               showHide('prev2monthchargepoints_more',1);"+
                             "                                                               showHide('prev2monthchargepoints_less',0)\">"+
                             "                <\/div>"+
                             "              <\/td>"+
                             "            <\/tr>";

var lv = "            <tr>"+
         "              <td style='width:4%'>"+
         "              	<input type='checkbox' name='ckb_lv' id='ckb_lv' class='filled-in'><\/input>"+
         "                <label for='ckb_lv'><\/label>"+
         "              <\/td>"+
         "              <td style='width:10%'>LV<\/td>"+
         "              <td>"+
         "              	<div id='sdiv_lv' style='width:5%;float:left'>"+
         "                 <select id='sel_lv' name='sel_lv'>"+
         "                   <option value='gt'>≧<\/option>"+
         "                   <option value='lt'>≦<\/option>"+
         "                   <option value='eq'>=<\/option>"+
         "                   <option value='neq'>≠<\/option>"+
         "                 <\/select>"+
         "                <\/div>"+
         "                <div id='lv_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
         "                <div id='tdiv_lv' style='width:16%;float:left'>"+
         "                 <input type='text' id='lv' name='lv' maxlength=5 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
         "                <\/div>"+
         "                <div id='lv_more' style='float:left;cursor:pointer;'>"+
         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_lv1',1);"+
         "                                                            showHide('lv_space1',1);"+
         "                                                            showHide('tdiv_lv1',1);"+
         "                                                            showHide('lv_and',1);"+
         "                                                            showHide('lv_more',0);"+
         "                                                            showHide('lv_less',1)\">"+
         "                <\/div>"+
         "                <div id='lv_and' style='float:left;display:none;'>"+
         "                 &nbsp;and&nbsp;"+
         "                <\/div>"+
         "              	<div id='sdiv_lv1' style='width:5%;float:left;display:none;'>"+
         "                 <select id='sel_lv1' name='sel_lv1'>"+
         "                   <option value='gt'>≧<\/option>"+
         "                   <option value='lt'>≦<\/option>"+
         "                   <option value='eq'>=<\/option>"+
         "                   <option value='neq'>≠<\/option>"+
         "                 <\/select>"+
         "                <\/div>"+
         "                <div id='lv_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
         "                <div id='tdiv_lv1' style='width:16%;float:left;display:none;'>"+
         "                 <input type='text' id='lv1' name='lv1' maxlength=5 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
         "                <\/div>"+
         "                <div id='lv_less' style='float:left;display:none;cursor:pointer;'>"+
         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_lv1',0);"+
         "                                                            showHide('lv_space1',0);"+
         "                                                            showHide('tdiv_lv1',0);"+
         "                                                            showHide('lv_and',0);"+
         "                                                            showHide('lv_more',1);"+
         "                                                            showHide('lv_less',0)\">"+
         "                <\/div>"+
         "              <\/td>"+
         "            <\/tr>";

var accumulatedexperience = "            <tr>"+
                            "              <td style='width:4%'>"+
                            "              	<input type='checkbox' name='ckb_accumulatedexperience' id='ckb_accumulatedexperience' class='filled-in'><\/input>"+
                            "                <label for='ckb_accumulatedexperience'><\/label>"+
                            "              <\/td>"+
                            "              <td style='width:10%'>累積經驗值<\/td>"+
                            "              <td>"+
                            "              	<div id='sdiv_accumulatedexperience' style='width:5%;float:left'>"+
                            "                 <select id='sel_accumulatedexperience' name='sel_accumulatedexperience'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='accumulatedexperience_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='accumulatedexperience' style='width:16%;float:left'>"+
                            "                 <input type='text' id='accumulatedexperience' name='accumulatedexperience' maxlength=10 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==44||event.charCode==46)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='accumulatedexperience_more' style='float:left;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_accumulatedexperience1',1);"+
                            "                                                               showHide('accumulatedexperience_space1',1);"+
                            "                                                               showHide('tdiv_accumulatedexperience1',1);"+
                            "                                                               showHide('accumulatedexperience_and',1);"+
                            "                                                               showHide('accumulatedexperience_more',0);"+
                            "                                                               showHide('accumulatedexperience_less',1)\">"+
                            "                <\/div>"+
                            "                <div id='accumulatedexperience_and' style='float:left;display:none;'>"+
                            "                 &nbsp;and&nbsp;"+
                            "                <\/div>"+
                            "              	<div id='sdiv_accumulatedexperience1' style='width:5%;float:left;display:none;'>"+
                            "                 <select id='sel_accumulatedexperience1' name='sel_accumulatedexperience1'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='accumulatedexperience_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='tdiv_accumulatedexperience1' style='width:16%;float:left;display:none;'>"+
                            "                 <input type='text' id='accumulatedexperience1' name='accumulatedexperience1' maxlength=10 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==44)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='accumulatedexperience_less' style='float:left;display:none;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_accumulatedexperience1',0);"+
                            "                                                               showHide('accumulatedexperience_space1',0);"+
                            "                                                               showHide('tdiv_accumulatedexperience1',0);"+
                            "                                                               showHide('accumulatedexperience_and',0);"+
                            "                                                               showHide('accumulatedexperience_more',1);"+
                            "                                                               showHide('accumulatedexperience_less',0)\">"+
                            "                <\/div>"+
                            "              <\/td>"+
                            "            <\/tr>";

var nowGcurrency = "            <tr>"+
                   "              <td style='width:4%'>"+
                   "              	<input type='checkbox' name='ckb_nowGcurrency' id='ckb_nowGcurrency' class='filled-in'><\/input>"+
                   "                <label for='ckb_nowGcurrency'><\/label>"+
                   "              <\/td>"+
                   "              <td style='width:10%'>目前G幣<\/td>"+
                   "              <td>"+
                   "              	<div id='sdiv_nowGcurrency' style='width:5%;float:left'>"+
                   "                 <select id='sel_nowGcurrency' name='sel_nowGcurrency'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='nowGcurrency_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='tdiv_nowGcurrency' style='width:16%;float:left'>"+
                   "                 <input type='text' id='nowGcurrency' name='nowGcurrency' maxlength=12 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==46)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='nowGcurrency_more' style='float:left;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_nowGcurrency1',1);"+
                   "                                                               showHide('nowGcurrency_space1',1);"+
                   "                                                               showHide('tdiv_nowGcurrency1',1);"+
                   "                                                               showHide('nowGcurrency_and',1);"+
                   "                                                               showHide('nowGcurrency_more',0);"+
                   "                                                               showHide('nowGcurrency_less',1)\">"+
                   "                <\/div>"+
                   "                <div id='nowGcurrency_and' style='float:left;display:none;'>"+
                   "                 &nbsp;and&nbsp;"+
                   "                <\/div>"+
                   "              	<div id='sdiv_nowGcurrency1' style='width:5%;float:left;display:none;'>"+
                   "                 <select id='sel_nowGcurrency1' name='sel_nowGcurrency1'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='nowGcurrency_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='tdiv_nowGcurrency1' style='width:16%;float:left;display:none;'>"+
                   "                 <input type='text' id='nowGcurrency1' name='nowGcurrency1' maxlength=12 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==46)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='nowGcurrency_less' style='float:left;display:none;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_nowGcurrency1',0);"+
                   "                                                               showHide('nowGcurrency_space1',0);"+
                   "                                                               showHide('tdiv_nowGcurrency1',0);"+
                   "                                                               showHide('nowGcurrency_and',0);"+
                   "                                                               showHide('nowGcurrency_more',1);"+
                   "                                                               showHide('nowGcurrency_less',0)\">"+
                   "                <\/div>"+
                   "              <\/td>"+
                   "            <\/tr>";

var luckymoney = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_luckymoney' id='ckb_luckymoney' class='filled-in'><\/input>"+
                 "                <label for='ckb_luckymoney'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>開運金<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_luckymoney' style='width:5%;float:left'>"+
                 "                 <select id='sel_luckymoney' name='sel_luckymoney'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='luckymoney_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_luckymoney' style='width:16%;float:left'>"+
                 "                 <input type='text' id='luckymoney' name='luckymoney' maxlength=12 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==46)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='luckymoney_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_luckymoney1',1);"+
                 "                                                               showHide('luckymoney_space1',1);"+
                 "                                                               showHide('tdiv_luckymoney1',1);"+
                 "                                                               showHide('luckymoney_and',1);"+
                 "                                                               showHide('luckymoney_more',0);"+
                 "                                                               showHide('luckymoney_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='luckymoney_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_luckymoney1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_luckymoney1' name='sel_luckymoney1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='luckymoney_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_luckymoney1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='luckymoney1' name='luckymoney1' maxlength=12 style='text-align:center;' onkeypress='return ((event.charCode>=48&&event.charCode<=57)||event.charCode==46)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='luckymoney_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_luckymoney1',0);"+
                 "                                                               showHide('luckymoney_space1',0);"+
                 "                                                               showHide('tdiv_luckymoney1',0);"+
                 "                                                               showHide('luckymoney_and',0);"+
                 "                                                               showHide('luckymoney_more',1);"+
                 "                                                               showHide('luckymoney_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var totaltreasures = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_totaltreasures' id='ckb_totaltreasures' class='filled-in'><\/input>"+
                     "                <label for='ckb_totaltreasures'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>總寶物數量<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_totaltreasures' style='width:5%;float:left'>"+
                     "                 <select id='sel_totaltreasures' name='sel_totaltreasures'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='totaltreasures_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_totaltreasures' style='width:16%;float:left'>"+
                     "                 <input type='text' id='totaltreasures' name='totaltreasures' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='totaltreasures_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totaltreasures1',1);"+
                     "                                                               showHide('totaltreasures_space1',1);"+
                     "                                                               showHide('tdiv_totaltreasures1',1);"+
                     "                                                               showHide('totaltreasures_and',1);"+
                     "                                                               showHide('totaltreasures_more',0);"+
                     "                                                               showHide('totaltreasures_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='totaltreasures_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_totaltreasures1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_totaltreasures1' name='sel_totaltreasures1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='totaltreasures_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_totaltreasures1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='totaltreasures1' name='totaltreasures1' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='totaltreasures_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totaltreasures1',0);"+
                     "                                                               showHide('totaltreasures_space1',0);"+
                     "                                                               showHide('tdiv_totaltreasures1',0);"+
                     "                                                               showHide('totaltreasures_and',0);"+
                     "                                                               showHide('totaltreasures_more',1);"+
                     "                                                               showHide('totaltreasures_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var totalitems = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_totalitems' id='ckb_totalitems' class='filled-in'><\/input>"+
                 "                <label for='ckb_totalitems'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>虛寶卡數量<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_totalitems' style='width:5%;float:left'>"+
                 "                 <select id='sel_totalitems' name='sel_totalitems'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalitems_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalitems' style='width:16%;float:left'>"+
                 "                 <input type='text' id='totalitems' name='totalitems' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalitems_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalitems1',1);"+
                 "                                                               showHide('totalitems_space1',1);"+
                 "                                                               showHide('tdiv_totalitems1',1);"+
                 "                                                               showHide('totalitems_and',1);"+
                 "                                                               showHide('totalitems_more',0);"+
                 "                                                               showHide('totalitems_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='totalitems_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_totalitems1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_totalitems1' name='sel_totalitems1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalitems_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalitems1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='totalitems1' name='totalitems1' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalitems_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalitems1',0);"+
                 "                                                               showHide('totalitems_space1',0);"+
                 "                                                               showHide('tdiv_totalitems1',0);"+
                 "                                                               showHide('totalitems_and',0);"+
                 "                                                               showHide('totalitems_more',1);"+
                 "                                                               showHide('totalitems_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var totalprops = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_totalprops' id='ckb_totalprops' class='filled-in'><\/input>"+
                 "                <label for='ckb_totalprops'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>道具數量<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_totalprops' style='width:5%;float:left'>"+
                 "                 <select id='sel_totalprops' name='sel_totalprops'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalprops_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalprops' style='width:16%;float:left'>"+
                 "                 <input type='text' id='totalprops' name='totalprops' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalprops_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalprops1',1);"+
                 "                                                               showHide('totalprops_space1',1);"+
                 "                                                               showHide('tdiv_totalprops1',1);"+
                 "                                                               showHide('totalprops_and',1);"+
                 "                                                               showHide('totalprops_more',0);"+
                 "                                                               showHide('totalprops_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='totalprops_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_totalprops1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_totalprops1' name='sel_totalprops1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalprops_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalprops1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='totalprops1' name='totalprops1' maxlength=3 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalprops_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalprops1',0);"+
                 "                                                               showHide('totalprops_space1',0);"+
                 "                                                               showHide('tdiv_totalprops1',0);"+
                 "                                                               showHide('totalprops_and',0);"+
                 "                                                               showHide('totalprops_more',1);"+
                 "                                                               showHide('totalprops_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var name = "            <tr>"+
           "              <td style='width:4%'>"+
           "              	<input type='checkbox' name='ckb_name' id='ckb_name' class='filled-in'><\/input>"+
           "                <label for='ckb_name'><\/label>"+
           "              <\/td>"+
           "              <td style='width:10%'>姓名<\/td>"+
           "              <td>"+
           "              	 <input type='text' id='name' name='name' style='width:55%;text-align:center;' maxlength=12><\/input>"+
           "              <\/td>"+
           "            <\/tr>";

var email = "            <tr>"+
            "              <td style='width:4%'>"+
            "              	<input type='checkbox' name='ckb_email' id='ckb_email' class='filled-in'><\/input>"+
            "                <label for='ckb_email'><\/label>"+
            "              <\/td>"+
            "              <td style='width:10%'>E-mail<\/td>"+
            "              <td>"+
            "              	 <input type='text' id='email' name='email' style='width:55%;text-align:center;' maxlength=12><\/input>"+
            "              <\/td>"+
            "            <\/tr>";

var idcard_id = "            <tr>"+
                "              <td style='width:4%'>"+
                "              	<input type='checkbox' name='ckb_idcard_id' id='ckb_idcard_id' class='filled-in'><\/input>"+
                "                <label for='ckb_idcard_id'><\/label>"+
                "              <\/td>"+
                "              <td style='width:10%'>身分證字號<\/td>"+
                "              <td>"+
                "              	 <input type='text' id='idcard_id' name='idcard_id' style='width:55%;text-align:center;' maxlength=10><\/input>"+
                "              <\/td>"+
                "            <\/tr>";

var birthday = "            <tr>"+
               "              <td style='width:4%'>"+
               "              	<input type='checkbox' name='ckb_birthday' id='ckb_birthday' class='filled-in'><\/input>"+
               "                <label for='ckb_birthday'><\/label>"+
               "              <\/td>"+
               "              <td style='width:10%'>生日<\/td>"+
               "              <td>"+
               "              	 <input type='text' id='birthday' name='birthday' style='width:55%;text-align:center;' maxlength=12><\/input>"+
               "              <\/td>"+
               "            <\/tr>";

var age = "            <tr>"+
          "              <td style='width:4%'>"+
          "              	<input type='checkbox' name='ckb_age' id='ckb_age' class='filled-in'><\/input>"+
          "                <label for='ckb_age'><\/label>"+
          "              <\/td>"+
          "              <td style='width:10%'>年齡<\/td>"+
          "              <td>"+
          "              	<div id='sdiv_age' style='width:5%;float:left'>"+
          "                 <select id='sel_age' name='sel_age'>"+
          "                   <option value='gt'>≧<\/option>"+
          "                   <option value='lt'>≦<\/option>"+
          "                   <option value='eq'>=<\/option>"+
          "                   <option value='neq'>≠<\/option>"+
          "                 <\/select>"+
          "                <\/div>"+
          "                <div id='age_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
          "                <div id='tdiv_age' style='width:16%;float:left'>"+
          "                 <input type='text' id='age' name='age' maxlength=2 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
          "                <\/div>"+
          "                <div id='age_more' style='float:left;cursor:pointer;'>"+
          "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_age1',1);"+
          "                                                               showHide('age_space1',1);"+
          "                                                               showHide('tdiv_age1',1);"+
          "                                                               showHide('age_and',1);"+
          "                                                               showHide('age_more',0);"+
          "                                                               showHide('age_less',1)\">"+
          "                <\/div>"+
          "                <div id='age_and' style='float:left;display:none;'>"+
          "                 &nbsp;and&nbsp;"+
          "                <\/div>"+
          "              	<div id='sdiv_age1' style='width:5%;float:left;display:none;'>"+
          "                 <select id='sel_age1' name='sel_age1'>"+
          "                   <option value='gt'>≧<\/option>"+
          "                   <option value='lt'>≦<\/option>"+
          "                   <option value='eq'>=<\/option>"+
          "                   <option value='neq'>≠<\/option>"+
          "                 <\/select>"+
          "                <\/div>"+
          "                <div id='age_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
          "                <div id='tdiv_age1' style='width:16%;float:left;display:none;'>"+
          "                 <input type='text' id='age1' name='age1' maxlength=2 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
          "                <\/div>"+
          "                <div id='age_less' style='float:left;display:none;cursor:pointer;'>"+
          "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_age1',0);"+
          "                                                               showHide('age_space1',0);"+
          "                                                               showHide('tdiv_age1',0);"+
          "                                                               showHide('age_and',0);"+
          "                                                               showHide('age_more',1);"+
          "                                                               showHide('age_less',0)\">"+
          "                <\/div>"+
          "              <\/td>"+
          "            <\/tr>";

var pointstimes = "            <tr>"+
                  "              <td style='width:4%'>"+
                  "              	<input type='checkbox' name='ckb_pointstimes' id='ckb_pointstimes' class='filled-in'><\/input>"+
                  "                <label for='ckb_pointstimes'><\/label>"+
                  "              <\/td>"+
                  "              <td style='width:10%'>轉點總次數<\/td>"+
                  "              <td>"+
                  "              	<div id='sdiv_pointstimes' style='width:5%;float:left'>"+
                  "                 <select id='sel_pointstimes' name='sel_pointstimes'>"+
                  "                   <option value='gt'>≧<\/option>"+
                  "                   <option value='lt'>≦<\/option>"+
                  "                   <option value='eq'>=<\/option>"+
                  "                   <option value='neq'>≠<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='pointstimes_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                  "                <div id='tdiv_pointstimes' style='width:16%;float:left'>"+
                  "                 <input type='text' id='pointstimes' name='pointstimes' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                  "                <\/div>"+
                  "                <div id='pointstimes_more' style='float:left;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_pointstimes1',1);"+
                  "                                                               showHide('pointstimes_space1',1);"+
                  "                                                               showHide('tdiv_pointstimes1',1);"+
                  "                                                               showHide('pointstimes_and',1);"+
                  "                                                               showHide('pointstimes_more',0);"+
                  "                                                               showHide('pointstimes_less',1)\">"+
                  "                <\/div>"+
                  "                <div id='pointstimes_and' style='float:left;display:none;'>"+
                  "                 &nbsp;and&nbsp;"+
                  "                <\/div>"+
                  "              	<div id='sdiv_pointstimes1' style='width:5%;float:left;display:none;'>"+
                  "                 <select id='sel_pointstimes1' name='sel_pointstimes1'>"+
                  "                   <option value='gt'>≧<\/option>"+
                  "                   <option value='lt'>≦<\/option>"+
                  "                   <option value='eq'>=<\/option>"+
                  "                   <option value='neq'>≠<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='pointstimes_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                  "                <div id='tdiv_pointstimes1' style='width:16%;float:left;display:none;'>"+
                  "                 <input type='text' id='pointstimes1' name='pointstimes1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                  "                <\/div>"+
                  "                <div id='pointstimes_less' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_pointstimes1',0);"+
                  "                                                               showHide('pointstimes_space1',0);"+
                  "                                                               showHide('tdiv_pointstimes1',0);"+
                  "                                                               showHide('pointstimes_and',0);"+
                  "                                                               showHide('pointstimes_more',1);"+
                  "                                                               showHide('pointstimes_less',0)\">"+
                  "                <\/div>"+
                  "              <\/td>"+
                  "            <\/tr>";

var outstimes = "            <tr>"+
                "              <td style='width:4%'>"+
                "              	<input type='checkbox' name='ckb_outstimes' id='ckb_outstimes' class='filled-in'><\/input>"+
                "                <label for='ckb_outstimes'><\/label>"+
                "              <\/td>"+
                "              <td style='width:10%'>轉出總次數<\/td>"+
                "              <td>"+
                "              	<div id='sdiv_outstimes' style='width:5%;float:left'>"+
                "                 <select id='sel_outstimes' name='sel_outstimes'>"+
                "                   <option value='gt'>≧<\/option>"+
                "                   <option value='lt'>≦<\/option>"+
                "                   <option value='eq'>=<\/option>"+
                "                   <option value='neq'>≠<\/option>"+
                "                 <\/select>"+
                "                <\/div>"+
                "                <div id='outstimes_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                "                <div id='tdiv_outstimes' style='width:16%;float:left'>"+
                "                 <input type='text' id='outstimes' name='outstimes' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                "                <\/div>"+
                "                <div id='outstimes_more' style='float:left;cursor:pointer;'>"+
                "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_outstimes1',1);"+
                "                                                               showHide('outstimes_space1',1);"+
                "                                                               showHide('tdiv_outstimes1',1);"+
                "                                                               showHide('outstimes_and',1);"+
                "                                                               showHide('outstimes_more',0);"+
                "                                                               showHide('outstimes_less',1)\">"+
                "                <\/div>"+
                "                <div id='outstimes_and' style='float:left;display:none;'>"+
                "                 &nbsp;and&nbsp;"+
                "                <\/div>"+
                "              	<div id='sdiv_outstimes1' style='width:5%;float:left;display:none;'>"+
                "                 <select id='sel_outstimes1' name='sel_outstimes1'>"+
                "                   <option value='gt'>≧<\/option>"+
                "                   <option value='lt'>≦<\/option>"+
                "                   <option value='eq'>=<\/option>"+
                "                   <option value='neq'>≠<\/option>"+
                "                 <\/select>"+
                "                <\/div>"+
                "                <div id='outstimes_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                "                <div id='tdiv_outstimes1' style='width:16%;float:left;display:none;'>"+
                "                 <input type='text' id='outstimes1' name='outstimes1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                "                <\/div>"+
                "                <div id='outstimes_less' style='float:left;display:none;cursor:pointer;'>"+
                "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_outstimes1',0);"+
                "                                                               showHide('outstimes_space1',0);"+
                "                                                               showHide('tdiv_outstimes1',0);"+
                "                                                               showHide('outstimes_and',0);"+
                "                                                               showHide('outstimes_more',1);"+
                "                                                               showHide('outstimes_less',0)\">"+
                "                <\/div>"+
                "              <\/td>"+
                "            <\/tr>";

var instimes = "            <tr>"+
               "              <td style='width:4%'>"+
               "              	<input type='checkbox' name='ckb_instimes' id='ckb_instimes' class='filled-in'><\/input>"+
               "                <label for='ckb_instimes'><\/label>"+
               "              <\/td>"+
               "              <td style='width:10%'>轉入總次數<\/td>"+
               "              <td>"+
               "              	<div id='sdiv_instimes' style='width:5%;float:left'>"+
               "                 <select id='sel_instimes' name='sel_instimes'>"+
               "                   <option value='gt'>≧<\/option>"+
               "                   <option value='lt'>≦<\/option>"+
               "                   <option value='eq'>=<\/option>"+
               "                   <option value='neq'>≠<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='instimes_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
               "                <div id='tdiv_instimes' style='width:16%;float:left'>"+
               "                 <input type='text' id='instimes' name='instimes' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
               "                <\/div>"+
               "                <div id='instimes_more' style='float:left;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_instimes1',1);"+
               "                                                               showHide('instimes_space1',1);"+
               "                                                               showHide('tdiv_instimes1',1);"+
               "                                                               showHide('instimes_and',1);"+
               "                                                               showHide('instimes_more',0);"+
               "                                                               showHide('instimes_less',1)\">"+
               "                <\/div>"+
               "                <div id='instimes_and' style='float:left;display:none;'>"+
               "                 &nbsp;and&nbsp;"+
               "                <\/div>"+
               "              	<div id='sdiv_instimes1' style='width:5%;float:left;display:none;'>"+
               "                 <select id='sel_instimes1' name='sel_instimes1'>"+
               "                   <option value='gt'>≧<\/option>"+
               "                   <option value='lt'>≦<\/option>"+
               "                   <option value='eq'>=<\/option>"+
               "                   <option value='neq'>≠<\/option>"+
               "                 <\/select>"+
               "                <\/div>"+
               "                <div id='instimes_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
               "                <div id='tdiv_instimes1' style='width:16%;float:left;display:none;'>"+
               "                 <input type='text' id='instimes1' name='instimes1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
               "                <\/div>"+
               "                <div id='instimes_less' style='float:left;display:none;cursor:pointer;'>"+
               "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_instimes1',0);"+
               "                                                               showHide('instimes_space1',0);"+
               "                                                               showHide('tdiv_instimes1',0);"+
               "                                                               showHide('instimes_and',0);"+
               "                                                               showHide('instimes_more',1);"+
               "                                                               showHide('instimes_less',0)\">"+
               "                <\/div>"+
               "              <\/td>"+
               "            <\/tr>";

var pointstotalamount = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_pointstotalamount' id='ckb_pointstotalamount' class='filled-in'><\/input>"+
                        "                <label for='ckb_pointstotalamount'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>淨轉出總金額<\/td>"+
                        "              <td>"+
                        "              	<div id='sdiv_pointstotalamount' style='width:5%;float:left'>"+
                        "                 <select id='sel_pointstotalamount' name='sel_pointstotalamount'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='pointstotalamount_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='tdiv_pointstotalamount' style='width:16%;float:left'>"+
                        "                 <input type='text' id='pointstotalamount' name='pointstotalamount' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='pointstotalamount_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_pointstotalamount1',1);"+
                        "                                                               showHide('pointstotalamount_space1',1);"+
                        "                                                               showHide('pointstotalamount1',1);"+
                        "                                                               showHide('pointstotalamount_and',1);"+
                        "                                                               showHide('pointstotalamount_more',0);"+
                        "                                                               showHide('pointstotalamount_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='pointstotalamount_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='sdiv_pointstotalamount1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='sel_pointstotalamount1' name='sel_pointstotalamount1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='pointstotalamount_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='tdiv_pointstotalamount1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='pointstotalamount1' name='pointstotalamount1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='pointstotalamount_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_pointstotalamount1',0);"+
                        "                                                               showHide('pointstotalamount_space1',0);"+
                        "                                                               showHide('tdiv_pointstotalamount1',0);"+
                        "                                                               showHide('pointstotalamount_and',0);"+
                        "                                                               showHide('pointstotalamount_more',1);"+
                        "                                                               showHide('pointstotalamount_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var outstotalamount = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_outstotalamount' id='ckb_outstotalamount' class='filled-in'><\/input>"+
                      "                <label for='ckb_outstotalamount'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>轉出總金額<\/td>"+
                      "              <td>"+
                      "              	<div id='sdiv_outstotalamount' style='width:5%;float:left'>"+
                      "                 <select id='sel_outstotalamount' name='sel_outstotalamount'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='outstotalamount_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_outstotalamount' style='width:16%;float:left'>"+
                      "                 <input type='text' id='outstotalamount' name='outstotalamount' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='outstotalamount_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_outstotalamount1',1);"+
                      "                                                               showHide('outstotalamount_space1',1);"+
                      "                                                               showHide('tdiv_outstotalamount1',1);"+
                      "                                                               showHide('outstotalamount_and',1);"+
                      "                                                               showHide('outstotalamount_more',0);"+
                      "                                                               showHide('outstotalamount_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='outstotalamount_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='sdiv_outstotalamount1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='sel_outstotalamount1' name='sel_outstotalamount1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='outstotalamount_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_outstotalamount1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='outstotalamount1' name='outstotalamount1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='outstotalamount_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_outstotalamount1',0);"+
                      "                                                               showHide('outstotalamount_space1',0);"+
                      "                                                               showHide('tdiv_outstotalamount1',0);"+
                      "                                                               showHide('outstotalamount_and',0);"+
                      "                                                               showHide('outstotalamount_more',1);"+
                      "                                                               showHide('outstotalamount_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var instotalamount = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_instotalamount' id='ckb_instotalamount' class='filled-in'><\/input>"+
                     "                <label for='ckb_instotalamount'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>轉入總金額<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_instotalamount' style='width:5%;float:left'>"+
                     "                 <select id='sel_instotalamount' name='sel_instotalamount'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='instotalamount_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_instotalamount' style='width:16%;float:left'>"+
                     "                 <input type='text' id='instotalamount' name='instotalamount' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='instotalamount_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_instotalamount1',1);"+
                     "                                                               showHide('instotalamount_space1',1);"+
                     "                                                               showHide('tdiv_instotalamount1',1);"+
                     "                                                               showHide('instotalamount_and',1);"+
                     "                                                               showHide('instotalamount_more',0);"+
                     "                                                               showHide('instotalamount_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='instotalamount_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_instotalamount1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_instotalamount1' name='sel_instotalamount1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='instotalamount_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_instotalamount1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='instotalamount1' name='instotalamount1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='instotalamount_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_instotalamount1',0);"+
                     "                                                               showHide('instotalamount_space1',0);"+
                     "                                                               showHide('tdiv_instotalamount1',0);"+
                     "                                                               showHide('instotalamount_and',0);"+
                     "                                                               showHide('instotalamount_more',1);"+
                     "                                                               showHide('instotalamount_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var pointsfee = "            <tr>"+
                "              <td style='width:4%'>"+
                "              	<input type='checkbox' name='ckb_pointsfee' id='ckb_pointsfee' class='filled-in'><\/input>"+
                "                <label for='ckb_pointsfee'><\/label>"+
                "              <\/td>"+
                "              <td style='width:10%'>轉點手續費<\/td>"+
                "              <td>"+
                "              	<div id='sdiv_pointsfee' style='width:5%;float:left'>"+
                "                 <select id='sel_pointsfee' name='sel_pointsfee'>"+
                "                   <option value='gt'>≧<\/option>"+
                "                   <option value='lt'>≦<\/option>"+
                "                   <option value='eq'>=<\/option>"+
                "                   <option value='neq'>≠<\/option>"+
                "                 <\/select>"+
                "                <\/div>"+
                "                <div id='pointsfee_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                "                <div id='tdiv_pointsfee' style='width:16%;float:left'>"+
                "                 <input type='text' id='pointsfee' name='pointsfee' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                "                <\/div>"+
                "                <div id='pointsfee_more' style='float:left;cursor:pointer;'>"+
                "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_pointsfee1',1);"+
                "                                                               showHide('pointsfee_space1',1);"+
                "                                                               showHide('tdiv_pointsfee1',1);"+
                "                                                               showHide('pointsfee_and',1);"+
                "                                                               showHide('pointsfee_more',0);"+
                "                                                               showHide('pointsfee_less',1)\">"+
                "                <\/div>"+
                "                <div id='pointsfee_and' style='float:left;display:none;'>"+
                "                 &nbsp;and&nbsp;"+
                "                <\/div>"+
                "              	<div id='sdiv_pointsfee1' style='width:5%;float:left;display:none;'>"+
                "                 <select id='sel_pointsfee1' name='sel_pointsfee1'>"+
                "                   <option value='gt'>≧<\/option>"+
                "                   <option value='lt'>≦<\/option>"+
                "                   <option value='eq'>=<\/option>"+
                "                   <option value='neq'>≠<\/option>"+
                "                 <\/select>"+
                "                <\/div>"+
                "                <div id='pointsfee_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                "                <div id='tdiv_pointsfee1' style='width:16%;float:left;display:none;'>"+
                "                 <input type='text' id='pointsfee1' name='pointsfee1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                "                <\/div>"+
                "                <div id='pointsfee_less' style='float:left;display:none;cursor:pointer;'>"+
                "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_pointsfee1',0);"+
                "                                                               showHide('pointsfee_space1',0);"+
                "                                                               showHide('tdiv_pointsfee1',0);"+
                "                                                               showHide('pointsfee_and',0);"+
                "                                                               showHide('pointsfee_more',1);"+
                "                                                               showHide('pointsfee_less',0)\">"+
                "                <\/div>"+
                "              <\/td>"+
                "            <\/tr>";

var totalgifttimes = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_totalgifttimes' id='ckb_totalgifttimes' class='filled-in'><\/input>"+
                     "                <label for='ckb_totalgifttimes'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>總儲值次數<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_totalgifttimes' style='width:5%;float:left'>"+
                     "                 <select id='sel_totalgifttimes' name='sel_totalgifttimes'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='totalgifttimes_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_totalgifttimes' style='width:16%;float:left'>"+
                     "                 <input type='text' id='totalgifttimes' name='totalgifttimes' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='totalgifttimes_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalgifttimes1',1);"+
                     "                                                               showHide('totalgifttimes_space1',1);"+
                     "                                                               showHide('tdiv_totalgifttimes1',1);"+
                     "                                                               showHide('totalgifttimes_and',1);"+
                     "                                                               showHide('totalgifttimes_more',0);"+
                     "                                                               showHide('totalgifttimes_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='totalgifttimes_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_totalgifttimes1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_totalgifttimes1' name='sel_totalgifttimes1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='totalgifttimes_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_totalgifttimes1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='totalgifttimes1' name='totalgifttimes1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='totalgifttimes_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalgifttimes1',0);"+
                     "                                                               showHide('totalgifttimes_space1',0);"+
                     "                                                               showHide('tdiv_totalgifttimes1',0);"+
                     "                                                               showHide('totalgifttimes_and',0);"+
                     "                                                               showHide('totalgifttimes_more',1);"+
                     "                                                               showHide('totalgifttimes_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var totalgiftamounts = "            <tr>"+
                       "              <td style='width:4%'>"+
                       "              	<input type='checkbox' name='ckb_totalgiftamounts' id='ckb_totalgiftamounts' class='filled-in'><\/input>"+
                       "                <label for='ckb_totalgiftamounts'><\/label>"+
                       "              <\/td>"+
                       "              <td style='width:10%'>總儲值金額NT$<\/td>"+
                       "              <td>"+
                       "              	<div id='sdiv_totalgiftamounts' style='width:5%;float:left'>"+
                       "                 <select id='sel_totalgiftamounts' name='totalgiftamounts_opt'>"+
                       "                   <option value='gt'>≧<\/option>"+
                       "                   <option value='lt'>≦<\/option>"+
                       "                   <option value='eq'>=<\/option>"+
                       "                   <option value='neq'>≠<\/option>"+
                       "                 <\/select>"+
                       "                <\/div>"+
                       "                <div id='totalgiftamounts_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                       "                <div id='tdiv_totalgiftamounts' style='width:16%;float:left'>"+
                       "                 <input type='text' id='totalgiftamounts' name='totalgiftamounts' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                       "                <\/div>"+
                       "                <div id='totalgiftamounts_more' style='float:left;cursor:pointer;'>"+
                       "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalgiftamounts1',1);"+
                       "                                                               showHide('totalgiftamounts_space1',1);"+
                       "                                                               showHide('tdiv_totalgiftamounts1',1);"+
                       "                                                               showHide('totalgiftamounts_and',1);"+
                       "                                                               showHide('totalgiftamounts_more',0);"+
                       "                                                               showHide('totalgiftamounts_less',1)\">"+
                       "                <\/div>"+
                       "                <div id='totalgiftamounts_and' style='float:left;display:none;'>"+
                       "                 &nbsp;and&nbsp;"+
                       "                <\/div>"+
                       "              	<div id='sdiv_totalgiftamounts1' style='width:5%;float:left;display:none;'>"+
                       "                 <select id='sel_totalgiftamounts1' name='sel_totalgiftamounts1'>"+
                       "                   <option value='gt'>≧<\/option>"+
                       "                   <option value='lt'>≦<\/option>"+
                       "                   <option value='eq'>=<\/option>"+
                       "                   <option value='neq'>≠<\/option>"+
                       "                 <\/select>"+
                       "                <\/div>"+
                       "                <div id='totalgiftamounts_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                       "                <div id='tdiv_totalgiftamounts1' style='width:16%;float:left;display:none;'>"+
                       "                 <input type='text' id='totalgiftamounts1' name='totalgiftamounts1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                       "                <\/div>"+
                       "                <div id='totalgiftamounts_less' style='float:left;display:none;cursor:pointer;'>"+
                       "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalgiftamounts1',0);"+
                       "                                                               showHide('totalgiftamounts_space1',0);"+
                       "                                                               showHide('tdiv_totalgiftamounts1',0);"+
                       "                                                               showHide('totalgiftamounts_and',0);"+
                       "                                                               showHide('totalgiftamounts_more',1);"+
                       "                                                               showHide('totalgiftamounts_less',0)\">"+
                       "                <\/div>"+
                       "              <\/td>"+
                       "            <\/tr>";

var giftamounts_gp = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_giftamounts_gp' id='ckb_giftamounts_gp' class='filled-in'><\/input>"+
                     "                <label for='ckb_giftamounts_gp'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>儲值金額NT$_GP<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_giftamounts_gp' style='width:5%;float:left'>"+
                     "                 <select id='sel_giftamounts_gp' name='sel_giftamounts_gp'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_gp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_giftamounts_gp' style='width:16%;float:left'>"+
                     "                 <input type='text' id='giftamounts_gp' name='giftamounts_gp' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_gp_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_gp1',1);"+
                     "                                                               showHide('giftamounts_gp_space1',1);"+
                     "                                                               showHide('tdiv_giftamounts_gp1',1);"+
                     "                                                               showHide('giftamounts_gp_and',1);"+
                     "                                                               showHide('giftamounts_gp_more',0);"+
                     "                                                               showHide('giftamounts_gp_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='giftamounts_gp_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_giftamounts_gp1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_giftamounts_gp1' name='sel_giftamounts_gp1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_gp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_giftamounts_gp1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='giftamounts_gp1' name='giftamounts_gp1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_gp_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_gp1',0);"+
                     "                                                               showHide('giftamounts_gp_space1',0);"+
                     "                                                               showHide('tdiv_giftamounts_gp1',0);"+
                     "                                                               showHide('giftamounts_gp_and',0);"+
                     "                                                               showHide('giftamounts_gp_more',1);"+
                     "                                                               showHide('giftamounts_gp_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var giftamounts_ma = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_giftamounts_ma' id='ckbgiftamounts_ma' class='filled-in'><\/input>"+
                     "                <label for='ckbgiftamounts_ma'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>儲值金額NT$_MA<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_giftamounts_ma' style='width:5%;float:left'>"+
                     "                 <select id='sel_giftamounts_ma' name='sel_giftamounts_ma'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_ma_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_giftamounts_ma' style='width:16%;float:left'>"+
                     "                 <input type='text' id='giftamounts_ma' name='giftamounts_ma' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_ma_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_ma1',1);"+
                     "                                                               showHide('giftamounts_ma_space1',1);"+
                     "                                                               showHide('tdiv_giftamounts_ma1',1);"+
                     "                                                               showHide('giftamounts_ma_and',1);"+
                     "                                                               showHide('giftamounts_ma_more',0);"+
                     "                                                               showHide('giftamounts_ma_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='giftamounts_ma_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_giftamounts_ma1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_giftamounts_ma1' name='sel_giftamounts_ma1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_ma_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_giftamounts_ma1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='giftamounts_ma1' name='giftamounts_ma1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='giftamounts_ma_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_ma1',0);"+
                     "                                                               showHide('giftamounts_ma_space1',0);"+
                     "                                                               showHide('tdiv_giftamounts_ma1',0);"+
                     "                                                               showHide('giftamounts_ma_and',0);"+
                     "                                                               showHide('giftamounts_ma_more',1);"+
                     "                                                               showHide('giftamounts_ma_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var giftamounts_web = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_giftamounts_web' id='ckb_giftamounts_web' class='filled-in'><\/input>"+
                      "                <label for='ckb_giftamounts_web'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>儲值金額NT$_Web<\/td>"+
                      "              <td>"+
                      "              	<div id='sdiv_giftamounts_web' style='width:5%;float:left'>"+
                      "                 <select id='sel_giftamounts_web' name='sel_giftamounts_web'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_web_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_giftamounts_web' style='width:16%;float:left'>"+
                      "                 <input type='text' id='giftamounts_web' name='giftamounts_web' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_web_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_web1',1);"+
                      "                                                               showHide('giftamounts_web_space1',1);"+
                      "                                                               showHide('tdiv_giftamounts_web1',1);"+
                      "                                                               showHide('giftamounts_web_and',1);"+
                      "                                                               showHide('giftamounts_web_more',0);"+
                      "                                                               showHide('giftamounts_web_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='giftamounts_web_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='sdiv_giftamounts_web1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='sel_giftamounts_web1' name='sel_giftamounts_web1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_web_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_giftamounts_web1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='giftamounts_web1' name='giftamounts_web1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_web_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_web1',0);"+
                      "                                                               showHide('giftamounts_web_space1',0);"+
                      "                                                               showHide('tdiv_giftamounts_web1',0);"+
                      "                                                               showHide('giftamounts_web_and',0);"+
                      "                                                               showHide('giftamounts_web_more',1);"+
                      "                                                               showHide('giftamounts_web_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var giftamounts_small = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_giftamounts_small' id='ckb_giftamounts_small' class='filled-in'><\/input>"+
                        "                <label for='ckb_giftamounts_small'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>儲值金額NT$_小額<\/td>"+
                        "              <td>"+
                        "              	<div id='sdiv_giftamounts_small' style='width:5%;float:left'>"+
                        "                 <select id='sel_giftamounts_small' name='sel_giftamounts_small'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='giftamounts_small_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='tdiv_giftamounts_small' style='width:16%;float:left'>"+
                        "                 <input type='text' id='giftamounts_small' name='giftamounts_small' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='giftamounts_small_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_small1',1);"+
                        "                                                               showHide('giftamounts_small_space1',1);"+
                        "                                                               showHide('tdiv_giftamounts_small1',1);"+
                        "                                                               showHide('giftamounts_small_and',1);"+
                        "                                                               showHide('giftamounts_small_more',0);"+
                        "                                                               showHide('giftamounts_small_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='giftamounts_small_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='sdiv_giftamounts_small1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='sel_giftamounts_small1' name='sel_giftamounts_small1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='giftamounts_small_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='tdiv_giftamounts_small1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='giftamounts_small1' name='giftamounts_small1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='giftamounts_small_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_small1',0);"+
                        "                                                               showHide('giftamounts_small_space1',0);"+
                        "                                                               showHide('tdiv_giftamounts_small1',0);"+
                        "                                                               showHide('giftamounts_small_and',0);"+
                        "                                                               showHide('giftamounts_small_more',1);"+
                        "                                                               showHide('giftamounts_small_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var giftamounts_accesscard = "            <tr>"+
                             "              <td style='width:4%'>"+
                             "              	<input type='checkbox' name='ckb_giftamounts_accesscard' id='ckb_giftamounts_accesscard' class='filled-in'><\/input>"+
                             "                <label for='ckb_giftamounts_accesscard'><\/label>"+
                             "              <\/td>"+
                             "              <td style='width:10%'>儲值金額NT$_通路卡<\/td>"+
                             "              <td>"+
                             "              	<div id='sdiv_giftamounts_accesscard' style='width:5%;float:left'>"+
                             "                 <select id='sel_giftamounts_accesscard' name='sel_giftamounts_accesscard'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='giftamounts_accesscard_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='tdiv_giftamounts_accesscard' style='width:16%;float:left'>"+
                             "                 <input type='text' id='giftamounts_accesscard' name='giftamounts_accesscard' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='giftamounts_accesscard_more' style='float:left;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_accesscard1',1);"+
                             "                                                               showHide('giftamounts_accesscard_space1',1);"+
                             "                                                               showHide('tdiv_giftamounts_accesscard1',1);"+
                             "                                                               showHide('giftamounts_accesscard_and',1);"+
                             "                                                               showHide('giftamounts_accesscard_more',0);"+
                             "                                                               showHide('giftamounts_accesscard_less',1)\">"+
                             "                <\/div>"+
                             "                <div id='giftamounts_accesscard_and' style='float:left;display:none;'>"+
                             "                 &nbsp;and&nbsp;"+
                             "                <\/div>"+
                             "              	<div id='sdiv_giftamounts_accesscard1' style='width:5%;float:left;display:none;'>"+
                             "                 <select id='sel_giftamounts_accesscard1' name='sel_giftamounts_accesscard1'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='giftamounts_accesscard_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='tdiv_giftamounts_accesscard1' style='width:16%;float:left;display:none;'>"+
                             "                 <input type='text' id='giftamounts_accesscard1' name='giftamounts_accesscard1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='giftamounts_accesscard_less' style='float:left;display:none;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_accesscard1',0);"+
                             "                                                               showHide('giftamounts_accesscard_space1',0);"+
                             "                                                               showHide('tdiv_giftamounts_accesscard1',0);"+
                             "                                                               showHide('giftamounts_accesscard_and',0);"+
                             "                                                               showHide('giftamounts_accesscard_more',1);"+
                             "                                                               showHide('giftamounts_accesscard_less',0)\">"+
                             "                <\/div>"+
                             "              <\/td>"+
                             "            <\/tr>";

var giftamounts_ios = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_giftamounts_ios' id='ckb_giftamounts_ios' class='filled-in'><\/input>"+
                      "                <label for='ckb_giftamounts_ios'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>儲值金額NT$_IOS<\/td>"+
                      "              <td>"+
                      "              	<div id='sdiv_giftamounts_ios' style='width:5%;float:left'>"+
                      "                 <select id='sel_giftamounts_ios' name='sel_giftamounts_ios'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_ios_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_giftamounts_ios' style='width:16%;float:left'>"+
                      "                 <input type='text' id='giftamounts_ios' name='giftamounts_ios' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_ios_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_giftamounts_ios1',1);"+
                      "                                                               showHide('giftamounts_ios_space1',1);"+
                      "                                                               showHide('tdiv_giftamounts_ios1',1);"+
                      "                                                               showHide('giftamounts_ios_and',1);"+
                      "                                                               showHide('giftamounts_ios_more',0);"+
                      "                                                               showHide('giftamounts_ios_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='giftamounts_ios_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='sdiv_giftamounts_ios1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='sel_giftamounts_ios1' name='sel_giftamounts_ios1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_ios_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='tdiv_giftamounts_ios1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='giftamounts_ios1' name='giftamounts_ios1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='giftamounts_ios_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_giftamounts_ios1',0);"+
                      "                                                               showHide('giftamounts_ios_space1',0);"+
                      "                                                               showHide('tdiv_giftamounts_ios1',0);"+
                      "                                                               showHide('giftamounts_ios_and',0);"+
                      "                                                               showHide('giftamounts_ios_more',1);"+
                      "                                                               showHide('giftamounts_ios_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var accountstatus = "            <tr>"+
                    "              <td style='width:4%'>"+
                    "              	<input type='checkbox' name='ckb_accountstatus' id='ckb_accountstatus' class='filled-in'><\/input>"+
                    "                <label for='ckb_accountstatus'><\/label>"+
                    "              <\/td>"+
                    "              <td style='width:10%'>帳號狀態<\/td>"+
                    "              <td>"+
                    "              	<div id='sdiv_accountstatus' style='width:10%;float:left'>"+
                    "                 <select id='sel_accountstatus' name='sel_accountstatus'>"+
                    "                   <option value='normal'>正常<\/option>"+
                    "                   <option value='gamesuspended'>遊戲停權<\/option>"+
                    "                   <option value='fullysuspended'>完全停權<\/option>"+
                    "                 <\/select>"+
                    "                <\/div>"+
                    "                <div id='accountstatus_more' style='float:left;cursor:pointer;'>"+
                    "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_accountstatus1',1);"+
                    "                                                               showHide('accountstatus_or',1);"+
                    "                                                               showHide('accountstatus_more',0);"+
                    "                                                               showHide('accountstatus_less',1)\">"+
                    "                <\/div>"+
                    "                <div id='accountstatus_or' style='float:left;display:none;'>"+
                    "                 &nbsp;or&nbsp;"+
                    "                <\/div>"+
                    "              	<div id='sdiv_accountstatus1' style='width:10%;float:left;display:none;'>"+
                    "                 <select id='sel_accountstatus1' name='sel_accountstatus1'>"+
                    "                   <option value='normal'>正常<\/option>"+
                    "                   <option value='gamesuspended'>遊戲停權<\/option>"+
                    "                   <option value='fullysuspended'>完全停權<\/option>"+
                    "                 <\/select>"+
                    "                <\/div>"+
                    "                <div id='accountstatus_less' style='float:left;display:none;cursor:pointer;'>"+
                    "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_accountstatus1',0);"+
                    "                                                               showHide('accountstatus_or',0);"+
                    "                                                               showHide('accountstatus_more',1);"+
                    "                                                               showHide('accountstatus_less',0)\">"+
                    "                <\/div>"+
                    "              <\/td>"+
                    "            <\/tr>";

var startsuspendedtime = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_startsuspendedtime' id='ckb_startsuspendedtime' class='filled-in'><\/input>"+
                         "                <label for='ckb_startsuspendedtime'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>開始停權時間<\/td>"+
                         "              <td>"+
                         "              	 <input type='text' id='fstartsuspendedtime' name='fstartsuspendedtime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                         "              	 <input type=\"text\" id='tstartsuspendedtime' name='tstartsuspendedtime' style='text-align:center;width:25%'>"+
                         "              <\/td>"+
                         "            <\/tr>";

var chatstatus = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_chatstatus' id='ckb_chatstatus' class='filled-in'><\/input>"+
                 "                <label for='ckb_chatstatus'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>聊天狀態<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_chatstatus' style='width:10%;float:left'>"+
                 "                 <select id='sel_chatstatus' name='sel_chatstatus'>"+
                 "                   <option value='normal'>正常<\/option>"+
                 "                   <option value='gag'>禁言<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='chatstatus_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_chatstatus1',1);"+
                 "                                                               showHide('chatstatus_or',1);"+
                 "                                                               showHide('chatstatus_more',0);"+
                 "                                                               showHide('chatstatus_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='chatstatus_or' style='float:left;display:none;'>"+
                 "                 &nbsp;or&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_chatstatus' style='width:10%;float:left;display:none;'>"+
                 "                 <select id='sel_chatstatus1' name='sel_chatstatus1'>"+
                 "                   <option value='normal'>正常<\/option>"+
                 "                   <option value='gag'>禁言<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='chatstatus_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_chatstatus1',0);"+
                 "                                                               showHide('chatstatus_or',0);"+
                 "                                                               showHide('chatstatus_more',1);"+
                 "                                                               showHide('chatstatus_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var startgagtime = "            <tr>"+
                   "              <td style='width:4%'>"+
                   "              	<input type='checkbox' name='ckb_startgagtime' id='ckb_startgagtime' class='filled-in'><\/input>"+
                   "                <label for='ckb_startgagtime'><\/label>"+
                   "              <\/td>"+
                   "              <td style='width:10%'>開始禁言時間<\/td>"+
                   "              <td>"+
                   "              	 <input type='text' id='fstartgagtime' name='fstartgagtime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                   "              	 <input type=\"text\" id='tstartgagtime' name='tstartgagtime' style='text-align:center;width:25%'>"+
                   "              <\/td>"+
                   "            <\/tr>";

var alertdesc = "            <tr>"+
                "              <td style='width:3%'>"+
                "              	<input type='checkbox' name='ckb_alertdesc' id='ckb_alertdesc' class='filled-in'><\/input>"+
                "                <label for='ckb_alertdesc'><\/label>"+
                "              <\/td>"+
                "              <td style='width:10%'>異動說明<\/td>"+
                "              <td>"+
                "              	 <div id='sdiv_alertdesc' style='width:10%;float:left'>"+
                "                 <select id='sel_alertdesc' name='sel_alertdesc'>"+
                "                   <option value='yes'>有<\/option>"+
                "                   <option value='no'>無<\/option>"+
                "                 <\/select>"+
                "                <\/div>"+
                "              <\/td>"+
                "            <\/tr>";

var lastloginplatform = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_lastloginplatform' id='ckb_lastloginplatform' class='filled-in'><\/input>"+
                        "                <label for='ckb_lastloginplatform'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>最後登入平台<\/td>"+
                        "              <td>"+
                        "              	<div id='sdiv_lastloginplatform' style='width:10%;float:left'>"+
                        "                 <select id='sel_lastloginplatform' name='sel_lastloginplatform'>"+
                        "                   <option value='test'>測試用<\/option>"+
                        "                   <option value='angp'>AnGP<\/option>"+
                        "                   <option value='anma'>AnMa<\/option>"+
                        "                   <option value='ios'>IOS<\/option>"+
                        "                   <option value='web'>WEB<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_lastloginplatform1',1);"+
                        "                                                               showHide('lastloginplatform_or',1);"+
                        "                                                               showHide('lastloginplatform_more',0);"+
                        "                                                               showHide('lastloginplatform_more1',1);"+
                        "                                                               showHide('lastloginplatform_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_or' style='float:left;display:none;'>"+
                        "                 &nbsp;or&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='sdiv_lastloginplatform1' style='width:10%;float:left;display:none;'>"+
                        "                 <select id='sel_lastloginplatform1' name='sel_lastloginplatform1'>"+
                        "                   <option value='test'>測試用<\/option>"+
                        "                   <option value='angp'>AnGP<\/option>"+
                        "                   <option value='anma'>AnMa<\/option>"+
                        "                   <option value='ios'>IOS<\/option>"+
                        "                   <option value='web'>WEB<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_more1' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_lastloginplatform2',1);"+
                        "                                                               showHide('lastloginplatform_or1',1);"+
                        "                                                               showHide('lastloginplatform_more1',0);"+
                        "                                                               showHide('lastloginplatform_more2',1);"+
                        "                                                               showHide('lastloginplatform_less',0);"+
                        "                                                               showHide('lastloginplatform_less1',1);\">"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_or1' style='float:left;display:none;'>"+
                        "                 &nbsp;or&nbsp;"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_lastloginplatform1',0);"+
                        "                                                               showHide('lastloginplatform_or',0);"+
                        "                                                               showHide('lastloginplatform_more',1);"+
                        "                                                               showHide('lastloginplatform_more1',0);"+
                        "                                                               showHide('lastloginplatform_less',0)\">"+
                        "                <\/div>"+
                        "              	<div id='sdiv_lastloginplatform2' style='width:10%;float:left;display:none;'>"+
                        "                 <select id='sel_lastloginplatform2' name='sel_lastloginplatform2'>"+
                        "                   <option value='test'>測試用<\/option>"+
                        "                   <option value='angp'>AnGP<\/option>"+
                        "                   <option value='anma'>AnMa<\/option>"+
                        "                   <option value='ios'>IOS<\/option>"+
                        "                   <option value='web'>WEB<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_more2' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_lastloginplatform3',1);"+
                        "                                                               showHide('lastloginplatform_or2',1);"+
                        "                                                               showHide('lastloginplatform_more2',0);"+
                        "                                                               showHide('lastloginplatform_less1',0);"+
                        "                                                               showHide('lastloginplatform_less2',1);\">"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_or2' style='float:left;display:none;'>"+
                        "                 &nbsp;or&nbsp;"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_less1' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_lastloginplatform2',0);"+
                        "                                                               showHide('lastloginplatform_or1',0);"+
                        "                                                               showHide('lastloginplatform_less1',0);"+
                        "                                                               showHide('lastloginplatform_more2',0);"+
                        "                                                               showHide('lastloginplatform_less',1);"+
                        "                                                               showHide('lastloginplatform_more1',1);\">"+
                        "                <\/div>"+
                        "              	<div id='sdiv_lastloginplatform3' style='width:10%;float:left;display:none;'>"+
                        "                 <select id='sel_lastloginplatform3' name='sel_lastloginplatform3'>"+
                        "                   <option value='test'>測試用<\/option>"+
                        "                   <option value='angp'>AnGP<\/option>"+
                        "                   <option value='anma'>AnMa<\/option>"+
                        "                   <option value='ios'>IOS<\/option>"+
                        "                   <option value='web'>WEB<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='lastloginplatform_less2' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_lastloginplatform3',0);"+
                        "                                                               showHide('lastloginplatform_less2',0);"+
                        "                                                               showHide('lastloginplatform_or2',0);"+
                        "                                                               showHide('lastloginplatform_more2',1);"+
                        "                                                               showHide('lastloginplatform_less1',1);\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var memberposition = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_memberposition' id='ckb_memberposition' class='filled-in'><\/input>"+
                     "                <label for='ckb_memberposition'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>會員位置<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_memberposition' style='width:10%;float:left'>"+
                     "                 <select id='sel_memberposition' name='sel_memberposition'>"+
                     "                   <option value='offline'>離線<\/option>"+
                     "                   <option value='officewebsite'>官網<\/option>"+
                     "                   <option value='lobby'>大廳<\/option>"+
                     "                   <option value='game_platform'>遊戲名_選台頁<\/option>"+
                     "                   <option value='game_machine'>遊戲名_機台編號<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_memberposition1',1);"+
                     "                                                               showHide('or',1);showHide('more',0);"+
                     "                                                               showHide('more1',1);"+
                     "                                                               showHide('less',1)\">"+
                     "                <\/div>"+
                     "                <div id='or' style='float:left;display:none;'>"+
                     "                 &nbsp;or&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_memberposition1' style='width:10%;float:left;display:none;'>"+
                     "                 <select id='sel_memberposition1' name='sel_memberposition1'>"+
                     "                   <option value='offline'>離線<\/option>"+
                     "                   <option value='officewebsite'>官網<\/option>"+
                     "                   <option value='lobby'>大廳<\/option>"+
                     "                   <option value='game_platform'>遊戲名_選台頁<\/option>"+
                     "                   <option value='game_machine'>遊戲名_機台編號<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='more1' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_memberposition2',1);"+
                     "                                                               showHide('or1',1);"+
                     "                                                               showHide('more1',0);"+
                     "                                                               showHide('less',0);"+
                     "                                                               showHide('less1',1);\">"+
                     "                <\/div>"+
                     "                <div id='or1' style='float:left;display:none;'>"+
                     "                 &nbsp;or&nbsp;"+
                     "                <\/div>"+
                     "                <div id='less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_memberposition1',0);"+
                     "                                                               showHide('or',0);"+
                     "                                                               showHide('more',1);"+
                     "                                                               showHide('more1',0);"+
                     "                                                               showHide('less',0)\">"+
                     "                <\/div>"+
                     "              	<div id='sdiv_memberposition2' style='width:10%;float:left;display:none;'>"+
                     "                 <select id='sel_memberposition2' name='sel_memberposition2'>"+
                     "                   <option value='offline'>離線<\/option>"+
                     "                   <option value='officewebsite'>官網<\/option>"+
                     "                   <option value='lobby'>大廳<\/option>"+
                     "                   <option value='game_platform'>遊戲名_選台頁<\/option>"+
                     "                   <option value='game_machine'>遊戲名_機台編號<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='less1' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_memberposition2',0);"+
                     "                                                               showHide('or1',0);"+
                     "                                                               showHide('more1',1);"+
                     "                                                               showHide('less1',0);"+
                     "                                                               showHide('less',1);\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var lastlogintime = "            <tr>"+
                    "              <td style='width:4%'>"+
                    "              	<input type='checkbox' name='ckb_lastlogintime' id='ckb_lastlogintime' class='filled-in'><\/input>"+
                    "                <label for='ckb_lastlogintime'><\/label>"+
                    "              <\/td>"+
                    "              <td style='width:10%'>最後登入時間<\/td>"+
                    "              <td>"+
                    "              	 <input type='text' id='flastlogintime' name='flastlogintime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                    "              	 <input type=\"text\" id='tlastlogintime' name='tlastlogintime' style='text-align:center;width:25%'>"+
                    "              <\/td>"+
                    "            <\/tr>";

var lastlogouttime = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_lastlogouttime' id='ckb_lastlogouttime' class='filled-in'><\/input>"+
                     "                <label for='ckb_lastlogouttime'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>最後登出時間<\/td>"+
                     "              <td>"+
                     "              	 <input type='text' id='flastlogouttime' name='flastlogouttime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                     "              	 <input type=\"text\" id='tlastlogouttime' name='tlastlogouttime' style='text-align:center;width:25%'>"+
                     "              <\/td>"+
                     "            <\/tr>";

var logintimes = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_logintimes' id='ckb_logintimes' class='filled-in'><\/input>"+
                 "                <label for='ckb_logintimes'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>登入次數<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_logintimes' style='width:5%;float:left'>"+
                 "                 <select id='sel_logintimes' name='sel_logintimes'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='logintimes_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_logintimes' style='width:16%;float:left'>"+
                 "                 <input type='text' id='logintimes' name='logintimes' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='logintimes_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_logintimes1',1);"+
                 "                                                               showHide('logintimes_space1',1);"+
                 "                                                               showHide('tdiv_logintimes1',1);"+
                 "                                                               showHide('logintimes_and',1);"+
                 "                                                               showHide('logintimes_more',0);"+
                 "                                                               showHide('logintimes_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='logintimes_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_logintimes1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_logintimes1' name='sel_logintimes1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='logintimes_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_logintimes1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='logintimes1' name='logintimes1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='logintimes_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_logintimes1',0);"+
                 "                                                               showHide('logintimes_space1',0);"+
                 "                                                               showHide('tdiv_logintimes1',0);"+
                 "                                                               showHide('logintimes_and',0);"+
                 "                                                               showHide('logintimes_more',1);"+
                 "                                                               showHide('logintimes_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var accumulatedlogintime = "            <tr>"+
                           "              <td style='width:4%'>"+
                           "              	<input type='checkbox' name='ckb_accumulatedlogintime' id='ckb_accumulatedlogintime' class='filled-in'><\/input>"+
                           "                <label for='ckb_accumulatedlogintime'><\/label>"+
                           "              <\/td>"+
                           "              <td style='width:10%'>累積登入時間<\/td>"+
                           "              <td>"+
                           "              	 <input type='text' id='faccumulatedlogintime' name='faccumulatedlogintime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                           "              	 <input type=\"text\" id='taccumulatedlogintime' name='taccumulatedlogintime' style='text-align:center;width:25%'>"+
                           "              <\/td>"+
                           "            <\/tr>";

var accumulatedgametime = "            <tr>"+
                          "              <td style='width:4%'>"+
                          "              	<input type='checkbox' name='ckb_accumulatedgametime' id='ckb_accumulatedgametime' class='filled-in'><\/input>"+
                          "                <label for='ckb_accumulatedgametime'><\/label>"+
                          "              <\/td>"+
                          "              <td style='width:10%'>累積遊戲時間<\/td>"+
                          "              <td>"+
                          "              	 <input type='text' id='faccumulatedgametime' name='faccumulatedgametime' style='text-align:center;width:25%'><\/input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                          "              	 <input type=\"text\" id='taccumulatedgametime' name='taccumulatedgametime' style='text-align:center;width:25%'>"+
                          "              <\/td>"+
                          "            <\/tr>";

var lastip = "            <tr>"+
             "              <td style='width:4%'>"+
             "              	<input type='checkbox' name='ckb_lastip' id='ckb_lastip' class='filled-in'><\/input>"+
             "                <label for='ckb_lastip'><\/label>"+
             "              <\/td>"+
             "              <td style='width:10%'>最後IP<\/td>"+
             "              <td>"+
             "                <div id='tdiv_logintimes1' style='text-align:center;width:55%'>"+
             "              	 <input type='text' id='lastip' name='lastip' maxlength=15 onkeypress='return (event.charCode>=48&&event.charCode<=57||event.charCode==46)'><\/input>"+
             "                <\/div>"+
             "              <\/td>"+
             "            <\/tr>";

var personalrip = "            <tr>"+
                  "              <td style='width:4%'>"+
                  "              	<input type='checkbox' name='ckb_personalrip' id='ckb_personalrip' class='filled-in'><\/input>"+
                  "                <label for='ckb_personalrip'><\/label>"+
                  "              <\/td>"+
                  "              <td style='width:10%'>個人RTP<\/td>"+
                  "              <td>"+
                  "              	<div id='sdiv_personalrip' style='width:5%;float:left'>"+
                  "                 <select id='sel_personalrip' name='sel_personalrip'>"+
                  "                   <option value='gt'>≧<\/option>"+
                  "                   <option value='lt'>≦<\/option>"+
                  "                   <option value='eq'>=<\/option>"+
                  "                   <option value='neq'>≠<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='personalrip_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                  "                <div id='tdiv_personalrip' style='width:16%;float:left'>"+
                  "                 <input type='text' id='personalrip' name='personalrip' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57||event.charCode==46))'><\/input>"+
                  "                <\/div>"+
                  "                <div id='personalrip_percent' style='float:left'>%<\/div>"+
                  "                <div id='personalrip_more' style='float:left;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_personalrip1',1);"+
                  "                                                               showHide('personalrip_space1',1);"+
                  "                                                               showHide('tdiv_personalrip1',1);"+
                  "                                                               showHide('personalrip_and',1);"+
                  "                                                               showHide('personalrip_more',0);"+
                  "                                                               showHide('personalrip_percent1',1);"+
                  "                                                               showHide('personalrip_less',1)\">"+
                  "                <\/div>"+
                  "                <div id='personalrip_and' style='float:left;display:none;'>"+
                  "                 &nbsp;and&nbsp;"+
                  "                <\/div>"+
                  "              	<div id='sdiv_personalrip1' style='width:5%;float:left;display:none;'>"+
                  "                 <select id='sel_personalrip1' name='sel_personalrip1'>"+
                  "                   <option value='gt'>≧<\/option>"+
                  "                   <option value='lt'>≦<\/option>"+
                  "                   <option value='eq'>=<\/option>"+
                  "                   <option value='neq'>≠<\/option>"+
                  "                 <\/select>"+
                  "                <\/div>"+
                  "                <div id='personalrip_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                  "                <div id='tdiv_personalrip1' style='width:16%;float:left;display:none;'>"+
                  "                 <input type='text' id='personalrip1' name='personalrip1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57||event.charCode==46))'><\/input>"+
                  "                <\/div>"+
                  "                <div id='personalrip_percent1' style='float:left;display:none;'>%<\/div>"+
                  "                <div id='personalrip_less' style='float:left;display:none;cursor:pointer;'>"+
                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_personalrip1',0);"+
                  "                                                               showHide('personalrip_space1',0);"+
                  "                                                               showHide('tdiv_personalrip1',0);"+
                  "                                                               showHide('personalrip_and',0);"+
                  "                                                               showHide('personalrip_more',1);"+
                  "                                                               showHide('personalrip_percent1',0);"+
                  "                                                               showHide('personalrip_less',0)\">"+
                  "                <\/div>"+
                  "              <\/td>"+
                  "            <\/tr>";

var probabilitylists = "            <tr>"+
                       "              <td style='width:4%'>"+
                       "              	<input type='checkbox' name='ckb_probabilitylists' id='ckb_probabilitylists' class='filled-in'><\/input>"+
                       "                <label for='ckb_probabilitylists'><\/label>"+
                       "              <\/td>"+
                       "              <td style='width:10%'>機率名單<\/td>"+
                       "              <td>"+
                       "              	<div id='sdiv_probabilitylists' style='width:10%;float:left'>"+
                       "                 <select id='sel_probabilitylists' name='sel_probabilitylists'>"+
                       "                   <option value='yes'>有<\/option>"+
                       "                   <option value='no'>無<\/option>"+
                       "                 <\/select>"+
                       "                <\/div>"+
                       "              <\/td>"+
                       "            <\/tr>";

var winlosenetgain = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_winlosenetgain' id='ckb_winlosenetgain' class='filled-in'><\/input>"+
                     "                <label for='ckb_winlosenetgain'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>輸贏淨得<\/td>"+
                     "              <td>"+
                     "              	<div id='sdiv_winlosenetgain' style='width:5%;float:left'>"+
                     "                 <select id='sel_winlosenetgain' name='sel_winlosenetgain'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='winlosenetgain_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_winlosenetgain' style='width:16%;float:left'>"+
                     "                 <input type='text' id='winlosenetgain' name='winlosenetgain' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='winlosenetgain_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_winlosenetgain1',1);"+
                     "                                                               showHide('winlosenetgain_space1',1);"+
                     "                                                               showHide('tdiv_winlosenetgain1',1);"+
                     "                                                               showHide('winlosenetgain_and',1);"+
                     "                                                               showHide('winlosenetgain_more',0);"+
                     "                                                               showHide('winlosenetgain_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='winlosenetgain_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='sdiv_winlosenetgain1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='sel_winlosenetgain1' name='sel_winlosenetgain1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='winlosenetgain_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='tdiv_winlosenetgain1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='winlosenetgain1' name='winlosenetgain1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='winlosenetgain_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_winlosenetgain1',0);"+
                     "                                                               showHide('winlosenetgain_space1',0);"+
                     "                                                               showHide('tdiv_winlosenetgain1',0);"+
                     "                                                               showHide('winlosenetgain_and',0);"+
                     "                                                               showHide('winlosenetgain_more',1);"+
                     "                                                               showHide('winlosenetgain_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var totalchargepoints = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_totalchargepoints' id='ckb_totalchargepoints' class='filled-in'><\/input>"+
                 "                <label for='ckb_totalchargepoints'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>總押分<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_totalchargepoints' style='width:5%;float:left'>"+
                 "                 <select id='sel_totalchargepoints' name='sel_totalchargepoints'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalchargepoints_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalchargepoints' style='width:16%;float:left'>"+
                 "                 <input type='text' id='totalchargepoints' name='totalchargepoints' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalchargepoints_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalchargepoints1',1);"+
                 "                                                               showHide('totalchargepoints_space1',1);"+
                 "                                                               showHide('tdiv_totalchargepoints1',1);"+
                 "                                                               showHide('totalchargepoints_and',1);"+
                 "                                                               showHide('totalchargepoints_more',0);"+
                 "                                                               showHide('totalchargepoints_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='totalchargepoints_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_totalchargepoints1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_totalchargepoints1' name='sel_totalchargepoints1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalchargepoints_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalchargepoints1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='totalchargepoints1' name='totalchargepoints1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalchargepoints_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalchargepoints1',0);"+
                 "                                                               showHide('totalchargepoints_space1',0);"+
                 "                                                               showHide('tdiv_totalchargepoints1',0);"+
                 "                                                               showHide('totalchargepoints_and',0);"+
                 "                                                               showHide('totalchargepoints_more',1);"+
                 "                                                               showHide('totalchargepoints_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";


var totalchargepoints_Gcurrency = "            <tr>"+
                                  "              <td style='width:4%'>"+
                                  "              	<input type='checkbox' name='ckb_totalchargepoints_Gcurrency' id='ckb_totalchargepoints_Gcurrency' class='filled-in'><\/input>"+
                                  "                <label for='ckb_totalchargepoints_Gcurrency'><\/label>"+
                                  "              <\/td>"+
                                  "              <td style='width:10%'>總押分_G幣<\/td>"+
                                  "              <td>"+
                                  "              	<div id='sdiv_totalchargepoints_Gcurrency' style='width:5%;float:left'>"+
                                  "                 <select id='sel_totalchargepoints_Gcurrency' name='sel_totalchargepoints_Gcurrency'>"+
                                  "                   <option value='gt'>≧<\/option>"+
                                  "                   <option value='lt'>≦<\/option>"+
                                  "                   <option value='eq'>=<\/option>"+
                                  "                   <option value='neq'>≠<\/option>"+
                                  "                 <\/select>"+
                                  "                <\/div>"+
                                  "                <div id='totalchargepoints_Gcurrency_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                  "                <div id='tdiv_totalchargepoints_Gcurrency' style='width:16%;float:left'>"+
                                  "                 <input type='text' id='totalchargepoints_Gcurrency' name='totalchargepoints_Gcurrency' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                  "                <\/div>"+
                                  "                <div id='totalchargepoints_Gcurrency_more' style='float:left;cursor:pointer;'>"+
                                  "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalchargepoints_Gcurrency1',1);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_space1',1);"+
                                  "                                                               showHide('tdiv_totalchargepoints_Gcurrency1',1);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_and',1);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_more',0);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_less',1)\">"+
                                  "                <\/div>"+
                                  "                <div id='totalchargepoints_Gcurrency_and' style='float:left;display:none;'>"+
                                  "                 &nbsp;and&nbsp;"+
                                  "                <\/div>"+
                                  "              	<div id='sdiv_totalchargepoints_Gcurrency1' style='width:5%;float:left;display:none;'>"+
                                  "                 <select id='sel_totalchargepoints_Gcurrency1' name='sel_totalchargepoints_Gcurrency1'>"+
                                  "                   <option value='gt'>≧<\/option>"+
                                  "                   <option value='lt'>≦<\/option>"+
                                  "                   <option value='eq'>=<\/option>"+
                                  "                   <option value='neq'>≠<\/option>"+
                                  "                 <\/select>"+
                                  "                <\/div>"+
                                  "                <div id='totalchargepoints_Gcurrency_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                  "                <div id='tdiv_totalchargepoints_Gcurrency1' style='width:16%;float:left;display:none;'>"+
                                  "                 <input type='text' id='totalchargepoints_Gcurrency1' name='totalchargepoints_Gcurrency1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                  "                <\/div>"+
                                  "                <div id='totalchargepoints_Gcurrency_less' style='float:left;display:none;cursor:pointer;'>"+
                                  "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalchargepoints_Gcurrency1',0);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_space1',0);"+
                                  "                                                               showHide('tdiv_totalchargepoints_Gcurrency1',0);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_and',0);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_more',1);"+
                                  "                                                               showHide('totalchargepoints_Gcurrency_less',0)\">"+
                                  "                <\/div>"+
                                  "              <\/td>"+
                                  "            <\/tr>";

var totalchargepoints_luckymoney = "            <tr>"+
                                   "              <td style='width:4%'>"+
                                   "              	<input type='checkbox' name='ckb_totalchargepoints_luckymoney' id='ckb_totalchargepoints_luckymoney' class='filled-in'><\/input>"+
                                   "                <label for='ckb_totalchargepoints_luckymoney'><\/label>"+
                                   "              <\/td>"+
                                   "              <td style='width:10%'>總押分_開運金<\/td>"+
                                   "              <td>"+
                                   "              	<div id='sdiv_totalchargepoints_luckymoney' style='width:5%;float:left'>"+
                                   "                 <select id='sel_totalchargepoints_luckymoney' name='sel_totalchargepoints_luckymoney'>"+
                                   "                   <option value='gt'>≧<\/option>"+
                                   "                   <option value='lt'>≦<\/option>"+
                                   "                   <option value='eq'>=<\/option>"+
                                   "                   <option value='neq'>≠<\/option>"+
                                   "                 <\/select>"+
                                   "                <\/div>"+
                                   "                <div id='totalchargepoints_luckymoney_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                   "                <div id='tdiv_totalchargepoints_luckymoney' style='width:16%;float:left'>"+
                                   "                 <input type='text' id='totalchargepoints_luckymoney' name='totalchargepoints_luckymoney' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                   "                <\/div>"+
                                   "                <div id='totalchargepoints_luckymoney_more' style='float:left;cursor:pointer;'>"+
                                   "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalchargepoints_luckymoney1',1);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_space1',1);"+
                                   "                                                               showHide('tdiv_totalchargepoints_luckymoney1',1);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_and',1);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_more',0);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_less',1)\">"+
                                   "                <\/div>"+
                                   "                <div id='totalchargepoints_luckymoney_and' style='float:left;display:none;'>"+
                                   "                 &nbsp;and&nbsp;"+
                                   "                <\/div>"+
                                   "              	<div id='sdiv_totalchargepoints_luckymoney1' style='width:5%;float:left;display:none;'>"+
                                   "                 <select id='sel_totalchargepoints_luckymoney1' name='sel_totalchargepoints_luckymoney1'>"+
                                   "                   <option value='gt'>≧<\/option>"+
                                   "                   <option value='lt'>≦<\/option>"+
                                   "                   <option value='eq'>=<\/option>"+
                                   "                   <option value='neq'>≠<\/option>"+
                                   "                 <\/select>"+
                                   "                <\/div>"+
                                   "                <div id='totalchargepoints_luckymoney_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                   "                <div id='tdiv_totalchargepoints_luckymoney1' style='width:16%;float:left;display:none;'>"+
                                   "                 <input type='text' id='totalchargepoints_luckymoney1' name='totalchargepoints_luckymoney1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                   "                <\/div>"+
                                   "                <div id='totalchargepoints_luckymoney_less' style='float:left;display:none;cursor:pointer;'>"+
                                   "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalchargepoints_luckymoney1',0);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_space1',0);"+
                                   "                                                               showHide('tdiv_totalchargepoints_luckymoney1',0);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_and',0);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_more',1);"+
                                   "                                                               showHide('totalchargepoints_luckymoney_less',0)\">"+
                                   "                <\/div>"+
                                   "              <\/td>"+
                                   "            <\/tr>";

var totalscore = "            <tr>"+
                 "              <td style='width:4%'>"+
                 "              	<input type='checkbox' name='ckb_totalscore' id='ckb_totalscore' class='filled-in'><\/input>"+
                 "                <label for='ckb_totalscore'><\/label>"+
                 "              <\/td>"+
                 "              <td style='width:10%'>總得分<\/td>"+
                 "              <td>"+
                 "              	<div id='sdiv_totalscore' style='width:5%;float:left'>"+
                 "                 <select id='sel_totalscore' name='sel_totalscore'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalscore_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalscore' style='width:16%;float:left'>"+
                 "                 <input type='text' id='totalscore' name='totalscore' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalscore_more' style='float:left;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalscore1',1);"+
                 "                                                               showHide('totalscore_space1',1);"+
                 "                                                               showHide('tdiv_totalscore1',1);"+
                 "                                                               showHide('totalscore_and',1);"+
                 "                                                               showHide('totalscore_more',0);"+
                 "                                                               showHide('totalscore_less',1)\">"+
                 "                <\/div>"+
                 "                <div id='totalscore_and' style='float:left;display:none;'>"+
                 "                 &nbsp;and&nbsp;"+
                 "                <\/div>"+
                 "              	<div id='sdiv_totalscore1' style='width:5%;float:left;display:none;'>"+
                 "                 <select id='sel_totalscore1' name='sel_totalscore1'>"+
                 "                   <option value='gt'>≧<\/option>"+
                 "                   <option value='lt'>≦<\/option>"+
                 "                   <option value='eq'>=<\/option>"+
                 "                   <option value='neq'>≠<\/option>"+
                 "                 <\/select>"+
                 "                <\/div>"+
                 "                <div id='totalscore_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                 "                <div id='tdiv_totalscore1' style='width:16%;float:left;display:none;'>"+
                 "                 <input type='text' id='totalscore1' name='totalscore1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                 "                <\/div>"+
                 "                <div id='totalscore_less' style='float:left;display:none;cursor:pointer;'>"+
                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalscore1',0);"+
                 "                                                               showHide('totalscore_space1',0);"+
                 "                                                               showHide('tdiv_totalscore1',0);"+
                 "                                                               showHide('totalscore_and',0);"+
                 "                                                               showHide('totalscore_more',1);"+
                 "                                                               showHide('totalscore_less',0)\">"+
                 "                <\/div>"+
                 "              <\/td>"+
                 "            <\/tr>";

var finaltotalscore_Gcurrency = "            <tr>"+
                                "              <td style='width:4%'>"+
                                "              	<input type='checkbox' name='ckb_finaltotalscore_Gcurrency' id='ckb_finaltotalscore_Gcurrency' class='filled-in'><\/input>"+
                                "                <label for='ckb_finaltotalscore_Gcurrency'><\/label>"+
                                "              <\/td>"+
                                "              <td style='width:10%'>最後總得分_G幣<\/td>"+
                                "              <td>"+
                                "              	<div id='sdiv_finaltotalscore_Gcurrency' style='width:5%;float:left'>"+
                                "                 <select id='sel_finaltotalscore_Gcurrency' name='sel_finaltotalscore_Gcurrency'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='finaltotalscore_Gcurrency_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='tdiv_finaltotalscore_Gcurrency' style='width:16%;float:left'>"+
                                "                 <input type='text' id='finaltotalscore_Gcurrency' name='finaltotalscore_Gcurrency' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='finaltotalscore_Gcurrency_more' style='float:left;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_finaltotalscore_Gcurrency1',1);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_space1',1);"+
                                "                                                               showHide('tdiv_finaltotalscore_Gcurrency1',1);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_and',1);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_more',0);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_less',1)\">"+
                                "                <\/div>"+
                                "                <div id='finaltotalscore_Gcurrency_and' style='float:left;display:none;'>"+
                                "                 &nbsp;and&nbsp;"+
                                "                <\/div>"+
                                "              	<div id='sdiv_finaltotalscore_Gcurrency1' style='width:5%;float:left;display:none;'>"+
                                "                 <select id='sel_finaltotalscore_Gcurrency1' name='sel_finaltotalscore_Gcurrency1'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='finaltotalscore_Gcurrency_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='tdiv_finaltotalscore_Gcurrency1' style='width:16%;float:left;display:none;'>"+
                                "                 <input type='text' id='finaltotalscore_Gcurrency1' name='finaltotalscore_Gcurrency1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='finaltotalscore_Gcurrency_less' style='float:left;display:none;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_finaltotalscore_Gcurrency1',0);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_space1',0);"+
                                "                                                               showHide('tdiv_finaltotalscore_Gcurrency1',0);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_and',0);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_more',1);"+
                                "                                                               showHide('finaltotalscore_Gcurrency_less',0)\">"+
                                "                <\/div>"+
                                "              <\/td>"+
                                "            <\/tr>";

var finaltotalscore_luckymoney = "            <tr>"+
                                 "              <td style='width:4%'>"+
                                 "              	<input type='checkbox' name='ckb_finaltotalscore_luckymoney' id='ckb_finaltotalscore_luckymoney' class='filled-in'><\/input>"+
                                 "                <label for='ckb_finaltotalscore_luckymoney'><\/label>"+
                                 "              <\/td>"+
                                 "              <td style='width:10%'>最後總得分_開運金<\/td>"+
                                 "              <td>"+
                                 "              	<div id='sdiv_finaltotalscore_luckymoney' style='width:5%;float:left'>"+
                                 "                 <select id='sel_finaltotalscore_luckymoney' name='sel_finaltotalscore_luckymoney'>"+
                                 "                   <option value='gt'>≧<\/option>"+
                                 "                   <option value='lt'>≦<\/option>"+
                                 "                   <option value='eq'>=<\/option>"+
                                 "                   <option value='neq'>≠<\/option>"+
                                 "                 <\/select>"+
                                 "                <\/div>"+
                                 "                <div id='finaltotalscore_luckymoney_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                 "                <div id='tdiv_finaltotalscore_luckymoney' style='width:16%;float:left'>"+
                                 "                 <input type='text' id='finaltotalscore_luckymoney' name='finaltotalscore_luckymoney' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                 "                <\/div>"+
                                 "                <div id='finaltotalscore_luckymoney_more' style='float:left;cursor:pointer;'>"+
                                 "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_finaltotalscore_luckymoney1',1);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_space1',1);"+
                                 "                                                               showHide('tdiv_finaltotalscore_luckymoney1',1);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_and',1);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_more',0);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_less',1)\">"+
                                 "                <\/div>"+
                                 "                <div id='finaltotalscore_luckymoney_and' style='float:left;display:none;'>"+
                                 "                 &nbsp;and&nbsp;"+
                                 "                <\/div>"+
                                 "              	<div id='sdiv_finaltotalscore_luckymoney1' style='width:5%;float:left;display:none;'>"+
                                 "                 <select id='sel_finaltotalscore_luckymoney1' name='sel_finaltotalscore_luckymoney1'>"+
                                 "                   <option value='gt'>≧<\/option>"+
                                 "                   <option value='lt'>≦<\/option>"+
                                 "                   <option value='eq'>=<\/option>"+
                                 "                   <option value='neq'>≠<\/option>"+
                                 "                 <\/select>"+
                                 "                <\/div>"+
                                 "                <div id='finaltotalscore_luckymoney_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                 "                <div id='tdiv_finaltotalscore_luckymoney1' style='width:16%;float:left;display:none;'>"+
                                 "                 <input type='text' id='finaltotalscore_luckymoney1' name='finaltotalscore_luckymoney1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                 "                <\/div>"+
                                 "                <div id='finaltotalscore_luckymoney_less' style='float:left;display:none;cursor:pointer;'>"+
                                 "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_finaltotalscore_luckymoney1',0);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_space1',0);"+
                                 "                                                               showHide('tdiv_finaltotalscore_luckymoney1',0);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_and',0);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_more',1);"+
                                 "                                                               showHide('finaltotalscore_luckymoney_less',0)\">"+
                                 "                <\/div>"+
                                 "              <\/td>"+
                                 "            <\/tr>";

var totalscoreoutsidegifts = "            <tr>"+
                             "              <td style='width:4%'>"+
                             "              	<input type='checkbox' name='ckb_totalscoreoutsidegifts' id='ckb_totalscoreoutsidegifts' class='filled-in'><\/input>"+
                             "                <label for='ckb_totalscoreoutsidegifts'><\/label>"+
                             "              <\/td>"+
                             "              <td style='width:10%'>總外贈得分<\/td>"+
                             "              <td>"+
                             "              	<div id='sdiv_totalscoreoutsidegifts' style='width:5%;float:left'>"+
                             "                 <select id='sel_totalscoreoutsidegifts' name='sel_totalscoreoutsidegifts'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='totalscoreoutsidegifts_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='totalscoreoutsidegifts' style='width:16%;float:left'>"+
                             "                 <input type='text' id='totalscoreoutsidegifts' name='totalscoreoutsidegifts' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='totalscoreoutsidegifts_more' style='float:left;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totalscoreoutsidegifts_opt1',1);"+
                             "                                                            showHide('totalscoreoutsidegifts_space1',1);"+
                             "                                                            showHide('totalscoreoutsidegifts1',1);"+
                             "                                                            showHide('totalscoreoutsidegifts_and',1);"+
                             "                                                            showHide('totalscoreoutsidegifts_more',0);"+
                             "                                                            showHide('totalscoreoutsidegifts_less',1)\">"+
                             "                <\/div>"+
                             "                <div id='totalscoreoutsidegifts_and' style='float:left;display:none;'>"+
                             "                 &nbsp;and&nbsp;"+
                             "                <\/div>"+
                             "              	<div id='totalscoreoutsidegifts_opt1' style='width:5%;float:left;display:none;'>"+
                             "                 <select id='totalscoreoutsidegifts_opt1' name='totalscoreoutsidegifts_opt1'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='totalscoreoutsidegifts_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='totalscoreoutsidegifts1' style='width:16%;float:left;display:none;'>"+
                             "                 <input type='text' id='totalscoreoutsidegifts1' name='totalscoreoutsidegifts1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='totalscoreoutsidegifts_less' style='float:left;display:none;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totalscoreoutsidegifts_opt1',0);"+
                             "                                                            showHide('totalscoreoutsidegifts_space1',0);"+
                             "                                                            showHide('totalscoreoutsidegifts1',0);"+
                             "                                                            showHide('totalscoreoutsidegifts_and',0);"+
                             "                                                            showHide('totalscoreoutsidegifts_more',1);"+
                             "                                                            showHide('totalscoreoutsidegifts_less',0)\">"+
                             "                <\/div>"+
                             "              <\/td>"+
                             "            <\/tr>";

var finaltotalscore = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_finaltotalscore' id='ckb_finaltotalscore' class='filled-in'><\/input>"+
                      "                <label for='ckb_finaltotalscore'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>最後總得分<\/td>"+
                      "              <td>"+
                      "              	<div style='width:5%;float:left'>"+
                      "                 <select id='finaltotalscore_opt' name='finaltotalscore_opt'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='finaltotalscore_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='finaltotalscore' style='width:16%;float:left'>"+
                      "                 <input type='text' id='finaltotalscore' name='finaltotalscore' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='finaltotalscore_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('finaltotalscore_opt1',1);"+
                      "                                                            showHide('finaltotalscore_space1',1);"+
                      "                                                            showHide('finaltotalscore1',1);"+
                      "                                                            showHide('finaltotalscore_and',1);"+
                      "                                                            showHide('finaltotalscore_more',0);"+
                      "                                                            showHide('finaltotalscore_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='finaltotalscore_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='finaltotalscore_opt1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='finaltotalscore_opt1' name='finaltotalscore_opt1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='finaltotalscore_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='finaltotalscore1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='finaltotalscore1' name='finaltotalscore1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='finaltotalscore_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('finaltotalscore_opt1',0);"+
                      "                                                            showHide('finaltotalscore_space1',0);"+
                      "                                                            showHide('finaltotalscore1',0);"+
                      "                                                            showHide('finaltotalscore_and',0);"+
                      "                                                            showHide('finaltotalscore_more',1);"+
                      "                                                            showHide('finaltotalscore_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var gameboardnumber = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_gameboardnumber' id='ckb_gameboardnumber' class='filled-in'><\/input>"+
                      "                <label for='ckb_gameboardnumber'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>遊戲局數<\/td>"+
                      "              <td>"+
                      "              	<div style='width:5%;float:left'>"+
                      "                 <select id='gameboardnumber_opt' name='gameboardnumber_opt'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='gameboardnumber_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='gameboardnumber' style='width:16%;float:left'>"+
                      "                 <input type='text' id='gameboardnumber' name='gameboardnumber' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='gameboardnumber_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('gameboardnumber_opt1',1);"+
                      "                                                            showHide('gameboardnumber_space1',1);"+
                      "                                                            showHide('gameboardnumber1',1);"+
                      "                                                            showHide('gameboardnumber_and',1);"+
                      "                                                            showHide('gameboardnumber_more',0);"+
                      "                                                            showHide('gameboardnumber_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='gameboardnumber_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='gameboardnumber_opt1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='gameboardnumber_opt1' name='gameboardnumber_opt1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='gameboardnumber_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='gameboardnumber1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='gameboardnumber1' name='gameboardnumber1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='gameboardnumber_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('gameboardnumber_opt1',0);"+
                      "                                                            showHide('gameboardnumber_space1',0);"+
                      "                                                            showHide('gameboardnumber1',0);"+
                      "                                                            showHide('gameboardnumber_and',0);"+
                      "                                                            showHide('gameboardnumber_more',1);"+
                      "                                                            showHide('gameboardnumber_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var slotsboardnumber = "            <tr>"+
                       "              <td style='width:4%'>"+
                       "              	<input type='checkbox' name='ckb_slotsboardnumber' id='ckb_slotsboardnumber' class='filled-in'><\/input>"+
                       "                <label for='ckb_slotsboardnumber'><\/label>"+
                       "              <\/td>"+
                       "              <td style='width:10%'>SLOTS局數<\/td>"+
                       "              <td>"+
                       "              	<div style='width:5%;float:left'>"+
                       "                 <select id='slotsboardnumber_opt' name='slotsboardnumber_opt'>"+
                       "                   <option value='gt'>≧<\/option>"+
                       "                   <option value='lt'>≦<\/option>"+
                       "                   <option value='eq'>=<\/option>"+
                       "                   <option value='neq'>≠<\/option>"+
                       "                 <\/select>"+
                       "                <\/div>"+
                       "                <div id='slotsboardnumber_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                       "                <div id='slotsboardnumber' style='width:16%;float:left'>"+
                       "                 <input type='text' id='slotsboardnumber' name='slotsboardnumber' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                       "                <\/div>"+
                       "                <div id='slotsboardnumber_more' style='float:left;cursor:pointer;'>"+
                       "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('slotsboardnumber_opt1',1);"+
                       "                                                            showHide('slotsboardnumber_space1',1);"+
                       "                                                            showHide('slotsboardnumber1',1);"+
                       "                                                            showHide('slotsboardnumber_and',1);"+
                       "                                                            showHide('slotsboardnumber_more',0);"+
                       "                                                            showHide('slotsboardnumber_less',1)\">"+
                       "                <\/div>"+
                       "                <div id='slotsboardnumber_and' style='float:left;display:none;'>"+
                       "                 &nbsp;and&nbsp;"+
                       "                <\/div>"+
                       "              	<div id='slotsboardnumber_opt1' style='width:5%;float:left;display:none;'>"+
                       "                 <select id='slotsboardnumber_opt1' name='slotsboardnumber_opt1'>"+
                       "                   <option value='gt'>≧<\/option>"+
                       "                   <option value='lt'>≦<\/option>"+
                       "                   <option value='eq'>=<\/option>"+
                       "                   <option value='neq'>≠<\/option>"+
                       "                 <\/select>"+
                       "                <\/div>"+
                       "                <div id='slotsboardnumber_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                       "                <div id='slotsboardnumber1' style='width:16%;float:left;display:none;'>"+
                       "                 <input type='text' id='slotsboardnumber1' name='slotsboardnumber1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                       "                <\/div>"+
                       "                <div id='slotsboardnumber_less' style='float:left;display:none;cursor:pointer;'>"+
                       "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('slotsboardnumber_opt1',0);"+
                       "                                                            showHide('slotsboardnumber_space1',0);"+
                       "                                                            showHide('slotsboardnumber1',0);"+
                       "                                                            showHide('slotsboardnumber_and',0);"+
                       "                                                            showHide('slotsboardnumber_more',1);"+
                       "                                                            showHide('slotsboardnumber_less',0)\">"+
                       "                <\/div>"+
                       "              <\/td>"+
                       "            <\/tr>";

var tableclassboardnumber = "            <tr>"+
                            "              <td style='width:4%'>"+
                            "              	<input type='checkbox' name='ckb_tableclassboardnumber' id='ckb_tableclassboardnumber' class='filled-in'><\/input>"+
                            "                <label for='ckb_tableclassboardnumber'><\/label>"+
                            "              <\/td>"+
                            "              <td style='width:10%'>牌桌類局數<\/td>"+
                            "              <td>"+
                            "              	<div style='width:5%;float:left'>"+
                            "                 <select id='tableclassboardnumber_opt' name='tableclassboardnumber_opt'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='tableclassboardnumber_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='tableclassboardnumber' style='width:16%;float:left'>"+
                            "                 <input type='text' id='tableclassboardnumber' name='tableclassboardnumber' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='tableclassboardnumber_more' style='float:left;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('tableclassboardnumber_opt1',1);"+
                            "                                                            showHide('tableclassboardnumber_space1',1);"+
                            "                                                            showHide('tableclassboardnumber1',1);"+
                            "                                                            showHide('tableclassboardnumber_and',1);"+
                            "                                                            showHide('tableclassboardnumber_more',0);"+
                            "                                                            showHide('tableclassboardnumber_less',1)\">"+
                            "                <\/div>"+
                            "                <div id='tableclassboardnumber_and' style='float:left;display:none;'>"+
                            "                 &nbsp;and&nbsp;"+
                            "                <\/div>"+
                            "              	<div id='tableclassboardnumber_opt1' style='width:5%;float:left;display:none;'>"+
                            "                 <select id='tableclassboardnumber_opt1' name='tableclassboardnumber_opt1'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='tableclassboardnumber_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='tableclassboardnumber1' style='width:16%;float:left;display:none;'>"+
                            "                 <input type='text' id='tableclassboardnumber1' name='tableclassboardnumber1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='tableclassboardnumber_less' style='float:left;display:none;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('tableclassboardnumber_opt1',0);"+
                            "                                                            showHide('tableclassboardnumber_space1',0);"+
                            "                                                            showHide('tableclassboardnumber1',0);"+
                            "                                                            showHide('tableclassboardnumber_and',0);"+
                            "                                                            showHide('tableclassboardnumber_more',1);"+
                            "                                                            showHide('tableclassboardnumber_less',0)\">"+
                            "                <\/div>"+
                            "              <\/td>"+
                            "            <\/tr>";

var someclass1gameboardnumber = "            <tr>"+
                                "              <td style='width:4%'>"+
                                "              	<input type='checkbox' name='ckb_someclass1gameboardnumber' id='ckb_someclass1gameboardnumber' class='filled-in'><\/input>"+
                                "                <label for='ckb_someclass1gameboardnumber'><\/label>"+
                                "              <\/td>"+
                                "              <td style='width:10%'>某類1Game局數<\/td>"+
                                "              <td>"+
                                "              	<div style='width:5%;float:left'>"+
                                "                 <select id='someclass1gameboardnumber_opt' name='someclass1gameboardnumber_opt'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='someclass1gameboardnumber_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='someclass1gameboardnumber' style='width:16%;float:left'>"+
                                "                 <input type='text' id='someclass1gameboardnumber' name='someclass1gameboardnumber' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='someclass1gameboardnumber_more' style='float:left;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('someclass1gameboardnumber_opt1',1);"+
                                "                                                            showHide('someclass1gameboardnumber_space1',1);"+
                                "                                                            showHide('someclass1gameboardnumber1',1);"+
                                "                                                            showHide('someclass1gameboardnumber_and',1);"+
                                "                                                            showHide('someclass1gameboardnumber_more',0);"+
                                "                                                            showHide('someclass1gameboardnumber_less',1)\">"+
                                "                <\/div>"+
                                "                <div id='someclass1gameboardnumber_and' style='float:left;display:none;'>"+
                                "                 &nbsp;and&nbsp;"+
                                "                <\/div>"+
                                "              	<div id='someclass1gameboardnumber_opt1' style='width:5%;float:left;display:none;'>"+
                                "                 <select id='someclass1gameboardnumber_opt1' name='someclass1gameboardnumber_opt1'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='someclass1gameboardnumber_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='someclass1gameboardnumber1' style='width:16%;float:left;display:none;'>"+
                                "                 <input type='text' id='someclass1gameboardnumber1' name='someclass1gameboardnumber1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='someclass1gameboardnumber_less' style='float:left;display:none;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('someclass1gameboardnumber_opt1',0);"+
                                "                                                            showHide('someclass1gameboardnumber_space1',0);"+
                                "                                                            showHide('someclass1gameboardnumber1',0);"+
                                "                                                            showHide('someclass1gameboardnumber_and',0);"+
                                "                                                            showHide('someclass1gameboardnumber_more',1);"+
                                "                                                            showHide('someclass1gameboardnumber_less',0)\">"+
                                "                <\/div>"+
                                "              <\/td>"+
                                "            <\/tr>";

var someclass2gameboardnumber = "            <tr>"+
                                "              <td style='width:4%'>"+
                                "              	<input type='checkbox' name='ckb_someclass2gameboardnumber' id='ckb_someclass2gameboardnumber' class='filled-in'><\/input>"+
                                "                <label for='ckb_someclass2gameboardnumber'><\/label>"+
                                "              <\/td>"+
                                "              <td style='width:10%'>某類2Game局數<\/td>"+
                                "              <td>"+
                                "              	<div style='width:5%;float:left'>"+
                                "                 <select id='someclass2gameboardnumber_opt' name='someclass2gameboardnumber_opt'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='someclass2gameboardnumber_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='someclass2gameboardnumber' style='width:16%;float:left'>"+
                                "                 <input type='text' id='someclass2gameboardnumber' name='someclass2gameboardnumber' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='someclass2gameboardnumber_more' style='float:left;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('someclass2gameboardnumber_opt1',1);"+
                                "                                                            showHide('someclass2gameboardnumber_space1',1);"+
                                "                                                            showHide('someclass2gameboardnumber1',1);"+
                                "                                                            showHide('someclass2gameboardnumber_and',1);"+
                                "                                                            showHide('someclass2gameboardnumber_more',0);"+
                                "                                                            showHide('someclass2gameboardnumber_less',1)\">"+
                                "                <\/div>"+
                                "                <div id='someclass2gameboardnumber_and' style='float:left;display:none;'>"+
                                "                 &nbsp;and&nbsp;"+
                                "                <\/div>"+
                                "              	<div id='someclass2gameboardnumber_opt1' style='width:5%;float:left;display:none;'>"+
                                "                 <select id='someclass2gameboardnumber_opt1' name='someclass2gameboardnumber_opt1'>"+
                                "                   <option value='gt'>≧<\/option>"+
                                "                   <option value='lt'>≦<\/option>"+
                                "                   <option value='eq'>=<\/option>"+
                                "                   <option value='neq'>≠<\/option>"+
                                "                 <\/select>"+
                                "                <\/div>"+
                                "                <div id='someclass2gameboardnumber_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                "                <div id='someclass2gameboardnumber1' style='width:16%;float:left;display:none;'>"+
                                "                 <input type='text' id='someclass2gameboardnumber1' name='someclass2gameboardnumber1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                "                <\/div>"+
                                "                <div id='someclass2gameboardnumber_less' style='float:left;display:none;cursor:pointer;'>"+
                                "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('someclass2gameboardnumber_opt1',0);"+
                                "                                                            showHide('someclass2gameboardnumber_space1',0);"+
                                "                                                            showHide('someclass2gameboardnumber1',0);"+
                                "                                                            showHide('someclass2gameboardnumber_and',0);"+
                                "                                                            showHide('someclass2gameboardnumber_more',1);"+
                                "                                                            showHide('someclass2gameboardnumber_less',0)\">"+
                                "                <\/div>"+
                                "              <\/td>"+
                                "            <\/tr>";

var totaltimesmultiple = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_totaltimesmultiple' id='ckb_totaltimesmultiple' class='filled-in'><\/input>"+
                         "                <label for='ckb_totaltimesmultiple'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>比倍總次數<\/td>"+
                         "              <td>"+
                         "              	<div style='width:5%;float:left'>"+
                         "                 <select id='totaltimesmultiple_opt' name='totaltimesmultiple_opt'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='totaltimesmultiple_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='totaltimesmultiple' style='width:16%;float:left'>"+
                         "                 <input type='text' id='totaltimesmultiple' name='totaltimesmultiple' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='totaltimesmultiple_more' style='float:left;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totaltimesmultiple_opt1',1);"+
                         "                                                            showHide('totaltimesmultiple_space1',1);"+
                         "                                                            showHide('totaltimesmultiple1',1);"+
                         "                                                            showHide('totaltimesmultiple_and',1);"+
                         "                                                            showHide('totaltimesmultiple_more',0);"+
                         "                                                            showHide('totaltimesmultiple_less',1)\">"+
                         "                <\/div>"+
                         "                <div id='totaltimesmultiple_and' style='float:left;display:none;'>"+
                         "                 &nbsp;and&nbsp;"+
                         "                <\/div>"+
                         "              	<div id='totaltimesmultiple_opt1' style='width:5%;float:left;display:none;'>"+
                         "                 <select id='totaltimesmultiple_opt1' name='totaltimesmultiple_opt1'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='totaltimesmultiple_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='totaltimesmultiple1' style='width:16%;float:left;display:none;'>"+
                         "                 <input type='text' id='totaltimesmultiple1' name='totaltimesmultiple1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='totaltimesmultiple_less' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totaltimesmultiple_opt1',0);"+
                         "                                                            showHide('totaltimesmultiple_space1',0);"+
                         "                                                            showHide('totaltimesmultiple1',0);"+
                         "                                                            showHide('totaltimesmultiple_and',0);"+
                         "                                                            showHide('totaltimesmultiple_more',1);"+
                         "                                                            showHide('totaltimesmultiple_less',0)\">"+
                         "                <\/div>"+
                         "              <\/td>"+
                         "            <\/tr>";

var totalscoremultiple = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_totalscoremultiple' id='ckb_totalscoremultiple' class='filled-in'><\/input>"+
                         "                <label for='ckb_totalscoremultiple'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>比倍總得分<\/td>"+
                         "              <td>"+
                         "              	<div style='width:5%;float:left'>"+
                         "                 <select id='totalscoremultiple_opt' name='totalscoremultiple_opt'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='totalscoremultiple_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='totalscoremultiple' style='width:16%;float:left'>"+
                         "                 <input type='text' id='totalscoremultiple' name='totalscoremultiple' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='totalscoremultiple_more' style='float:left;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totalscoremultiple_opt1',1);"+
                         "                                                            showHide('totalscoremultiple_space1',1);"+
                         "                                                            showHide('totalscoremultiple1',1);"+
                         "                                                            showHide('totalscoremultiple_and',1);"+
                         "                                                            showHide('totalscoremultiple_more',0);"+
                         "                                                            showHide('totalscoremultiple_less',1)\">"+
                         "                <\/div>"+
                         "                <div id='totalscoremultiple_and' style='float:left;display:none;'>"+
                         "                 &nbsp;and&nbsp;"+
                         "                <\/div>"+
                         "              	<div id='totalscoremultiple_opt1' style='width:5%;float:left;display:none;'>"+
                         "                 <select id='totalscoremultiple_opt1' name='totalscoremultiple_opt1'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='totalscoremultiple_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='totalscoremultiple1' style='width:16%;float:left;display:none;'>"+
                         "                 <input type='text' id='totalscoremultiple1' name='totalscoremultiple1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='totalscoremultiple_less' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totalscoremultiple_opt1',0);"+
                         "                                                            showHide('totalscoremultiple_space1',0);"+
                         "                                                            showHide('totalscoremultiple1',0);"+
                         "                                                            showHide('totalscoremultiple_and',0);"+
                         "                                                            showHide('totalscoremultiple_more',1);"+
                         "                                                            showHide('totalscoremultiple_less',0)\">"+
                         "                <\/div>"+
                         "              <\/td>"+
                         "            <\/tr>";

var totaltimesjp = "            <tr>"+
                   "              <td style='width:4%'>"+
                   "              	<input type='checkbox' name='ckb_totaltimesjp' id='ckb_totaltimesjp' class='filled-in'><\/input>"+
                   "                <label for='ckb_totaltimesjp'><\/label>"+
                   "              <\/td>"+
                   "              <td style='width:10%'>連線JP總次數<\/td>"+
                   "              <td>"+
                   "              	<div style='width:5%;float:left'>"+
                   "                 <select id='totaltimesjp_opt' name='totaltimesjp_opt'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='totaltimesjp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='totaltimesjp' style='width:16%;float:left'>"+
                   "                 <input type='text' id='totaltimesjp' name='totaltimesjp' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='totaltimesjp_more' style='float:left;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totaltimesjp_opt1',1);"+
                   "                                                            showHide('totaltimesjp_space1',1);"+
                   "                                                            showHide('totaltimesjp1',1);"+
                   "                                                            showHide('totaltimesjp_and',1);"+
                   "                                                            showHide('totaltimesjp_more',0);"+
                   "                                                            showHide('totaltimesjp_less',1)\">"+
                   "                <\/div>"+
                   "                <div id='totaltimesjp_and' style='float:left;display:none;'>"+
                   "                 &nbsp;and&nbsp;"+
                   "                <\/div>"+
                   "              	<div id='totaltimesjp_opt1' style='width:5%;float:left;display:none;'>"+
                   "                 <select id='totaltimesjp_opt1' name='totaltimesjp_opt1'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='totaltimesjp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='totaltimesjp1' style='width:16%;float:left;display:none;'>"+
                   "                 <input type='text' id='totaltimesjp1' name='totaltimesjp1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='totaltimesjp_less' style='float:left;display:none;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totaltimesjp_opt1',0);"+
                   "                                                            showHide('totaltimesjp_space1',0);"+
                   "                                                            showHide('totaltimesjp1',0);"+
                   "                                                            showHide('totaltimesjp_and',0);"+
                   "                                                            showHide('totaltimesjp_more',1);"+
                   "                                                            showHide('totaltimesjp_less',0)\">"+
                   "                <\/div>"+
                   "              <\/td>"+
                   "            <\/tr>";

var totalscorejp = "            <tr>"+
                   "              <td style='width:4%'>"+
                   "              	<input type='checkbox' name='ckb_totalscorejp' id='ckb_totalscorejp' class='filled-in'><\/input>"+
                   "                <label for='ckb_totalscorejp'><\/label>"+
                   "              <\/td>"+
                   "              <td style='width:10%'>連線JP總得分<\/td>"+
                   "              <td>"+
                   "              	<div style='width:5%;float:left'>"+
                   "                 <select id='totalscorejp_opt' name='totalscorejp_opt'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='totalscorejp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='totalscorejp' style='width:16%;float:left'>"+
                   "                 <input type='text' id='totalscorejp' name='totalscorejp' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='totalscorejp_more' style='float:left;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totalscorejp_opt1',1);"+
                   "                                                            showHide('totalscorejp_space1',1);"+
                   "                                                            showHide('totalscorejp1',1);"+
                   "                                                            showHide('totalscorejp_and',1);"+
                   "                                                            showHide('totalscorejp_more',0);"+
                   "                                                            showHide('totalscorejp_less',1)\">"+
                   "                <\/div>"+
                   "                <div id='totalscorejp_and' style='float:left;display:none;'>"+
                   "                 &nbsp;and&nbsp;"+
                   "                <\/div>"+
                   "              	<div id='totalscorejp_opt1' style='width:5%;float:left;display:none;'>"+
                   "                 <select id='totalscorejp_opt1' name='totalscorejp_opt1'>"+
                   "                   <option value='gt'>≧<\/option>"+
                   "                   <option value='lt'>≦<\/option>"+
                   "                   <option value='eq'>=<\/option>"+
                   "                   <option value='neq'>≠<\/option>"+
                   "                 <\/select>"+
                   "                <\/div>"+
                   "                <div id='totalscorejp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                   "                <div id='totalscorejp1' style='width:16%;float:left;display:none;'>"+
                   "                 <input type='text' id='totalscorejp1' name='totalscorejp1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                   "                <\/div>"+
                   "                <div id='totalscorejp_less' style='float:left;display:none;cursor:pointer;'>"+
                   "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totalscorejp_opt1',0);"+
                   "                                                            showHide('totalscorejp_space1',0);"+
                   "                                                            showHide('totalscorejp1',0);"+
                   "                                                            showHide('totalscorejp_and',0);"+
                   "                                                            showHide('totalscorejp_more',1);"+
                   "                                                            showHide('totalscorejp_less',0)\">"+
                   "                <\/div>"+
                   "              <\/td>"+
                   "            <\/tr>";

var chargepointsthismonth = "            <tr>"+
                            "              <td style='width:4%'>"+
                            "              	<input type='checkbox' name='ckb_chargepointsthismonth' id='ckb_chargepointsthismonth' class='filled-in'><\/input>"+
                            "                <label for='ckb_chargepointsthismonth'><\/label>"+
                            "              <\/td>"+
                            "              <td style='width:10%'>本月押分<\/td>"+
                            "              <td>"+
                            "              	<div style='width:5%;float:left'>"+
                            "                 <select id='chargepointsthismonth_opt' name='chargepointsthismonth_opt'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='chargepointsthismonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='chargepointsthismonth' style='width:16%;float:left'>"+
                            "                 <input type='text' id='chargepointsthismonth' name='chargepointsthismonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='chargepointsthismonth_more' style='float:left;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('chargepointsthismonth_opt1',1);"+
                            "                                                            showHide('chargepointsthismonth_space1',1);"+
                            "                                                            showHide('chargepointsthismonth1',1);"+
                            "                                                            showHide('chargepointsthismonth_and',1);"+
                            "                                                            showHide('chargepointsthismonth_more',0);"+
                            "                                                            showHide('chargepointsthismonth_less',1)\">"+
                            "                <\/div>"+
                            "                <div id='chargepointsthismonth_and' style='float:left;display:none;'>"+
                            "                 &nbsp;and&nbsp;"+
                            "                <\/div>"+
                            "              	<div id='chargepointsthismonth_opt1' style='width:5%;float:left;display:none;'>"+
                            "                 <select id='chargepointsthismonth_opt1' name='chargepointsthismonth_opt1'>"+
                            "                   <option value='gt'>≧<\/option>"+
                            "                   <option value='lt'>≦<\/option>"+
                            "                   <option value='eq'>=<\/option>"+
                            "                   <option value='neq'>≠<\/option>"+
                            "                 <\/select>"+
                            "                <\/div>"+
                            "                <div id='chargepointsthismonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                            "                <div id='chargepointsthismonth1' style='width:16%;float:left;display:none;'>"+
                            "                 <input type='text' id='chargepointsthismonth1' name='chargepointsthismonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                            "                <\/div>"+
                            "                <div id='chargepointsthismonth_less' style='float:left;display:none;cursor:pointer;'>"+
                            "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('chargepointsthismonth_opt1',0);"+
                            "                                                            showHide('chargepointsthismonth_space1',0);"+
                            "                                                            showHide('chargepointsthismonth1',0);"+
                            "                                                            showHide('chargepointsthismonth_and',0);"+
                            "                                                            showHide('chargepointsthismonth_more',1);"+
                            "                                                            showHide('chargepointsthismonth_less',0)\">"+
                            "                <\/div>"+
                            "              <\/td>"+
                            "            <\/tr>";

var giftthismonth = "            <tr>"+
                    "              <td style='width:4%'>"+
                    "              	<input type='checkbox' name='ckb_giftthismonth' id='ckb_giftthismonth' class='filled-in'><\/input>"+
                    "                <label for='ckb_giftthismonth'><\/label>"+
                    "              <\/td>"+
                    "              <td style='width:10%'>本月儲值NT$<\/td>"+
                    "              <td>"+
                    "              	<div style='width:5%;float:left'>"+
                    "                 <select id='giftthismonth_opt' name='giftthismonth_opt'>"+
                    "                   <option value='gt'>≧<\/option>"+
                    "                   <option value='lt'>≦<\/option>"+
                    "                   <option value='eq'>=<\/option>"+
                    "                   <option value='neq'>≠<\/option>"+
                    "                 <\/select>"+
                    "                <\/div>"+
                    "                <div id='giftthismonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                    "                <div id='giftthismonth' style='width:16%;float:left'>"+
                    "                 <input type='text' id='giftthismonth' name='giftthismonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                    "                <\/div>"+
                    "                <div id='giftthismonth_more' style='float:left;cursor:pointer;'>"+
                    "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('giftthismonth_opt1',1);"+
                    "                                                            showHide('giftthismonth_space1',1);"+
                    "                                                            showHide('giftthismonth1',1);"+
                    "                                                            showHide('giftthismonth_and',1);"+
                    "                                                            showHide('giftthismonth_more',0);"+
                    "                                                            showHide('giftthismonth_less',1)\">"+
                    "                <\/div>"+
                    "                <div id='giftthismonth_and' style='float:left;display:none;'>"+
                    "                 &nbsp;and&nbsp;"+
                    "                <\/div>"+
                    "              	<div id='giftthismonth_opt1' style='width:5%;float:left;display:none;'>"+
                    "                 <select id='giftthismonth_opt1' name='giftthismonth_opt1'>"+
                    "                   <option value='gt'>≧<\/option>"+
                    "                   <option value='lt'>≦<\/option>"+
                    "                   <option value='eq'>=<\/option>"+
                    "                   <option value='neq'>≠<\/option>"+
                    "                 <\/select>"+
                    "                <\/div>"+
                    "                <div id='giftthismonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                    "                <div id='giftthismonth1' style='width:16%;float:left;display:none;'>"+
                    "                 <input type='text' id='giftthismonth1' name='giftthismonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                    "                <\/div>"+
                    "                <div id='giftthismonth_less' style='float:left;display:none;cursor:pointer;'>"+
                    "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('giftthismonth_opt1',0);"+
                    "                                                            showHide('giftthismonth_space1',0);"+
                    "                                                            showHide('giftthismonth1',0);"+
                    "                                                            showHide('giftthismonth_and',0);"+
                    "                                                            showHide('giftthismonth_more',1);"+
                    "                                                            showHide('giftthismonth_less',0)\">"+
                    "                <\/div>"+
                    "              <\/td>"+
                    "            <\/tr>";

var outamountthismonth = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_outamountthismonth' id='ckb_outamountthismonth' class='filled-in'><\/input>"+
                         "                <label for='ckb_outamountthismonth'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>本月轉出額<\/td>"+
                         "              <td>"+
                         "              	<div style='width:5%;float:left'>"+
                         "                 <select id='outamountthismonth_opt' name='outamountthismonth_opt'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='outamountthismonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='outamountthismonth' style='width:16%;float:left'>"+
                         "                 <input type='text' id='outamountthismonth' name='outamountthismonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='outamountthismonth_more' style='float:left;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('outamountthismonth_opt1',1);"+
                         "                                                            showHide('outamountthismonth_space1',1);"+
                         "                                                            showHide('outamountthismonth1',1);"+
                         "                                                            showHide('outamountthismonth_and',1);"+
                         "                                                            showHide('outamountthismonth_more',0);"+
                         "                                                            showHide('outamountthismonth_less',1)\">"+
                         "                <\/div>"+
                         "                <div id='outamountthismonth_and' style='float:left;display:none;'>"+
                         "                 &nbsp;and&nbsp;"+
                         "                <\/div>"+
                         "              	<div id='outamountthismonth_opt1' style='width:5%;float:left;display:none;'>"+
                         "                 <select id='outamountthismonth_opt1' name='outamountthismonth_opt1'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='outamountthismonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='outamountthismonth1' style='width:16%;float:left;display:none;'>"+
                         "                 <input type='text' id='outamountthismonth1' name='outamountthismonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='outamountthismonth_less' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('outamountthismonth_opt1',0);"+
                         "                                                            showHide('outamountthismonth_space1',0);"+
                         "                                                            showHide('outamountthismonth1',0);"+
                         "                                                            showHide('outamountthismonth_and',0);"+
                         "                                                            showHide('outamountthismonth_more',1);"+
                         "                                                            showHide('outamountthismonth_less',0)\">"+
                         "                <\/div>"+
                         "              <\/td>"+
                         "            <\/tr>";

var inamountthismonth = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_inamountthismonth' id='ckb_inamountthismonth' class='filled-in'><\/input>"+
                        "                <label for='ckb_inamountthismonth'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>本月轉入額<\/td>"+
                        "              <td>"+
                        "              	<div style='width:5%;float:left'>"+
                        "                 <select id='inamountthismonth_opt' name='inamountthismonth_opt'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='inamountthismonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='inamountthismonth' style='width:16%;float:left'>"+
                        "                 <input type='text' id='inamountthismonth' name='inamountthismonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='inamountthismonth_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('inamountthismonth_opt1',1);"+
                        "                                                            showHide('inamountthismonth_space1',1);"+
                        "                                                            showHide('inamountthismonth1',1);"+
                        "                                                            showHide('inamountthismonth_and',1);"+
                        "                                                            showHide('inamountthismonth_more',0);"+
                        "                                                            showHide('inamountthismonth_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='inamountthismonth_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='inamountthismonth_opt1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='inamountthismonth_opt1' name='inamountthismonth_opt1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='inamountthismonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='inamountthismonth1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='inamountthismonth1' name='inamountthismonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='inamountthismonth_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('inamountthismonth_opt1',0);"+
                        "                                                            showHide('inamountthismonth_space1',0);"+
                        "                                                            showHide('inamountthismonth1',0);"+
                        "                                                            showHide('inamountthismonth_and',0);"+
                        "                                                            showHide('inamountthismonth_more',1);"+
                        "                                                            showHide('inamountthismonth_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var outamountlastmonth = "            <tr>"+
                         "              <td style='width:4%'>"+
                         "              	<input type='checkbox' name='ckb_outamountlastmonth' id='ckb_outamountlastmonth' class='filled-in'><\/input>"+
                         "                <label for='ckb_outamountlastmonth'><\/label>"+
                         "              <\/td>"+
                         "              <td style='width:10%'>上月轉出額<\/td>"+
                         "              <td>"+
                         "              	<div style='width:5%;float:left'>"+
                         "                 <select id='outamountlastmonth_opt' name='outamountlastmonth_opt'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='outamountlastmonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='outamountlastmonth' style='width:16%;float:left'>"+
                         "                 <input type='text' id='outamountlastmonth' name='outamountlastmonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='outamountlastmonth_more' style='float:left;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('outamountlastmonth_opt1',1);"+
                         "                                                            showHide('outamountlastmonth_space1',1);"+
                         "                                                            showHide('outamountlastmonth1',1);"+
                         "                                                            showHide('outamountlastmonth_and',1);"+
                         "                                                            showHide('outamountlastmonth_more',0);"+
                         "                                                            showHide('outamountlastmonth_less',1)\">"+
                         "                <\/div>"+
                         "                <div id='outamountlastmonth_and' style='float:left;display:none;'>"+
                         "                 &nbsp;and&nbsp;"+
                         "                <\/div>"+
                         "              	<div id='outamountlastmonth_opt1' style='width:5%;float:left;display:none;'>"+
                         "                 <select id='outamountlastmonth_opt1' name='outamountlastmonth_opt1'>"+
                         "                   <option value='gt'>≧<\/option>"+
                         "                   <option value='lt'>≦<\/option>"+
                         "                   <option value='eq'>=<\/option>"+
                         "                   <option value='neq'>≠<\/option>"+
                         "                 <\/select>"+
                         "                <\/div>"+
                         "                <div id='outamountlastmonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                         "                <div id='outamountlastmonth1' style='width:16%;float:left;display:none;'>"+
                         "                 <input type='text' id='outamountlastmonth1' name='outamountlastmonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                         "                <\/div>"+
                         "                <div id='outamountlastmonth_less' style='float:left;display:none;cursor:pointer;'>"+
                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('outamountlastmonth_opt1',0);"+
                         "                                                            showHide('outamountlastmonth_space1',0);"+
                         "                                                            showHide('outamountlastmonth1',0);"+
                         "                                                            showHide('outamountlastmonth_and',0);"+
                         "                                                            showHide('outamountlastmonth_more',1);"+
                         "                                                            showHide('outamountlastmonth_less',0)\">"+
                         "                <\/div>"+
                         "              <\/td>"+
                         "            <\/tr>";

var inamountlastmonth = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_inamountlastmonth' id='ckb_inamountlastmonth' class='filled-in'><\/input>"+
                        "                <label for='ckb_inamountlastmonth'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>上月轉入額<\/td>"+
                        "              <td>"+
                        "              	<div style='width:5%;float:left'>"+
                        "                 <select id='inamountlastmonth_opt' name='inamountlastmonth_opt'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='inamountlastmonth_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='inamountlastmonth' style='width:16%;float:left'>"+
                        "                 <input type='text' id='inamountlastmonth' name='inamountlastmonth' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='inamountlastmonth_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('inamountlastmonth_opt1',1);"+
                        "                                                            showHide('inamountlastmonth_space1',1);"+
                        "                                                            showHide('inamountlastmonth1',1);"+
                        "                                                            showHide('inamountlastmonth_and',1);"+
                        "                                                            showHide('inamountlastmonth_more',0);"+
                        "                                                            showHide('inamountlastmonth_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='inamountlastmonth_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='inamountlastmonth_opt1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='inamountlastmonth_opt1' name='inamountlastmonth_opt1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='inamountlastmonth_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='inamountlastmonth1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='inamountlastmonth1' name='inamountlastmonth1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='inamountlastmonth_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('inamountlastmonth_opt1',0);"+
                        "                                                            showHide('inamountlastmonth_space1',0);"+
                        "                                                            showHide('inamountlastmonth1',0);"+
                        "                                                            showHide('inamountlastmonth_and',0);"+
                        "                                                            showHide('inamountlastmonth_more',1);"+
                        "                                                            showHide('inamountlastmonth_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var totalpeoplepoints = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_totalpeoplepoints' id='ckb_totalpeoplepoints' class='filled-in'><\/input>"+
                        "                <label for='ckb_totalpeoplepoints'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>轉點總人數<\/td>"+
                        "              <td>"+
                        "              	<div style='width:5%;float:left'>"+
                        "                 <select id='totalpeoplepoints_opt' name='totalpeoplepoints_opt'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='totalpeoplepoints_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='totalpeoplepoints' style='width:16%;float:left'>"+
                        "                 <input type='text' id='totalpeoplepoints' name='totalpeoplepoints' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='totalpeoplepoints_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totalpeoplepoints_opt1',1);"+
                        "                                                            showHide('totalpeoplepoints_space1',1);"+
                        "                                                            showHide('totalpeoplepoints1',1);"+
                        "                                                            showHide('totalpeoplepoints_and',1);"+
                        "                                                            showHide('totalpeoplepoints_more',0);"+
                        "                                                            showHide('totalpeoplepoints_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='totalpeoplepoints_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='totalpeoplepoints_opt1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='totalpeoplepoints_opt1' name='totalpeoplepoints_opt1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='totalpeoplepoints_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='totalpeoplepoints1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='totalpeoplepoints1' name='totalpeoplepoints1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='totalpeoplepoints_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totalpeoplepoints_opt1',0);"+
                        "                                                            showHide('totalpeoplepoints_space1',0);"+
                        "                                                            showHide('totalpeoplepoints1',0);"+
                        "                                                            showHide('totalpeoplepoints_and',0);"+
                        "                                                            showHide('totalpeoplepoints_more',1);"+
                        "                                                            showHide('totalpeoplepoints_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var backendmodifyGcurrency = "            <tr>"+
                             "              <td style='width:4%'>"+
                             "              	<input type='checkbox' name='ckb_backendmodifyGcurrency' id='ckb_backendmodifyGcurrency' class='filled-in'><\/input>"+
                             "                <label for='ckb_backendmodifyGcurrency'><\/label>"+
                             "              <\/td>"+
                             "              <td style='width:10%'>後台修改G幣<\/td>"+
                             "              <td>"+
                             "              	<div style='width:5%;float:left'>"+
                             "                 <select id='backendmodifyGcurrency_opt' name='backendmodifyGcurrency_opt'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='backendmodifyGcurrency_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='backendmodifyGcurrency' style='width:16%;float:left'>"+
                             "                 <input type='text' id='backendmodifyGcurrency' name='backendmodifyGcurrency' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='backendmodifyGcurrency_more' style='float:left;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('backendmodifyGcurrency_opt1',1);"+
                             "                                                            showHide('backendmodifyGcurrency_space1',1);"+
                             "                                                            showHide('backendmodifyGcurrency1',1);"+
                             "                                                            showHide('backendmodifyGcurrency_and',1);"+
                             "                                                            showHide('backendmodifyGcurrency_more',0);"+
                             "                                                            showHide('backendmodifyGcurrency_less',1)\">"+
                             "                <\/div>"+
                             "                <div id='backendmodifyGcurrency_and' style='float:left;display:none;'>"+
                             "                 &nbsp;and&nbsp;"+
                             "                <\/div>"+
                             "              	<div id='backendmodifyGcurrency_opt1' style='width:5%;float:left;display:none;'>"+
                             "                 <select id='backendmodifyGcurrency_opt1' name='backendmodifyGcurrency_opt1'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='backendmodifyGcurrency_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='backendmodifyGcurrency1' style='width:16%;float:left;display:none;'>"+
                             "                 <input type='text' id='backendmodifyGcurrency1' name='backendmodifyGcurrency1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='backendmodifyGcurrency_less' style='float:left;display:none;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('backendmodifyGcurrency_opt1',0);"+
                             "                                                            showHide('backendmodifyGcurrency_space1',0);"+
                             "                                                            showHide('backendmodifyGcurrency1',0);"+
                             "                                                            showHide('backendmodifyGcurrency_and',0);"+
                             "                                                            showHide('backendmodifyGcurrency_more',1);"+
                             "                                                            showHide('backendmodifyGcurrency_less',0)\">"+
                             "                <\/div>"+
                             "              <\/td>"+
                             "            <\/tr>";

var backendmodifyluckymoney = "            <tr>"+
                              "              <td style='width:4%'>"+
                              "              	<input type='checkbox' name='ckb_backendmodifyluckymoney' id='ckb_backendmodifyluckymoney' class='filled-in'><\/input>"+
                              "                <label for='ckb_backendmodifyluckymoney'><\/label>"+
                              "              <\/td>"+
                              "              <td style='width:10%'>後台修改開運金<\/td>"+
                              "              <td>"+
                              "              	<div style='width:5%;float:left'>"+
                              "                 <select id='backendmodifyluckymoney_opt' name='backendmodifyluckymoney_opt'>"+
                              "                   <option value='gt'>≧<\/option>"+
                              "                   <option value='lt'>≦<\/option>"+
                              "                   <option value='eq'>=<\/option>"+
                              "                   <option value='neq'>≠<\/option>"+
                              "                 <\/select>"+
                              "                <\/div>"+
                              "                <div id='backendmodifyluckymoney_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                              "                <div id='backendmodifyluckymoney' style='width:16%;float:left'>"+
                              "                 <input type='text' id='backendmodifyluckymoney' name='backendmodifyluckymoney' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                              "                <\/div>"+
                              "                <div id='backendmodifyluckymoney_more' style='float:left;cursor:pointer;'>"+
                              "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('backendmodifyluckymoney_opt1',1);"+
                              "                                                            showHide('backendmodifyluckymoney_space1',1);"+
                              "                                                            showHide('backendmodifyluckymoney1',1);"+
                              "                                                            showHide('backendmodifyluckymoney_and',1);"+
                              "                                                            showHide('backendmodifyluckymoney_more',0);"+
                              "                                                            showHide('backendmodifyluckymoney_less',1)\">"+
                              "                <\/div>"+
                              "                <div id='backendmodifyluckymoney_and' style='float:left;display:none;'>"+
                              "                 &nbsp;and&nbsp;"+
                              "                <\/div>"+
                              "              	<div id='backendmodifyluckymoney_opt1' style='width:5%;float:left;display:none;'>"+
                              "                 <select id='backendmodifyluckymoney_opt1' name='backendmodifyluckymoney_opt1'>"+
                              "                   <option value='gt'>≧<\/option>"+
                              "                   <option value='lt'>≦<\/option>"+
                              "                   <option value='eq'>=<\/option>"+
                              "                   <option value='neq'>≠<\/option>"+
                              "                 <\/select>"+
                              "                <\/div>"+
                              "                <div id='backendmodifyluckymoney_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                              "                <div id='backendmodifyluckymoney1' style='width:16%;float:left;display:none;'>"+
                              "                 <input type='text' id='backendmodifyluckymoney1' name='backendmodifyluckymoney1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                              "                <\/div>"+
                              "                <div id='backendmodifyluckymoney_less' style='float:left;display:none;cursor:pointer;'>"+
                              "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('backendmodifyluckymoney_opt1',0);"+
                              "                                                            showHide('backendmodifyluckymoney_space1',0);"+
                              "                                                            showHide('backendmodifyluckymoney1',0);"+
                              "                                                            showHide('backendmodifyluckymoney_and',0);"+
                              "                                                            showHide('backendmodifyluckymoney_more',1);"+
                              "                                                            showHide('backendmodifyluckymoney_less',0)\">"+
                              "                <\/div>"+
                              "              <\/td>"+
                              "            <\/tr>";

var address = "            <tr>"+
              "              <td style='width:4%'>"+
              "              	<input type='checkbox' name='ckb_address' id='ckb_address' class='filled-in'><\/input>"+
              "                <label for='ckb_address'><\/label>"+
              "              <\/td>"+
              "              <td style='width:10%'>地址<\/td>"+
              "              <td>"+
              "              	 <input type='text' id='address' name='address' style='width:55%;text-align:center;' maxlength=12><\/input>"+
              "              <\/td>"+
              "            <\/tr>";

var sex = "            <tr>"+
          "              <td style='width:4%'>"+
          "              	<input type='checkbox' name='ckb_sex' id='ckb_sex' class='filled-in'><\/input>"+
          "                <label for='ckb_sex'><\/label>"+
          "              <\/td>"+
          "              <td style='width:10%'>性別<\/td>"+
          "              <td>"+
          "              	 <input type='text' id='sex' name='sex' style='width:55%;text-align:center;' maxlength=12><\/input>"+
          "              <\/td>"+
          "            <\/tr>";

var timesofgift_gp = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_timesofgift_gp' id='ckb_timesofgift_gp' class='filled-in'><\/input>"+
                     "                <label for='ckb_timesofgift_gp'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>儲值次數_GP<\/td>"+
                     "              <td>"+
                     "              	<div style='width:5%;float:left'>"+
                     "                 <select id='timesofgift_gp_opt' name='timesofgift_gp_opt'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_gp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='timesofgift_gp' style='width:16%;float:left'>"+
                     "                 <input type='text' id='timesofgift_gp' name='timesofgift_gp' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_gp_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_gp_opt1',1);"+
                     "                                                            showHide('timesofgift_gp_space1',1);"+
                     "                                                            showHide('timesofgift_gp1',1);"+
                     "                                                            showHide('timesofgift_gp_and',1);"+
                     "                                                            showHide('timesofgift_gp_more',0);"+
                     "                                                            showHide('timesofgift_gp_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='timesofgift_gp_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='timesofgift_gp_opt1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='timesofgift_gp_opt1' name='timesofgift_gp_opt1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_gp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='timesofgift_gp1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='timesofgift_gp1' name='timesofgift_gp1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_gp_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_gp_opt1',0);"+
                     "                                                            showHide('timesofgift_gp_space1',0);"+
                     "                                                            showHide('timesofgift_gp1',0);"+
                     "                                                            showHide('timesofgift_gp_and',0);"+
                     "                                                            showHide('timesofgift_gp_more',1);"+
                     "                                                            showHide('timesofgift_gp_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var timesofgift_ma = "            <tr>"+
                     "              <td style='width:4%'>"+
                     "              	<input type='checkbox' name='ckb_timesofgift_ma' id='ckb_timesofgift_ma' class='filled-in'><\/input>"+
                     "                <label for='ckb_timesofgift_ma'><\/label>"+
                     "              <\/td>"+
                     "              <td style='width:10%'>儲值次數_MA<\/td>"+
                     "              <td>"+
                     "              	<div style='width:5%;float:left'>"+
                     "                 <select id='timesofgift_ma_opt' name='timesofgift_ma_opt'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_ma_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='timesofgift_ma' style='width:16%;float:left'>"+
                     "                 <input type='text' id='timesofgift_ma' name='timesofgift_ma' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_ma_more' style='float:left;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_ma_opt1',1);"+
                     "                                                            showHide('timesofgift_ma_space1',1);"+
                     "                                                            showHide('timesofgift_ma1',1);"+
                     "                                                            showHide('timesofgift_ma_and',1);"+
                     "                                                            showHide('timesofgift_ma_more',0);"+
                     "                                                            showHide('timesofgift_ma_less',1)\">"+
                     "                <\/div>"+
                     "                <div id='timesofgift_ma_and' style='float:left;display:none;'>"+
                     "                 &nbsp;and&nbsp;"+
                     "                <\/div>"+
                     "              	<div id='timesofgift_ma_opt1' style='width:5%;float:left;display:none;'>"+
                     "                 <select id='timesofgift_ma_opt1' name='timesofgift_ma_opt1'>"+
                     "                   <option value='gt'>≧<\/option>"+
                     "                   <option value='lt'>≦<\/option>"+
                     "                   <option value='eq'>=<\/option>"+
                     "                   <option value='neq'>≠<\/option>"+
                     "                 <\/select>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_ma_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                     "                <div id='timesofgift_ma1' style='width:16%;float:left;display:none;'>"+
                     "                 <input type='text' id='timesofgift_ma1' name='timesofgift_ma1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                     "                <\/div>"+
                     "                <div id='timesofgift_ma_less' style='float:left;display:none;cursor:pointer;'>"+
                     "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_ma_opt1',0);"+
                     "                                                            showHide('timesofgift_ma_space1',0);"+
                     "                                                            showHide('timesofgift_ma1',0);"+
                     "                                                            showHide('timesofgift_ma_and',0);"+
                     "                                                            showHide('timesofgift_ma_more',1);"+
                     "                                                            showHide('timesofgift_ma_less',0)\">"+
                     "                <\/div>"+
                     "              <\/td>"+
                     "            <\/tr>";

var timesofgift_web = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_timesofgift_web' id='ckb_timesofgift_web' class='filled-in'><\/input>"+
                      "                <label for='ckb_timesofgift_web'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>儲值次數_Web<\/td>"+
                      "              <td>"+
                      "              	<div style='width:5%;float:left'>"+
                      "                 <select id='timesofgift_web_opt' name='timesofgift_web_opt'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_web_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='timesofgift_web' style='width:16%;float:left'>"+
                      "                 <input type='text' id='timesofgift_web' name='timesofgift_web' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_web_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_web_opt1',1);"+
                      "                                                            showHide('timesofgift_web_space1',1);"+
                      "                                                            showHide('timesofgift_web1',1);"+
                      "                                                            showHide('timesofgift_web_and',1);"+
                      "                                                            showHide('timesofgift_web_more',0);"+
                      "                                                            showHide('timesofgift_web_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='timesofgift_web_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='timesofgift_web_opt1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='timesofgift_web_opt1' name='timesofgift_web_opt1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_web_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='timesofgift_web1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='timesofgift_web1' name='timesofgift_web1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_web_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_web_opt1',0);"+
                      "                                                            showHide('timesofgift_web_space1',0);"+
                      "                                                            showHide('timesofgift_web1',0);"+
                      "                                                            showHide('timesofgift_web_and',0);"+
                      "                                                            showHide('timesofgift_web_more',1);"+
                      "                                                            showHide('timesofgift_web_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var timesofgift_small = "            <tr>"+
                        "              <td style='width:4%'>"+
                        "              	<input type='checkbox' name='ckb_timesofgift_small' id='ckb_timesofgift_small' class='filled-in'><\/input>"+
                        "                <label for='ckb_timesofgift_small'><\/label>"+
                        "              <\/td>"+
                        "              <td style='width:10%'>儲值次數_小額<\/td>"+
                        "              <td>"+
                        "              	<div style='width:5%;float:left'>"+
                        "                 <select id='timesofgift_small_opt' name='timesofgift_small_opt'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='timesofgift_small_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='timesofgift_small' style='width:16%;float:left'>"+
                        "                 <input type='text' id='timesofgift_small' name='timesofgift_small' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='timesofgift_small_more' style='float:left;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_small_opt1',1);"+
                        "                                                            showHide('timesofgift_small_space1',1);"+
                        "                                                            showHide('timesofgift_small1',1);"+
                        "                                                            showHide('timesofgift_small_and',1);"+
                        "                                                            showHide('timesofgift_small_more',0);"+
                        "                                                            showHide('timesofgift_small_less',1)\">"+
                        "                <\/div>"+
                        "                <div id='timesofgift_small_and' style='float:left;display:none;'>"+
                        "                 &nbsp;and&nbsp;"+
                        "                <\/div>"+
                        "              	<div id='timesofgift_small_opt1' style='width:5%;float:left;display:none;'>"+
                        "                 <select id='timesofgift_small_opt1' name='timesofgift_small_opt1'>"+
                        "                   <option value='gt'>≧<\/option>"+
                        "                   <option value='lt'>≦<\/option>"+
                        "                   <option value='eq'>=<\/option>"+
                        "                   <option value='neq'>≠<\/option>"+
                        "                 <\/select>"+
                        "                <\/div>"+
                        "                <div id='timesofgift_small_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                        "                <div id='timesofgift_small1' style='width:16%;float:left;display:none;'>"+
                        "                 <input type='text' id='timesofgift_small1' name='timesofgift_small1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                        "                <\/div>"+
                        "                <div id='timesofgift_small_less' style='float:left;display:none;cursor:pointer;'>"+
                        "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_small_opt1',0);"+
                        "                                                            showHide('timesofgift_small_space1',0);"+
                        "                                                            showHide('timesofgift_small1',0);"+
                        "                                                            showHide('timesofgift_small_and',0);"+
                        "                                                            showHide('timesofgift_small_more',1);"+
                        "                                                            showHide('timesofgift_small_less',0)\">"+
                        "                <\/div>"+
                        "              <\/td>"+
                        "            <\/tr>";

var timesofgift_accesscard = "            <tr>"+
                             "              <td style='width:4%'>"+
                             "              	<input type='checkbox' name='ckb_timesofgift_accesscard' id='ckb_timesofgift_accesscard' class='filled-in'><\/input>"+
                             "                <label for='ckb_timesofgift_accesscard'><\/label>"+
                             "              <\/td>"+
                             "              <td style='width:10%'>儲值次數_通路卡<\/td>"+
                             "              <td>"+
                             "              	<div style='width:5%;float:left'>"+
                             "                 <select id='timesofgift_accesscard_opt' name='timesofgift_accesscard_opt'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='timesofgift_accesscard_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='timesofgift_accesscard' style='width:16%;float:left'>"+
                             "                 <input type='text' id='timesofgift_accesscard' name='timesofgift_accesscard' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='timesofgift_accesscard_more' style='float:left;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_accesscard_opt1',1);"+
                             "                                                            showHide('timesofgift_accesscard_space1',1);"+
                             "                                                            showHide('timesofgift_accesscard1',1);"+
                             "                                                            showHide('timesofgift_accesscard_and',1);"+
                             "                                                            showHide('timesofgift_accesscard_more',0);"+
                             "                                                            showHide('timesofgift_accesscard_less',1)\">"+
                             "                <\/div>"+
                             "                <div id='timesofgift_accesscard_and' style='float:left;display:none;'>"+
                             "                 &nbsp;and&nbsp;"+
                             "                <\/div>"+
                             "              	<div id='timesofgift_accesscard_opt1' style='width:5%;float:left;display:none;'>"+
                             "                 <select id='timesofgift_accesscard_opt1' name='timesofgift_accesscard_opt1'>"+
                             "                   <option value='gt'>≧<\/option>"+
                             "                   <option value='lt'>≦<\/option>"+
                             "                   <option value='eq'>=<\/option>"+
                             "                   <option value='neq'>≠<\/option>"+
                             "                 <\/select>"+
                             "                <\/div>"+
                             "                <div id='timesofgift_accesscard_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                             "                <div id='timesofgift_accesscard1' style='width:16%;float:left;display:none;'>"+
                             "                 <input type='text' id='timesofgift_accesscard1' name='timesofgift_accesscard1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                             "                <\/div>"+
                             "                <div id='timesofgift_accesscard_less' style='float:left;display:none;cursor:pointer;'>"+
                             "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_accesscard_opt1',0);"+
                             "                                                            showHide('timesofgift_accesscard_space1',0);"+
                             "                                                            showHide('timesofgift_accesscard1',0);"+
                             "                                                            showHide('timesofgift_accesscard_and',0);"+
                             "                                                            showHide('timesofgift_accesscard_more',1);"+
                             "                                                            showHide('timesofgift_accesscard_less',0)\">"+
                             "                <\/div>"+
                             "              <\/td>"+
                             "            <\/tr>";

var timesofgift_ios = "            <tr>"+
                      "              <td style='width:4%'>"+
                      "              	<input type='checkbox' name='ckb_timesofgift_ios' id='ckb_timesofgift_ios' class='filled-in'><\/input>"+
                      "                <label for='ckb_timesofgift_ios'><\/label>"+
                      "              <\/td>"+
                      "              <td style='width:10%'>儲值次數_IOS<\/td>"+
                      "              <td>"+
                      "              	<div style='width:5%;float:left'>"+
                      "                 <select id='timesofgift_ios_opt' name='timesofgift_ios_opt'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_ios_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='timesofgift_ios' style='width:16%;float:left'>"+
                      "                 <input type='text' id='timesofgift_ios' name='timesofgift_ios' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_ios_more' style='float:left;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesofgift_ios_opt1',1);"+
                      "                                                            showHide('timesofgift_ios_space1',1);"+
                      "                                                            showHide('timesofgift_ios1',1);"+
                      "                                                            showHide('timesofgift_ios_and',1);"+
                      "                                                            showHide('timesofgift_ios_more',0);"+
                      "                                                            showHide('timesofgift_ios_less',1)\">"+
                      "                <\/div>"+
                      "                <div id='timesofgift_ios_and' style='float:left;display:none;'>"+
                      "                 &nbsp;and&nbsp;"+
                      "                <\/div>"+
                      "              	<div id='timesofgift_ios_opt1' style='width:5%;float:left;display:none;'>"+
                      "                 <select id='timesofgift_ios_opt1' name='timesofgift_ios_opt1'>"+
                      "                   <option value='gt'>≧<\/option>"+
                      "                   <option value='lt'>≦<\/option>"+
                      "                   <option value='eq'>=<\/option>"+
                      "                   <option value='neq'>≠<\/option>"+
                      "                 <\/select>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_ios_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                      "                <div id='timesofgift_ios1' style='width:16%;float:left;display:none;'>"+
                      "                 <input type='text' id='timesofgift_ios1' name='timesofgift_ios1' maxlength=7 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                      "                <\/div>"+
                      "                <div id='timesofgift_ios_less' style='float:left;display:none;cursor:pointer;'>"+
                      "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesofgift_ios_opt1',0);"+
                      "                                                            showHide('timesofgift_ios_space1',0);"+
                      "                                                            showHide('timesofgift_ios1',0);"+
                      "                                                            showHide('timesofgift_ios_and',0);"+
                      "                                                            showHide('timesofgift_ios_more',1);"+
                      "                                                            showHide('timesofgift_ios_less',0)\">"+
                      "                <\/div>"+
                      "              <\/td>"+
                      "            <\/tr>";

var timesoffruittrayindependentjp = "            <tr>"+
                                    "              <td style='width:4%'>"+
                                    "              	<input type='checkbox' name='ckb_timesoffruittrayindependentjp' id='ckb_timesoffruittrayindependentjp' class='filled-in'><\/input>"+
                                    "                <label for='ckb_timesoffruittrayindependentjp'><\/label>"+
                                    "              <\/td>"+
                                    "              <td style='width:10%'>水果盤獨立JP總次數<\/td>"+
                                    "              <td>"+
                                    "              	<div style='width:5%;float:left'>"+
                                    "                 <select id='timesoffruittrayindependentjp_opt' name='timesoffruittrayindependentjp_opt'>"+
                                    "                   <option value='gt'>≧<\/option>"+
                                    "                   <option value='lt'>≦<\/option>"+
                                    "                   <option value='eq'>=<\/option>"+
                                    "                   <option value='neq'>≠<\/option>"+
                                    "                 <\/select>"+
                                    "                <\/div>"+
                                    "                <div id='timesoffruittrayindependentjp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                    "                <div id='timesoffruittrayindependentjp' style='width:16%;float:left'>"+
                                    "                 <input type='text' id='timesoffruittrayindependentjp' name='timesoffruittrayindependentjp' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                    "                <\/div>"+
                                    "                <div id='timesoffruittrayindependentjp_more' style='float:left;cursor:pointer;'>"+
                                    "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('timesoffruittrayindependentjp_opt1',1);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_space1',1);"+
                                    "                                                            showHide('timesoffruittrayindependentjp1',1);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_and',1);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_more',0);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_less',1)\">"+
                                    "                <\/div>"+
                                    "                <div id='timesoffruittrayindependentjp_and' style='float:left;display:none;'>"+
                                    "                 &nbsp;and&nbsp;"+
                                    "                <\/div>"+
                                    "              	<div id='timesoffruittrayindependentjp_opt1' style='width:5%;float:left;display:none;'>"+
                                    "                 <select id='timesoffruittrayindependentjp_opt1' name='timesoffruittrayindependentjp_opt1'>"+
                                    "                   <option value='gt'>≧<\/option>"+
                                    "                   <option value='lt'>≦<\/option>"+
                                    "                   <option value='eq'>=<\/option>"+
                                    "                   <option value='neq'>≠<\/option>"+
                                    "                 <\/select>"+
                                    "                <\/div>"+
                                    "                <div id='timesoffruittrayindependentjp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                    "                <div id='timesoffruittrayindependentjp1' style='width:16%;float:left;display:none;'>"+
                                    "                 <input type='text' id='timesoffruittrayindependentjp1' name='timesoffruittrayindependentjp1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                    "                <\/div>"+
                                    "                <div id='timesoffruittrayindependentjp_less' style='float:left;display:none;cursor:pointer;'>"+
                                    "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('timesoffruittrayindependentjp_opt1',0);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_space1',0);"+
                                    "                                                            showHide('timesoffruittrayindependentjp1',0);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_and',0);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_more',1);"+
                                    "                                                            showHide('timesoffruittrayindependentjp_less',0)\">"+
                                    "                <\/div>"+
                                    "              <\/td>"+
                                    "            <\/tr>";

var totalscoreoffruittrayindependentjp = "            <tr>"+
                                         "              <td style='width:4%'>"+
                                         "              	<input type='checkbox' name='ckb_totalscoreoffruittrayindependentjp' id='ckb_totalscoreoffruittrayindependentjp' class='filled-in'><\/input>"+
                                         "                <label for='ckb_totalscoreoffruittrayindependentjp'><\/label>"+
                                         "              <\/td>"+
                                         "              <td style='width:10%'>水果盤獨立JP總得分<\/td>"+
                                         "              <td>"+
                                         "              	<div style='width:5%;float:left'>"+
                                         "                 <select id='totalscoreoffruittrayindependentjp_opt' name='totalscoreoffruittrayindependentjp_opt'>"+
                                         "                   <option value='gt'>≧<\/option>"+
                                         "                   <option value='lt'>≦<\/option>"+
                                         "                   <option value='eq'>=<\/option>"+
                                         "                   <option value='neq'>≠<\/option>"+
                                         "                 <\/select>"+
                                         "                <\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp' style='width:16%;float:left'>"+
                                         "                 <input type='text' id='totalscoreoffruittrayindependentjp' name='totalscoreoffruittrayindependentjp' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                         "                <\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp_more' style='float:left;cursor:pointer;'>"+
                                         "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('totalscoreoffruittrayindependentjp_opt1',1);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_space1',1);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp1',1);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_and',1);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_more',0);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_less',1)\">"+
                                         "                <\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp_and' style='float:left;display:none;'>"+
                                         "                 &nbsp;and&nbsp;"+
                                         "                <\/div>"+
                                         "              	<div id='totalscoreoffruittrayindependentjp_opt1' style='width:5%;float:left;display:none;'>"+
                                         "                 <select id='totalscoreoffruittrayindependentjp_opt1' name='totalscoreoffruittrayindependentjp_opt1'>"+
                                         "                   <option value='gt'>≧<\/option>"+
                                         "                   <option value='lt'>≦<\/option>"+
                                         "                   <option value='eq'>=<\/option>"+
                                         "                   <option value='neq'>≠<\/option>"+
                                         "                 <\/select>"+
                                         "                <\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp1' style='width:16%;float:left;display:none;'>"+
                                         "                 <input type='text' id='totalscoreoffruittrayindependentjp1' name='totalscoreoffruittrayindependentjp1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                         "                <\/div>"+
                                         "                <div id='totalscoreoffruittrayindependentjp_less' style='float:left;display:none;cursor:pointer;'>"+
                                         "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('totalscoreoffruittrayindependentjp_opt1',0);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_space1',0);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp1',0);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_and',0);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_more',1);"+
                                         "                                                            showHide('totalscoreoffruittrayindependentjp_less',0)\">"+
                                         "                <\/div>"+
                                         "              <\/td>"+
                                         "            <\/tr>";

var timesofsmallhorsepowerindependentjp = "            <tr>"+
                                          "              <td style='width:4%'>"+
                                          "              	<input type='checkbox' name='ckb_timesofsmallhorsepowerindependentjp' id='ckb_timesofsmallhorsepowerindependentjp' class='filled-in'><\/input>"+
                                          "                <label for='ckb_timesofsmallhorsepowerindependentjp'><\/label>"+
                                          "              <\/td>"+
                                          "              <td style='width:10%'>小馬力獨立JP總次數<\/td>"+
                                          "              <td>"+
                                          "              	<div id='sdiv_timesofsmallhorsepowerindependentjp' style='width:5%;float:left'>"+
                                          "                 <select id='sel_timesofsmallhorsepowerindependentjp' name='sel_timesofsmallhorsepowerindependentjp'>"+
                                          "                   <option value='gt'>≧<\/option>"+
                                          "                   <option value='lt'>≦<\/option>"+
                                          "                   <option value='eq'>=<\/option>"+
                                          "                   <option value='neq'>≠<\/option>"+
                                          "                 <\/select>"+
                                          "                <\/div>"+
                                          "                <div id='timesofsmallhorsepowerindependentjp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                          "                <div id='tdiv_timesofsmallhorsepowerindependentjp' style='width:16%;float:left'>"+
                                          "                 <input type='text' id='timesofsmallhorsepowerindependentjp' name='timesofsmallhorsepowerindependentjp' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                          "                <\/div>"+
                                          "                <div id='timesofsmallhorsepowerindependentjp_more' style='float:left;cursor:pointer;'>"+
                                          "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_timesofsmallhorsepowerindependentjp1',1);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_space1',1);"+
                                          "                                                               showHide('tdiv_timesofsmallhorsepowerindependentjp1',1);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_and',1);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_more',0);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_less',1)\">"+
                                          "                <\/div>"+
                                          "                <div id='timesofsmallhorsepowerindependentjp_and' style='float:left;display:none;'>"+
                                          "                 &nbsp;and&nbsp;"+
                                          "                <\/div>"+
                                          "              	<div id='sdiv_timesofsmallhorsepowerindependentjp1' style='width:5%;float:left;display:none;'>"+
                                          "                 <select id='sel_timesofsmallhorsepowerindependentjp1' name='sel_timesofsmallhorsepowerindependentjp1'>"+
                                          "                   <option value='gt'>≧<\/option>"+
                                          "                   <option value='lt'>≦<\/option>"+
                                          "                   <option value='eq'>=<\/option>"+
                                          "                   <option value='neq'>≠<\/option>"+
                                          "                 <\/select>"+
                                          "                <\/div>"+
                                          "                <div id='timesofsmallhorsepowerindependentjp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                          "                <div id='tdiv_timesofsmallhorsepowerindependentjp1' style='width:16%;float:left;display:none;'>"+
                                          "                 <input type='text' id='timesofsmallhorsepowerindependentjp1' name='timesofsmallhorsepowerindependentjp1' maxlength=9 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                          "                <\/div>"+
                                          "                <div id='timesofsmallhorsepowerindependentjp_less' style='float:left;display:none;cursor:pointer;'>"+
                                          "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_timesofsmallhorsepowerindependentjp1',0);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_space1',0);"+
                                          "                                                               showHide('tdiv_timesofsmallhorsepowerindependentjp1',0);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_and',0);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_more',1);"+
                                          "                                                               showHide('timesofsmallhorsepowerindependentjp_less',0)\">"+
                                          "                <\/div>"+
                                          "              <\/td>"+
                                          "            <\/tr>";

var totalscoreofsmallhorsepowerindependentjp = "            <tr>"+
                                               "              <td style='width:4%'>"+
                                               "              	<input type='checkbox' name='ckb_totalscoreofsmallhorsepowerindependentjp' id='ckb_totalscoreofsmallhorsepowerindependentjp' class='filled-in'><\/input>"+
                                               "                <label for='ckb_totalscoreofsmallhorsepowerindependentjp'><\/label>"+
                                               "              <\/td>"+
                                               "              <td style='width:10%'>小馬力獨立JP總得分<\/td>"+
                                               "              <td>"+
                                               "              	<div id='sdiv_totalscoreofsmallhorsepowerindependentjp' style='width:5%;float:left'>"+
                                               "                 <select id='sel_totalscoreofsmallhorsepowerindependentjp' name='sel_totalscoreofsmallhorsepowerindependentjp'>"+
                                               "                   <option value='gt'>≧<\/option>"+
                                               "                   <option value='lt'>≦<\/option>"+
                                               "                   <option value='eq'>=<\/option>"+
                                               "                   <option value='neq'>≠<\/option>"+
                                               "                 <\/select>"+
                                               "                <\/div>"+
                                               "                <div id='totalscoreofsmallhorsepowerindependentjp_space' style='float:left'>&nbsp;&nbsp;<\/div>"+
                                               "                <div id='tdiv_totalscoreofsmallhorsepowerindependentjp' style='width:16%;float:left'>"+
                                               "                 <input type='text' id='totalscoreofsmallhorsepowerindependentjp' name='totalscoreofsmallhorsepowerindependentjp' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                               "                <\/div>"+
                                               "                <div id='totalscoreofsmallhorsepowerindependentjp_more' style='float:left;cursor:pointer;'>"+
                                               "                 &nbsp;<img src='\/images\/more.png' onclick=\"showHide('sdiv_totalscoreofsmallhorsepowerindependentjp1',1);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_space1',1);"+
                                               "                                                               showHide('tdiv_totalscoreofsmallhorsepowerindependentjp1',1);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_and',1);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_more',0);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_less',1)\">"+
                                               "                <\/div>"+
                                               "                <div id='totalscoreofsmallhorsepowerindependentjp_and' style='float:left;display:none;'>"+
                                               "                 &nbsp;and&nbsp;"+
                                               "                <\/div>"+
                                               "              	<div id='sdiv_totalscoreofsmallhorsepowerindependentjp1' style='width:5%;float:left;display:none;'>"+
                                               "                 <select id='sel_totalscoreofsmallhorsepowerindependentjp1' name='sel_totalscoreofsmallhorsepowerindependentjp1'>"+
                                               "                   <option value='gt'>≧<\/option>"+
                                               "                   <option value='lt'>≦<\/option>"+
                                               "                   <option value='eq'>=<\/option>"+
                                               "                   <option value='neq'>≠<\/option>"+
                                               "                 <\/select>"+
                                               "                <\/div>"+
                                               "                <div id='totalscoreofsmallhorsepowerindependentjp_space1' style='float:left;display:none;'>&nbsp;&nbsp;<\/div>"+
                                               "                <div id='tdiv_totalscoreofsmallhorsepowerindependentjp1' style='width:16%;float:left;display:none;'>"+
                                               "                 <input type='text' id='totalscoreofsmallhorsepowerindependentjp1' name='totalscoreofsmallhorsepowerindependentjp1' maxlength=10 style='text-align:center;' onkeypress='return (event.charCode>=48&&event.charCode<=57)'><\/input>"+
                                               "                <\/div>"+
                                               "                <div id='totalscoreofsmallhorsepowerindependentjp_less' style='float:left;display:none;cursor:pointer;'>"+
                                               "                 &nbsp;<img src='\/images\/less.png' onclick=\"showHide('sdiv_totalscoreofsmallhorsepowerindependentjp1',0);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_space1',0);"+
                                               "                                                               showHide('tdiv_totalscoreofsmallhorsepowerindependentjp1',0);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_and',0);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_more',1);"+
                                               "                                                               showHide('totalscoreofsmallhorsepowerindependentjp_less',0)\">"+
                                               "                <\/div>"+
                                               "              <\/td>"+
                                               "            <\/tr>";

var All_Field_Options = [{"aid":aid},
                         {"registermobile":registermobile},
                         {"regentry":regentry},
                         {"registertime":registertime},
                         {"nickname":nickname},
                         {"defaultnickname":defaultnickname},
                         {"popularityindex":popularityindex},
                         {"memberlevel":memberlevel},
                         {"nextmonmemberlevel":nextmonmemberlevel},
                         {"prev2monthgift":prev2monthgift},
                         {"prev2monthchargepoints":prev2monthchargepoints},
                         {"lv":lv},
                         {"accumulatedexperience":accumulatedexperience},
                         {"nowGcurrency":nowGcurrency},
                         {"luckymoney":luckymoney},
                         {"totaltreasures":totaltreasures},
                         {"totalitems":totalitems},
                         {"totalprops":totalprops},
                         {"name":name},
                         {"email":email},
                         {"idcard_id":idcard_id},
                         {"birthday":birthday},
                         {"age":age},
                         {"pointstimes":pointstimes},
                         {"outstimes":outstimes},
                         {"instimes":instimes},
                         {"pointstotalamount":pointstotalamount},
                         {"outstotalamount":outstotalamount},
                         {"instotalamount":instotalamount},
                         {"pointsfee":pointsfee},
                         {"totalgifttimes":totalgifttimes},
                         {"totalgiftamounts":totalgiftamounts},
                         {"giftamounts_gp":giftamounts_gp},
                         {"giftamounts_ma":giftamounts_ma},
                         {"giftamounts_web":giftamounts_web},
                         {"giftamounts_small":giftamounts_small},
                         {"giftamounts_accesscard":giftamounts_accesscard},
                         {"giftamounts_ios":giftamounts_ios},
                         {"accountstatus":accountstatus},
                         {"startsuspendedtime":startsuspendedtime},
                         {"chatstatus":chatstatus},
                         {"startgagtime":startgagtime},
                         {"alertdesc":alertdesc},
                         {"lastloginplatform":lastloginplatform},
                         {"memberposition":memberposition},
                         {"lastlogintime":lastlogintime},
                         {"lastlogouttime":lastlogouttime},
                         {"logintimes":logintimes},
                         {"accumulatedlogintime":accumulatedlogintime},
                         {"accumulatedgametime":accumulatedgametime},
                         {"lastip":lastip},
                         {"personalrip":personalrip},
                         {"probabilitylists":probabilitylists},
                         {"winlosenetgain":winlosenetgain},
                         {"totalchargepoints":totalchargepoints},
                         {"totalchargepoints_Gcurrency":totalchargepoints_Gcurrency},
                         {"totalchargepoints_luckymoney":totalchargepoints_luckymoney},
                         {"totalscore":totalscore},
                         {"finaltotalscore_Gcurrency":finaltotalscore_Gcurrency},
                         {"finaltotalscore_luckymoney":finaltotalscore_luckymoney},
                         {"totalscoreoutsidegifts":totalscoreoutsidegifts},
                         {"finaltotalscore":finaltotalscore},
                         {"gameboardnumber":gameboardnumber},
                         {"slotsboardnumber":slotsboardnumber},
                         {"tableclassboardnumber":tableclassboardnumber},
                         {"someclass1gameboardnumber":someclass1gameboardnumber},
                         {"someclass2gameboardnumber":someclass2gameboardnumber},
                         {"totaltimesmultiple":totaltimesmultiple},
                         {"totalscoremultiple":totalscoremultiple},
                         {"totaltimesjp":totaltimesjp},
                         {"totalscorejp":totalscorejp},
                         {"chargepointsthismonth":chargepointsthismonth},
                         {"giftthismonth":giftthismonth},
                         {"outamountthismonth":outamountthismonth},
                         {"inamountthismonth":inamountthismonth},
                         {"outamountlastmonth":outamountlastmonth},
                         {"inamountlastmonth":inamountlastmonth},
                         {"totalpeoplepoints":totalpeoplepoints},
                         {"backendmodifyGcurrency":backendmodifyGcurrency},
                         {"backendmodifyluckymoney":backendmodifyluckymoney},
                         {"address":address},
                         {"sex":sex},
                         {"timesofgift_gp":timesofgift_gp},
                         {"timesofgift_ma":timesofgift_ma},
                         {"timesofgift_web":timesofgift_web},
                         {"timesofgift_small":timesofgift_small},
                         {"timesofgift_accesscard":timesofgift_accesscard},
                         {"timesofgift_ios":timesofgift_ios},
                         {"timesoffruittrayindependentjp":timesoffruittrayindependentjp},
                         {"totalscoreoffruittrayindependentjp":totalscoreoffruittrayindependentjp},
                         {"timesofsmallhorsepowerindependentjp":timesofsmallhorsepowerindependentjp},
                         {"totalscoreofsmallhorsepowerindependentjp":totalscoreofsmallhorsepowerindependentjp}
                        ];
/*
$.each(All_Field_Options, function(i,v) {
  //alert(JSON.stringify(v));
});
*/
//var content = $('#filterLists').html();
//alert (content);

function genFilterLists(obj)
{
	//var s="<table id=\"filterConditionModal\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-left:20px; width: 100%;\" bgcolor=\"#ffffff\">\n";
	var s="<table id=\"filterConditionModal\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:0 20px; width:100%;\" bgcolor=\"#CCCCCC\">\n";
  //alert('genFilterLists => '+JSON.stringify(obj));
  $('#filterLists').empty();
	$.each(obj, function(i,v) {
	  $.each(All_Field_Options, function(j,val) {
		  if(v[Object.keys(v)[0]]==Object.keys(val)[0])
		  {
		  	//alert(JSON.stringify(val[Object.keys(val)[0]]));
		  	s+=val[Object.keys(val)[0]];
		  }
		});
	});
  s+="</table>\n";
  s+="<script>\n";
  s+="var opt=\n";
  s+="{\n";
  s+="  dateFormat: 'yy/mm/dd',\n";
	s+="  showSecond: false,\n";
  s+="  timeFormat: 'HH:mm'\n";
  s+="};\n";

	$.each(obj, function(i,v) {
	  if(v[Object.keys(v)[0]]=='registertime')
	  {
      s+="$('#fregistertime').datetimepicker(opt);\n";
      s+="$('#tregistertime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='startsuspendedtime')
	  {
      s+="$('#fstartsuspendedtime').datetimepicker(opt);\n";
      s+="$('#tstartsuspendedtime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='startgagtime')
	  {
      s+="$('#fstartgagtime').datetimepicker(opt);\n";
      s+="$('#tstartgagtime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='lastlogintime')
	  {
      s+="$('#flastlogintime').datetimepicker(opt);\n";
      s+="$('#tlastlogintime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='lastlogouttime')
	  {
      s+="$('#flastlogouttime').datetimepicker(opt);\n";
      s+="$('#tlastlogouttime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='accumulatedlogintime')
	  {
      s+="$('#faccumulatedlogintime').datetimepicker(opt);\n";
      s+="$('#taccumulatedlogintime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='accumulatedgametime')
	  {
      s+="$('#faccumulatedgametime').datetimepicker(opt);\n";
      s+="$('#taccumulatedgametime').datetimepicker(opt);\n";
	  }
	  if(v[Object.keys(v)[0]]=='birthday')
	  {
      s+="$('#birthday').datepicker({dateFormat:\"yy/mm/dd\"});\n";
	  }
  });

  s+="$('#filterConditionModal input').change(function() {\n";
  //s+="	alert(\"input state changed\");\n";
  s+="	CompositeFilterData();\n";
  s+="});\n";
  s+="CompositeFilterData();\n";
  s+="genqueryDataArrayAll();\n";
  s+="</script>\n";
	//alert('genFilterLists s = '+s);
	$('#filterLists').html(s);
}

var selecteditems=[];
var all_items=[];
var filter_items=[];

$('#filterConditionModal input').change(function() {
	//alert("input state changed");
	CompositeFilterData();
	genqueryDataArrayAll();
});

function CompositeFilterData() {
	//alert("CompositeFilterData");
	filter_items = [];
  $('#filterConditionModal input:checked').each(function() {
    var k=($(this).attr('name').split('ckb_'))[1];
    //alert(k);
    $.getJSON('/js/rf_field_data.json', function(data) {
      $.each(data.Available_Field_Options, function(i,v) {
      	//alert(i);
      	//alert(Object.keys(v)[0]);
      	//alert(v[Object.keys(v)]);
      	var d={};
      	//if(k.indexOf(v[Object.keys(v)])!=-1)
      	if(k==v[Object.keys(v)])
      	{
      		//alert(v[Object.keys(v)]);
      		d.title=Object.keys(v)[0];
      		d.label=v[Object.keys(v)];
      		filter_items.push(d);
      		//alert('111 filter_items = '+JSON.stringify(filter_items));
      	}
      });
      //alert('filter_items = '+JSON.stringify(filter_items));
    });
  });
}

function CompositeFilterData1() {
	//alert("CompositeFilterData");
	filter_items = [];
  $('#filterConditionModal input:checked').each(function() {
    var k=($(this).attr('name').split('ckb_'))[1];
    //alert(k);
    $.getJSON('/js/rf_field_data.json', function(data) {
      $.each(data.Available_Field_Options, function(i,v) {
      	//alert(i);
      	//alert(Object.keys(v)[0]);
      	//alert(v[Object.keys(v)]);
      	var d={};
      	//if(k.indexOf(v[Object.keys(v)])!=-1)
      	if(k==v[Object.keys(v)])
      	{
      		d.title=Object.keys(v)[0];
      		d.label=v[Object.keys(v)];
      		filter_items.push(d);
      		//alert('111 filter_items = '+JSON.stringify(filter_items));
      	}
      });
      //alert('filter_items = '+JSON.stringify(filter_items));
    });
  });
}

function genqueryDataArrayAll() {
	//alert("genqueryDataArray");
	all_items = [];
  $('#filterConditionModal input').each(function() {
    var k= ($(this).attr('name').split('ckb_'))[1];
    //alert(k);
    $.getJSON('/js/rf_field_data.json', function(data) {
      $.each(data.Available_Field_Options, function(i,v) {
      	//alert(i);
      	//alert(Object.keys(v)[0]);
      	//alert(v[Object.keys(v)]);
      	var d={};
      	//if(k.indexOf(v[Object.keys(v)])!=-1)
      	if(k==v[Object.keys(v)])
      	{
      		d.title=Object.keys(v)[0];
      		d.label=v[Object.keys(v)];
      		all_items.push(d);
      		//alert('111 all_items = '+JSON.stringify(all_items));
      	}
      });
      //alert('all_items = '+JSON.stringify(all_items));
    });
  });
}

function genQueryDataLists(obj) {
	//alert("genQueryLists obj="+JSON.stringify(obj));
	selecteditems = [];
  $.each(obj, function(i,v) {
  	//alert(i);
  	//alert(Object.keys(v)[0]);
  	//alert(v[Object.keys(v)]);
  	var d={};
  	{
  		d.title=Object.keys(v)[0];
  		d.label=v[Object.keys(v)];
  		selecteditems.push(d);
  		//alert('111 selecteditems = '+JSON.stringify(selecteditems));
  	}
  });
  //alert('selecteditems = '+JSON.stringify(selecteditems));
}

/*$(document).ready(function () {
  $("#searchresult").freezeHeader({'height':'300px'});
})*/

function formatNumber(t,id){
	//alert(t.value);
	alert(accounting.formatNumber(t.value));
	//$("#"+id).value=t.value;
}
function queryResult() {
	//alert('queryResult');
	var s='';
  var p=97;
  //alert('queryResult selecteditems = '+JSON.stringify(selecteditems));
/*
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","");
  $("#basicformModal_qpage1").css("display","");
  $("#searchresult").css("display","");
*/
  $("#basicformModal_str").css("display","");
  $("#basicformModal_qpage").css("display","none");
  $("#basicformModal_qpage1").css("display","none");
  $('#searchresult').empty();
  $("#searchresult").css("display","none");

  if(selecteditems.length==0)
    selecteditems = all_items;

  if(selecteditems.length!=0)
  {
    $("#basicformModal_str").css("display","none");
    $("#basicformModal_qpage").css("display","");
    $("#basicformModal_qpage1").css("display","");
    $('#searchresult').empty();
    $("#searchresult").css("display","");
  	var w = Math.round(p/selecteditems.length);
  	//alert('w='+w);
    s+='<table id="querytable">';
    s+='  <thead>';
    s+='    <tr>';
    s+='      <th style=\'width:3%\'>#</th>';
  	for(var i=0;i<selecteditems.length;i++)
  	{
      s+='      <th style=\'width:'+w+'%\'>'+selecteditems[i].title+'</th>';
    }
    s+='    </tr>';
    s+='  </thead>';
    s+='  <tbody>';
    s+='    <tr>';
  	//s+='      <td style=\'width:3%\'>#</td>';
  	s+='      <td style=\'width:3%\'><a href="/member/settings" target="_blank">'+(i+1)+'</a></td>';
  	for(var i=0;i<selecteditems.length;i++)
  	{
      s+='    <td style=\'width:'+w+'%\'>'+selecteditems[i].label+'</td>';
    }
    s+='    </tr>';
    s+='  </tbody>';
    s+='</table>';
  }
  $('#searchresult').html(s);
  //initVueInstance();
}

//var app=null;
Vue.filter('recordLength', function (result, key) {
  this.$set(key, result.length);
  return result;
});

/*function deleteVueInstance() {
	if (app)
	{
	  app.$destroy();
	}
}*/

function setVueInstanceData(n,q) {
	//alert("setVueInstanceData");
	//alert(JSON.stringify(k));
	//alert(JSON.stringify(q));
	if(n==1)
	{
	  app.title_rows=q;
	  app.title_rows_length=Object.keys(q).length;
  }	
	if(n==2)
	  app.rows=q;
	//alert('app.title_rows_length = '+app.title_rows_length);
	if(n==3)
	  app.countOfPage=q;
}

//function initVueInstance(qData,qFields) {
var app = new Vue({
  el: '#queryapp',
  data: {
    rows: [],
    title_rows:{},
    title_rows_length:null,
    countOfPage: 25,
    currPage: 1,
    filter_name: '',
    filteredRowCount: null,
    gotopageval:null
  },
  computed: {
    pageStart: function(){
        return (this.currPage - 1) * this.countOfPage;
      },
    totalPage: function(){
      if( this.filter_name.trim() === '' ) {
        return Math.ceil(this.rows.length / this.countOfPage);
      }
      else{
        return Math.ceil(this.filteredRowCount / this.countOfPage);
      }
    }
    /*jumptoPage: function(){
    	return gotopageval;
    }*/
  },
  methods: {
    setPage: function(idx){
      if( idx <= 0 || idx > this.totalPage ){
        return;
      }
      this.currPage = idx;
    },
    getcountOfPage: function(){
    	return data.countOfPage;
    }
  },
  created: function(){
    var self = this;
    self.rows = [];
    self.title_rows = [];
    //alert('self.rows.length = '+self.rows.length);
    if(self.rows.length<10)
    {
      //$("div.table-body").css({'height':''});
      $("div .table-body").attr("height","");
      //alert('eeeeeeeeeeee');
    }
    else
    {
    	//$("div.table-body").css({'height':'300px'});
    	$("div .table-body").attr("height","300px");
    	//alert('ffffffffffffff');
    }
  },
  ready: function() {
    // 在 vm.$el 插入 DOM 時呼叫。
    //console.log('ready: my name is ' + this.name);
  },
  destroyed : function() {
  	//app.$destroy(true);
    //console.log('destroyed: my name is ' + this.name);
  }
  /*created: function(){
    var self = this;
    $.getJSON(init_data_obj, function(data) {
      self.rows = data.arrayData;
      if(self.rows.length<10)
      {
        $("div.table-body").attr("height","");
      }
      else
      {
      	$("div.table-body").attr("height","300px");
      }
    });
  }*/
});
//}

function gotoPage(id)
{
 //alert($('#'+id).val());
 app.setPage($('#'+id).val());
}

$("#exportExcel,#exportExcel1").click(function(){
	//alert('#####');
  $("#querytable1").tableToCSV();
  //$("#querytable").tableExport();
  /*
  $.fn.tableExport.charset = "charset=utf-8";
  $("#querytable").tableExport({
      headings: true,                    // (Boolean), display table headings (th/td elements) in the <thead>
      footers: true,                     // (Boolean), display table footers (th/td elements) in the <tfoot>
      //formats: ["xls", "csv", "txt"],    // (String[]), filetypes for the export
      formats:['csv'],
      fileName: "id",                    // (id, String), filename for the downloaded file
      bootstrap: false,                   // (Boolean), style buttons using bootstrap
      position: "bottom",                 // (top, bottom), position of the caption element relative to table
      ignoreRows: null,                  // (Number, Number[]), row indices to exclude from the exported file
      ignoreCols: null,                   // (Number, Number[]), column indices to exclude from the exported file
      ignoreCSS: ".tableexport-ignore"   // (selector, selector[]), selector(s) to exclude from the exported file
  });*/
});
/*
  $('.table-head table thead tr').each(function(){
    $('th:eq(0)',this).attr({"width":"5%"});
    $('th:eq(1)',this).attr({"width":"45%"});
    $('th:eq(2)',this).attr({"width":"25%"});
    $('th:eq(3)',this).attr({"width":"25%"});
  });

  $('.table-body table tbody').each(function(){
    $('td:eq(0)',this).attr({"width":"5%"});
    $('td:eq(1)',this).attr({"width":"45%"});
    $('td:eq(2)',this).attr({"width":"25%"});
    $('td:eq(3)',this).attr({"width":"25%"});
  });
*/
/*
  $(".table-head table thead tr th").eq(0).css("width", "5%").end()
                                    .eq(1).css("width", "45%").end()
                                    .eq(2).css("width", "25%").end()
                                    .eq(3).css("width", "25%");

  $(".table-body table tbody tr td").eq(0).css("width", "5%").end()
                                    .eq(1).css("width", "45%").end()
                                    .eq(2).css("width", "25%").end()
                                    .eq(3).css("width", "25%");
*/
