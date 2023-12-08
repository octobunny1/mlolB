function calculateAndDisplayTimeDifference() {
    // Replace with your desired date
    const startDate = new Date('2004-12-23T00:00:00Z');
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    function updateResult() {
      const timeDifference = getTimeDifference(startDate);
  
      resultElement.innerHTML = `
      <div  style="font-weight: bold; font-size:40px;"> 
      <p>${timeDifference.seconds} <span style="opacity: 2%;">...</span> : <span style="opacity: 2%;">....</span> Seconds</p>
        <p>${timeDifference.minutes}<span style="opacity: 2%;">........</span> :<span style="opacity: 2%;">.....</span> Minutes</p>
        <p>${timeDifference.hours}<span style="opacity: 2%;">..........</span> : <span style="opacity: 2%;">.....</span>Hours</p>
        <p>${timeDifference.days}<span style="opacity: 2%;">..............</span> :<span style="opacity: 2%;">.....</span> Days</p>
        <p>${timeDifference.weeks}<span style="opacity: 2%;">................</span> : <span style="opacity: 2%;">.....</span>Weeks</p>
        <p>${timeDifference.years} <span style="opacity: 2%;">..................</span>:<span style="opacity: 2%;">.....</span> Years</p>
        </div>
      `;
    }
  
    // Initial calculation
    updateResult();
  
    // Update every second (adjust the interval as needed)
    setInterval(updateResult, 1000);
  }
  
  function getTimeDifference(startDate) {
    const now = new Date();
    const difference = now - startDate;
  
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);
  
    return {
      seconds,
      minutes,
      hours,
      days,
      weeks,
      years
    };
  }

  // Start the real-time updates
  calculateAndDisplayTimeDifference();
  

  ///resultElement.style.display = 'block';
  ////resultElement.style.display = 'none';
