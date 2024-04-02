document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('sLinks-show');
            } else {
                entry.target.classList.remove('sLinks-show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.sLinks');
    hiddenElements.forEach((el) => observer.observe(el));


    var listCopy = document.querySelector('#collaboration-partners-list ul').cloneNode(true);
    document.querySelector('#collaboration-partners-list').appendChild(listCopy);

    const accordion = document.getElementById('one-stop-hub-heading');

    const accordionList = document.getElementById('one-stop-hub-body');

    accordion.addEventListener('click',function(){
        this.classList.toggle('active');
        accordionList.classList.toggle('active');

    })




});

