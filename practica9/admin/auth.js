import getProductos from "./src/elements/getProductRender";
import RenderBodypage from "./src/pages/BodyPageRender";
import authService from "./src/services/loginApi";

export class AuthManager {
    constructor() {
      this.loginForm = document.getElementById('login');
      this.errorMessage = document.getElementById('error-message');
      this.isLoading = false;
      this.setupEventListeners();
      this.checkAuthStatus();
    }
  
    setupEventListeners() {
      // Login button event listener
      const loginBtn = document.getElementById('loginbtn');
      loginBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await this.handleLogin();
      });
  
      // Logout button event listener
      const logoutBtn = document.getElementById('logout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          await this.handleLogout();
        });
      }
  
      // Remember me checkbox
      const rememberCheckbox = document.getElementById('remember');
      if (rememberCheckbox) {
        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
          document.getElementById('email').value = savedEmail;
          rememberCheckbox.checked = true;
        }
      }
    }
  
    async handleLogin() {
      if (this.isLoading) return;
      
      try {
        this.setLoading(true);
        this.hideError();
  
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rememberCheckbox = document.getElementById('remember');
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
  
        // Validación básica
        if (!email || !password) {
          throw new Error('Please fill in all fields');
        }
  
        if (!this.isValidEmail(email)) {
          throw new Error('Please enter a valid email');
        }
  
        // Intentar login
        await authService.login(email, password);
  
        // Manejar "remember me"
        if (rememberCheckbox?.checked) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
  
        // Actualizar estado de autenticación
        localStorage.setItem('isLogged', 'true');
  
        // Cargar datos iniciales
        await this.loadInitialData();
  
        // Limpiar formulario y recargar
        this.loginForm.textContent = '';
        window.location.reload();
  
      } catch (error) {
        this.showError(error.message || 'Login failed. Please try again.');
      } finally {
        this.setLoading(false);
      }
    }
  
    async handleLogout() {
      try {
        await authService.logout();
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/'; // O tu ruta de login
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  
    async loadInitialData() {
      try {
        await Promise.all([
          RenderBodypage(),
          getProductos()
        ]);
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    }
  
    async checkAuthStatus() {
      const isLoggedIn = localStorage.getItem('isLogged') === 'true';
      if (isLoggedIn) {
        await this.loadInitialData();
        this.loginForm.textContent = '';
      }
    }
  
    setLoading(loading) {
      this.isLoading = loading;
      const loginBtn = document.getElementById('loginbtn');
      if (loginBtn) {
        loginBtn.disabled = loading;
        loginBtn.textContent = loading ? 'Loading...' : 'Login';
      }
    }
  
    showError(message) {
      const errorDiv = document.getElementById('error-message');
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
      }
    }
  
    hideError() {
      const errorDiv = document.getElementById('error-message');
      if (errorDiv) {
        errorDiv.classList.add('hidden');
        errorDiv.textContent = '';
      }
    }
  
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }