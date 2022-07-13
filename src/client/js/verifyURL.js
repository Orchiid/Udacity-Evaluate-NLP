    function verifyURL(url) {
      const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(url);
    }

    // const getUrl = document.getElementById('article-url').value

  //   const verifyURL = (getUrl) => {
  //     try { 
  //     	return Boolean(new URL(getUrl.value)); 
        
  //     }
  //     catch(e){ 
  //       alert('Please enter a valid URL');
  //     	return false; 
         
  //     }
     
      
  // }
// console.log(verifyURL.value);
export default verifyURL ;