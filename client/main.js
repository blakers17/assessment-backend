const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById("getFortuneButton")
const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}
function submitHandler(event) {
    
    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value
    }
    createmMotive(bodyObj)

    title.value = ""
    imageURL.value = ""
}

complimentBtn.addEventListener('click', getCompliment)
getFortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)