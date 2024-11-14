document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form

        const activity = document.getElementById('activity').value;
        const date = document.getElementById('date').value;

        if (!activity || !date) {
            alert('Silakan pilih kegiatan dan tanggal.');
            return;
        }

        alert(`Anda telah mendaftar untuk kegiatan: ${activity} pada tanggal: ${date}`);
        
        // Reset form setelah pendaftaran
        form.reset();
    });
});