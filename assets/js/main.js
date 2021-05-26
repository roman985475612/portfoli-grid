window.addEventListener('DOMContentLoaded', () => {

    const tabList = document.querySelectorAll('.port-item')
    const tabSection = document.querySelectorAll('.tab-section');

    for (let i of tabList) {
        i.addEventListener('click', showTab)
    }

    function showTab(e) {
        hideSections()

        this.classList.add('active')

        curSection = document.getElementById(this.dataset.section)
        curSection.classList.add('active')
    }

    function hideSections() {
        for (let s of tabSection) {
            s.classList.remove('active')
        }

        for (let t of tabList) {
            t.classList.remove('active')
        }
    }

    baguetteBox.run('.gallery')
})

