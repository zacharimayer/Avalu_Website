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

      toast.success('Message sent successfully!');
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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