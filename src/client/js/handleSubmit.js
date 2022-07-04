import { verifyURL } from "./verifyURL";
const artUrl = document.getElementById('article-url');
const blogUrl = artUrl.value;
export  {blogUrl}

async function postData(url = '', data = {}) {
    try{
    const info = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(data),
    }); return info;
    } catch (error) {
        console.log(error);
    }
}

async function handleSubmit() {
 const updateData = 'user input'
 if (verifyURL(url)){
    postData('http://localhost:8080/newURL', { url: request})
    .then(data => {
        document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`
        document.getElementById('text').innerHTML = `Text: ${data.sentence_list[0].test}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
    })
 }else{
    alert('Please enter a valid URL.');
 }
}

/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */


 export {handleSubmit};