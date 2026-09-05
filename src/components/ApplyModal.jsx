import { useEffect, useRef } from 'react';
import './ApplyModal.css';

function ApplyModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className="apply-modal" onCancel={onClose}>
      <button type="button" className="apply-modal-close" aria-label="Закрыть" onClick={onClose}>
        ×
      </button>
      <h2>Подать заявку</h2>
      <form method="dialog" onSubmit={onClose}>
        <input required name="brand" placeholder="Название бренда" />
        <input required name="email" type="email" placeholder="Email" />
        <button type="submit" className="apply-modal-submit">
          Отправить
        </button>
      </form>
    </dialog>
  );
}

export default ApplyModal;
