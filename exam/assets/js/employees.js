function formatAddress(address){
    return `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`
}
function getRow(data){
    
    let response= `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td> 
        <td>${data.username}</td> 
        <td><a href="mailto:${data.email}">${data.email}</a></td>   
        <td>${formatAddress(data.address)}</td> 
    </tr>`;
    console.log(response);
    return response;
} 
function doRequest() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status === 200) {
            data = JSON.parse(request.response)
            
            data.forEach(element => {
                $("#tableBody").append(
                    getRow(element)
                );
            });
            $('#table_id').DataTable();
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
            alert(`error ${request.status} ${request.statusText}`)
        }
    };
    request.onerror = () => {
        console.log(`error obteniendo conexión a la API`)
            alert(`error obteniendo conexión a la API`)
    };
    
};
$("document").ready(()=>{
    doRequest();
})