let string="";
let buttons=document.querySelectorAll('.bktn');
Array.from(buttons).forEach((bktn) => {
	bktn.addEventListener('click',(e)=>{
		if(e.target.innerHTML == "="){
			
			string = eval(string);
			document.querySelector('input').value=string;
			
		}
		else if(e.target.innerHTML == 'AC'){
			string = "";
			document.querySelector('input').value=string;
		}
		else{
			
			string = string + e.target.innerHTML;
			document.querySelector('input').value=string
		}
	})
})
