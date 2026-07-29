const app = document.getElementById("app");


document.getElementById("startBtn").onclick = function(){

    app.innerHTML = `

    <h1>
    🔍 Scanning Suspect...
    </h1>


    <div class="progress-container">

        <div id="progress"></div>

    </div>


    <h2 id="percent">
    0%
    </h2>


    <p id="status">
    Initializing system...
    </p>

    `;


    startScanning();

};




function startScanning(){

    let progress = 0;


    let interval = setInterval(function(){


        progress += 25;


        document.getElementById("progress").style.width =
        progress + "%";


        document.getElementById("percent").innerHTML =
        progress + "%";



        if(progress === 25){

            document.getElementById("status").innerHTML =
            "Scanning identity...";

        }


        if(progress === 50){

            document.getElementById("status").innerHTML =
            "Checking relationship records...";

        }


        if(progress === 75){

            document.getElementById("status").innerHTML =
            "Analyzing Spider-Man distraction... 🕷";

        }



        if(progress === 100){


            clearInterval(interval);


            setTimeout(function(){


                app.innerHTML = `


                <h1>
                ✅ Suspect Identified
                </h1>


                <h2>
                Ryan Robert Watt ❤️
                </h2>


                <p>
                Mission target confirmed.
                </p>


                <button onclick="questionOne()">
                Continue ➡️
                </button>


                `;


            },1000);


        }



    },1000);

}




function questionOne(){

    app.innerHTML = `


    <h1>
    QUESTION 1/5
    </h1>


    <h2>
    Who should always come first?
    </h2>


    <button onclick="wrongSpider()">
    🕷 Spider-Man
    </button>


    <br><br>


    <button onclick="correctDorry()">
    ❤️ Dorry
    </button>


    `;

}




function wrongSpider(){

    app.innerHTML = `


    <h1>
    ❌ Wrong Answer
    </h1>


    <p>

    Hint:
    <br><br>

    The correct answer is NOT wearing a red suit. 😌

    </p>


    <button onclick="questionOne()">
    Try Again 🔄
    </button>


    `;

}




function correctDorry(){

    app.innerHTML = `

    <h1>
    ✅ Correct!
    </h1>


    <p>

    Good choice.

    <br><br>

    Your survival chances have increased. ❤️

    </p>


    <button onclick="questionTwo()">
    Continue ➡️
    </button>


    `;

}




function questionTwo(){

    app.innerHTML = `

    <h1>
    QUESTION 2/5
    </h1>


    <h2>
    Why didn't you call Dorry first?
    </h2>


    <button onclick="correctCall()">
    🕷 Spider-Man needed my attention
    </button>


    <br><br>


    <button onclick="wrongCall()">
    😴 I forgot
    </button>


    <br><br>


    <button onclick="wrongCall()">
    🤷 I thought it wasn't important
    </button>


    <br><br>


    <button onclick="wrongCall()">
    ❤️ I have no excuse
    </button>


    `;

}




function wrongCall(){

    app.innerHTML = `

    <h1>
    ❌ Hmm... Nice Try
    </h1>


    <p>

    The evidence says something else. 🤨

    </p>


    <button onclick="questionTwo()">
    Try Again 🔄
    </button>


    `;

}




function correctCall(){

    app.innerHTML = `

    <h1>
    ✅ Evidence Confirmed
    </h1>


    <p>

    Spider-Man was involved again. 🕷

    <br><br>

    Dorry has every right to investigate. 😌

    </p>


    <button onclick="questionThree()">
    Continue ➡️
    </button>


    `;

}




function questionThree(){

    app.innerHTML = `


    <h1>
    QUESTION 3/5
    </h1>


    <h2>
    One missed call equals...
    </h2>


    <button onclick="wrongMiss()">
    Nothing happened
    </button>


    <br><br>


    <button onclick="wrongMiss()">
    One apology
    </button>


    <br><br>


    <button onclick="wrongMiss()">
    One coffee
    </button>


    <br><br>


    <button onclick="correctMiss()">
    All of the above ❤️
    </button>


    `;

}




function wrongMiss(){

    app.innerHTML = `


    <h1>
    ❌ Incorrect
    </h1>


    <p>

    A missed call is never "nothing". 😌

    <br><br>

    Please review the evidence.

    </p>


    <button onclick="questionThree()">
    Try Again 🔄
    </button>


    `;

}




function correctMiss(){

    app.innerHTML = `


    <h1>
    ✅ Correct!
    </h1>


    <p>

    Case updated:

    <br><br>

    ☕ Coffee reward added

    <br>

    ❤️ Love points added

    <br>

    📝 Apology accepted

    </p>


    <button onclick="questionFour()">
    Continue ➡️
    </button>


    `;

}

function questionFour(){

    app.innerHTML = `


    <h1>
    QUESTION 4/5
    </h1>


    <h2>
    Who is the cutest?
    </h2>


    <button onclick="wrongCute()">
    🕷 Spider-Man
    </button>


    <br><br>


    <button onclick="correctCute()">
    ❤️ Dorry
    </button>


    `;

}




function wrongCute(){

    app.innerHTML = `


    <h1>
    ⚠️ SYSTEM ERROR
    </h1>


    <p>

    Unexpected answer detected.

    <br><br>

    Please reconsider your life choices. 🤨

    </p>


    <button onclick="questionFour()">
    Try Again 🔄
    </button>


    `;

}




function correctCute(){

    app.innerHTML = `


    <h1>
    ✅ Correct!
    </h1>


    <p>

    Excellent decision.

    <br><br>

    Your forgiveness score increased ❤️

    </p>


    <button onclick="finalQuestion()">
    Continue ➡️
    </button>


    `;

}

function finalQuestion(){

    app.innerHTML = `


    <h1>
    FINAL QUESTION ❤️
    </h1>


    <h2>
    Can Dorry forgive you?
    </h2>


    <button id="yesBtn">
    ❤️ YES
    </button>


    <br><br>


    <button id="noBtn">
    🤍 NO
    </button>


    `;



    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");


    let count = 0;



    yesBtn.addEventListener("mouseover", function(){


        count++;


        if(count < 4){


            yesBtn.style.position = "absolute";


            yesBtn.style.left =
            Math.random() * 300 + "px";


            yesBtn.style.top =
            Math.random() * 300 + "px";


            if(count === 1){

                yesBtn.innerHTML =
                "Are you sure? 😌";

            }


            if(count === 2){

                yesBtn.innerHTML =
                "Too easy? Try again 🤭";

            }


            if(count === 3){

                yesBtn.innerHTML =
                "Dorry is still thinking... 🤔";

            }



        } else {


            yesBtn.style.position = "static";


            yesBtn.innerHTML =
            "❤️ YES";


            yesBtn.onclick = missionPassed;


        }


    });



    noBtn.addEventListener("mouseover", function(){


        noBtn.style.position = "absolute";


        noBtn.style.left =
        Math.random() * 300 + "px";


        noBtn.style.top =
        Math.random() * 300 + "px";


        noBtn.innerHTML =
        "Wrong choice 🤭";


    });


}



function missionPassed(){

    app.innerHTML = `


    <h1>
    📜 Forgiveness Agreement
    </h1>


    <div class="agreement">


    <p>

    I, <b>Ryan Robert Watt</b>, hereby admit that choosing Spider-Man over calling Dorry was a very questionable life decision.

    <br><br>


    I sincerely apologize for making Dorry wait.

    <br><br>


    I promise to:

    <br><br>

    ✅ Answer Dorry's calls whenever possible.

    <br>

    ✅ Never underestimate Dorry's importance.

    <br>

    ✅ Make it up to her with extra love, attention, and quality time.

    <br><br>


    And finally...

    <br><br>

    I fully understand that the punishment will be decided by Dorry, and I agree to accept it without negotiation.

    </p>


    </div>


    <br>


    <button id="thinkBtn">
    🤍 Let me think...
    </button>


    <br><br>


    <button onclick="agreementAccepted()">
    ❤️ I Agree
    </button>


    `;



    let thinkBtn = document.getElementById("thinkBtn");



    thinkBtn.addEventListener("mouseover", function(){


        thinkBtn.style.position = "absolute";


        thinkBtn.style.left =
        Math.random() * 300 + "px";


        thinkBtn.style.top =
        Math.random() * 300 + "px";


        thinkBtn.innerHTML =
        "Nice try 😌";


    });


}

function agreementAccepted(){

    app.innerHTML = `


    <h1>
    ✅ AGREEMENT ACCEPTED
    </h1>


    <p>

    Your apology has been officially recorded.

    ❤️

    </p>


    <button onclick="finalEnding()">
    Continue ➡️
    </button>


    `;

}

function finalEnding(){

    app.innerHTML = `

    <div class="ending">


    <h1>
    Punishment Status...
    </h1>


    <h2 id="loadingText">
    Loading...
    </h2>


    </div>

    `;


    let loading = document.getElementById("loadingText");


    setTimeout(function(){

        loading.innerHTML = "Loading...";

    },1500);



    setTimeout(function(){

        loading.innerHTML = "Loading...";

    },3000);



    setTimeout(function(){


        app.innerHTML = `


        <h1>
        ❤️
        </h1>


        <h2>
        Decision:
        </h2>


        <h1>
        It's up to Dorry. 😌
        </h1>


        <br>


        <p>

        P.S.

        <br><br>

        Maybe next time...

        <br><br>

        <b>
        Call Dorry before Spider-Man. 🕷❤️
        </b>

        </p>


        `;


    },4500);


}
