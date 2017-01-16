//provides the Auction Tools menu option.
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Auction Tools')
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Donor Management')
                .addItem('Add Donor', 'addDonor'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Item Management')
                .addItem('Add Item', 'addItem')
                .addItem('Close Items', 'itemClose'))
    .addToUi();

}


//returns all non-closed items, e.g. ones without a Final Bid 
function getOpenItemNumber(){
  
  var admin = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Admin');
  
  var lastRow = rangeLength(admin.getRange(2,5,admin.getLastRow()).getValues());
  
  var itemNumbers = admin.getRange(2,5,lastRow).getValues();
  
  return itemNumbers;
}

function rangeLength(range) { 

  for (var i=0; i<range.length; i++){
    if (range[i] == ""){
      return i;
    } else { 
    }
  }  
}

function findItemRow(){
  
  var items = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Items');
  
  var itemArray = items.getRange('A2:A').getValues();
  
  return itemArray;
}
