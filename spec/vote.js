
		const prompt = require('prompt-sync')();
		var models={
			0:0,
			1:0,
			2:0,
			3:0
		  }
		  var  model_values="";
		  var option="";
		  
		  function inputValue(){
		   option=prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford");
		  return option;
		  }
		  
		  function evaluateVotes(option){
			try{
			  if(option<0||option>3) throw "enter valid number"
			  if (isNaN(option)){option=String(option); throw "enter only number"}
			  
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
		  function registerNewVote(){
			var option =inputValue();
		   var result= evaluateVotes(option);
		   return result;
		   
		  }
		  console.log(registerNewVote());
		  module.exports={
			evaluateVotes
		  }
