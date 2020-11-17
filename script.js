let pass="1011";
	let user="";
	buttons.onclick=(e)=>{
		console.log(e)
		if(e.path[0].innerHTML==="X"){
			user="";
			head.innerHTML=user;

		}else if(e.path[0].innerHTML==="E"){
			pass===user?alert("Welcome"):alert("Wrong PIN");
			user="";

		}
		else if(e.path.length===7){
			user=user +(e.path[0].innerHTML);
			head.innerHTML=user;

		}
		

	}
