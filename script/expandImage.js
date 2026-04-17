function openImage(img) {
            const modalImg = document.getElementById("modalImage");
            modalImg.src = img.src;

            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        }