<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
<script>
    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }
</script>
<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxFqnUV4KoVWjasXenIOT1CwsJvGA0yo3VVKahACVE71kqmS4k0KwJ1sKqybqAvxfm9SQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg= document.getElementById("msg");
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Heyy! Message Sent."
            setTimeout(function(){
                msg.innerHTML=""
            },1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  </script>
  