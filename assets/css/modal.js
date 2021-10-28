const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
    //hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}
//gỡ bỏ class open 
function hideBuyTickets() {
    modal.classList.remove('open')
}
//lọc qua từng thẻ button và nghe click

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
//nghe hành vi click vào nút close 
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(even) {
    even.stopPropagation()
})