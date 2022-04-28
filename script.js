$("button").click(function() {
    let variable1 = $(".A").val();
    let variable2 = $(".B").val();
    let variable3 = $(".C").val();
   
  let variable4=variable3*2033; 
   
    $(".fortune-display").append( variable1+ "you will make"+variable4); 
    
    console.log(variable1, variable2,variable3);
});