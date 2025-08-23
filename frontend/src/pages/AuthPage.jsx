import "../App.css"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiCheck, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    username: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const constraintsRef = useRef(null);

  // Password strength analysis
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false
  });

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        navigate('/home');
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Token verification error:', error);
    }
  };

  useEffect(() => {
    if (formData.password) {
      setPasswordStrength({
        length: formData.password.length >= 8,
        uppercase: /[A-Z]/.test(formData.password),
        lowercase: /[a-z]/.test(formData.password),
        number: /[0-9]/.test(formData.password),
        specialChar: /[^A-Za-z0-9]/.test(formData.password)
      });
    }
  }, [formData.password]);

  const handleTouch = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setAuthError('');
    setTouched({
      email: false,
      password: false,
      username: false
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear any auth error when user types
    if (authError) setAuthError('');

    // Real-time validation
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        error = 'Email is invalid';
      }
    }
    
    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
      }
    }
    
    if (name === 'username' && !isLogin) {
      if (!value) {
        error = 'Username is required';
      } else if (value.length < 3) {
        error = 'Username must be at least 3 characters';
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        error = 'Only letters, numbers and underscores';
      }
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }
    
    if (!isLogin && !formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const url = isLogin 
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';
      
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password, name: formData.username };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        setAuthError(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setAuthError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const requirementVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div 
        ref={constraintsRef}
        className="w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-opacity-10 border-gray-300 backdrop-blur-sm"
          whileHover={{ scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="p-8">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-gray-800 bg-clip-text">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
            </motion.div>

            {authError && (
              <motion.div 
                className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {authError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="username"
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="mb-6"
                  >
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        onBlur={() => handleTouch('username')}
                        className={`block w-full pl-10 pr-10 py-3 border ${errors.username ? 'border-red-500' : touched.username && formData.username && !errors.username ? 'border-green-500' : 'border-gray-300'} rounded-lg bg-gray-50 focus:outline-none focus:ring-2 ${errors.username ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition-all duration-200 hover:border-gray-400`}
                        placeholder="Username"
                      />
                      {touched.username && formData.username && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          {errors.username ? (
                            <FiX className="h-5 w-5 text-red-500" />
                          ) : (
                            <FiCheck className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {errors.username && (
                      <motion.p 
                        className="mt-1 text-sm text-red-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.username}
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className="mb-6"
                variants={inputVariants}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleTouch('email')}
                    className={`block w-full pl-10 pr-10 py-3 border ${errors.email ? 'border-red-500' : touched.email && formData.email && !errors.email ? 'border-green-500' : 'border-gray-300'} rounded-lg bg-gray-50 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition-all duration-200 hover:border-gray-400`}
                    placeholder="Email"
                  />
                  {touched.email && formData.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {errors.email ? (
                        <FiX className="h-5 w-5 text-red-500" />
                      ) : (
                        <FiCheck className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  )}
                </div>
                {errors.email && (
                  <motion.p 
                    className="mt-1 text-sm text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div 
                className="mb-2"
                variants={inputVariants}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={() => handleTouch('password')}
                    className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? 'border-red-500' : touched.password && formData.password && !errors.password ? 'border-green-500' : 'border-gray-300'} rounded-lg bg-gray-50 focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition-all duration-200 hover:border-gray-400`}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <motion.p 
                    className="mt-1 text-sm text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              {!isLogin && formData.password && (
                <motion.div 
                  className="mb-6 p-3 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                  <ul className="space-y-1">
                    {Object.entries(passwordStrength).map(([key, met], i) => (
                      <motion.li
                        key={key}
                        className={`flex items-center text-sm ${met ? 'text-green-600' : 'text-gray-500'}`}
                        variants={requirementVariants}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                      >
                        {met ? (
                          <FiCheck className="mr-2 h-4 w-4" />
                        ) : (
                          <FiX className="mr-2 h-4 w-4" />
                        )}
                        {key === 'length' && 'At least 8 characters'}
                        {key === 'uppercase' && 'One uppercase letter'}
                        {key === 'lowercase' && 'One lowercase letter'}
                        {key === 'number' && 'One number'}
                        {key === 'specialChar' && 'One special character'}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden group flex justify-center items-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading || Object.values(errors).some(error => error) || (isLogin ? !formData.email || !formData.password : !formData.email || !formData.password || !formData.username)}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <span className="relative z-10">{isLogin ? 'Login' : 'Sign Up'}</span>
                    <motion.span 
                      className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ width: 0 }}
                      animate={{ width: Object.values(errors).some(error => error) || (isLogin ? !formData.email || !formData.password : !formData.email || !formData.password || !formData.username) ? '100%' : 0 }}
                      style={{ 
                        background: Object.values(errors).some(error => error) ? 'linear-gradient(90deg, rgba(239,68,68,1) 0%, rgba(220,38,38,1) 100%)' : 'linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(37,99,235,1) 100%)'
                      }}
                    />
                  </>
                )}
              </motion.button>
            </form>

            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={toggleAuthMode}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 relative group"
                disabled={isLoading}
              >
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gray-100 px-8 py-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-600 text-sm">
              {isLogin ? (
                <button className="hover:text-blue-600 transition-colors">
                  Forgot your password?
                </button>
              ) : (
                <span>By signing up, you agree to our <button className="text-blue-600 hover:underline">Terms of Service</button></span>
              )}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;