
//var accounts = require('../../api/v1/accounts');

// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
	
	// A DOM element to mount our view model.
	el: '#main',
        //replace: false,
        //template: '<p>replaced</p>',

        // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home',
                isAdminUser: false
	},

	// Functions we will be using.
	methods: {
   	     makeActive: function(item){
	         // When a model is changed, the view will be automatically updated.
                 //alert(item);
	         this.active = item;
                 if(item=='logout')
                 {
                   swal({
                         title:"Are you sure?",
                         text: "Logout the server!",
                         type: "warning",
                         showCancelButton: true,
                         confirmButtonColor: "#DD6B55",
                         confirmButtonText: "Yes",
                         closeOnConfirm: false
                        }, function(){
                           //req.logout();
                           //res.redirect('/');
                           location.href = '/logout';
                        });
                          //location.href = '/';
                }
	   }/*,
           checkPermission: function(){
               var self = this;
               alert('checkPermission');

               $.ajax({
                        type :"GET",
                        url  : "/api/v1/getLevel",
                        //data : {
                        //    datafromtestFile : $("#input").val(),
                        //    },
                        //dataType: "text",
                        success : function(result) {
                           console.log(result);
                           alert(result);
                           self.isAdminUser = (result=="admin")?true:false;
                        }
                     })

           }*/
       }
});
//demo.checkPermission();
