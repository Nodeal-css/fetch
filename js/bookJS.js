var tbody = document.querySelector("#books-table");

//sync

//async
const getBooks = async () => {
    var html = "";

    const res = await fetch('../php/booksPHP/getBooks.php', {
        method: 'GET',
        headers:{'Content-Type':'application/json','Accept': 'application/json'}
    });
    const output = await res.text();
    //var temp = output.replace(/:/g, ",");
	var arr = JSON.parse(output.substring(9, output.length));

    for(var i = 0; i < arr.length; i++){
        html += '<tr><td>'+ arr[i]['title'] +'</td><td>'+ arr[i]['author'] +'</td><td>'+ arr[i]['genre'] +'</td><td>'+ arr[i]['quantity'] +'</td><td>'+ arr[i]['price'] +'</td><td><button class="" onclick="deleteBook('+ arr[i]['book_id'] +')">remove</button></td></tr>';
    }
    tbody.innerHTML = html;
    //console.log(arr[0]['title']);
}

getBooks();

const deleteBook = async (id) => {
    console.log('Delete id: ' + id);
    
    const res = await fetch('../php/booksPHP/deleteBook.php', {
        method: 'POST',
        body: JSON.stringify({'id': id})
    });
    const output = await res.text();
    var arr = JSON.parse(output.substring(9, output.length));
    alert(arr["message"]);
    getBooks();
    //refresh list
}