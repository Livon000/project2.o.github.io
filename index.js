function timeanddate(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
 }
 timeanddate();
 setInterval(timeanddate, 1000);


 const image = document.getElementById("emotion");
 let angle = 0;
 let isSpinning = false;
 
 image.addEventListener("click", function() {
   console.log("hello bitch");
 
   if (!isSpinning) {
     angle += 90;
     isSpinning = true;
     image.style.animation = "spin 1s linear infinite";
   } else {
     angle = 0;
     isSpinning = false;
     image.style.animation = "none";
   }
 
   image.style.transform = `rotate(${angle}deg)`;
 });
 var toggle = 0;
 function changeBackground() {
   toggle = (toggle + 1) % 5
   if (toggle == 0) {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "linear-gradient(to bottom right, #000428, #004e92)";
    body.style.backgroundSize = "100%";
  
  
  var headings = document.getElementsByTagName("h1")[0];
  headings.style.color = "blue";
  headings.style.backgroundColor = "yellow"; 
  headings.style.transition = "1.0s";
  headings.style.cursor = "pointer";
  headings.addEventListener("mouseover", function() {
    headings.style.backgroundColor = "blue";
    headings.style.color = "yellow";
  });
  headings.addEventListener("mouseout", function() {
    headings.style.backgroundColor = "yellow";
    headings.style.color = "blue";
  }); 
  
 

  var head = document.getElementsByTagName("h2")[0];
  head.style.color = "blue";
  head.style.backgroundColor = "yellow";
  head.style.transition = "1.0s";
  head.style.cursor = "pointer";
  head.addEventListener("mouseover", function() {
    head.style.backgroundColor = "blue";
    head.style.color = "yellow";
  });
  head.addEventListener("mouseout", function() {
    head.style.backgroundColor = "yellow";
    head.style.color = "blue";
  });

  var he = document.getElementsByTagName("h3")[0];
  he.style.color = "blue";
  he.style.backgroundColor = "yellow";
  he.style.transition = "1.0s";
  he.style.cursor = "pointer";
  he.addEventListener("mouseover", function() {
    he.style.backgroundColor = "blue";
    he.style.color = "yellow";
  });
  he.addEventListener("mouseout", function() {
    he.style.backgroundColor = "yellow";
    he.style.color = "blue";
  }); 

  var hea = document.getElementById("void");
  hea.style.color = "blue";
  hea.style.backgroundColor = "yellow"; 
  hea.style.transition = "1.0s";
  hea.style.cursor = "pointer";
  hea.addEventListener("mouseover", function() {
    hea.style.backgroundColor = "blue";
    hea.style.color = "yellow";
  });
  hea.addEventListener("mouseout", function() {
    hea.style.backgroundColor = "yellow";
    hea.style.color = "blue";
  });

  var h = document.getElementById("void1");
  h.style.color = "blue";
  h.style.backgroundColor = "yellow"; 
  h.style.transition = "1.0s";
  h.style.cursor = "pointer";
  h.addEventListener("mouseover", function() {
    h.style.backgroundColor = "blue";
    h.style.color = "yellow";
  });
  h.addEventListener("mouseout", function() {
    h.style.backgroundColor = "yellow";
    h.style.color = "blue";
  });

  var p1 = document.getElementById("p1");
 p1.style.color = "yellow";


  var p2 = document.getElementById("p2");
  p2.style.color = "yellow";


  var p3 = document.getElementById("p3");
  p3.style.color = "yellow";
  

  var p4 = document.getElementById("p4");
  p4.style.color = "yellow";
 

  var p5 = document.getElementById("p5");
  p5.style.color = "yellow";


  var p6 = document.getElementById("p6");
  p6.style.color = "yellow";

  var dish = document.getElementById("dish");
  dish.style.color = "blue";
  dish.style.backgroundColor = "yellow"; 
  dish.style.transition = "1.0s";
  dish.style.cursor = "pointer";
  dish.addEventListener("mouseover", function() {
    dish.style.backgroundColor = "blue";
    dish.style.color = "yellow";
  });
  dish.addEventListener("mouseout", function() {
    dish.style.backgroundColor = "yellow";
    dish.style.color = "blue";
  });
  var bt = document.getElementById("bt");
  bt.style.color = "blue";
  bt.style.backgroundColor = "yellow"; 
  bt.style.borderColor = "yellow"; 
 bt.style.cursor = "pointer";
 bt.addEventListener("mouseover", function() {
   bt.style.backgroundColor = "blue";
   bt.style.color = "yellow";
  });
 bt.addEventListener("mouseout", function() {
   bt.style.backgroundColor = "yellow";
   bt.style.color = "blue";
  });


  var cont = document.getElementById("cont");
  cont.style.backgroundColor = "yellow"; 
  cont.style.color = "blue";
  
  var hid = document.getElementById("hid");

  hid.style.color = "blue";

   }else if (toggle == 1){
  
    var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "linear-gradient(to bottom right, #43cea2,   #185a9d )";
  var headings = document.getElementsByTagName("h1")[0];
  headings.style.color = " #43cea2";
  headings.style.backgroundColor = "black"; 
  headings.style.transition = "1.0s";
headings.style.cursor = "pointer";
headings.addEventListener("mouseover", function() {
  headings.style.backgroundColor = "#43cea2";
  headings.style.color = "black";
});
headings.addEventListener("mouseout", function() {
  headings.style.backgroundColor = "black";
  headings.style.color = "#43cea2";
});
  
 

  var head = document.getElementsByTagName("h2")[0];
  head.style.color = "  #43cea2";
  head.style.backgroundColor = "black"; 
  head.style.transition = "1.0s";
  head.style.cursor = "pointer";
  head.addEventListener("mouseover", function() {
    head.style.backgroundColor = "#43cea2";
    head.style.color = "black";
  });
  head.addEventListener("mouseout", function() {
    head.style.backgroundColor = "black";
    head.style.color = "#43cea2";
  });

  var he = document.getElementsByTagName("h3")[0];
  he.style.color = " #43cea2";
  he.style.backgroundColor = "black"; 
  he.style.transition = "1.0s";
  he.style.cursor = "pointer";
  he.addEventListener("mouseover", function() {
    he.style.backgroundColor = "#43cea2";
    he.style.color = "black";
  });
  he.addEventListener("mouseout", function() {
    he.style.backgroundColor = "black";
    he.style.color = "#43cea2";
  });

  var hea = document.getElementById("void");
  hea.style.color = " #43cea2";
  hea.style.backgroundColor = "black"; 
 hea.style.transition = "1.0s";
 hea.style.cursor = "pointer";
 hea.addEventListener("mouseover", function() {
   hea.style.backgroundColor = "#43cea2";
   hea.style.color = "black";
  });
 hea.addEventListener("mouseout", function() {
   hea.style.backgroundColor = "black";
   hea.style.color = "#43cea2";
  });

  var h = document.getElementById("void1");
  h.style.color = " #43cea2";
  h.style.backgroundColor = "black"; 
  h.style.transition = "1.0s";
  h.style.cursor = "pointer";
  h.addEventListener("mouseover", function() {
    h.style.backgroundColor = "#43cea2";
    h.style.color = "black";
  });
  h.addEventListener("mouseout", function() {
    h.style.backgroundColor = "black";
    h.style.color = "#43cea2";
  });

  var p1 = document.getElementById("p1");
 p1.style.color = "black";


  var p2 = document.getElementById("p2");
  p2.style.color = "black";


  var p3 = document.getElementById("p3");
  p3.style.color = "black";
  

  var p4 = document.getElementById("p4");
  p4.style.color = "black";
 

  var p5 = document.getElementById("p5");
  p5.style.color = "black";


  var p6 = document.getElementById("p6");
  p6.style.color = "black";

  var dish = document.getElementById("dish");
  dish.style.color = " #43cea2";
  dish.style.backgroundColor = "black"; 
  dish.style.transition = "1.0s";
  dish.style.cursor = "pointer";
  dish.addEventListener("mouseover", function() {
    dish.style.backgroundColor = "#43cea2";
    dish.style.color = "black";
  });
  dish.addEventListener("mouseout", function() {
    dish.style.backgroundColor = "black";
    dish.style.color = "#43cea2";
  });
  var bt = document.getElementById("bt");
  bt.style.color = " #43cea2";
  bt.style.backgroundColor = "black"; 
  bt.style.borderColor = "black"; 
  
  bt.style.cursor = "pointer";
  bt.addEventListener("mouseover", function() {
    bt.style.backgroundColor = "#43cea2";
    bt.style.color = "black";
  });
  bt.addEventListener("mouseout", function() {
    bt.style.backgroundColor = "black";
    bt.style.color = "#43cea2";
  });


  var cont = document.getElementById("cont");
  cont.style.backgroundColor = "black"; 
  cont.style.color = " #43cea2";
  
  var hid = document.getElementById("hid");

  hid.style.color = " #43cea2";
  
  }else if (toggle == 2){
  
    var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "linear-gradient(to bottom right, #56ab2f,  #a8e063 )";
  body.style.backgroundSize = "100%";
  var headings = document.getElementsByTagName("h1")[0];
  headings.style.color = "#006600";
  headings.style.backgroundColor = "black"; 
  headings.style.transition = "1.0s";
  headings.style.cursor = "pointer";
  headings.addEventListener("mouseover", function() {
    headings.style.backgroundColor = "#006600";
    headings.style.color = "black";
  });
  headings.addEventListener("mouseout", function() {
    headings.style.backgroundColor = "black";
    headings.style.color = "#006600";
  });
  
 

  var head = document.getElementsByTagName("h2")[0];
  head.style.color = "#006600";
  head.style.backgroundColor = "black"; 
  head.style.transition = "1.0s";
  head.style.cursor = "pointer";
  head.addEventListener("mouseover", function() {
    head.style.backgroundColor = "#006600";
    head.style.color = "black";
  });
  head.addEventListener("mouseout", function() {
    head.style.backgroundColor = "black";
    head.style.color = "#006600";
  });

  var he = document.getElementsByTagName("h3")[0];
  he.style.color = "#006600";
  he.style.backgroundColor = "black";
  he.style.transition = "1.0s";
  he.style.cursor = "pointer";
  he.addEventListener("mouseover", function() {
    he.style.backgroundColor = "#006600";
    he.style.color = "black";
  });
  he.addEventListener("mouseout", function() {
    he.style.backgroundColor = "black";
    he.style.color = "#006600";
  });


  var hea = document.getElementById("void");
  hea.style.color = "#006600";
  hea.style.backgroundColor = "black"; 
 hea.style.transition = "1.0s";
 hea.style.cursor = "pointer";
 hea.addEventListener("mouseover", function() {
   hea.style.backgroundColor = "#006600";
   hea.style.color = "black";
  });
 hea.addEventListener("mouseout", function() {
   hea.style.backgroundColor = "black";
   hea.style.color = "#006600";
  });

  var h = document.getElementById("void1");
  h.style.color = "#006600";
  h.style.backgroundColor = "black"; 
 h.style.transition = "1.0s";
 h.style.cursor = "pointer";
 h.addEventListener("mouseover", function() {
   h.style.backgroundColor = "#006600";
   h.style.color = "black";
  });
 h.addEventListener("mouseout", function() {
   h.style.backgroundColor = "black";
   h.style.color = "#006600";
  });

  var p1 = document.getElementById("p1");
 p1.style.color = "black";


  var p2 = document.getElementById("p2");
  p2.style.color = "black";


  var p3 = document.getElementById("p3");
  p3.style.color = "black";
  

  var p4 = document.getElementById("p4");
  p4.style.color = "black";
 

  var p5 = document.getElementById("p5");
  p5.style.color = "black";


  var p6 = document.getElementById("p6");
  p6.style.color = "black";

  var dish = document.getElementById("dish");
  dish.style.color = "#006600";
  dish.style.backgroundColor = "black"; 
 dish.style.transition = "1.0s";
 dish.style.cursor = "pointer";
 dish.addEventListener("mouseover", function() {
   dish.style.backgroundColor = "#006600";
   dish.style.color = "black";
  });
 dish.addEventListener("mouseout", function() {
   dish.style.backgroundColor = "black";
   dish.style.color = "#006600";
  });
  var bt = document.getElementById("bt");
  bt.style.color = "#006600";
  bt.style.backgroundColor = "black"; 
  bt.style.borderColor = "black"; 
 
  bt.style.cursor = "pointer";
  bt.addEventListener("mouseover", function() {
    bt.style.backgroundColor = "#006600";
    bt.style.color = "black";
  });
  bt.addEventListener("mouseout", function() {
    bt.style.backgroundColor = "black";
    bt.style.color = "#006600";
  });


  var cont = document.getElementById("cont");
  cont.style.backgroundColor = "black"; 
  cont.style.color = "#006600";
  
  var hid = document.getElementById("hid");

  hid.style.color = "#006600";
  }else if(toggle == 3){
   
    var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "linear-gradient(to bottom right,#662D8C  , #ED1E79)";
  var headings = document.getElementsByTagName("h1")[0];
  headings.style.color = "darkMagenta";
  headings.style.backgroundColor = "white"; 
  headings.style.transition = "1.0s";
  headings.style.cursor = "pointer";
  headings.addEventListener("mouseover", function() {
    headings.style.backgroundColor = "darkMagenta";
    headings.style.color = "white";
  });
  headings.addEventListener("mouseout", function() {
    headings.style.backgroundColor = "white";
    headings.style.color = "darkMagenta";
  });
  
 

  var head = document.getElementsByTagName("h2")[0];
  head.style.color = "darkMagenta";
  head.style.backgroundColor = "white";
head.style.transition = "1.0s";
head.style.cursor = "pointer";
head.addEventListener("mouseover", function() {
  head.style.backgroundColor = "darkMagenta";
  head.style.color = "white";
  });
head.addEventListener("mouseout", function() {
  head.style.backgroundColor = "white";
  head.style.color = "darkMagenta";
  }); 

  var he = document.getElementsByTagName("h3")[0];
  he.style.color = "darkMagenta";
  he.style.backgroundColor = "white"; 
he.style.transition = "1.0s";
he.style.cursor = "pointer";
he.addEventListener("mouseover", function() {
  he.style.backgroundColor = "darkMagenta";
  he.style.color = "white";
  });
he.addEventListener("mouseout", function() {
  he.style.backgroundColor = "white";
  he.style.color = "darkMagenta";
  });

  var hea = document.getElementById("void");
  hea.style.color = "darkMagenta";
  hea.style.backgroundColor = "white"; 
  hea.style.transition = "1.0s";
  hea.style.cursor = "pointer";
  hea.addEventListener("mouseover", function() {
    hea.style.backgroundColor = "darkMagenta";
    hea.style.color = "white";
  });
  hea.addEventListener("mouseout", function() {
    hea.style.backgroundColor = "white";
    hea.style.color = "darkMagenta";
  });

  var h = document.getElementById("void1");
  h.style.color = "darkMagenta";
  h.style.backgroundColor = "white"; 
  h.style.transition = "1.0s";
  h.style.cursor = "pointer";
  h.addEventListener("mouseover", function() {
    h.style.backgroundColor = "darkMagenta";
    h.style.color = "white";
  });
  h.addEventListener("mouseout", function() {
    h.style.backgroundColor = "white";
    h.style.color = "darkMagenta";
  });

  var p1 = document.getElementById("p1");
 p1.style.color = "white";


  var p2 = document.getElementById("p2");
  p2.style.color = "white";


  var p3 = document.getElementById("p3");
  p3.style.color = "white";
  

  var p4 = document.getElementById("p4");
  p4.style.color = "white";
 

  var p5 = document.getElementById("p5");
  p5.style.color = "white";


  var p6 = document.getElementById("p6");
  p6.style.color = "white";

  var dish = document.getElementById("dish");
  dish.style.color = "darkMagenta";
  dish.style.backgroundColor = "white"; 
  dish.style.transition = "1.0s";
  dish.style.cursor = "pointer";
  dish.addEventListener("mouseover", function() {
    dish.style.backgroundColor = "darkMagenta";
    dish.style.color = "white";
  });
  dish.addEventListener("mouseout", function() {
    dish.style.backgroundColor = "white";
    dish.style.color = "darkMagenta";
  });
  var bt = document.getElementById("bt");
  bt.style.color = "darkMagenta";
  bt.style.backgroundColor = "white"; 
  bt.style.borderColor = "white"; 
  
  bt.style.cursor = "pointer";
  bt.addEventListener("mouseover", function() {
    bt.style.backgroundColor = "darkMagenta";
    bt.style.color = "white";
  });
  bt.addEventListener("mouseout", function() {
    bt.style.backgroundColor = "white";
    bt.style.color = "darkMagenta";
  });

  var cont = document.getElementById("cont");
  cont.style.backgroundColor = "white"; 
  cont.style.color = "darkMagenta";
  
  var hid = document.getElementById("hid");

  hid.style.color = "darkMagenta";
  
  }else if(toggle == 4){
   
    var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "linear-gradient(to bottom right, #ddd6f3, #faaca8)";
  var headings = document.getElementsByTagName("h1")[0];
  headings.style.color = "darkMagenta";
  headings.style.backgroundColor = "black";
  headings.style.transition = "1.0s";
  headings.style.cursor = "pointer";
  headings.addEventListener("mouseover", function() {
    headings.style.backgroundColor = "darkMagenta";
    headings.style.color = "black";
  });
  headings.addEventListener("mouseout", function() {
    headings.style.backgroundColor = "black";
    headings.style.color = "darkMagenta";
  }); 
  
 

  var head = document.getElementsByTagName("h2")[0];
  head.style.color = "darkMagenta";
  head.style.backgroundColor = "black"; 
 head.style.transition = "1.0s";
 head.style.cursor = "pointer";
 head.addEventListener("mouseover", function() {
   head.style.backgroundColor = "darkMagenta";
   head.style.color = "black";
  });
 head.addEventListener("mouseout", function() {
   head.style.backgroundColor = "black";
   head.style.color = "darkMagenta";
  }); 
  var he = document.getElementsByTagName("h3")[0];
  he.style.color = "darkMagenta";
  he.style.backgroundColor = "black";
 he.style.transition = "1.0s";
 he.style.cursor = "pointer";
 he.addEventListener("mouseover", function() {
   he.style.backgroundColor = "darkMagenta";
   he.style.color = "black";
  });
 he.addEventListener("mouseout", function() {
   he.style.backgroundColor = "black";
   he.style.color = "darkMagenta";
  });  

  var hea = document.getElementById("void");
  hea.style.color = "darkMagenta";
  hea.style.backgroundColor = "black"; 
  hea.style.transition = "1.0s";
  hea.style.cursor = "pointer";
  hea.addEventListener("mouseover", function() {
    hea.style.backgroundColor = "darkMagenta";
    hea.style.color = "black";
  });
  hea.addEventListener("mouseout", function() {
    hea.style.backgroundColor = "black";
    hea.style.color = "darkMagenta";
  }); 

  var h = document.getElementById("void1");
  h.style.color = "darkMagenta";
  h.style.backgroundColor = "black"; 
  h.style.transition = "1.0s";
  h.style.cursor = "pointer";
  h.addEventListener("mouseover", function() {
    h.style.backgroundColor = "darkMagenta";
    h.style.color = "black";
  });
  h.addEventListener("mouseout", function() {
    h.style.backgroundColor = "black";
    h.style.color = "darkMagenta";
  }); 

  var p1 = document.getElementById("p1");
 p1.style.color = "darkMagenta";


  var p2 = document.getElementById("p2");
  p2.style.color = "darkMagenta";


  var p3 = document.getElementById("p3");
  p3.style.color = "darkMagenta";
  

  var p4 = document.getElementById("p4");
  p4.style.color = "darkMagenta";
 

  var p5 = document.getElementById("p5");
  p5.style.color = "darkMagenta";


  var p6 = document.getElementById("p6");
  p6.style.color = "darkMagenta";

  var dish = document.getElementById("dish");
  dish.style.color = "darkMagenta";
  dish.style.backgroundColor = "black"; 
 dish.style.transition = "1.0s";
 dish.style.cursor = "pointer";
 dish.addEventListener("mouseover", function() {
   dish.style.backgroundColor = "darkMagenta";
   dish.style.color = "black";
  });
 dish.addEventListener("mouseout", function() {
   dish.style.backgroundColor = "black";
   dish.style.color = "darkMagenta";
  }); 
  var bt = document.getElementById("bt");
  bt.style.color = "darkMagenta";
  bt.style.backgroundColor = "black"; 
  bt.style.borderColor = "black"; 
bt.style.cursor = "pointer";
bt.addEventListener("mouseover", function() {
  bt.style.backgroundColor = "darkMagenta";
  bt.style.color = "black";
  });
bt.addEventListener("mouseout", function() {
  bt.style.backgroundColor = "black";
  bt.style.color = "darkMagenta";
  }); 


  var cont = document.getElementById("cont");
  cont.style.backgroundColor = "black"; 
  cont.style.color = "darkMagenta";
  
  var hid = document.getElementById("hid");

  hid.style.color = "darkMagenta";
  
  }
}



