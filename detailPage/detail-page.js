// console.log("this")
function stockDetail (symbol){
    var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&interval=5min&apikey=JVR6EZUWEONV8MGY" 
    
    // console.log(APIKey);
    
     $.ajax({
        url: queryURL,
        dataType: 'json',
        contentType: 'application/json',
        method: "GET"
        })
     .then(res => {
         console.log(res)
         let symbol = res['Meta Data']['2. Symbol']
         let open = res['Time Series (Daily)']['2019-08-09']['1. open']
         let high = res['Time Series (Daily)']['2019-08-09']['2. high']
         let low = res['Time Series (Daily)']['2019-08-09']['3. low']
         let close = res['Time Series (Daily)']['2019-08-09']['4. close']
         let volume = res['Time Series (Daily)']['2019-08-09']['5. volume']
    
    
    
          // 1. open: 
          // 2. high: 
          // 3. low: 
          // 4. close: 
          // 5. volume
    
        console.log(symbol)
        console.log(open)
        console.log(high)
        console.log(low)
        console.log(close)
        console.log(volume)
    
       $(".api-res").empty();
        $('.api-res').html(`Symbol: ${symbol} <br> Open: ${open} <br> High: ${high} <br> Low: ${low} <br> Close: ${close} <br> Volume: ${volume}`)
           
     })
    }  
    
    //starts - closest match to symbol by typing company name. 
    
     var compName = "nike";
    
     var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + compName + "&apikey=JVR6EZUWEONV8MGY" 
    
     $.ajax({
       url: queryURL,
       dataType: 'json',
       contentType: 'application/json',
       method: "GET"
       })
    .then(res => {
        console.log(res)
     
    })
    
    // ends  - closest match to symbol by typing company name. 
    
    // starts - autocomplete search bar with company name and symbol 
    const seach = document.getElementById('search');
    const matchList = document.getElementById('match-list');
    
    //Search names.json and filter it
    const searchName = async searchText => {
      const res = await fetch('./list.json');
      const Name = await res.json();
    
      //get matches to current text input
      let matches = Name.filter(Name => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return Name.Name.match(regex) || Name.Symbol.match(regex);
      });
    
      if(searchText.length === 0) {
        matches = []
        matchList.innerHTML = '';
      }
        outputHtml(matches);
    };
    
    //Show results in HTML
    const outputHtml = matches => {
      if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1" data-symbol="${match.Symbol}">
          <h4>${match.Symbol} - ${match.Name} </h4>
          <h5><span class="text-primary">${match.Sector}</span></h5>
        </div>`
        )
        .join('');
        
        matchList.innerHTML = html;
    
      }
    };
    
    
    search.addEventListener('input', () => searchName (search.value));
    
    $(document).on('click', '.card', function(e) {
      var symbol = $(this).attr('data-symbol');
      console.log('symbol', symbol);
      // Clear all previous UI containers for chart/data
    
      stockDetail(symbol);
      stockChart(symbol);
      
    
      // Replace chart with new chart with the clicked symbol
        // Create new chart and store in variable
        // use jquery to append to div container for chart
      // Replace the api data for the symbol
        // Make API call
          // .then()
            // Update UI layout with new data using jquery
    });
    
    
    // ends  - autocomplete search bar with company name and symbol