function appPromises() {
    console.log("============appPromises");
    fetch("http://example.com/api/endpoint")
    .then((response) => {
        console.log("response" + JSON.stringfy(response.body));
    })
    .catch(function (err) {
        console.err("unable to fetch-",
        err);
        })
}