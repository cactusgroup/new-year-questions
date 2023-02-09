document.addEventListener("DOMContentLoaded", function (event) {
    // get and fill span#year with current year
    const year = new Date().toDateString().split(" ")[3];
    const years = document.getElementsByClassName("year");
    for (let i = 0; i < years.length; i++) {
        years[i].innerHTML = year;
    }
    let printPage = document.getElementById("print");
    printPage.addEventListener("click", function (event) {
        console.log("printing");
        window.print();
    });
});
//# sourceMappingURL=index.js.map