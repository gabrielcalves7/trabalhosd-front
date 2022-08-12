export async function httpRequest(url:string, data?: any){
  const baseURL = 'http://localhost:8000/';
  console.log("data",data,"url",url);
  if(data){
    return fetch(baseURL+url,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
      .then(response => response.json())
      .catch(err => console.log(err))
      .finally(() => console.log('done!'));
  }
  else{
    return fetch(baseURL+url)
      .then( response => response)
      .catch(err => console.log(err))
  
  }
}


