

var container = document.createElement("div");
container.className = "container";
container.id = "mainContainer";
var titleBar = document.createElement("div");
titleBar.id = "titleBar";
container.appendChild(titleBar);

var heading = document.createElement("div");
heading.innerHTML = "Common Commands";
heading.className = "headingLabel";
titleBar.appendChild(heading);

var optionRow = document.createElement("div");
optionRow.className = "optionRow";

var company1Option = document.createElement("button");
company1Option.innerHTML = "company1";
company1Option.className = "optionButton";
company1Option.addEventListener("click", function(e){
  company1.main();
});
optionRow.appendChild(company1Option);

var company2Option = document.createElement("button");
company2Option.innerHTML = "company2";
company2Option.className = "optionButton";
company2Option.addEventListener("click", function(e){
  company2.main();
});
optionRow.appendChild(company2Option);
container.appendChild(optionRow);

var ipEntryRow = document.createElement("div");
ipEntryRow.className = "ipEntryRow";
var ipEntryText = document.createElement("div");
ipEntryText.className = "ipEntryText";
ipEntryText.innerHTML = "enter router ip    ";
ipEntryRow.appendChild(ipEntryText);
var ipEntryInput = document.createElement("input");
ipEntryInput.className = "ipEntryInput";
ipEntryInput.id = "ip";
ipEntryInput.placeholder = "0.0.0.0";
ipEntryInput.addEventListener('input',function(e){
  console.log(" input e.target.value : "+ e.target.value);
  ip = e.target.value;
  validateIP(ip);
});

ipEntryRow.appendChild(ipEntryInput);
container.appendChild(ipEntryRow);

var commandBody = document.createElement("div");
commandBody.className = "commandBody";
commandBody.id = "commandBody";
container.appendChild(commandBody);

company1.main();

function validateIP(ip){
  var a =  ip.split("."), l = a.length, valid = false;
  var element = document.getElementById('ip');

  if (l != 4 || a[3].length == 0) {
    console.log("length too short for ip ");
    storedIp = null;
    element.style.border = "2px solid red";
    return false;
  }
  for (i in a){

      n = a[i]
      if  (n > -1 && n < 256 || n.length == 0) {
        valid = true;
      }
      else{
        valid = false
        break
      }
  }
  var element = document.getElementById('ip');
  if (valid === true) {
     element.style.border = "1px solid #66FF00";
     return true;
  }
  else {
     storedIp = null;
     element.style.border = "2px solid red";
     return false;
  }
}

function send(url,data){
  $.when(
    $.ajax({
        type: 'PUT',
        url: url,
        data: data
       })
     ).done(function( data, textStatus, jqXHR ) {
       try {
         var type =  data['type'];
       }catch(err){
         console.log("no type returned from upload reuqest ");
         return;
       }

       switch (type) {
        case 'error' : console.log("error returned from request");
          return;
        case 'tunnelCheckReturned' : command.tunnelCheckReturned(data);
          return;
        case 'toggledPortB' : command.toggledPortB(data);
          return;
        case 'radioStatusResult' :  command.radioStatusResult(data);
          return;
        case '5GHasBeenToggledOff': command.toggle5GhzBackOn(data);
          return;
        case '5GhzHasBeenToggledOn': command.toggle5GhzComplete(data);
          return;
        case '5GhzOff': command.checkRadioStatus();
          return;
        case '5GhzOn' : command.checkRadioStatus();
          return;
        case 'company1TabletDHCPList' : command.company1TabletDHCPList(data);
          return;
        case 'company1TabletDHCPListCleared' : command.company1TabletDHCPListCleared(data);
          return;
        case 'rebootSuccess' : command.rebootSuccess();
          return;
        case 'rebootcompany2Success': command.rebootSuccess();
          return;
        default: return console.log("error returned from request");
       }

   });

}
