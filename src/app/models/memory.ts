export class Memory {
  date : string;
  description: string;
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  speed:      number;
  country:    string;
  sunrise:    number;
  sunset:     number;





  constructor(    temp: number,  feels_like: number,   temp_min:   number, temp_max:   number, pressure:   number,
    humidity:   number,    speed:      number, country:    string,  sunrise:    number,  sunset:     number ,   description: string){
      this.description = description;
      this.date = this.setDate();
      this.temp = temp;
      this.feels_like = feels_like;
      this.temp_min = temp_min;
      this.temp_max = temp_max;
      this.pressure = pressure;
      this.humidity = humidity;
      this.speed = speed;
      this.country = country;
      this.sunrise = sunrise;
      this.sunset = sunset;

  }



  setDate (){

    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const dateObj = new Date();
    const month =months[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date =`${month}-${day}-${year}`;
    return date;
  }

}
