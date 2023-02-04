var save = document.querySelector("#submit");

//synchronous



//async


save.addEventListener('click', async () => {
	//console.log('clicked');
	var title = document.querySelector("#title").value;
	var author = document.querySelector("#author").value;
	var genre = document.querySelector("#genre").value;
	var quantity = document.querySelector("#quantity").value;
	var price = document.querySelector("#price").value;


	const res = await fetch("php/insertBook.php", {
		method: "POST",
		headers:{'Content-Type':'application/json','Accept': 'application/json'},
		body: JSON.stringify({"title": title, "author": author, "genre": genre, "quantity": quantity, "price": price, })
	});
	const output = await res.text();
	//const obj = await res.json();
	var temp = output.replace(/:/g, ",");
	var arr = eval(temp.substring(9, temp.length));
	console.log(arr);
	
	//console.log(res.json());
	clearInput();
});

function clearInput(){
	document.querySelector("#title").value = "";
	document.querySelector("#author").value = "";
	document.querySelector("#genre").value = "";
	document.querySelector("#quantity").value = "";
	document.querySelector("#price").value = "";

}