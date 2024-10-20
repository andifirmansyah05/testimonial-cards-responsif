const cardSatu = document.getElementById('card-1');
const tombolCardSatu = document.getElementById('tombol-card-1');

tombolCardSatu.addEventListener('click', function() {
    cardSatu.classList.toggle('hidden');
});