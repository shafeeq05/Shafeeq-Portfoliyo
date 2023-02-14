function sendMail(e){
    event.preventDefault();
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('msg').value)
    console.log(document.getElementById('subject').value)
    let loading=document.querySelector('.loading');
    loading.style.visibility='visible'
    var params={
        
            to_name:document.getElementById('name').value,
            from_name: document.getElementById('email').value,
            message: document.getElementById('msg').value,
            subject:document.getElementById('subject').value
            
            
    }
    emailjs.send("service_x7rv87m","template_isrutzm",params).then(function(res){
        alert("sucsess"+res.status)
        document.querySelector('.sent-message').style.visibility='visible'
        loading.style.visibility='hidden'
        console.log(res.status);
        
    })
    if(removeEventListener.status==200){
        loading.style.visibility='hidden'
    }else{
        console.log("error");
    // document.querySelector('.error-message').style.visibility='visible'
    }
}