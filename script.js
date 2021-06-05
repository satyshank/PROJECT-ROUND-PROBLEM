
		function statecheck()
		{
				var a= document.getElementById('state').value;

				if (a==="Tamil Nadu"){
					var array = ["Chennai","Chengalpattu","Trichy","Madurai","Coimbatore","Salem","Tirunelveli","Thoothukkudi","Kanya kumari","Thanjavur"]
					}

				else if(a==="Kerala"){
					var array =["Trivandrum","Kozhikode","Kochi","Kollam","Thrissur","Kannur","Alapuzha","Kottayam","Palakkad","Manjeri"]
					}
				else if(a==="Karnataka"){
					var array =["Bengaluru","Mangalore","Belgaum","Mysore","Shimoga","Hassan","Udupi","Raichur","Bellary","Mandya"]
					}
				else{
					var array = ["Select City"];
					}
				var string=" ";

				for(i=0; i<array.length;i++){
						  string = string+"<option>"+array[i]+"</option>";
					   }
					   string="<label>City</label>	<select>"+string+"</select>";
					   document.getElementById('city').innerHTML=string;
		}

		function ageCalculator() 
		{  
			var userinput = document.getElementById("DOB").value;  
			var dob = new Date(userinput);  
			var parname = document.getElementById("ParentName");
			var parphone = document.getElementById("ParentPhone");
			if(userinput==null || userinput=='') {  
			  document.getElementById("message").innerHTML = "**Choose a date please!";    
				return false; 
			} else {  
      
			//calculate month difference from current date in time  
			var month_diff = Date.now() - dob.getTime();  
      
			//convert the calculated difference in date format  
			var age_dt = new Date(month_diff);   
      
			//extract year from date      
			var year = age_dt.getUTCFullYear();  
      
			//now calculate the age of the user  
			var age = Math.abs(year - 1970);  }

			if(age<=18){
				parname.disabled = false;
				parphone.disabled = false;
			} 
		}

		function EnableDisableTextBox() 
		{
				var chkYes = document.getElementById("chkYes");
				var expiryDATE= document.getElementById("expiry");

				expiryDATE.disabled = chkYes.checked ? false : true;

				 }
				  function checkExpiry(){

				 var policyNumber = document.getElementById("PolicyNumber");
				var insprovider = document.getElementById("insuranceName")
				var todayDate = new Date();
				var dateEntered = document.getElementById("expiry").value
				var date = new Date(dateEntered);
				
				if(date<todayDate)
				{
				 policyNumber.disabled = chkYes.checked ? false : true;
				 insprovider.disabled = chkYes.checked ? false : true;} 
				}



				

          

		




		
	