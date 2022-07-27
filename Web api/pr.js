console.log("Starting   server");

const server = "http://localhost:8000";
var data;
fetch(server)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("data",JSON.stringify(data));
         // this.data = localStorage.getItem("data");
        console.log(data);
         console.log("Server response: " + JSON.stringify(data))

    });



