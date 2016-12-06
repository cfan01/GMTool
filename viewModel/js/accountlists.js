
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	// $('.modal-trigger').leanModal({
	// 	dismissible: false
	// });
	//$('select').material_select();

	$.ajax({
		type: 'GET',
	  url: '/api/v1/accounts',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      	swal({
	      		title: "Get Account Lists Failed!",
	      		text: result.error,
	      		type: "error",
	      		confirmButtonText: "OK" 
	      	},function(){
	      		location.reload();
	      	});
	      }else{
	      	//alert("success ##################");
	      	//alert(JSON.stringify(result));

	var accountlists = new Vue({
		el: '#accountlistsModal',
		data: {
        Accounts: []
		},
		methods:{

			clickModalEdit: function(id,uname,pwd,permission){
       	//alert($('div ul li.active span').text().toLowerCase());
       	//this.permission = $('div ul li.active span').text().toLowerCase();
 			  console.log("# showaccountlistsModal: "+uname+' '+pwd+' '+permission.toLowerCase());

			  var data = {};
			  data.username = uname;
			  data.password = pwd;
			  data.permission = permission.toLowerCase();

				$.ajax({
					type: 'PUT',
					data: data,
			    url: '/api/v1/accounts/'+id,

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
			},

			clickModalDelete: function(id){
				//console.log("# showaccountlistsModal: "+this.username+' '+this.password);

				//var data = {};
				//data.username = this.username;
				//data.password = this.password;

				$.ajax({
					type: 'DELETE',
					//data: data,
			    url: '/api/v1/accounts/'+id,

			    success: function(result) {
			        console.log(JSON.stringify(result));
			        if(result.error){
			        	swal({
			        		title: "Account Deletion Error!",
			        		text: result.error,
			        		type: "error",
			        		confirmButtonText: "OK" 
			        	},function(){
			        		location.reload();
			        	});
			        }else{
			        	swal({
			        		title: "Account Deletion Success!",
			        		text: JSON.stringify(result),
			        		type: "success",
			        		confirmButtonText: "OK" 
			        	},function(){
                  //alert('success delete account');
			        		location.reload();
			        	});
			        }
			    }
			  });
			}
		}
	});

  accountlists.Accounts = result;
 	/*for (var i=0;i< result.length; i++) {
    		accountlists.Accounts.push({username:result.username, password:result.password, permission:result.permission});
 	}*/
  //alert('accountlists.Accounts = '+JSON.stringify(accountlists.Accounts));
  //console.log($("#accountlistsModal"));

  /*$("img").on("click",function(e){
   alert("your function all")
  })*/

  //$("#accountlistsModal").click(function() {
  AccountAction = function(edit,act,_id,idex) {

    /*alert(edit);
    alert(act);
    alert(_id);
    alert(idex);
    */
    if(edit)
    {
       if(act == 'edit')
       {
       	  //document.getElementById("username"+idex).attr("readonly", false);
       	  //document.getElementById("password"+idex).attr("readonly", false);
       	  //document.getElementById("permission"+idex).attr("readonly", false);

          swal({
            title: "Are you sure to modify this account?",
            //text: "You will not be able to recover this account!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function(isConfirm) {
            if (isConfirm) {
            	//alert('success delete account');
              //var val=$("#accountlistsModal input:radio[name='delete']:checked").val();
              console.log(_id);
              accountlists.clickModalEdit(_id,$("#username"+idex).val(),$("#password"+idex).val(),$("#permission_"+idex).val());
              //swal("Deleted!", "The account file has been deleted.", "success");
              //location.reload();
          
		          swal({
		          	title: "Modified",
		          	text: "The account file has been modified.",
		          	type: "success",
		          	confirmButtonText: "OK" 
		          },function(){
                //alert('success delete account');
                //swal("Deleted!", "The account has been deleted.", "success");
		          	location.reload();
		          });
            } else {
              //swal("Cancelled", "The account is safe :)", "error");
              location.reload();
            }
            //location.reload();
          });

       }
       
       if(act == 'delete')
       {
          swal({
            title: "Are you sure to delete this account?",
            //text: "You will not be able to recover this account!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function(isConfirm) {
            if (isConfirm) {
            	//alert('success delete account');
              var val=$("#accountlistsModal input:radio[name='delete']:checked").val();
              console.log(val);
              accountlists.clickModalDelete(_id);
              //swal("Deleted!", "The account file has been deleted.", "success");
              //location.reload();
          
		          swal({
		          	title: "Deleted",
		          	text: "The account file has been deleted.",
		          	type: "success",
		          	confirmButtonText: "OK" 
		          },function(){
                //alert('success delete account');
                //swal("Deleted!", "The account has been deleted.", "success");
		          	location.reload();
		          });
            } else {
              //swal("Cancelled", "The account is safe :)", "error");
              location.reload();
            }
            //location.reload();
          });
       }
    }
    else
    {
    	$("#edit"+idex).css("display","none");
    	$("#delete"+idex).css("display","none");
    	$("#modify"+idex).css("display","");
     	$("#username"+idex).attr({'readonly':false,'style':'borderStyle:solid'});
     	$("#password"+idex).attr({'readonly':false,'style':'borderStyle:solid'});
     	$("#permission"+idex).css("display","none");
     	$("#permission_"+idex).val($("#permission"+idex).val());
     	$("#permission_"+idex).css("display","");
    }
  };

  /*$("#accountlistsModal input:radio").click(function() {
    console.log('clicked');
  });*/
 
	/*$('#accountlistsModal').openModal({
		dismissible: false,
		opacity: 1 // Opacity of modal background
	});*/

	      }
	  }
	});

});
