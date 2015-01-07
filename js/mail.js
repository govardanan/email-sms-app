//initializing the deviceready eventlistener
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() 
{

   StatusBar.overlaysWebView(true);

     StatusBar.show();

}

//function for opening the e-mail composer
function email()
{
	

	window.plugin.email.open({
    
    to:          ["dineshkumar.r@cgvakindia.com"], // email addresses for TO field
    cc:          ["deepan.607@gmail.com"], // email addresses for CC field
    attachments: ['relative://drawable/icon.png'],
    subject:    "sample mail", // subject of the email
    body:       "Hi how are you??", // email body (could be HTML code, in this case set isHtml to true)
    isHtml:     true, // indicats if the body is HTML or plain text
});

}


   document.addEventListener("deviceready", onDeviceReady, false);

var smsplugin = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");


           



function sms()
{
     var number = document.getElementById('num').value;
     var message = document.getElementById('msg').value;
      smsplugin.send(number,message,smssuccess,smserror);
}

  function smssuccess(result) {
              alert('Message sent successfully'); 
          };
          
            function smserror(error) { 
                alert('Message Failed'); 
            };