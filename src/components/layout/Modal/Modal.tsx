import { FC, useState, useEffect } from 'react';
import styles from './Modal.module.css';
import * as z from 'zod';

const ModalSchema = z.object({
    city: z.string().min(1).max(100),
    name: z.string().min(1).max(100),
    amount: z.number().min(0),
    phone: z.string().min(10).max(15),
    email: z.string().email(),
});

type ModalProps = {
    onClose: () => void;
};

const Modal: FC<ModalProps> = ({ onClose }) => {
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        city: '',
        name: '',
        amount: 0,
        phone: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState({
        city: '',
        name: '',
        amount: '',
        phone: '',
        email: '',
    });

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            ModalSchema.parse(formData);
            console.log(formData);
        } catch (err) {
            if (err instanceof z.ZodError) {
                const formErrors = Object.fromEntries(
                    err.errors.map((error) => [error.path[0], error.message])
                );
                setFormErrors(formErrors);
            }
        }
    };

    return (
        <div className={styles.Modal}>
            {show && (
                <div className={styles.ModalContent}>
                    <button className={styles.CloseButton} onClick={handleClose}>
                        X
                    </button>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Город:</label>
                            <input name="city" value={formData.city} onChange={handleInputChange} />
                            {formErrors.city && <span className={styles.Error}>{formErrors.city}</span>}
                        </div>
                        <div>
                            <label>Имя:</label>
                            <input name="name" value={formData.name} onChange={handleInputChange} />
                            {formErrors.name && <span className={styles.Error}>{formErrors.name}</span>}
                        </div>
                        <div>
                            <label>Сумма:</label>
                            <input name="amount" type="number" value={formData.amount} onChange={handleInputChange} />
                            {formErrors.amount && <span className={styles.Error}>{formErrors.amount}</span>}
                        </div>
                        <div>
                            <label>Телефон:</label>
                            <input name="phone" value={formData.phone} onChange={handleInputChange} />
                            {formErrors.phone && <span className={styles.Error}>{formErrors.phone}</span>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input name="email" value={formData.email} onChange={handleInputChange} />
                            {formErrors.email && <span className={styles.Error}>{formErrors.email}</span>}
                        </div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Modal;

