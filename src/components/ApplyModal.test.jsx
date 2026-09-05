import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import ApplyModal from './ApplyModal.jsx';

const originalShowModal = HTMLDialogElement.prototype.showModal;
const originalClose = HTMLDialogElement.prototype.close;

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function showModal() {
    this.open = true;
  });
  HTMLDialogElement.prototype.close = vi.fn(function close() {
    this.open = false;
  });
});

afterAll(() => {
  HTMLDialogElement.prototype.showModal = originalShowModal;
  HTMLDialogElement.prototype.close = originalClose;
});

afterEach(cleanup);

describe('ApplyModal', () => {
  it('renders the application form when opened', () => {
    render(<ApplyModal open onClose={vi.fn()} />);

    expect(screen.getByRole('heading', { name: 'Подать заявку' })).toBeTruthy();
    expect(screen.getByPlaceholderText('Название бренда').required).toBe(true);
    expect(screen.getByPlaceholderText('Email').type).toBe('email');
  });

  it('closes from the close button and form submission', () => {
    const onClose = vi.fn();
    render(<ApplyModal open onClose={onClose} />);

    fireEvent.click(screen.getByRole('button', { name: 'Закрыть' }));
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.change(screen.getByPlaceholderText('Название бренда'), {
      target: { value: 'Тестовый бренд' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: 'Отправить' }).closest('form'));

    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
