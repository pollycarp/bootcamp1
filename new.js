async function appPromises() {
    console.log("============appPromises");
    try {
   var response = await fetch("http://example.com/api/endpoint");
   
        console.log("response" + JSON.stringfy(response.body));
 
}catch (err) {
        console.error("unable to fetch-",
        err);
        }
    }