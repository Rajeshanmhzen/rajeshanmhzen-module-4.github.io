
(function (window) {
    var helloSpeaker = {};
    helloSpeaker.speakWord = "Good Bye";

    helloSpeaker.speak = function (name) {
        console.log(helloSpeaker.speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);