var save = document.querySelector("#submit");
var openList = document.querySelector("#view-list");

//synchronous



//async

openList.addEventListener('click', async () => {
	window.location.href = "./pages/books.html";
});

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
	var arr = JSON.parse(output.substring(9, output.length));
	alert("message: " + arr["message"]);
	clearInput();
});

function clearInput(){
	document.querySelector("#title").value = "";
	document.querySelector("#author").value = "";
	document.querySelector("#genre").value = "";
	document.querySelector("#quantity").value = "";
	document.querySelector("#price").value = "";

}