// ! ################################ go back to to top and van nav bat
let goBack_to_top = document.querySelector('.goBack_to_top');
let v_bar = document.querySelector('.v_bar');

window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollheight = document.documentElement.scrollTop ;

    v_bar.style.width = `${(scrollheight / height) * 100}%`
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        goBack_to_top.style.display = 'block';
    }else {
        goBack_to_top.style.display = 'none';
    }
})

goBack_to_top.onclick = () => {
    window.scrollTo(0,0);
}


// ! ##############################  education overlay



// ! ################################## bar animation
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        header.classList.add('header_animation')
    }else {
        header.classList.remove('header_animation')
    }
})


// ! ########################################### home animatiom
const home_left = document.querySelector('.home_left')
const home_right = document.querySelector('.home_right')

window.addEventListener('DOMContentLoaded', () => {
    home_left.style.transform = 'translateX(0)';
    home_right.style.transform = 'translateX(0)';
})




//  !  ############################## about animatiom
const about = document.querySelector('.about');
const About = document.querySelector('#About');
console.log(About)
About.addEventListener('click', () => {
    window.scrollIntoView(about);
})
const about_left = document.querySelector('.about_left');
const about_right = document.querySelector('.about_right');

window.addEventListener('scroll', () => {
    if (window.scrollY >= about.offsetTop - 600) {
        about_left.style.transform = 'translateX(0)';
        about_right.style.transform = 'translateX(0)';
    }else {
        about_left.style.transform = 'translateX(-200%)';
        about_right.style.transform = 'translateX(200%)';
    }
})











// ! ############################## dak mode
const dark_mode = document.querySelector('.dark_mode');
const dark_mode_toggle_item = document.querySelector('.dark_mode_toggle_item');
let dark_mode_backgroundColor = document.querySelectorAll('.dark_mode_backgroundColor');
let dark_mode_pink_color = document.querySelectorAll('.dark_mode_pink_color');
let dark_mode_black_color = document.querySelectorAll('.dark_mode_black_color');


dark_mode.addEventListener('click', () => {
    dark_mode_toggle_item.classList.toggle('dark_mode_toggle');
    if (dark_mode_toggle_item.classList.contains('dark_mode_toggle')) {
        dark_mode_toggle_item.style.backgroundColor = 'black';
        dark_mode.style.backgroundColor = ' rgb(14, 247, 14)';
        localStorage.setItem('dark_color_color', 'set');

    }else {
        dark_mode_toggle_item.style.backgroundColor = 'white';
        dark_mode.style.backgroundColor = ' rgb(194, 192, 192)';
        localStorage.removeItem('dark_color_color');
        
    };

    
    if (localStorage.getItem('dark_color_color')) {
        dark_mode_backgroundColor.forEach((ele) => {
            ele.style.backgroundColor = '#1F2235';
        });
    
        dark_mode_pink_color.forEach((ele) => {
            ele.style.color = 'white';
        });
    
        dark_mode_black_color.forEach((ele) => {
            ele.style.color = 'white';
        });

    }else {
        dark_mode_backgroundColor.forEach((ele) => {
            ele.style.backgroundColor = 'white';
        });
    
        dark_mode_pink_color.forEach((ele) => {
            ele.style.color = '#ff4a57';
        });

        dark_mode_black_color.forEach((ele) => {
            ele.style.color = '#222222';
        });
    }
});




if (localStorage.getItem('dark_color_color') === 'set') {
    dark_mode_backgroundColor.forEach((ele) => {
        ele.style.backgroundColor = '#1F2235';
    });

    dark_mode_pink_color.forEach((ele) => {
        ele.style.color = 'white';
    });

    dark_mode_black_color.forEach((ele) => {
        ele.style.color = 'white';
    });

}else {
    dark_mode_backgroundColor.forEach((ele) => {
        ele.style.backgroundColor = 'white';
    });

    dark_mode_pink_color.forEach((ele) => {
        ele.style.color = '#ff4a57';
    });

    dark_mode_black_color.forEach((ele) => {
        ele.style.color = '#222222';
    });
}


if (localStorage.getItem('dark_color_color')) {
    dark_mode_toggle_item.style.backgroundColor = 'black';
    dark_mode.style.backgroundColor = 'rgb(14, 247, 14)';
    dark_mode_toggle_item.classList.add('dark_mode_toggle');
}else {
    dark_mode_toggle_item.style.backgroundColor = 'white';
    dark_mode.style.backgroundColor = 'rgb(194, 192, 192)';
    dark_mode_toggle_item.classList.remove('dark_mode_toggle');
}


// ! ################################# auto typing 

let type = new Typed(".auto_typined_text_span", {
    strings: ["Ich Bin YASSIN", "23 Jahre Alt"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

// ! ################################# show nav bar

const links = document.querySelector('.links');
const fa_bars = document.querySelector('.fa-bars');

fa_bars.addEventListener('click', () => {
    links.classList.toggle('showNavBar')
})


// ! ################################################### image slider
let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')
function munualNav(indx) {
    slides.forEach( (ele) => {
        ele.classList.remove('active')
    })
    btns.forEach( (ele) => {
        ele.classList.remove('active')
    })

    slides[indx].classList.add('active')
    btns[indx].classList.add('active')
}

btns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        munualNav(indx)
    })
})


