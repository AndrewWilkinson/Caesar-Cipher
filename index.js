// import { caesarCipher, rollingCaesarCipher , DecodeRollingCaesarCipher } from "./caesarCipher.js";


//TODO live update opposite text box

function simpleEncrypt(shift)
{
    document.getElementById("encoded").value = caesarCipher(document.getElementById("decoded").value, shift);
}

function simpleDecrypt(shift)
{
    document.getElementById("decoded").value = caesarCipher(document.getElementById("encoded").value, -shift);
}

function useRollingEncrypt(minShift , maxShift, rollProgression)
{
    document.getElementById("encoded").value = rollingCaesarCipher(document.getElementById("decoded").value, minShift, maxShift, rollProgression)
}

function useRollingDecrypt(minShift , maxShift, rollProgression)
{
    document.getElementById("decoded").value = DecodeRollingCaesarCipher(document.getElementById("encoded").value, -minShift, -maxShift, rollProgression)
}

//Something is very wrong... I think.