
let visitors = [];

function loadData() {

    visitors = [
        {id: "U1", page: "/home"},
        {id: "U2", page: "/products"},
        {id: "U1", page: "/about"},
        {id: "U3", page: "/home"},
        {id: "U4", page: "/products"},
        {id: "U5", page: "/contact"}
    ];

    document.getElementById("total").innerHTML =
        "Total Visitors: " + visitors.length;

    let unique = new Set(visitors.map(v => v.id));

    document.getElementById("unique").innerHTML =
        "Unique Visitors: " + unique.size;

    document.getElementById("pages").innerHTML =
        "Visitor data loaded successfully!";
}

function processData() {

    let mapped = {};

    // Mapper
    visitors.forEach(v => {
        mapped[v.page] = (mapped[v.page] || 0) + 1;
    });

    // Shuffle and Sort
    let grouped = Object.entries(mapped);

    // Reducer
    let result = "";

    grouped.forEach(([page, count]) => {
        result += page + " = " + count + " visits\n";
    });

    document.getElementById("result").innerHTML =
        "MAPREDUCE OUTPUT\n\n" + result;
}
