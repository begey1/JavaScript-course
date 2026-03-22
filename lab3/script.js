(function () {

    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }

    }

})();

(function () {

    console.log("=== Additional feature: last letter check ===");

    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        // беремо останню літеру імені
        var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();

        if ("aeiou".includes(lastLetter)) {
            console.log(names[i] + " ends with a vowel");
        } else {
            console.log(names[i] + " ends with a consonant");
        }

    }

})();
