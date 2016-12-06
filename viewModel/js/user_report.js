	//var Basic_Form_Nonmove_Options=["GBID","暱稱","註冊入口","會員級別","目前G幣"];
  //var userformidx = '<%= URLs %>'['<%= URLs %>'.indexOf('_report')-1];
  var userformidx = gUrls[gUrls.indexOf('_report')-1];
  //alert(userformidx);
  var uuu = gUrls;
  //alert(uuu);
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
  /*
  var aaa = [1,,2,3,4,5,6];
  alert(aaa.length);
  alert(aaa);
  for (var i=0; i<aaa.length; i++)
  {
    if (aaa[i]==null)
    {
    	aaa[i]=7;
    }
  }
  alert(aaa);
  */
	//var AID = '<%= Account_ID %>';
	//alert('user_report aid = '+gAid);

	$.ajax({
		type: 'GET',
	  url: '/api/v1/accounts/'+gAid,//<%= Account_ID %>',

	  success: function(result) {
	      //console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	LoginAccounts = result;
	      	//alert('LoginAccounts = '+JSON.stringify(LoginAccounts));
          genField('Available');
          genField('Selected');
          //$('#available_field').prop('disabled', 'disabled');
          //$('#selected_field').prop('disabled', 'disabled');
          //$('#available_field').disabled = true;
          //$('#selected_field').disabled = true;
	      }
	  }
	});

  function genField(classify)
  {
  	if(classify=='Available')
  	{
  	  var $el = $("#avail_fields");
      $el.empty(); // remove old options
      $.each(LoginAccounts.property.user_reportforms[userformidx-1].avail_fields, function(i,v) {
          //$el.append($("<option></option>").attr("value", i).text(value));
          $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
      });
    }
  	if(classify=='Selected')
  	{
  	  var $el = $("#selected_fields");
      $el.empty(); // remove old options
      $.each(LoginAccounts.property.user_reportforms[userformidx-1].selected_fields, function(i,v) {
      	//alert(Object.keys(v)[0]);
        if(Object.keys(v)[0].indexOf('*')>-1) //has '*'
        {
      	  //$el.append($("<option></option>").attr("value", i).text(value).css("color","red"));
      	  $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]).css("color","red"));
      	}
        else
          //$el.append($("<option></option>").attr("value", i).text(value));
          $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
      });
      genField('FilterLists');
    }
  	if(classify=='FilterLists')
  	{
  		selected_options = [];
  		//alert('### FilterLists ###');
  		//alert('FilterLists selected_options length--> '+ $('#selected_fields option').length);
      $('#selected_fields option').each(function() {
      	var jsonstr={};
        //alert('FilterLists jsonstr --> '+JSON.stringify(jsonstr));
        jsonstr[this.text]=this.value;
        selected_options.push(jsonstr);
        //alert('FilterLists --> '+JSON.stringify(selected_options));
        //alert('### FilterLists ###');
      });
      //alert('genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      genFilterLists(selected_options);
    }
  }
/*
  async.series([
     function(cb){
     	genField('Available');
     	cb()
     },
     function(cb){
     	genField('Selected');
     	cb()
     },
     function(cb){
     	genField('FilterLists');
     	cb()
     },
    ],function(err, results){
       //alert(results);
  });
*/
  //genField('Available');
  //genField('Selected');
  //genField('FilterLists');

  var opt={
  	        dateFormat: 'yy/mm/dd',
	          showSecond: true,
            timeFormat: 'HH:mm:ss'
          };

  /*var opt1={
  	        dateFormat: 'yy/mm/dd',
	          showTime: false,
            showButtonPanel: false
          };
  */
/*
  $('#fregistertime').datetimepicker(opt);
  $('#tregistertime').datetimepicker(opt);
  $('#fstartsuspendedtime').datetimepicker(opt);
  $('#tstartsuspendedtime').datetimepicker(opt);
  $('#fstartgagtime').datetimepicker(opt);
  $('#tstartgagtime').datetimepicker(opt);
  $('#flastlogintime').datetimepicker(opt);
  $('#tlastlogintime').datetimepicker(opt);
  $('#flastlogouttime').datetimepicker(opt);
  $('#tlastlogouttime').datetimepicker(opt);
  $('#faccumulatedlogintime').datetimepicker(opt);
  $('#taccumulatedlogintime').datetimepicker(opt);
  $('#faccumulatedgametime').datetimepicker(opt);
  $('#taccumulatedgametime').datetimepicker(opt);
  $('#birthday').datepicker({dateFormat:"yy/mm/dd"});
*/
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

  /*form = dialog.find("form").on("submit", function(event) {
     event.preventDefault();
     SaveBasicReportName();
  });*/

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
       "OK": function() { SaveForm(1);},
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

/*  function showHide(id,show)
  {
  	if(show)
  	  document.getElementById(id).style.display='block';
  	else
  		document.getElementById(id).style.display='none';
  }*/

  //alert('LoginAccounts.property.user_reportforms.length = '+LoginAccounts.property.user_reportforms.length);
  function DeleteForm()
  {
  	var data={};
  	var cmenu = {};
  	alert('DeleteForm');
  	alert('userformidx = '+userformidx);
  	alert('LoginAccounts.property.user_reportforms.length = '+LoginAccounts.property.user_reportforms.length);
  	//alert(JSON.stringify(LoginAccounts.property.user_reportforms[userformidx-1]));
  	delete LoginAccounts.property.user_reportforms[userformidx-1];
  	//LoginAccounts.property.user_reportforms[userformidx-1] = {};
  	/*LoginAccounts.property.user_reportforms[userformidx-1].formname="";
  	LoginAccounts.property.user_reportforms[userformidx-1].avail_fields="";
  	LoginAccounts.property.user_reportforms[userformidx-1].selected_fields="";*/
    //alert(JSON.stringify(LoginAccounts.property.user_reportforms[userformidx-1]));
    alert('gUrls = '+gUrls);
    for(var i=0;i<LoginAccounts.property.menuLists.length;i++)
    {
      if(LoginAccounts.property.menuLists[i]!=null)
      {
        if(LoginAccounts.property.menuLists[i].url==gUrls)
        {
          delete LoginAccounts.property.menuLists[i];
          //LoginAccounts.property.menuLists[i].category="";
          //LoginAccounts.property.menuLists[i].page="";
          //LoginAccounts.property.menuLists[i].url="";
          //LoginAccounts.property.menuLists[i].content="";
        }
      }
    }
    data.property = LoginAccounts.property;
    alert('DeleteForm data >> '+JSON.stringify(data));
    //alert(AID);
    cmenu.menuLists=LoginAccounts.property.menuLists;
    //cmenu.user_reportforms=LoginAccounts.property.user_reportforms;
    //cmenu.user_historyquery=LoginAccounts.property.user_historyquery;
    //alert('DeleteForm LoginAccounts.property.menuLists >> '+JSON.stringify(cmenu));
    //alert(AID);
	  $.ajax({
	   	type: 'post',
	   	contentType: "application/json",
	   	data: JSON.stringify(cmenu),
	    //url: '/api/v1/accounts/<%= Account_ID %>',
	    url: '/writeCurrMenuJSONFile',

	    success: function(result) {
	        //console.log(JSON.stringify(result));
	        if(result.error){
	        }else{
	        	console.log("55555555555555555555555555555555555555555555nnnnn");
	             $.ajax({
	             	 type: 'PUT',
	            	 contentType: "application/json",
   	   	         data: JSON.stringify(data),
	               //url: '/api/v1/accounts/<%= Account_ID %>',
	               url: '/api/v1/accounts/'+gAid,

	               success: function(result) {
	                   //console.log(JSON.stringify(result));
	                   if(result.error){
	                   }else{
                        //alert('success delete forms');
                         location.href='/member/basic_report';
	                   }
	               }
	             });
	        }
	    }
	  });
  }

	function SaveForm(another)
	{
    //alert('SaveForm');
    avail_options = [];
    $('#avail_fields option').each(function() {
    	var jsonstr={};
    	//alert('#avail_fields option');
    	//alert('this.text = '+this.text);
    	//alert('this.value = '+this.value);
    	//avail_options.push(this.text);
    	jsonstr[this.text]=this.value;
    	//alert(JSON.stringify(jsonstr));
      avail_options.push(jsonstr);
    });
    //alert(JSON.stringify(avail_options));
    selected_options = [];
    $('#selected_fields option').each(function() {
    	var jsonstr={};
      jsonstr[this.text]=this.value;
      selected_options.push(jsonstr);
      //selected_options.push({this.text:this.value});
    });
    //alert(JSON.stringify(selected_options));
    //var reportforms = [];
	  var d = {};
	  var cmenu = {};
	  var data={};
	  if(another)
	    d.formname = $("#formname").val();
	  else
	  	d.formname = LoginAccounts.property.user_reportforms[userformidx-1].formname;
	  d.avail_fields = avail_options;
	  d.selected_fields = selected_options;
    
    //alert('data.formname = '+d.formname);
    //alert('data.avail_fields = '+d.avail_fields);
    //alert('data.selected_fields = '+d.selected_fields);

    //reportforms.push(data);
    //alert('SaveForm reportforms >> '+JSON.stringify(reportforms));
    /*delete LoginAccounts._id;
    delete LoginAccounts.createDate;
    delete LoginAccounts.login;
    delete LoginAccounts.username;
    delete LoginAccounts.password;
    delete LoginAccounts.permission;*/
    //alert('SaveForm LoginAccounts.property.menuLists >> '+JSON.stringify(LoginAccounts.property.menuLists));
    //LoginAccounts.property.menuLists.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": data.formname});
    //data.property.menuLists = LoginAccounts.property.menuLists;
    //data.property.user_reportforms = reportforms;
    if(another)  //save as another form
    {
    	var has_null_element1=0, has_null_element2=0;
    	var len1,len2;
      for (var i=0; i<LoginAccounts.property.user_reportforms.length; i++)
      {
        if (LoginAccounts.property.user_reportforms[i]==null)
        {
        	len1=i;
        	has_null_element1 = 1;
        	break;
        }
      }
      if(!has_null_element1)
      {
         len1=LoginAccounts.property.user_reportforms.length;
         LoginAccounts.property.user_reportforms.push(d);
      }
      else
      {
         LoginAccounts.property.user_reportforms[len1] = d;
      }
      for (var j=0; j<LoginAccounts.property.menuLists.length; j++)
      {
        if (LoginAccounts.property.menuLists[j]==null)
        {
        	len2=j;
        	has_null_element2 = 1;
        	break;
        }
      }
      //alert("d.formname = "+d.formname);
      if(!has_null_element2)
      {
        LoginAccounts.property.menuLists.push({"category":"member","page":"user_report","url":"/member/user"+(len1+1)+"_report","content": d.formname});
      }
      else
      {
        LoginAccounts.property.menuLists[len2]={"category":"member","page":"user_report","url":"/member/user"+(len1+1)+"_report","content": d.formname};
      }
      data.property = LoginAccounts.property;
      //alert('SaveForm data >> '+JSON.stringify(data));
      cmenu.menuLists=LoginAccounts.property.menuLists;
      //cmenu.user_reportforms=LoginAccounts.property.user_reportforms;
      //alert('SaveForm LoginAccounts.property.menuLists >> '+JSON.stringify(cmenu));
      //alert(AID);
	    $.ajax({
	    	type: 'post',
	    	contentType: "application/json",
	    	data: JSON.stringify(cmenu),
	      //url: '/api/v1/accounts/<%= Account_ID %>',
	      url: '/writeCurrMenuJSONFile',
      
	      success: function(result) {
	          //console.log(JSON.stringify(result));
	          if(result.error){
	          }else{
	          	console.log("55555555555555555555555555555555555555555555nnnnn");
	            $.ajax({
	    	         type: 'PUT',
	            	 contentType: "application/json",
	            	 data: JSON.stringify(data),
	               //url: '/api/v1/accounts/<%= Account_ID %>',
	               url: '/api/v1/accounts/'+gAid,
                 
	               success: function(result) {
	                   //console.log(JSON.stringify(result));
	                   if(result.error){
	                   }else{
                         //alert('success update forms');
                         location.href='/member/user'+(len1+1)+'_report';
	                   }
	               }
	            });
	          }
        }
      });
	  }
	  else  //edit old form
	  {
      LoginAccounts.property.user_reportforms[userformidx-1] = d;
      //LoginAccounts.property.menuLists.push({"category":"member","page":"user_report","url":"/member/user"+(len+1)+"_report","content": d.formname});
      data.property = LoginAccounts.property;
      cmenu.menuLists=LoginAccounts.property.menuLists;
      //cmenu.user_reportforms=LoginAccounts.property.user_reportforms;
      //alert('SaveForm data >> '+JSON.stringify(data));
      //alert(AID);
	    $.ajax({
	    	type: 'post',
	    	contentType: "application/json",
	    	data: JSON.stringify(cmenu),
	      //url: '/api/v1/accounts/<%= Account_ID %>',
	      url: '/writeCurrMenuJSONFile',
      
	      success: function(result) {
	          //console.log(JSON.stringify(result));
	          if(result.error){
	          }else{
	            $.ajax({
	    	        type: 'PUT',
	            	contentType: "application/json",
	            	data: JSON.stringify(data),
	              //url: '/api/v1/accounts/<%= Account_ID %>',
	              url: '/api/v1/accounts/'+gAid,
      
	              success: function(result) {
	                  //console.log(JSON.stringify(result));
	                  if(result.error){
	                  }else{
                        //alert('success update forms');
                        location.href='/member/user'+userformidx+'_report';
	                  }
	              }
	            });
	          }
        }
      });
	  }
  }

	var Rform = new Vue({
		el: '#basicformModal',
		data: {
			formname:'',
			avail_fields:'',
			selected_fields:''
		},
		methods:{
			SaveForm: function(){
        //alert('SaveForm');
        var avail_options = [];
        $('#avail_fields option').each(function() {
          avail_options.push(this.text);
        });

        var selected_options = [];
        $('#selected_fields option').each(function() {
          selected_options.push(this.text);
        });

		    var data = {};
		    data.formname = $("#formname").val();
		    data.avail_fields = avail_options;
		    data.selected_fields = selected_options;
        
        //alert('data.formname = '+data.formname);
        //alert('data.avail_fields = '+data.avail_fields);
        //alert('data.selected_fields = '+data.selected_fields);
        
		    $.ajax({
		    	type: 'POST',
		    	data: data,
		      url: '/api/v1/reportforms',

		      success: function(result) {
		          console.log(JSON.stringify(result));
		          if(result.error){
                                 
		          	swal({
		          		title: "Account Modify Error!",
		          		text: result.error,
		          		type: "error",
		          		confirmButtonText: "OK" 
		          	},function(){
		          		location.reload();
		          	});
		          }else{
		          	swal({
		          		title: "Account Modify Success!",
		          		text: JSON.stringify(result),
		          		type: "success",
		          		confirmButtonText: "OK" 
		          	},function(){
                  //alert('success modify account');
		          		location.reload();
		          	});
		          }
		      }
		    });
      }
    }
  });

  $("#userreport_save").click(function() {
    console.log('userreport_save');
    SaveForm(0);
    //$("#userformname").attr({'readonly':false,'style':'borderStyle:solid'});
    //$("#userformname").val(gContent);
    //$("#userformname").select();
    //$("#userform_title").css("display","");
    //$("#edit_delete").css("display","none");
    //$("#ok_modify").css("display","");
    //$("#save_user_report").css("display","none");
    //$("#cancel_user_report").css("display","none");
  });

  $("#userreport_delete").click(function() {
    console.log('userreport_delete');
    DeleteForm();
    //$("#userformname").attr({'readonly':false,'style':'borderStyle:solid'});
    //$("#edit_delete").css("display","none");
    //$("#ok_modify").css("display","");
  });
