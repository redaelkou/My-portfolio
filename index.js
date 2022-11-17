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



// ! ################################## educational creear transition
const educational_career = document.querySelector('.educational_career');
const educational_career_left = document.querySelector('.educational_career_left');
const educational_career_right = document.querySelector('.educational_career_right');

window.addEventListener('scroll', () => {
    if (window.scrollY >= educational_career.offsetTop - 600) {
        educational_career_left.style.transform = 'translateY(0)';
        educational_career_right.style.transform = 'translateY(0)';
    }else {
        educational_career_left.style.transform = 'translateY(200%)';
        educational_career_right.style.transform = 'translateY(200%)';
    }
})


// ! ################################## experinec transition
const experience_header = document.querySelector('.experience_header');
const experience = document.querySelector('.experience');

window.addEventListener('scroll', () => {
    if (window.scrollY >= experience_header.offsetTop - 400) {
        experience.style.transform = 'translateY(0)';
    }else {
        experience.style.transform = 'translateY(200%)';
    }
})


// ! ############################## internships animation 

const internships = document.querySelector('.internships');
const internships_divs = document.querySelectorAll('.internships div');

window.addEventListener('scroll', () => {
    if (window.scrollY >= internships.offsetTop - 800) {
        internships_divs.forEach( (ele) => {
            ele.style.transform = 'translateX(0%)';
        })
    }else {
        internships_divs.forEach( (ele) => {
            ele.style.transform = 'translateX(-200%)';
        })
    }
})



// ! ############################## documents animation 

const documents = document.querySelector('.documents');
const docs = document.querySelectorAll('.documents .doc');

window.addEventListener('scroll', () => {
    if (window.scrollY >= documents.offsetTop - 700) {
        docs.forEach( (ele) => {
            ele.style.transform = 'translateY(0%)';
        })
    }else {
        docs.forEach( (ele) => {
            ele.style.transform = 'translateY(-200%)';
        })
    }
})


// ! ############################## slider animation 

const slider_header = document.querySelector('.slider_header');
const slider = document.querySelector('.slider');

window.addEventListener('scroll', () => {
    if (window.scrollY >= slider_header.offsetTop - 200) {
        slider.style.transform = 'scale(1)'
    }else {
        slider.style.transform = 'scale(0.7)'
    }
})

// ! ############################## contact animation 

const contact = document.querySelector('.contact');
const contact_section = document.querySelectorAll('.contact_section');

window.addEventListener('scroll', () => {
    if (window.scrollY >= contact.offsetTop - 600) {
        contact_section.forEach( (ele) => {
            ele.style.transform = 'translateY(0%)';
        });
    }else {
        contact_section.forEach( (ele) => {
            ele.style.transform = 'translateY(100%)';
        })
    }
});





// ! ############################## footer animation 

const footer = document.querySelector('footer');
const creation = document.querySelector('.creation');

window.addEventListener('scroll', () => {
    if (window.scrollY >= footer.offsetTop - 600) {
        creation.style.transform = 'translateY(0)'
    }else {
        creation.style.transform = 'translateY(-500px)'
    }
});



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



// !  ############################## image splider

let images = ["3a874833-0d86-4fae-869b-3fb3f03bf4f2.jpg", "3af6e5b1-4571-4652-a226-d43ead3525e3.jpg", "6713ebcb-b5f7-4ff6-9368-35a8dcb09d83.jpg", "6b5cb76d-e218-4ac5-9e47-d98055221614.jpg", "9616c7d2-e99f-487a-aa14-bc9c1ef2d198.jpg", "f597eeb5-94a0-4736-a95d-593499215f73.jpg"];

const  fa_arrow_left = document.querySelector('.fa-arrow-left') 
const  fa_arrow_right = document.querySelector('.fa-arrow-right')
const img = document.querySelector('.slider img')
let count = 0;

fa_arrow_left.addEventListener('click', () => {
    img.src = images[count];
    count--;

    if (count <= 0) {
        count = images.length - 1
    }
})

fa_arrow_right.addEventListener('click', () => {
    img.src = images[count];
    count++;

    if (count > images.length - 1) {
        count = 0
    }
})