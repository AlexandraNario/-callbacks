function prepareIngredients(callback) {
    setTimeout(() => {
       callback("Ingredients are prepared.");
    }, 2000); // Simulate a 2-second delay
 }

 function assembleSandwich(callback){
    setTimeout(() => {
        callback("Sandwich is assembled");
    
    },1500);

 }
 function serveSandwich(callback){
   setTimeout(() => {
    callback("Sandwich is served");

   }, 1000);
 }

// function makeSandwich() {
  //  prepareIngredients((message1) => {
 //      console.log(message1);
 //   });
 //}
 
 function makeSandwich() {
    prepareIngredients(() => {
      assembleSandwich(() => {
        serveSandwich(() => {

        });
      });
    });
  }
 // Test the sandwich-making process
 makeSandwich();
 function prepareIngredients(callback) {
    setTimeout(() => {
      callback("Ingredients are prepared.");
    }, 2000); // Simulate a 2-second delay
  }
  
  function assembleSandwich(callback){
    setTimeout(() => {
      callback("Sandwich is assembled");
    },1500);
  }
  
  function serveSandwich(callback){
    setTimeout(() => {
      callback("Sandwich is served");
    }, 1000);
  }
  
  function makeSandwich() {
    prepareIngredients(() => {
      assembleSandwich(() => {
        serveSandwich(() => {
          console.log("Enjoy your sandwich!");
        });
      });
    });
  }
  
  // Test the sandwich-making process
  makeSandwich();
  //This code defines three functions: prepareIngredients, assembleSandwich, and serveSandwich. The makeSandwich function coordinates the entire process by calling these three functions in sequence using callbacks to ensure that each step is completed before moving on to the next one.
  
  //To test the code, simply call the makeSandwich function. The console will display messages at each step of the process, and finally, the message “Enjoy your sandwich!” will be displayed when the sandwich is ready to eat.
  
  //I hope this helps! Let me know if you have any other questions.