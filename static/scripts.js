console.log("Hello");
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
    function (event){

        console.log('Page is loaded!');
        function sayHello(event){
            console.log(this); //triggered the event
            console.log(event);
            this.textContent = "Already!";
            var name = document.getElementById("name").value;
            var outStr = "<h2>" + name + "</h2>";
            document.getElementById("content").innerHTML=outStr;

            if (name === "student"){
                var title = document.querySelector("h1")
                    .textContent;
                title += " Loving Huj";
                document.querySelector("h1").textContent=title;
            }
        }

        // document.querySelector("button")
        //     .addEventListener("click", sayHello);

        document.querySelector("button")
            .addEventListener("click", function(){
                $ajaxUtils.sendGetRequest("/getjson",
                    function(res){
                    var message = res.firstName + " " + res.lastName;
                    document.querySelector("#content")
                            .innerHTML = "<h2> HELLO " + message + " !";
                    })


            });

        document.querySelector("body")
            .addEventListener("mousemove",
                function (event){
                if(event.shiftKey == true)
                    console.log("x: " + event.clientX + " y: " +event.clientY);
                });
    }
);



// document.querySelector("button")
//         .onclick = sayHello;