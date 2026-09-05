import { useEffect, useRef } from 'react';
import './ApplyModal.css';
import { applicationForm } from '../data/siteContent.js';

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
      <button type="button" className="apply-modal-close" aria-label={applicationForm.closeLabel} onClick={onClose}>
        ×
      </button>
      <h2>{applicationForm.title}</h2>
      <form method="dialog" onSubmit={onClose}>
        {applicationForm.fields.map((field) => (
          <input key={field.name} required {...field} />
        ))}
        <button type="submit" className="apply-modal-submit">
          {applicationForm.submitLabel}
        </button>
      </form>
    </dialog>
  );
}

export default ApplyModal;
