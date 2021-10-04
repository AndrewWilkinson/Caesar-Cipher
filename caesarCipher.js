function caesarCipher(text, key) {

    if (text === "")
    return "";

    if (!text instanceof String) {
        return;
    }

    let newText = "";

    let letterShift = key % 26;
    let numberShift = key % 10;

    for (var i = 0; i < text.length; i++) 
    {
        let characterCode = text.charCodeAt(i);

        //ASCII Hardcoded solution // swap numbers for variables if desired

        //lowercase range
        if (characterCode > 96 && 123 > characterCode)
        {
            characterCode += letterShift;

            if (characterCode > 122)
            {
                characterCode = 97 + (characterCode % 123);
            }

            else if (characterCode < 97)
            {
                characterCode = 122 - (96 - characterCode);
            }
        }

        //uppercase range
        else if (characterCode > 64 && 91 > characterCode)
        {
            characterCode += letterShift;

            if (characterCode > 90)
            {
                characterCode = 65 + (characterCode % 91);
            }

            else if (characterCode < 65)
            {
                characterCode = 90 - (64 - characterCode);
            }
        }

        //numbers range
        else if (characterCode > 47 && 58 > characterCode)
        {
            characterCode += numberShift;

            if (characterCode > 57)
            {
                characterCode = 48 + (characterCode % 58);
            }

            else if (characterCode < 48)
            {
                characterCode = 57 - (47 - characterCode);
            }
        }

        newText += String.fromCharCode(characterCode);
    }

    return newText;

}

function rollingCaesarCipher(text, minRoll, maxRoll) {

    if (text === "")
    return "";

    if (!text instanceof String) {
        return;
    }
    let newText = "";

    for (var i = 0, roll = 0; i < text.length; i++, roll++) 
    {
        newText += caesarCipher(text[i], minRoll+roll);
        if (roll > maxRoll) {roll = 0};
    }

    return newText;
}

function DecodeRollingCaesarCipher(text, minRoll, maxRoll) {

    if (text === "")
    return "";
    
    if (!text instanceof String) {
        return;
    }
    let newText = "";

    for (var i = 0, roll = 0; i < text.length; i++, roll--) 
    {
        newText += caesarCipher(text[i], minRoll+roll);
        if (roll < maxRoll) {roll = 0};
    }

    return newText;
}

//TODO something clever about numbers

// export { caesarCipher,  rollingCaesarCipher }