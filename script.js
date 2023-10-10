// API Importation
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

function processApiData(apiData){
    console.log('Processing API data:', apiData);

    //Adds images in each accordian
    const imgDiv = document.getElementById("acc1")
    imgDiv.src = apiData.data.memes[4].url

    const imgDiv1 = document.getElementById("acc2")
    imgDiv1.src = apiData.data.memes[1].url
    
    const imgDiv2 = document.getElementById("acc3")
    imgDiv2.src = apiData.data.memes[2].url

    const imgDiv3 = document.getElementById("acc4")
    imgDiv3.src = apiData.data.memes[3].url
    
    //Adds Accordian Titles
    const acc_title1 = document.getElementById('title')
    let acc_title_data1 = apiData.data.memes[4];
    acc_title1.innerText=acc_title_data1.name

    const acc_title2 = document.getElementById('title1')
    let acc_title_data2 = apiData.data.memes[1];
    acc_title2.innerText=acc_title_data2.name

    const acc_title3 = document.getElementById('title2')
    let acc_title_data3 = apiData.data.memes[2];
    acc_title3.innerText=acc_title_data3.name

    const acc_title4 = document.getElementById('title3')
    let acc_title_data4 = apiData.data.memes[3];
    acc_title4.innerText=acc_title_data4.name

    //Adds a button to generate random meme
    const btn = document.getElementById('random')
    btn.addEventListener("click", handleClick)
    function handleClick(){
        const RandomIndex= Math.floor(Math.random()*100)
        console.log(RandomIndex)
        console.log(apiData.data.memes[RandomIndex])
        const imgDiv5 = document.getElementById("acc5")
        imgDiv5.src = apiData.data.memes[RandomIndex].url

    }
}


