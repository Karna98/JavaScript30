function synthesisSpeech() {
    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector("#speak");
    const stopButton = document.querySelector("#stop");
    const speaks = [
        {
            name: "Alex",
            lang: "en-US",
        },
        {
            name: "Alice",
            lang: "it-IT",
        },
        {
            name: "Alva",
            lang: "sv-SE",
        },
        {
            name: "Amelie",
            lang: "fr-CA",
        },
        {
            name: "Anna",
            lang: "de-DE",
        },
        {
            name: "Carmit",
            lang: "he-IL",
        },
        {
            name: "Damayanti",
            lang: "id-ID",
        },
        {
            name: "Daniel",
            lang: "en-GB",
        },
        {
            name: "Diego",
            lang: "es-AR",
        },
        {
            name: "Ellen",
            lang: "nl-BE",
        },
        {
            name: "Fiona",
            lang: "en",
        },
        {
            name: "Fred",
            lang: "en-US",
        },
        {
            name: "Ioana",
            lang: "ro-RO",
        },
        {
            name: "Joana",
            lang: "pt-PT",
        },
        {
            name: "Jorge",
            lang: "es-ES",
        },
        {
            name: "Juan",
            lang: "es-MX",
        },
        {
            name: "Kanya",
            lang: "th-TH",
        },
        {
            name: "Karen",
            lang: "en-AU",
        },
        {
            name: "Kyoko",
            lang: "ja-JP",
        },
        {
            name: "Laura",
            lang: "sk-SK",
        },
        {
            name: "Lekha",
            lang: "hi-IN",
        },
        {
            name: "Luca",
            lang: "it-IT",
        },
        {
            name: "Luciana",
            lang: "pt-BR",
        },
        {
            name: "Maged",
            lang: "ar-SA",
        },
        {
            name: "Mariska",
            lang: "hu-HU",
        },
        {
            name: "Mei-Jia",
            lang: "zh-TW",
        },
        {
            name: "Melina",
            lang: "el-GR",
        },
        {
            name: "Milena",
            lang: "ru-RU",
        },
        {
            name: "Moira",
            lang: "en-IE",
        },
        {
            name: "Monica",
            lang: "es-ES",
        },
        {
            name: "Nora",
            lang: "nb-NO",
        },
        {
            name: "Paulina",
            lang: "es-MX",
        },
        {
            name: "Samantha",
            lang: "en-US",
        },
        {
            name: "Sara",
            lang: "da-DK",
        },
        {
            name: "Satu",
            lang: "fi-FI",
        },
        {
            name: "Sin-ji",
            lang: "zh-HK",
        },
        {
            name: "Tessa",
            lang: "en-ZA",
        },
        {
            name: "Thomas",
            lang: "fr-FR",
        },
        {
            name: "Ting-Ting",
            lang: "zh-CN",
        },
        {
            name: "Veena",
            lang: "en-IN",
        },
        {
            name: "Victoria",
            lang: "en-US",
        },
        {
            name: "Xander",
            lang: "nl-NL",
        },
        {
            name: "Yelda",
            lang: "tr-TR",
        },
        {
            name: "Yuna",
            lang: "ko-KR",
        },
        {
            name: "Yuri",
            lang: "ru-RU",
        },
        {
            name: "Zosia",
            lang: "pl-PL",
        },
        {
            name: "Zuzana",
            lang: "cs-CZ",
        },
    ];

    msg.text = document.querySelector('[name="text"]').value;

    function populateVoices() {
        voicesDropdown.innerHTML = speaks.map(
            (voice) =>
                `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        );
    }
    function setVoice() {
        const speakFound = speaks.find((voice) => {
            return voice.name === this.value;
        });
        msg.name = speakFound.name;
        msg.lang = speakFound.lang;
        toggle();
    }

    function toggle(startOver = true) {
        speechSynthesis.cancel();
        if (startOver) {
            speechSynthesis.speak(msg);
        }
    }

    function setOption() {
        msg[this.name] = this.value;
        toggle();
    }
    speechSynthesis.addEventListener("voiceschanged", populateVoices);
    voicesDropdown.addEventListener("change", setVoice);
    options.forEach((option) => option.addEventListener("change", setOption));
    speakButton.addEventListener("click", toggle);
    stopButton.addEventListener("click", () => toggle(false));
}
window.addEventListener("DOMContentLoaded", synthesisSpeech);
