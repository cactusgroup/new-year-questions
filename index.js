document.addEventListener("DOMContentLoaded", function (event) {
    // get and fill span#year with current year
    const year = Number(new Date().toDateString().split(" ")[3]);
    const years = document.getElementsByClassName("year");
    // loop unrolling; known in advance that there are 2 occurrences
    years[0].innerHTML = "" + year;
    years[1].innerHTML = "" + (year - 1);
    let printPage = document.getElementById("print");
    printPage.addEventListener("click", function (event) {
        window.print();
    });
});
//# sourceMappingURL=index.js.map