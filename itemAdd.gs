//brings up the HTML page to request info
function addItem() {
  var donor = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Donors');
  
  if (donor.getRange("A2").getValue() != ""){
  
  var html = HtmlService.createHtmlOutputFromFile('itemEnter.html')
    .setHeight(600)
    .setWidth(600);
  SpreadsheetApp.getUi()
       .showModalDialog(html, " ");
  }else{
    SpreadsheetApp.getUi().alert('You must enter at least one Donor before entering items!');
  }
    
}

//dumps the input from the HTML form onto the "Course Info" sheet.
function addToItemSheet(form) {

  Logger.log(form);


  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var items = ss.getSheetByName('Items');

  var lastId= items.getRange(items.getLastRow(),1).getValue();
  
    Logger.log(lastId);
  
  items.appendRow([lastId+1,form.itemTypes,form.itemName,form.itemDescription, form.itemValue,form.itemStartBid, form.itemBidIncrement,"",form.itemAuction,new Date(),form.itemSolicitor, Session.getActiveUser().getEmail(),form.itemCollected,"","",form.itemDonor]);
   
  return true;
}

//handles the drop down for the room selector
function doGet(request) {
  return HtmlService.createTemplateFromFile('DropDown')
         .evaluate().setSandboxMode(HtmlService.SandboxMode.NATIVE); 
}

//populates the drop down for the room selector
//to do - provide ONLY rooms in the selected site
//make list dynamic
function getItemTypes(){
  
  var admin = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Admin');
     
  return admin.getRange(2,1,admin.getLastRow()).getValues();  
}

function getAuctions(){
  
  var admin = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Admin');
  
  return admin.getRange(2,3,admin.getLastRow()).getValues();
  
}

function getDonors(){
  
  var donors = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Donors');
  
  var numDonors = rangeLength(donors.getRange(2,2,donors.getLastRow()).getValues());
  
  Logger.log("NumDonors = " + numDonors);
  
  return donors.getRange(2,2,numDonors).getValues();
  
}
