$(document).ready(function () {
    let table = $('#data').DataTable();

    $('#data tbody').on('click', '#detail', function () {
        var current_row = $(this).parents('tr');
        if (current_row.hasClass('child')) {
            current_row = current_row.prev();
        }
        var data = table.row(current_row).data();
        console.log(data);

        document.getElementById("id").value = data[0];
        document.getElementById("nama_siswa").value = data[1];
        document.getElementById("alamat").value = data[2];
        document.getElementById("jenis_kelamin").value = data[3];
        document.getElementById("tgl_masuk").value = data[4];
        document.getElementById("Jurusan").value = data[5];

        $("#viewModal").modal("show");
    });
});