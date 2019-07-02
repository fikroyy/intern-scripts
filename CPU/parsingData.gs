// Contoh Data : 
function parseTheTxt() {
  var folderName = "xxxxxxxxxxxxxxxxxxxx"; // Folder ID pada google drive //
  var fileName = "xxxxxxxxxxxxxx"; // File ID pada google drive //
  
  var driveApp = DriveApp;
  var openFolder = driveApp.getFolderById(folderName);
  var openFile = driveApp.getFilesByName(fileName);
  
  // URL Spreadsheet anda // 
  var activeSpreadSheet = SpreadsheetApp.openByUrl("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
  var newSheet = activeSpreadSheet.getSheets()[0];
  // Nama sheet //
  newSheet.setName("xxxxxxxxx");
  
  // Membaca data perbaris sampai ketemu newline //
  while (openFile.hasNext()) {
    var file = openFile.next();
    var docContent = file.getBlob().getDataAsString();
    var dataSplit = docContent.split("\n");
    
    // Ngesplit data sesuai data //
    for(var i=0; i < dataSplit.length; i++){
     data = dataSplit[i].split(", ").join(", ").split("\t").join(", ").split("Cpu(s): ").join("").split("%us").join("").split("%sy").join("").split("%ni").join("").split("%id").join("").split("%wa").join("").split("%hi").join("").split("%si").join("").split("%st").join("").split(", ");
     var tambahNol = data[0].substring(data[0].indexOf(':')).length; // Mengakses karakter dibelakang ":"
     if(tambahNol < 3){
       data[0] = data[0]+"0"; // Data time ditambah "0"
      }
      newSheet.appendRow(data); 
    }
    break;
  }
}

/*
function liveUpdate(){
  var folderName = "xxxxxxxxxxxxxxxxxxxxxxxxxx"; 
  var fileName = "xxxxxxxxxxxxxxxxxxxxxxxxxx"; 
  
  var driveApp = DriveApp;
  var openFolder = driveApp.getFolderById(folderName);
  var openFile = driveApp.getFilesByName(fileName);
  
  var activeSpreadSheet = SpreadsheetApp.openByUrl("xxxxxxxxxxxxxxxxxxxxxxxxx");
  var newSheet = activeSpreadSheet.getSheets()[0];
  newSheet.setName("Testing");
  
  if (openFile.hasNext()){
    var file = openFile.next();
    var docContent = file.getBlob().getDataAsString();
    newSheet.getRange(1, 1).setValue(docContent);
  }
}
*/