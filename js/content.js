$(function () {
    // let heading=$('h1').innerText='iwacheto';
    let heading = $("h1").text("I am Ivaylo");
    let heading_par = $(".par_head").text("I create beautiful Websites and Web application");
    let h3_one = $(".h3_one").text("For me");
    let h3_two = $(".h3_two").text("My Services");
    let ser_heading1 = $(".ser_heading1").text("Resposive Design");
    let ser_heading2 = $(".ser_heading2").text("Web Application");
    let ser_heading3 = $(".ser_heading3").text("Website");
    let ser_heading4 = $(".ser_heading4").text("SEO");
    let ser_heading5 = $(".ser_heading5").text("Accuracy and Precision");
    let ser_heading6 = $(".ser_heading6").text("Pixel Perfect Design");
    let ser_par1 = $(".ser_par1").text("One of most important thing in our time is responsive design. My websites are full responsive in all resolutions");
    let ser_par2 = $(".ser_par2").text("You need of Application? I make Web Application and, which can make your life easier.");
    let ser_par3 = $(".ser_par3").text("You need for beautiful Website i can make for you!");
    let ser_par4 = $(".ser_par4").text("SEO is one of most important thing for Websites.Google, Facebook, Instagram and Twitter will find your Website on 100%!");
    let h2_one = $(".h2_one").text("Who am I?");
    let par_1 = $(".par_1").text("I've worked as Web developer for two years and I love my work. I live in Pleven,Bulgaria.");
    let par_2 = $(".par_2").text("I create beautiful landing pages and Web application using the latest tecnologies.");
    console.log(h3_one);

    $('.swither').on('click', function () {
        $('.swither.active').removeClass('active');
        $(this).addClass('active');
        const text = $(this).text();
        if (text === 'En') {
            console.log('English');
            heading.text("I am Ivaylo");
            heading_par = $(".par_head").text("I create beautiful Websites and Web application");
            h3_one = $(".h3_one").text("For me");
            h3_two = $(".h3_two").text("My Services");
            ser_heading1 = $(".ser_heading1").text("Resposive Design");
            ser_heading2 = $(".ser_heading2").text("Web Application");
            ser_heading3 = $(".ser_heading3").text("Website");
            ser_heading4 = $(".ser_heading4").text("SEO");
            ser_heading5 = $(".ser_heading5").text("Accuracy and Precision");
            ser_heading6 = $(".ser_heading6").text("Pixel Perfect Design");
            ser_par1 = $(".ser_par1").text("One of most important thing in our time is responsive design. My websites are full responsive in all resolutions.");
            ser_par2 = $(".ser_par2").text("You need of Application? I make Web Application and, which can make your life easier.");
            ser_par3 = $(".ser_par3").text("You need for beautiful Website i can make for you!");
            ser_par4 = $(".ser_par4").text("SEO is one of most important thing for Websites.Google, Facebook, Instagram and Twitter will find your Website on 100%!");
            h2_one = $(".h2_one").text("Who am I?");
             par_1 = $(".par_1").text("I've worked as Web developer for two years and I love my work. I live in Pleven,Bulgaria.");
            par_2 = $(".par_2").text("I create beautiful landing pages and Web application using the latest tecnologies.");
        } else {
            console.log('Bulgarian');
            heading.text("Аз съм Ивайло");
            heading_par = $(".par_head").text("Създавам красиви Уебсайтове и Уеб проложения");
            h3_one = $(".h3_one").text("За мен");
            h3_two = $(".h3_two").text("Моите услуги");
            ser_heading1 = $(".ser_heading1").text("Resposive Design");
            ser_heading2 = $(".ser_heading2").text("Уеб приложение");
            ser_heading3 = $(".ser_heading3").text("Уебсайт");
            ser_heading4 = $(".ser_heading4").text("SEO");
            ser_heading5 = $(".ser_heading5").text("Точност и надеждност");
            ser_heading6 = $(".ser_heading6").text("Перфектен дизайн");
            ser_par1 = $(".ser_par1").text("Едно от най-важните неща в днешно време е сайта ви да изглежда добре на всички резолюции.");
            ser_par2 = $(".ser_par2").text("Нуждаете се от Уеб приложение за вашия бизнес? Можете да ме потърсите и заедно ще намерим решение.");
            ser_par3 = $(".ser_par3").text("Искате да имате красив Уебсайт? Аз ще се погрижа да удовлетворя изискванията ви!");
            ser_par4 = $(".ser_par4").text("Оптмизацията е много важно в наши дни! Вашият Уебсайт ще бъде добре индексиран от търсещите машини на Google, Facebook, Twitter и Instagram.");
            h2_one = $(".h2_one").text("Кой съм аз?");
            par_1 = $(".par_1").text("Работя като Уеб дизайнер от две години и обичам работата си. Живея в Плевен.");
            par_2 = $(".par_2").text("Създавам красиви Уебсайтове и Уеб приложения,използвайки последните технологии.");
        }
    });

    // console.log(heading)
})