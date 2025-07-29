
//  scroll animation Effect
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true,
    });
 

    const items = document.querySelectorAll('.wrapper .item');
    const totalItems = items.length; 
    const animationDuration = 30;  

    items.forEach((item, i) => { 
        const delay = (animationDuration / totalItems) * (totalItems - i) * -1;
        item.style.animationDelay = `${delay}s`;
    });

        var buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      button.addEventListener('mousedown', () => {
        button.classList.add('btn-active');
      });

      button.addEventListener('mouseup', () => {
        button.classList.remove('btn-active');
      });

      button.addEventListener('mouseleave', () => {
        button.classList.remove('btn-center', 'btn-right', 'btn-left', 'btn-active');
      });

      button.addEventListener('mousemove', e => {
        const leftOffset = button.getBoundingClientRect().left;
        const btnWidth = button.offsetWidth;
        const mouseX = e.pageX;
        let newClass = "";

        if(mouseX < (leftOffset + 0.3 * btnWidth)) {
          newClass = 'btn-left';
        } else if(mouseX > (leftOffset + 0.65 * btnWidth)) {
          newClass = 'btn-right';
        } else {
          newClass = 'btn-center';
        }

        button.className = button.className.replace(/btn-(center|right|left)/g, "").trim() + " " + newClass;
      });
    });
   

});
 

// copy address
document.querySelectorAll(".copy_address").forEach((copybtn) => {
    copybtn.addEventListener("click", function () {
        let parent = this.closest("div");
        let textSpan = parent.querySelector(".copy-box__text");
        let addressText = textSpan.getAttribute("data-set");

        textSpan.innerHTML = "COPIED";

        setTimeout(() => {
            textSpan.innerHTML =  addressText
        }, 2000);

        navigator.clipboard.writeText(addressText);
    });
});

