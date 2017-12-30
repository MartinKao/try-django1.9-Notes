function ChangeDiscriptionFontSize() {
    var discriptions = document.getElementsByClassName("discription");
    string_length = discriptions[0].innerHTML.length;

    if (string_length > 6 && string_length < 100) {
        document.getElementsByClassName("discription")[0].innerHTML = '<font size = 40px>' + discriptions[0].innerHTML + '</font>'
    }
}