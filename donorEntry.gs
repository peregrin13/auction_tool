//brings up the HTML page to request info
function addDonor() {
  var html = HtmlService.createHtmlOutputFromFile('donorEnter.html')
    .setHeight(600)
    .setWidth(600);
  SpreadsheetApp.getUi()
       .showModalDialog(html, " ");
}

//dumps the input from the HTML form onto the "Course Info" sheet.
function addToDonorSheet(form) {

  Logger.log(form);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var donor = ss.getSheetByName('Donors');
  
  var lastId= donor.getRange(donor.getLastRow(),1).getValue();
  
  if (lastId == "Number"){
    lastId = 0;
  }
  
  Logger.log(lastId);
  
  donor.appendRow([lastId+1,form.donorName,form.donorPhone,form.donorEmail, form.donorAddress,form.donorContact,form.donorContactPosition]);
   
  return true;
}
