
function myMap() {
    let mapCanvas = document.querySelector(".mapFooter");
    var myCenter = new google.maps.LatLng(50.6239671, 26.2443874);
    var mapOptions = { center: myCenter, zoom: 18 };

    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}

let aboutCompanyP = document.querySelectorAll('.aboutCompany_chooseInfo');
let aboutCompany_text = document.querySelector('.aboutCompany_text');
let aboutCompany_textP = document.querySelector('.aboutCompany_text p');

for (let i = 0; i < aboutCompanyP.length; i++) {

    aboutCompanyP[i].addEventListener('click', () => {
        for (let a = 0; a < aboutCompanyP.length; a++) {
            aboutCompanyP[a].style.display = 'none';
        }
        aboutCompany_text.style.display = 'block';
        // aboutCompany_text.style.animation = "about_animation 2s 1";
        switch (i) {
            case 0:
                document.querySelector('.aboutCompany_chooseInfo:nth-child(1)').style.display = 'block';
                aboutCompany_textP.innerHTML = 'Компанія «Elite Cars» працює на ринку 2 роки.  Ми є офіційними представниками аукціонів  Сopart  IAAI  Manheim  Auto1.com Також, ми маємо особистий логістичний офіс  в США та Литві, що спрощує доставку автомобілів наших клієнтів. Наша компанія надає послугу Авто Під Ключ, тепер вам не потрібно турбуватись про ремонт автомобіля який ви замовили, Ми самостійно відремонтуємо ваш автомобіль на нашій станції технічного обслуговування і доставимо його в будь-яку точку України.';
                break;
            case 1:
                document.querySelector('.aboutCompany_chooseInfo:nth-child(2)').style.display = 'block';
                aboutCompany_textP.innerHTML = 'Тому що, ми забезпечуємо якісний та надійний сервіс за розумною ціною. Наша компанія намагається почути та задовільнити побажання всіх, без винятку ,клієнтів!\n«Elite Cars» знає, як підібрати хороший та надійний автомобіль за оптимальну вартість!\nМи працюємо для Вас!';
                //document.querySelector('.aboutCompany_chooseInfo:nth-child(2)').style.animation = "about_animation1 2.5s ease 1";
                break;
            case 2:
                document.querySelector('.aboutCompany_chooseInfo:nth-child(3)').style.display = 'block';
                //document.querySelector('.aboutCompany_chooseInfo:nth-child(3)').style.animation = "about_animation2 2.1s ease 1";
                aboutCompany_textP.innerHTML = '1. Наша компанія є офіційними представниками аукціонів  Сopart  IAAI  Manheim  Auto1.com. 2.  Особисті логістичні центри в США та Литві.  3.Перед наданням будь яких послуг, ми обов’язково укладаємо договір з клієнтом. 4. Підбір найкращих авто та їх викуп на закритих аукціонах. 5. Власна доставка автомобілів з Європи та США. 4. Ми надаємо брокерські послуги по розмитненню автомобіля за вигідною ціною.';
                break;
            case 3:
                document.querySelector('.aboutCompany_chooseInfo:nth-child(4)').style.display = 'block';
                //document.querySelector('.aboutCompany_chooseInfo:nth-child(4)').style.animation = "about_animation3 1.7s ease 1";
                aboutCompany_textP.innerHTML = 'Тому, що нам надають достовірну інформацію про автомобіль.\n Ми знаємо справжній розмір пробігу та недоліки даного авто. \nНаша компанія ніколи не приховує правду від клієнта!\nЗавдяки аукціонам Ви маєте можливість зекономити  до 40% свого бюджету.\n';
                break;
            case 4:
                document.querySelector('.aboutCompany_chooseInfo:nth-child(5)').style.display = 'block';
                //document.querySelector('.aboutCompany_chooseInfo:nth-child(5)').style.animation = "about_animation4 1.3s ease 1";
                aboutCompany_textP.innerHTML = 'Американські автомобілі, часто, мають більш багату комплектацію. 99% автомобілів оснащуються коробкою автомат і мають клімат-контроль. Також в Америці дуже люблять автомобілі сімейного типу - позашляховики і мінівени. У США не роблять “порожні” автомобілі, як це люблять автовиробники Toyota і VAG. Суворе законодавство США передбачає кримінальну відповідальність за “відмотку” пробігу на автомобілях. Також ряд великих організацій, таких, як наприклад Carfax, ведуть облік історії кожного окремого автомобіля на предмет участі в ДТП. Таким чином часто авто з США має більш прозору історію, ніж аналогічне на вторинному ринку в Україні. Дизайн американських автомобілів часто заслуговує на увагу. Навіть європейські виробники пропонують більш “наворочені”, в плані дизайну, автомобілі спеціально для ринку США. Також багато моделей виробляються виключно для ринку США, тому, якщо ми приганяємо авто в Україну, у вас буде можливість купити унікальну комплектацію або модель, недоступну на ринку України, а також зекономити до 40% на покупці авто.';
                break;

        }
        aboutCompany_text.addEventListener('click', () => {
            for (let a = 0; a < aboutCompanyP.length; a++) {
                aboutCompanyP[a].style.display = 'block';
            }
            aboutCompany_text.style.display = 'none';
        })
    })
}

let sale = document.querySelector('.sale span');
let priice = document.querySelector('.priice span');
let saleT = 12;
let priceT = 0;
document.addEventListener('DOMContentLoaded', () => {
    setInterval(tick, 50);
});

function tick() {
    if (saleT < 624) {
        saleT += 12;
        sale.innerHTML = saleT;
    }
    if (priceT < 8000) {
        priceT += 200;
        priice.innerHTML = priceT + '$';
    }

}

document.addEventListener('DOMContentLoaded', () => {

let imgCars = [];

let indexLeft = 5;
let indexRight = 7;
let index = 6;

for (let i = 0; i < 14; i++) {
    imgCars[i] = src = "img/imgCars/" + [i+1] + ".jpg";
}

document.querySelector('.car_1').src = imgCars[5];
document.querySelector('.car_2').src = imgCars[6];
document.querySelector('.car_3').src = imgCars[7];

document.querySelector('.cars_arrow_left').addEventListener('click', () => {
    index--;
    indexLeft--;
    indexRight--;

    if (indexLeft <= 0) { indexLeft = imgCars.length - 1 }
    else { document.querySelector('.car_1').src = imgCars[indexLeft]; }

    if (index <= 0) { index = imgCars.length - 1 }
    else { document.querySelector('.car_2').src = imgCars[index]; }

    if (indexRight <= 0) { indexRight = imgCars.length - 1 }
    else { document.querySelector('.car_3').src = imgCars[indexRight]; }

});

document.querySelector('.cars_arrow_right').addEventListener('click', () => {
    index++;
    indexLeft++;
    indexRight++;

    if (indexLeft == imgCars.length) { indexLeft = 0; }
    document.querySelector('.car_1').src = imgCars[indexLeft];

    if (index == imgCars.length) { index = 0; }
    document.querySelector('.car_2').src = imgCars[index];

    if (indexRight == imgCars.length) { indexRight = 0; }
    document.querySelector('.car_3').src = imgCars[indexRight];
})
})

// let slider = document.querySelector('#myRange');
// let output = document.querySelector('#price');
// output.value = slider.value + "$";
// slider.oninput = function () {
//     output.value = this.value;
// }

document.querySelector('#btnForm').addEventListener('click', () => {
    let state = {
        marka: document.querySelector('#marka').value,
        model: document.querySelector('#model').value,
        year: document.querySelector('#year').value,
        engine: document.querySelector('#engine').value,
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        // price: document.querySelector('#price').value
    }
    //console.log(state);
    let inp = document.querySelectorAll('.Inp')
    let k = 0;
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == '') k++;//replace(/^\s+|\s+$/g, '')
    }
    // if (slider.value == 52500) {
    //     k++;
    // }
    if (k != 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Заповніть всі поля'
          })
    }
    else {
        grecaptcha.ready(function () {
            grecaptcha.execute('6LdpbekUAAAAAIvfLMPCLcwMtrLsVhTSiXhuJ6yg', { action: 'homepage' })
                .then(function (token) {
                    console.log(token);
                    async function postData(url = 'https://elite-cars-2051a.firebaseio.com/List.json', state) {
                        const response = await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(state)
                        });
                        return await response.json();
                    }
                    postData('https://elite-cars-2051a.firebaseio.com/List.json', { state })
                        .then((state) => {
                            console.log(state);
                            
                        });
                              Swal.fire({
                                title: 'Дякуємо за заявку!',
                                icon: 'success',
                                confirmButtonColor: '#ff0000',
                                confirmButtonText: 'Закрити',
                              })

                });
        });

    }

})

document.querySelector('.call_Img').addEventListener('click',function(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Далі &rarr;',
        confirmButtonColor: '#ff0000',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Замовити зворотній дзвінок',
          text: "Ваше ім'я"
        },
        {
          title: 'Замовити зворотній дзвінок',
          text: "Номер телефону"
        },
        {
          title: 'Замовити зворотній дзвінок',
          text: "Коментарій"
        }
      ]).then((result) => {
        //   const answers = JSON.stringify(result.value)
        res = result.value;
        let k = 0;
        console.log(res[0]);
        
        for (let i = 0; i < res.length; i++) {
            if (res[i] == ""){
                k++;
            } //replace(/^\s+|\s+$/g, '')
        }
        if (k > 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Заповніть всі поля'
              })
        }
        else {
            grecaptcha.ready(function () {
                grecaptcha.execute('6LdpbekUAAAAAIvfLMPCLcwMtrLsVhTSiXhuJ6yg', { action: 'homepage' })
                    .then(function (token) {
                        console.log(token);
                        async function postData(url = 'https://elite-cars-2051a.firebaseio.com/Call.json', state) {
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                redirect: 'follow',
                                referrerPolicy: 'no-referrer',
                                body: JSON.stringify(res)
                            });
                            return await response.json();
                        }
                        postData('https://elite-cars-2051a.firebaseio.com/Call.json', { res })
                            .then((res) => {
                                console.log(res);
                                
                            });
                                  Swal.fire({
                                    title: 'Дякуємо за заявку!',
                                    icon: 'success',
                                    confirmButtonColor: '#ff0000',
                                    confirmButtonText: 'Закрити',
                                  })
    
                    });
            });
    
        }
        
      })
})

var revievs = {
    0:{
        name:"Женя",
        text:"Доброго дня, дякую вам, що підібрали для моєї сім'ї дійсно хороший автомобіль, хоть це було не легко, але ви зі всім справились.<br>Ми дуже задоволені, Дякуємо!<br>Будемо вас всім радити!"
    },
    1:{
        name:"Василь",
        text:"Дякую Elite Cars за Бричку все пройшло супер!!! Приємно що у Вас низька ціна та висока якість 👍👍👍"
    },
    2:{
        name:"Юрій",
        text:"Доброго дня, Валерій. Дякую вам, що підібрали автомобіль по моїм критеріям.Все супер, автомобілем залишився довольний! Буду вас рекомендувати👍 "
    },
    3:{
        name:"Олександр",
        text:"Привіт, хочу подякувати тобі і твоїй команді Еліт Карс за те шо все пройшло добре. Мені дуже сподобалося з вами працювати. Ви дуже прості люди, через це готовий вас рекомендувати всім.<br>Наснаги вам і терпіння, ви на правильному шляху. "
    },
    4:{
        name:"Андрій",
        text:"Хелов \nДякую вам за класну тачку, їжджу і тішуся нею як мале дитя \nВи канешно на висотііііі \nРеспект вам "
    },
    5:{
        name:"Коля",
        text:"Доброго дня, дякую що підібрали авто.\nВсе було на висоті🤟🤟🤟"
    }
}
 function smallRev(revievs) {
    small = true;
    nameSmall = document.querySelectorAll('.small_revievs_name');
    textSmall = document.querySelectorAll('.small_revievs_text');
    i = 2;
    
    for (let s = 0; s < 6 / 2; s++) {
        li = document.createElement('li');
        document.querySelector('.reviews_dots').insertAdjacentElement('afterbegin',li);
    }
    document.querySelector('.reviews_dots li:nth-child(1)').style.backgroundColor = '#ff0000';
        setInterval(() => {
            switch (i) {
                case 0:
                    document.querySelector('.reviews_dots li:nth-child(1)').style.backgroundColor = '#ff0000';
                    document.querySelector('.reviews_dots li:nth-child(2)').style.backgroundColor = '#666666';
                    document.querySelector('.reviews_dots li:nth-child(3)').style.backgroundColor = '#666666';
                    break;
                case 2:
                    document.querySelector('.reviews_dots li:nth-child(1)').style.backgroundColor = '#666666';
                    document.querySelector('.reviews_dots li:nth-child(2)').style.backgroundColor = '#ff0000';
                    document.querySelector('.reviews_dots li:nth-child(3)').style.backgroundColor = '#666666';
                    break;
                case 4:
                    document.querySelector('.reviews_dots li:nth-child(1)').style.backgroundColor = '#666666';
                    document.querySelector('.reviews_dots li:nth-child(2)').style.backgroundColor = '#666666';
                    document.querySelector('.reviews_dots li:nth-child(3)').style.backgroundColor = '#ff0000';
                    break;
            }
              nameSmall[0].innerHTML = revievs[i].name;
              textSmall[0].innerHTML = revievs[i].text;
              nameSmall[1].innerHTML = revievs[i+1].name;
              textSmall[1].innerHTML = revievs[i+1].text;
              i+=2;
              if (i >= 5) {
                i = 0;
            }
        }, 15000);
}
smallRev(revievs);