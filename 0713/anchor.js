function anchorTotal() {
  console.log(document.getElementsByTagName("a").length);
}
anchorTotal();

function anchorList() {
  var toPrint="";
  var nodeList=document.getElementsByTagName("a");
  for(var i=0;i<nodeList.length;i++) {
    toPrint += nodeList[i] + ", ";
  }
  console.log(toPrint);
}
anchorList();

function anchorReverse() {
  var toPrint="";
  var nodeList=document.getElementsByTagName("a");
  for(var i=nodeList.length-1;i>0;i--) {
    toPrint += nodeList[i] + ", ";
  }
  console.log(toPrint);
}
anchorReverse();
