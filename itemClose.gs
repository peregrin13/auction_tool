//brings up the HTML page to request info
function itemClose() {
  var html = HtmlService.createHtmlOutputFromFile('itemCloseHTML.html')
    .setHeight(300)
    .setWidth(600);
  SpreadsheetApp.getUi()
       .showModalDialog(html, " ");
}

//dumps the input from the HTML form onto the "Course Info" sheet.
function closeItems(form) {

  Logger.log(form);


  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var items = ss.getSheetByName('Items');

  var allItems = findItemRow();
  var rowNum = "";
  
  Logger.log("All Items = " + allItems);
  
  for (var i = 0; i < allItems.length; i++){
    if ( allItems[i] == form.itemNumber){
      rowNum = i+2;
    }
  }
  
  Logger.log("Row Num = " + rowNum);
  
  items.getRange(rowNum,8).setValue(form.itemFinalBid);
  items.getRange(rowNum,14).setValue(form.itemDelivered);
  items.getRange(rowNum,15).setValue(form.itemNumBids);
   
  return true;
}
