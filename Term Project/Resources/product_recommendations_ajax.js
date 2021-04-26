// $(document).ready(function() {
//   alert("bruh?>");
//     $.ajax({
//         type: "GET",
//         url: "product_recommendations.json",
//         dataType: "json",
//         success: function(responseData, status){
//           // alert("this works");
//         //   var productDescArray = [];
//         //   var productNameArray = [];
//         //   var productURLArray = [];
//         //   var productInitialsArray = [];
//         //   var output = "<p>"; 
//             $.each(responseData.menuItem, function(i, item) {
//         //         productDescArray.push(String(item.productDesc));
//         //         productNameArray.push(String(item.productName));
//         //         productURLArray.push(String(item.productURL));
//         //         productInitialsArray.push(String(item.initials));
//           });
        
//         // var i = Math.floor(Math.random() * 10);
//         // output += productInitialsArray[i] + " reccomends: ";
//         // output += '<a href = "' + productURLArray[i] + '">';
//         // output += productNameArray[i] + " </a> - " + productDescArray[i];
//         // output += "</p>"
//         // $('#product_recommendations').html(output);
//         }, error: function(msg) {
//     //                   // there was a problem
//           alert("There was a problem: " + msg.status + " " + msg.statusText);
//         }
//     });
//   });
$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "product_recommendations.json",
      dataType: "json",
      success: function(responseData, status){
        alert("this works");
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
      
      var i = Math.floor(Math.random() * 10);
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


// $(document).ready(function() {
//   $.ajax({
//       type: "GET",
//       url: "product_recommendations.json",
//       dataType: "json",
//       success: function(responseData, status){
//         // alert("bruh?????????");
//         var output = "<ul>"; 
//           $.each(responseData.menuItem, function(i, item) {
//          output += '<li>';
//          output += '<a href="' + item.menuURL + '">';
//          output += item.menuName + ": " + item.menuDesc;
//          output += '</a> </li>';
//         output += "<li>bruh?</li>";
//         });
//       output += "</ul>";
//       $('#ProjectOutput').html(output);
//       }, error: function(msg) {
//                     // there was a problem
//         alert("There was a problem: " + msg.status + " " + msg.statusText);
//       }
//   });

// });