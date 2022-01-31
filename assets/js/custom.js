function myFunction(myClass) {
	var myStringArray = ["text-MEPI","text-CDEV","text-EDUC","text-IMMU","text-NEUR","text-MFBM","text-POPD","text-ONCO","text-OTHE"];
	var arrayLength = myStringArray.length;
	
	if (myClass == "all") {
		for (var j = 0; j < arrayLength; j++) {
	    var thisClass = myStringArray[j];
	    var divsToHide = document.getElementsByClassName(thisClass);
		  for(var i = 0; i < divsToHide.length; i++){
			  
			  // make visible
			  divsToHide[i].style.display = "inline";		  
		  }
		}
	} else {
		for (var j = 0; j < arrayLength; j++) {
	    var thisClass = myStringArray[j];
	    var divsToHide = document.getElementsByClassName(thisClass);
	    
	    if (thisClass == myClass) {
		    for(var i = 0; i < divsToHide.length; i++){
				  // make visible
				  divsToHide[i].style.display = "inline";		  
			  }
	    } else {
		    for(var i = 0; i < divsToHide.length; i++){
				  // make invisible
				  divsToHide[i].style.display = "none";		  
			  }
	    }	    
		}
	}
}


function abstractsHide() {
	
	
	// change all "hide-abstracts" -> "show-abstracts", 
	// or vice versa
	
	var divsToShow = document.getElementsByClassName('hide-abstracts');
	
	if (divsToShow.length>0) {
		// show all abstracts
		while (divsToShow.length) {
			var thisDiv = divsToShow[0];
	    thisDiv.classList.remove('hide-abstracts');
	    thisDiv.classList.add('show-abstracts');
	  }		
	  document.getElementById("switch-text").innerHTML = "Click to hide abstracts";
	} else {
		var divsToHide = document.getElementsByClassName('show-abstracts');
		
		// show all abstracts
		while (divsToHide.length) {
			var thisDiv = divsToHide[0];
	    thisDiv.classList.remove('show-abstracts');
	    thisDiv.classList.add('hide-abstracts');
	  }
	  
	  document.getElementById("switch-text").innerHTML = "Click to show abstracts";
	}
}


	