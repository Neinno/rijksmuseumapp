let banner_one = document.querySelector("ul li:nth-of-type(1)");
let banner_two = document.querySelector("ul li:nth-of-type(2)");
let banner_three = document.querySelector("ul li:nth-of-type(3)");

let big_banner_one = document.querySelector("main > section:nth-of-type(2)");
let big_banner_two = document.querySelector("main > section:nth-of-type(3)");
let big_banner_three = document.querySelector("main > section:nth-of-type(4)");



fetchData()



banner_one.addEventListener("click", showBannerOne);
banner_two.addEventListener("click", showBannerTwo);
banner_three.addEventListener("click", showBannerThree);

function showBannerOne() {
    big_banner_one.classList.add("banner-down");
}

function showBannerTwo() {
    big_banner_two.classList.add("banner-down");
}

function showBannerThree() {
    big_banner_three.classList.add("banner-down");
}



big_banner_one.addEventListener("click", closeBannerOne);
big_banner_two.addEventListener("click", closeBannerTwo);
big_banner_three.addEventListener("click", closeBannerThree);

function closeBannerOne() {
    big_banner_one.classList.remove("banner-down");
}

function closeBannerTwo() {
    big_banner_two.classList.remove("banner-down");
}

function closeBannerThree() {
    big_banner_three.classList.remove("banner-down");
}



function fetchData() {

    const url = 'https://whois.fdnd.nl/api/v1/members'
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            changeHTML(data)
            console.log(data)
        })
}

function changeHTML (data) {
    const name = data.members[10].name + ' ' + data.members[10].surname
    document.querySelector("main > section:nth-of-type(2) p").innerHTML = name;
}






