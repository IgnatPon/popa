let putData = async (url, obj) => { 
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    return res.json();
}


document.addEventListener("keydown", async (e)=>{
    if(e.keyCode == 13){
        let norm = await putData('/api/password',{pas: document.querySelector('input').value})
        if(norm.ok){
            alert(norm.value)
        }
    }
})