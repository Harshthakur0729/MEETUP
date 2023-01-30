var voice = {
    // (A) INIT VOICE COMMAND
    wrap: null, // HTML DEMO <DIV> WRAPPER
    btn: null, // HTML DEMO BUTTON
    recog: null, // SPEECH RECOGNITION OBJECT
    init: () => {
        // (A1) GET HTML ELEMENTS
        voice.wrap = document.getElementById("vwrap");
        voice.btn = document.getElementById("vbtn");
        // voice. = document.getElementById("mic-on")
        voice.btn3 = document.getElementById("mic-off")
        // (A2) GET MIC ACCESS PERMISSION
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                // (A3) SPEECH RECOGNITION OBJECT & SETTINGS
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                voice.recog = new SpeechRecognition();
                voice.recog.lang = "en-US";
                // voice.recog.continuous = false;
                // voice.recog.interimResults = false;

                // (A4) ON SPEECH RECOGNITION - RUN CORRESPONDING COMMAND
                voice.recog.onresult = (evt) => {
                    document.getElementById("input01").value =
                        said = evt.results[0][0].transcript.toLowerCase();
                    if (cmd[said]) { cmd[said](); }
                    else { said += " "; }
                    voice.wrap.innerHTML = said;
                    voice.stop();
                };

                // (A5) ON SPEECH RECOGNITION ERROR
                voice.recog.onerror = (err) => { console.error(evt) };

                // (A6) READY!
                voice.btn.disabled = false;
                voice.stop();
            })
            .catch((err) => {
                console.error(err);
                voice.wrap.innerHTML = "Please enable access and attach a microphone.";
            });
    },

    // (B) START SPEECH RECOGNITION
    start: () => {
        voice.recog.start();
        voice.btn.onclick = voice.stop;
        voice.btn.value = "Speak Now Or Click Again To Cancel";
        voice.btn.style.display = "none"
        voice.btn3.style.display = "inherit"
    },


    // (C) STOP/CANCEL SPEECH RECOGNITION
    stop: () => {
        voice.recog.stop();
        voice.btn.onclick = voice.start;
        voice.btn.value = "Press To Speak";
        voice.btn.style.display = "inherit"
        voice.btn3.style.display = "none"
    }
};
window.addEventListener("DOMContentLoaded", voice.init);


// (D) COMMANDS LIST
var cmd = {

    "hello": () => {
        alert("how can i help you");
    },

    "yes": () => {
        document.getElementById("EMAIL").style.display = "none"
    },

    "no": () => {
        document.getElementById("EMAIL").style.display = "inherit"
    }
};

function Insert() {
    var a = document.getElementById('input01').value;
    var b = document.getElementById('input02').value;
if(a=="",b==""){
 
    return false;
}

    var table =` <br><tr>
    <th>${a}</th>
    <br>
    <th>${b}</th>
</tr>`;

document.getElementById('tbl').innerHTML+=table;
clearForm();

}

function clearForm(){
    var a = document.getElementById('input01').value="";
    var b = document.getElementById('input02').value="";
}  


var icon1 = document.querySelector('#icon-01')
var icon2 = document.querySelector('#icon-02')
var sub = document.querySelector('#submitdiv-01')

icon1.addEventListener("click",function(elem){
    icon1.style.display="none";
    icon2.style.display="initial";
    sub.style.display="none"
    sub.style.innerHeight="10%"
})

icon2.addEventListener("click",function(elem){
    icon2.style.display="none";
    icon1.style.display="initial";
    sub.style.display="initial"

})