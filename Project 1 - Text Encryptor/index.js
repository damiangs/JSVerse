const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

//Encryption function
function encryptText(text, key) {
  let encryptedTex = "";

  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const keyChar = key[i % key.length];

    const textIndex = alphabet.indexOf(textChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (textIndex === -1) {
      encryptText += textChar;
    } else {
      const newIndex = (textIndex + keyIndex) % alphabet.length;
      encryptedTex += alphabet[newIndex];
    }
  }

  return encryptedTex;
}

//Decrypt function
function decryptText(encryptedTex, key) {
  let decryptedText = "";

  for (let i = 0; i < encryptedTex.length; i++) {
    const encryptedChar = encryptedTex[i];
    const keyChar = key[i % key.length];

    const encryptedIndex = alphabet.indexOf(encryptedChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (encryptedTex === -1) {
      decryptedText += encryptedChar;
    } else {
      let newIndex = encryptedIndex - keyIndex;
      if (newIndex < 0) newIndex += alphabet.length;
      decryptedText += alphabet[newIndex];
    }
  }

  return decryptedText;
}

//Update result based on selected operation (enc or dec
function updateResult(isEncrypting) {
  const text = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  let result = "";

  if (isEncrypting) {
    result = encryptText(text, key);
  } else {
    result = decryptText(text, key);
  }

  document.getElementById("result").textContent = result;
}

//Add event listener to buttons
document.getElementById("enc-btn").addEventListener("click", function () {
  updateResult(true);
});

document.getElementById("dec-btn").addEventListener("click", function () {
  updateResult(false);
});

//Initialize  the result with encrypted text when page loads
document.addEventListener("DOMContentLoaded", () => {
  updateResult(true);
});
