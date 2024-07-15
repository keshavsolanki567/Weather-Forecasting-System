const userLocation = document.getElementById("userLocation");
let converter = document.getElementById("converter");
weatherIcon = document.querySelector(".weatherIcon");
temperature = document.querySelector(".temperature");
feelsLike = document.querySelector(".feelsLike");
description = document.querySelector(".description");
date = document.querySelector(".date");
city = document.querySelector(".city");

hValue = document.getElementById("hValue");
wValue = document.getElementById("wValue");
srValue = document.getElementById("srValue");
ssValue = document.getElementById("ssValue");
cValue = document.getElementById("cValue");
uvValue = document.getElementById("uvValue");
pValue = document.getElementById("pValue");

forecast = document.querySelector(".forecast");
forecast1 = document.querySelector(".forecast1");
forecast2 = document.querySelector(".forecast2");


WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=a394174b9ecaed3abecd78b3393ae134&q=`;

function ujjainLocation() {
  
   fetch(WEATHER_API_ENDPOINT + "Ujjain")
     .then((response) => response.json())
     .then((data) => {
        if (data.cod != "" && data.cod != 200) {
           alert(data.message);
           return;
     }
     console.log(data);
     city.innerHTML = data.name + ", " + data.sys.country;
     weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
     temperature.innerHTML = TemConverter(data.main.temp);
     feelsLike.innerHTML = "Feels like " +TemConverter(data.main.feels_like); 
     description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp; ` + data.weather[0].description;
     date.innerHTML = window.moment(data.dt * 1000).format('dddd, HH:mm ') ;
     hValue.innerHTML = Math.round(data.main.humidity)+ "<span>%</span>" ;
     wValue.innerHTML = Math.round(data.wind.speed * 3.6) + `<span>Km/h</span>`;
     srValue.innerHTML =  window.moment(data.sys.sunrise * 1000).format('HH:mm ') ;
     ssValue.innerHTML =  window.moment(data.sys.sunset * 1000).format('HH:mm ') ;
     cValue.innerHTML = data.clouds.all + "<span>%</span>" ;
     uvValue.innerHTML = Math.round(data.visibility/1000) ;
     pValue.innerHTML = data.main.pressure+ "<span>hPa</span>" ;

     const apiKey = "SE67EJJFJC4VL6LK4ZHQ9TD7Y";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${"Ujjain"}?unitGroup=us&key=${apiKey}&contentType=json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      forecast.innerHTML = "";
      forecast1.innerHTML = "";
      forecast2.innerHTML = "";
      if (data.days.length > 1) {
        data?.days?.forEach((element,index) => {
          console.log(element);
          if (index !=0 && index <=6){
          const div = document.createElement("div");
          const day = document.createElement("h3");
          day.innerHTML = window
            .moment(element.datetimeEpoch * 1000)
            .format("dddd, DD MMM");

          const icon = document.createElement("img");
          if (element.icon === "partly-cloudy-day") {
            icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
          } else if (element.icon === "cloudy") {
            icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
          } else if (element.icon === "rain") {
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
          } else if (element.icon === "clear-day") {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          } else if (element.icon === "Becoming cloudy in the afternoon.") {
            icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
          } else {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          }

          const descriptionP = document.createElement("i");
          descriptionP.innerHTML = element.icon;

          const tempP = document.createElement("p");
          tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                               '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);

          div.appendChild(day);
          div.appendChild(icon);
          div.appendChild(tempP);
          div.appendChild(descriptionP);
          forecast.append(div);
        }
        else if (index >6 && index <=12){
          const div = document.createElement("div");
          const day = document.createElement("h3");
          day.innerHTML = window
            .moment(element.datetimeEpoch * 1000)
            .format("dddd, DD MMM");

          const icon = document.createElement("img");
          if (element.icon === "partly-cloudy-day") {
            icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
          } else if (element.icon === "cloudy") {
            icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
          } else if (element.icon === "rain") {
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
          } else if (element.icon === "clear-day") {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          } else if (element.icon === "Becoming cloudy in the afternoon.") {
            icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
          } else {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          }

          const descriptionP = document.createElement("i");
          descriptionP.innerHTML = element.icon;

          const tempP = document.createElement("p");
             tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                               '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);

          div.appendChild(day);
          div.appendChild(icon);
          div.appendChild(tempP);
          div.appendChild(descriptionP);
          forecast1.append(div);
        }
        else if (index >12 && index <=14){
          const div = document.createElement("div");
          const day = document.createElement("h3");
          day.innerHTML = window
            .moment(element.datetimeEpoch * 1000)
            .format("dddd, DD MMM");

          const icon = document.createElement("img");
          if (element.icon === "partly-cloudy-day") {
            icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
          } else if (element.icon === "cloudy") {
            icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
          } else if (element.icon === "rain") {
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
          } else if (element.icon === "clear-day") {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          } else if (element.icon === "Becoming cloudy in the afternoon.") {
            icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
          } else {
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
          }

          const descriptionP = document.createElement("i");
          descriptionP.innerHTML = element.icon;

          const tempP = document.createElement("p");
             tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                               '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);

          div.appendChild(day);
          div.appendChild(icon);
          div.appendChild(tempP);
          div.appendChild(descriptionP);
          forecast2.append(div);
        }
        
        });
      }
     });

     
     

  });
}

 function findUserLocation() {
  
    fetch(WEATHER_API_ENDPOINT + userLocation.value)
      .then((response) => response.json())
      .then((data) => {
         if (data.cod != "" && data.cod != 200) {
            alert(data.message);
            return;
      }
      console.log(data);
      city.innerHTML = data.name + ", " + data.sys.country;
      weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
      temperature.innerHTML = TemConverter(data.main.temp);
      feelsLike.innerHTML = "Feels like " +TemConverter(data.main.feels_like); 
      description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp; ` + data.weather[0].description;
      date.innerHTML = window.moment(data.dt * 1000).format('dddd, HH:mm') ;
      hValue.innerHTML = Math.round(data.main.humidity)+ "<span>%</span>" ;
      wValue.innerHTML = Math.round(data.wind.speed) + `<span>Km/h</span>`;
      srValue.innerHTML =  window.moment(data.sys.sunrise * 1000).format('HH:mm ') ;
      ssValue.innerHTML =  window.moment(data.sys.sunset * 1000).format('HH:mm ') ;
      cValue.innerHTML = data.clouds.all + "<span>%</span>" ;
      uvValue.innerHTML = Math.round(data.visibility/1000) ;
      pValue.innerHTML = data.main.pressure+ "<span>hPa</span>" ;
      

   });

   const apiKey = "SE67EJJFJC4VL6LK4ZHQ9TD7Y";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.value}?unitGroup=us&key=${apiKey}&contentType=json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      forecast.innerHTML = "";
      forecast1.innerHTML = "";
      forecast2.innerHTML = "";
      if (data.days.length > 1) {
        data?.days?.forEach((element,index) => {
          console.log(element);
            if (index !=0 && index <=6){
              const div = document.createElement("div");
              const day = document.createElement("h3");
              day.innerHTML = window
                 .moment(element.datetimeEpoch * 1000)
                .format("dddd, DD MMM");

              const icon = document.createElement("img");
              if (element.icon === "partly-cloudy-day") {
                 icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
              } else if (element.icon === "cloudy") {
                 icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
              } else if (element.icon === "rain") {
                 icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
              } else if (element.icon === "clear-day") {
                 icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
              } else if (element.icon === "Becoming cloudy in the afternoon.") {
                 icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
              } else {
                icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
              }

              const descriptionP = document.createElement("i");
              descriptionP.innerHTML = element.icon;

             const tempP = document.createElement("p");
             tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                               '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);

            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(tempP);
            div.appendChild(descriptionP);
            forecast.append(div);  
          }  
          else if (index >6 && index <=12){
            const div = document.createElement("div");
            const day = document.createElement("h3");
            day.innerHTML = window
              .moment(element.datetimeEpoch * 1000)
              .format("dddd, DD MMM");
  
            const icon = document.createElement("img");
            if (element.icon === "partly-cloudy-day") {
              icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            } else if (element.icon === "cloudy") {
              icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
            } else if (element.icon === "rain") {
              icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            } else if (element.icon === "clear-day") {
              icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            } else if (element.icon === "Becoming cloudy in the afternoon.") {
              icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
            } else {
              icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
  
            const descriptionP = document.createElement("i");
            descriptionP.innerHTML = element.icon;
  
            const tempP = document.createElement("p");
             tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                               '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);
  
            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(tempP);
            div.appendChild(descriptionP);
            forecast1.append(div);
          }
          else if (index >12 && index <=14){
            const div = document.createElement("div");
            const day = document.createElement("h3");
            day.innerHTML = window
              .moment(element.datetimeEpoch * 1000)
              .format("dddd, DD MMM");
  
            const icon = document.createElement("img");
            if (element.icon === "partly-cloudy-day") {
              icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            } else if (element.icon === "cloudy") {
              icon.src = "https://openweathermap.org/img/wn/03d@2x.png";
            } else if (element.icon === "rain") {
              icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            } else if (element.icon === "clear-day") {
              icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            } else if (element.icon === "Becoming cloudy in the afternoon.") {
              icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
            } else {
              icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
  
            const descriptionP = document.createElement("i");
            descriptionP.innerHTML = element.icon;
  
            const tempP = document.createElement("p");
            tempP.innerHTML = `<i class="fa-solid fa-arrow-up high"><span>High:</span></i>` + TemConverter1(element.tempmax) + 
                              '<i class="fa-solid fa-arrow-down low"><span>Low:</span></i>' + TemConverter1(element.tempmin);
  
            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(tempP);
            div.appendChild(descriptionP);
            forecast2.append(div);
          }      
       });
      }
     });
     
}






function TemConverter(temp){
   let tempValue=Math.round(temp-273.15);
   let message="";
   if(converter.value=="°C") {
      message = tempValue+"<span>"+"\xB0C</span>";
   }
   else{
      let ctof = (tempValue * 9)/5+32;
      message = ctof + "<span>" + "\xB0F</span>";
   }
   return message;
}

function TemConverter1(temp){
   let tempValue=Math.round(temp);
   let message="";
   if(converter.value=="°C") {
      let ctoc = (tempValue - 32)*5/9;
      message = Math.round(ctoc) + "<span>"+"\xB0C</span>"
      
   }
   else{
      message = tempValue +"<span>"+"\xB0F</span>";
     
   }
   return message;
}

