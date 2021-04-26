
$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "Resources/product_recommendations.json",
      dataType: "json",
      success: function(responseData, status){
        var productDescArray = [];
        var productNameArray = [];
        var productURLArray = [];
        var productInitialsArray = [];
        var output = "<p>"; 
          $.each(responseData.menuItem, function(i, item) {
              productDescArray.push(String(item.productDesc));
              productNameArray.push(String(item.productName));
              productURLArray.push(String(item.productURL));
              productInitialsArray.push(String(item.initials));
        });
      
      var i = Math.floor(Math.random() * productDescArray.length);
      output += productInitialsArray[i] + " reccomends: ";
      output += '<a href = "' + productURLArray[i] + '">';
      output += productNameArray[i] + " </a> - " + productDescArray[i];
      output += "</p>"
      $('#product_recommendations').html(output);
      }, error: function(msg) {
  //                   // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });
});


