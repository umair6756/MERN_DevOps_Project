import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from '../icons/icons';
import '../App.css'

const AddTodoButton = ({ setIsFormOpen }) => {
  return (
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  className="fixed bottom-6 right-6"
>
  <button
    onClick={() => setIsFormOpen(true)}
    className="p-5 rounded-full shadow-xl text-xl transition-all hover:scale-110"
    style={{background: 'var(--button)', color: 'white'}}
  >
    <FiPlus />
  </button>
</motion.div>
  );
};

export default AddTodoButton;