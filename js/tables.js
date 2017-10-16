var client = WindowsAzure.MobileServiceClient(appUrl);
var table = client.getTable(tableName);

var newItem = {
    name: 'My Name',
    signupDate: new Date()
};

table
    .insert(newItem)
    .done(function(insertedItem){
        var id = insertedItem.id;
    }, failure);

function validateForm(){
    var x = document.forms["contactForm"]["Name"].value;
    if(x = ""){
        alert("Name must be filled out");
        return false;
    }
}