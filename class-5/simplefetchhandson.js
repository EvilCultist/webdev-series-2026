async function getdata(){
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

    let [data1,data2] = await Promise.all([
        fetch(url1),
        fetch(url2)
    ])

    localStorage.setItem("post1", JSON.stringify(data1));
    localStorage.getItem("post1");

    console.log(data1);
    console.log("sepreatpr")
    console.log(data2);

    // .then(response => response.json())
    // .then(data => {
    //     console.log("=data should be after");
    //     console.log(data);
    // })
    // .catch((err) => {
    //     console.log(err);
    //     console.log("came here");
    // })
    // .finally(() => {
    //     console.log("finished");
    // });
    // // console.log(data);

    console.log("=data should be before");
}

getdata();