window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json().then(function(json){

            let container = document.getElementById("container");

            json.sort(function compare(a,b){
                return(b.hoursInSpace- a.hoursInSpace);
            })

            let index = 0

            for(let astronaut of json){
                let activeLine = ""
                // console.log(astronaut)
                index++;
                if(astronaut.active === true){
                    activeLine = `<font color="green"> Active: ${astronaut.active}</font>`
                }else{
                    activeLine = `<font color="red"> Active: ${astronaut.active}</font>`
                }
            
                //test
                container.innerHTML += `<div class="astronaut">
                <div class = "bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>${activeLine}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src = ${astronaut.picture}>
                `;
            }

            })
        });
    });
// });
// TODO: add code here