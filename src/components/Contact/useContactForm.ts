import { FormEvent, useState, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { EMAILJS_CONFIG } from '../../config/emailjs';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const toastStyle = {
  style: {
    background: '#fff',
    color: '#333',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  icon: (
    <img
      src="https://i.ibb.co/8784jqK/logo-removebg.png"
      alt="Avalu Logo"
      style={{ width: '24px', height: '24px' }}
    />
  ),
  duration: 4000,
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
          to_email: 'contact@avaluamc.com'
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success('Message sent successfully!', toastStyle);
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Failed to send message. Please try again.', toastStyle);
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleChange
  };
}