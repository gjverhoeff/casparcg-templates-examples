function escapeHtml(unsafe) {
     return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  var parser = null;
  // Parse templateData into an XML object
  function parseCaspar(str)   {
    console.log(str)
     var xmlDoc;
     if (window.DOMParser)   {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(str,"text/xml");
        // console.log(parser);
     }
     return XML2JSON(xmlDoc.documentElement.childNodes);
  }

  // Make the XML templateData message into a more simple key:value object
  function XML2JSON(node)   {
     var data = {};  // resulting object
     for (k=0;k<node.length;k++)   {
        var idCaspar = node[k].getAttribute("id");
        //console.log(idCaspar);
        var valCaspar = node[k].childNodes[0].getAttribute("value");
        if ( idCaspar != undefined && valCaspar != undefined){
          data[idCaspar] = valCaspar;
        };
     }
     return data;
     console.log(data)
  }

  function update(str) {
    var dataCaspar = parseCaspar(str);
    insertData(dataCaspar);
  }
