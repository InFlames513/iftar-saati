let [date, days, months] = [new Date(), ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]];
document.getElementById("date").innerHTML=`${date.getDate()} ${months[date.getMonth()]} ${days[date.getDay()]}`
document.getElementById("day").innerHTML=`(${Math.floor((new Date().getTime() - new Date().setFullYear(2024, 3, 11))/(1000*60*60*24))}. Gün)`
