
var company2 = {
  main : function(){
    var c = document.getElementById('commandBody');
    c.innerHTML = null;

    var commandList = document.createElement("div");
    commandList.className = "commandList";

    var company2RebootOption = document.createElement("button");
    company2RebootOption.className = "commandOption";
    company2RebootOption.innerHTML = "reboot company2 router";
    company2RebootOption.addEventListener("click", function(e){
      var c = document.getElementById('commandOutput');
      c.innerHTML = "Trying to reboot ...";
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"rebootcompany2",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(company2RebootOption);
    commandBody.appendChild(commandList);

    var commandOutput = document.createElement("div");
    commandOutput.className = "commandOutput";
    commandOutput.id = "commandOutput";
    commandBody.appendChild(commandOutput);

  }
}

var company1 = {
  main : function(){
    var c = document.getElementById('commandBody');
    if (c !== null) c.innerHTML = null;

    var commandList = document.createElement("div");
    commandList.className = "commandList";

    var tunnelsUpOption = document.createElement("button");
    tunnelsUpOption.className = "commandOption";
    tunnelsUpOption.innerHTML = "check tunnel";
    tunnelsUpOption.addEventListener("click", function(e){
      var c = document.getElementById('commandOutput');
      c.innerHTML = "Loading ...";
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"checkTunnel",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(tunnelsUpOption);

    var togglePortB = document.createElement("button");
    togglePortB.className = "commandOption";
    togglePortB.innerHTML = "toggle port B";
    togglePortB.addEventListener("click", function(e){

      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"togglePortB",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(togglePortB);

    var radioStatus = document.createElement("button");
    radioStatus.className = "commandOption";
    radioStatus.innerHTML = "wifi status";
    radioStatus.addEventListener("click", function(e){
      checkRadioStatus();
    });
    commandList.appendChild(radioStatus);

    function checkRadioStatus(){
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"radioStatus",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    }
    var company1TabletDHCP = document.createElement("button");
    company1TabletDHCP.className = "commandOption";
    company1TabletDHCP.innerHTML = "company1Tablet DHCP list";
    company1TabletDHCP.addEventListener("click", function(e){

      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"getcompany1TabletDHCPList",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(company1TabletDHCP);

  

    var reboot = document.createElement("button");
    reboot.className = "rebootOption";
    reboot.innerHTML = "reboot";
    reboot.addEventListener("click", function(e){
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        command.rebootcompany1(ip);
      }
    });
    commandList.appendChild(reboot);

    commandBody.appendChild(commandList);

    var commandOutput = document.createElement("div");
    commandOutput.className = "commandOutput";
    commandOutput.id = "commandOutput";
    commandBody.appendChild(commandOutput);

    var commandExplanation = document.createElement("div");
    commandExplanation.className = "commandExplanation";
    commandBody.appendChild(commandExplanation);
    container.appendChild(commandBody);


    document.body.appendChild(container);

  }
  /*
  commandList : function(pElem){

    var commandList = document.createElement("div");
    commandList.className = "commandList";

    var tunnelsUpOption = document.createElement("button");
    tunnelsUpOption.className = "commandOption";
    tunnelsUpOption.innerHTML = "check tunnel";
    tunnelsUpOption.addEventListener("click", function(e){
      var c = document.getElementById('commandOutput');
      c.innerHTML = "Loading ...";
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"checkTunnel",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(tunnelsUpOption);

    var togglePortB = document.createElement("button");
    togglePortB.className = "commandOption";
    togglePortB.innerHTML = "toggle port B";
    togglePortB.addEventListener("click", function(e){

      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"togglePortB",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(togglePortB);

    var radioStatus = document.createElement("button");
    radioStatus.className = "commandOption";
    radioStatus.innerHTML = "wifi status";
    radioStatus.addEventListener("click", function(e){
      checkRadioStatus();
    });
    commandList.appendChild(radioStatus);

    function checkRadioStatus(){
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"radioStatus",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    }
    var company1TabletDHCP = document.createElement("button");
    company1TabletDHCP.className = "commandOption";
    company1TabletDHCP.innerHTML = "company1Tablet DHCP list";
    company1TabletDHCP.addEventListener("click", function(e){

      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        var url = '/runScript';
        var data = {'type':"getcompany1TabletDHCPList",'ip':ip};
        console.log("data sent to server " + data['type']);
        send(url,data);
      }
    });
    commandList.appendChild(company1TabletDHCP);

  

    var reboot = document.createElement("button");
    reboot.className = "rebootOption";
    reboot.innerHTML = "reboot";
    reboot.addEventListener("click", function(e){
      var ip = document.getElementById('ip').value;
      var valid = validateIP(ip);
      if (valid == true) {
        command.rebootcompany1(ip);
      }
    });
    commandList.appendChild(reboot);
    pElem.appendChild(commandList);
  }
  */

}
