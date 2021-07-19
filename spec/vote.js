

        // let model=[0,0,0,0];
		  
		//  let poll_values="";

		// function registerNewVote(){
		// var option=Number(prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford"));
        
		// if(option>=0 && option<=3){
		//  var  value=model[option];

		//  value++;
		//  model[option]=value;
		//  poll_values= Object.values(model);

		// displayResults(poll_values);
		// }

		// else{
		// alert("Enter valid option")
		// }

		// }
		// function displayResults(poll_values){

        //       console.log("Poll results are "+poll_values);

		// }

        // module.exports=
        // {
        //     registerNewVote,
        // displayResults,
        // }

		let models={
			0:0,
			1:0,
			2:0,
			3:0
		  }
		   let model_values="";
		  let x="";
		  
		  function registerNewVote(){
		  }
		  
		   function inputValue(){
			x=(prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford"));
		   return x;
		   }
		  
		  function evaluateVotes(x){
			let option =x;
		  
			try{
			  if(option<0||option>3){x=String(x); throw "enter valid number"}
			  if (isNaN(option)){x=String(x); throw "enter only number"}
		  
			}
			catch(err){
		  
			  return err;
			}
		  if(option>=0&&option<=3){
		   var value=models[option];
		  
		   value++;
		   models[option]=value;
		   model_values= Object.values(models);
		  
		   return displayResults(model_values);
		  }
		  }
		  
		  
		  
		  function displayResults(model_values){
		  
		   return  "Poll results are "+model_values;
		  }
		  module.exports={
			evaluateVotes
		  }