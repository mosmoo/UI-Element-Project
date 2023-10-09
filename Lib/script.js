const url ="https://api.imgflip.com/get_memes"
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log("success!", response)
        console.log(response.data.memes[1])
        processApiData(response)
    })
    .catch(error => {
        console.error("Something went wrong...", error)
    })
// const btn = document.getElementById('GenerateButton');

// btn.addEventListener("click", handleClick);

// function handleClick(){
//   console.log("clicked!")
// }

function processApiData(apiData){
    console.log('Processing API data:', apiData);
    const arr = apiData.data.memes[1];
    const arr_img_url = arr.url
    const imgDiv = document.getElementById("acc1")
    imgDiv.src = apiData.data.memes[1].url




    // // const img = document.createElement('img')
    // // let img = arr_img_url.url
    // const acc1 = document.getElementById('acc1');
    // acc1.src = arr_img_url.url
    // acc1.innerText = img
}


