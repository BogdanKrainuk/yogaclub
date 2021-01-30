$(document).ready( () => {

    $('#providers-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.week').click((e) => {
        let currentElement = $(e.target);
        $('.day').hide();
        let id = currentElement.data('id');
        $('#' + id).show();
        $('.week').removeClass('active')
        currentElement.addClass('active');
    });

    $('.open-modal').click(() => {
        $('#timetable-container').css('display', 'flex');
        $('#week-content').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });

    $('#timetable-cancel-close').click(() => {
       $('#timetable-container').hide();
       $('#week-content').hide();
       $('body').removeAttr('style')
    });

    $('.btn-order-open').click(() => {
        $('#timetable-container').css('display', 'flex');
        $('#order-call').css('display', 'flex');
        $('body').css('overflow', 'hidden');
    });

    $('.btn-order-submit').click(function () {
        $('.error-input').hide();
        let phone = $('.phone-number');
        if (phone.val()) {
            $('#order-call').hide();
            $('#reserv-sent').css('display', 'flex');
        }
        else  {
            phone.siblings('.error-input').show();
        }
    });

    $('.contact-order').click(function () {
        $('.error-input').hide();
        let name = $('.contact-name');
        let phone = $('.contact-phone');

        if (!name.val()) {
            name.siblings('.error-input').show();
        }
        if (!phone.val()) {
            phone.siblings('.error-input').show();
        }
        else {
            $('#timetable-container').css('display', 'flex');
            $('#reserv-sent').css('display', 'flex');
        }
    });

    $('.submit').click(function () {
        $('.error-input').hide();
        let name = $('.name');
        let phone = $('.phone');

        if (!name.val()) {
            name.siblings('.error-input').show();
        }
        if (!phone.val()) {
            phone.siblings('.error-input').show();
        }
        else {
            $('#week-content').hide();
            $('#reserv-sent').css('display', 'flex');
        }
    });

});
    $('#burger-menu').click(() => {
        $('#menu').toggleClass('menu-show');
        $('body').css('overflow', 'hidden');
    });

    $('#menu-close').click(() => {
        $('#menu').toggleClass('menu-show');
        $('body').removeAttr('style')
    });

ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.742023, 37.600042],
        zoom: 12,
        controls: []
    },
        {
        suppressMapOpenBlock: true
    });

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small"
        }
    });
    myMap.controls.add(zoomControl);

    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([55.742023, 37.635642],null, {
        iconLayout: 'default#image',
        iconImageHref: 'images/mapsflag.png',
        iconImageSize: [34, 47],

    });

    myMap.geoObjects
        .add(myPlacemark)
}
