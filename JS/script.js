
function showlogin() {
   /* var a = document.getElementById("login-form").style.display;
    if (a == "none" || a == "") {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("Uname").value = "sreddygari@gainsight.com";
    } else {
        document.getElementById("login-form").style.display = "none";
    }*/
}

function reIdentifyuser(){
    //window.aptrinsic("reset");
    aptrinsic("identify", {
                //User Fields
                "id": "ri@gaPXID" + "Demo1", // Required for logged in app users
                "email": "sreddygari@gainsight.com",
                "firstName": "Satheesh",
                "lastName": "Reddy",
                "signUpDate": new Date().getTime(), //unix time in ms
                //"userHash": "" // optional transient for HMAC identification
                "username" : "sreddygari@gainsight.com",
                "locale": "de-DE",
                //"userHash": CryptoJS.HmacSHA256("ri@gaPXIDDemo1", "TXvBKvy0SIrcEQ7j3PnrMuv26vKMCnxd1663viYGx"),
            }, {
                //Account Fields
                "id": "PX Company-1", //Required
                "name": "PX Company-1",
            });
            alert("User Identified with German Language");

}

    
// <!-- Aptrinsic Taggg-->

/*(function(n, t, a, e, co) {
    var i = "aptrinsic";
    n[i] = n[i] || function() {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c =co;
    var r = t.createElement("script");
    r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-POK8MKKQ63Z3-2",{
    "htmlSanitization": true,
    "htmlSanitizationAllowedDomains": ["http://px-support.epizy.com"],
    "engagementChecksumFileUrl": "http://px-support.epizy.com/JS/checksum.json"
});*/

//This is the original
  /*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-POK8MKKQ63Z3-2");*/

  //,{"engagementChecksumFileUrl": "http://px-support.epizy.com/JS/Engagement_checksum.json"}

/*Gainsight PX Tag */



// <!-- End Aptrinsic Tag-->

function login(Uname) {
    var a = document.getElementById("Uname").value;
    localStorage.setItem("testObject", a);
    var b;
    const myaccount = {
        a1: "PX Company-1",
        a2: "PX Company-2",
        a3: "PX Company-3",
        a4: "PX Company-4"
    }
    //var idforhash = a.substr(8, 5) + "PXID" + "Demo1";
    //var hashUserId =  String(CryptoJS.HmacSHA256(idforhash, "TXvBKvy0SIrcEQ7j3PnrMuv26vKMCnxd1663viYGx"));
    if (a != "") {
        if (a == "sreddygari@gainsight.com" || a == "gstestuser@gainsight.com"||a == "frca@gainsight.com") {
            b = a.substr(8, 5);
            aptrinsic("identify", {
                //User Fields
                "id": b + "PXID" + "Demo1", // Required for logged in app users
                "email": a,
                "firstName": "Satheesh",
                "lastName": "Reddy",
                "signUpDate": new Date().getTime(), //unix time in ms
                //"userHash": "" // optional transient for HMAC identification
                "username" : "sreddygari@gainsight.com",
                //"locale": "en-US",
                //"userHash": hashUserId
            }, {
                //Account Fields
                "id": myaccount.a1, //Required
                "name": myaccount.a1,
            });
            aptrinsic('set', 'globalContext', {"workspace":'v1',"workspace Type" :"Work Order"});
            // var userFlag = "true";
            // sessionStorage.setItem("userFlag", true);
            alert("Valid User");
            window.location = "./HowitWorks.html";
           
        }
    } else {
        alert("Please enter sreddygari@gainsight.com or gstestuser@gainsight.com to login")
    }
}
function CEtrigger(a, b)
{

    aptrinsic('track', 'Meeting Info', {"Attendees":parseInt(a), "Recording":b});   
}  
    //var username=localStorage.getItem("testObject");

   /* if (username == "sreddygari@gainsight.com")
        aptrinsic('track', 'Meeting Details', {"Attendees":a, "Recording":b});   
    else if(username == "gstestuser@gainsight.com")
        aptrinsic('track', 'UsersPlan', {"PlanType":"Paid User"}); */  


function setGlobalContext()
{
    aptrinsic('set', 'globalContext', {"workspace":'v1',"workspace Type" :"Work Order"});
}

function specificArticles()
{
    aptrinsic('bot', 'search', {labels: ['PX Test1']});
}

function clearArticlesSearch()
{
    aptrinsic('bot', 'search', {labels: []});
}

//Custom Page Drop Down JS

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    aptrinsic('track', 'UsersPlan', {"PlanType":"Trail User"});
  //document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}