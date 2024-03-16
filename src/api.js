fetch("https://api.collectapi.com/pray/all?data.city=istanbul", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "authorization": "apikey apikey 09XKKhxtV2zfvxpURYUffh:6JFN8lX9uK0iVV64baZdSk"
  }
}).then(x => x.json()).then(d => {
  // console.log(d)
  document.getElementById("sahuri").innerHTML = d.result[0].saat
  document.getElementById("iftari").innerHTML = d.result[4].saat
  let kalan = hourandminute(d.result[4].saat)
  document.getElementById("kalani").innerHTML = kalan.join(":");
})

/*
fetch("https://api.collectapi.com/pray/all?data.city=nigde", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "authorization": "apikey apikey 09XKKhxtV2zfvxpURYUffh:6JFN8lX9uK0iVV64baZdSk"
  }
}).then(x => x.json()).then(d => {
  document.getElementById("sahurn").innerHTML = d.result[0].saat
  document.getElementById("iftarn").innerHTML = d.result[4].saat
  let kalan = hourandminute(d.result[4].saat)
  document.getElementById("kalann").innerHTML = kalan.join(":");
}) */

function hourandminute(hours) {
  let date = new Date()
  let [hour, min] = hours.split(":").map(x => parseInt(x))
  date.setHours(hour)
  date.setMinutes(min)
  let ms = (date.getTime() - new Date().getTime())
  let saat = String(Math.floor(ms/(1000*60*60)))
  let dakika = String(Math.floor(((ms-saat*1000*60*60))/(1000*60)))
  parseInt(saat) < 0 ? [saat, dakika] = ["00", "00"] : {}
  dakika.length == 1 ? dakika = "0"+dakika : {}
  return [saat, dakika]
}
