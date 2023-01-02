function gerarImagem() {
    const STARTING_MINUTES = 1;
    let time = STARTING_MINUTES * 60;
    
    const COUNT_DOWN_EL = document.getElementById('countdown');
  
    setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
  
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      COUNT_DOWN_EL.innerHTML = `${minutes}:${seconds}`;
      time--;
    }

    document.getElementById('bg').style.background="url(https://cdn.pixabay.com/photo/2019/01/03/09/43/bomb-3910551_960_720.png)";   
}

setTimeout(function() { 
    window.location.reload(1);
  }, 60000) 

  
  