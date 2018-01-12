function ChangeDiscriptionFontSize() {
    var discriptions = document.getElementsByClassName("discription");
    string_length = discriptions[0].innerHTML.length;

    if (string_length > 6 && string_length < 50) {
        document.getElementsByClassName("discription")[0].innerHTML = '<span style="font-size:40px;">' + discriptions[0].innerHTML + '</span>'
    }else if(string_length >= 50) {
        document.getElementsByClassName("discription")[0].innerHTML = '<span style="font-size:30px;">' + discriptions[0].innerHTML + '</span>'
    }
}