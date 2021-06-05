const { href } = window.location;
const navs = ['index', 'school', 'colleges', 'plans', 'faq'];
navs.map(nav => {
    if (href.includes(nav)) $(`#${nav}`).addClass('active');
});

$('.btn-nav-main').on('click', function() {
    $('body').toggleClass('open-nav-main');
});

$('.box-toggle').on('click', function() {
    $(this).closest('.box-wrap').toggleClass('close');
});
