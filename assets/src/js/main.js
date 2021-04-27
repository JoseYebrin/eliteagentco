function openNav() {
    const nav = document.getElementById("nav");
    nav.classList.add("active");
    document.body.classList.add("overflow-hidden");

    const timeline = gsap.timeline();

    timeline.fromTo(nav, 0.8, { height: 0 }, { height: "100vh", ease: Power2.easeOut });
}

function closeNav() {
    const button = document.getElementById("closeMobileNav");
    button.disabled = true;

    const nav = document.getElementById("nav");

    const timeline = gsap.timeline();

    timeline.to(nav, 0.6, { height: 0, ease: Power1.easeIn })
    .add(function() {
        nav.classList.remove("active");
        button.disabled = false;
        document.body.classList.remove("overflow-hidden");
    });
}

function createElementFromString(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild; 
}

function onlyNumbers(e) {
    if (e.key.length === 1) {
        if ((!parseInt(e.key) && e.key != 0) || e.key === " ") {
            e.preventDefault();
        }
    }
}

function ellipsizeTextBox() {
    $('.agent-testimonials-item').each(function() {
        let $p = $(this).children("p");
        var divh = $(this).height();
        while ($p.outerHeight() > divh) {
            $p.text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });
}