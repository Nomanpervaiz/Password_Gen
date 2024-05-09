function randomPassword() {
    let length = document.getElementById("output-length").innerText
    let capAlpha = "AZERTYUIOPMLKJHGFDSQWXCVBN"
    let smallAplha = "azertyuiopqmsldkfjghnwbxvc";
    let symbol = "&é@%£$µ";
    let num = 1234567890;
    let ranPassword = ""
    for (let i = 0; i < length ; i++) {
        let random = Math.floor(Math.random()*capAlpha.length)
        ranPassword += capAlpha[random]
        const checkboxes1 = document.getElementById("checkboxes1");
        if (checkboxes1.checked) {
            capAlpha += smallAplha
        }
        else{
            null
        }
        const checkboxes3 = document.getElementById("checkboxes3");
        if (checkboxes3.checked) {
            capAlpha += num
        }
        else{
            null
        }
        const checkboxes4 = document.getElementById("checkboxes4");
        if (checkboxes4.checked) {
            capAlpha += symbol
        }
        else{
            null
        }
    }
    
    document.getElementById("input-text").value = ranPassword
    
    
}











