import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './Modal.module.css';
import { yupResolver } from '@hookform/resolvers/yup';


type ModalProps = {
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yup.object().shape({
            city: yup.string().required(),
            name: yup.string().required(),
            amount: yup.number().min(0).required(),
            phone: yup.string().required(),
            email: yup.string().email().required(),
        }))
    });

    const handleClose = () => {
        onClose();
    }

    const onSubmit = async (data: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const json = await response.json();
        console.log(json);
        handleClose();
    };



    return (
        <div className={styles.Modal}>
            <div className={styles.ModalContent}>
                <button className={styles.CloseButton} onClick={handleClose}>X</button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="City" {...register("city")} />
                    {errors.city && <span>{errors.city.message}</span>}

                    <input type="text" placeholder="Name" {...register("name")} />
                    {errors.name && <span>{errors.name.message}</span>}

                    <input type="number" placeholder="Amount" {...register("amount")} />
                    {errors.amount && <span>{errors.amount.message}</span>}

                    <input type="tel" placeholder="Phone" {...register("phone")} />
                    {errors.phone && <span>{errors.phone.message}</span>}

                    <input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
