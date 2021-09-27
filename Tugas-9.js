let myObj = {
    Carname : ['Avanza','Xenia','Alphard'],
    MotoCyclename : ['Lexi','Scoopy','NMAX']
}

for (const key in myObj) {

    console.log(myObj[key][0]);
}