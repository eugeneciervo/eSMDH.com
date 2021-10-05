function searchResults() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("userSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("services");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        
        if (txtValue.toLocaleUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}