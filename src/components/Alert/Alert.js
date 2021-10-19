import Swal from 'sweetalert2';

export default function Alert(text) {
  return Swal.fire({
    title: 'Все пропало!',
    text: `${text}`,
    icon: 'error',
    confirmButtonColor: '#FF751D',
    confirmButtonText: 'OK',
  });
}
