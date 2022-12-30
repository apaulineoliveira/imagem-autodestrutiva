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

    document.getElementById('bg').style.background="url(https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg)";   
}

setTimeout(function() { 
    window.location.reload(1);
  }, 60000) 

  
  