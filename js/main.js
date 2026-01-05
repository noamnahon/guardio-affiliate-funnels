/**
 * Guardio Affiliate Funnels - Main JavaScript
 * 
 * This file contains shared utilities and functionality
 * used across all landing pages in the affiliate funnel project.
 */

(function() {
  'use strict';

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  /**
   * Debounce function to limit the rate at which a function can fire
   * @param {Function} func - The function to debounce
   * @param {number} wait - The debounce delay in milliseconds
   * @returns {Function} - The debounced function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Get URL parameters as an object
   * @returns {Object} - Object containing URL parameters
   */
  function getUrlParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    return params;
  }

  /**
   * Track affiliate click events (placeholder for analytics integration)
   * @param {string} eventName - Name of the event
   * @param {Object} eventData - Additional event data
   */
  function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics integration
    // In production, this would send data to analytics platforms
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', eventName, eventData);
    // }
    
    // Example: Facebook Pixel
    // if (typeof fbq !== 'undefined') {
    //   fbq('track', eventName, eventData);
    // }
  }

  // ==========================================================================
  // Affiliate Link Handling
  // ==========================================================================

  /**
   * Initialize affiliate link tracking
   * Adds click tracking to all affiliate links
   */
  function initAffiliateLinks() {
    const affiliateLinks = document.querySelectorAll('a[href*="guardio"], .btn-primary, .btn-accent');
    
    affiliateLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const linkText = this.textContent.trim();
        const linkUrl = this.href;
        
        trackEvent('affiliate_click', {
          link_text: linkText,
          link_url: linkUrl,
          page_url: window.location.href,
          timestamp: new Date().toISOString()
        });
        
        // Add UTM parameters if not present
        // In production, you would modify the href to include tracking params
      });
    });
  }

  // ==========================================================================
  // Smooth Scrolling
  // ==========================================================================

  /**
   * Initialize smooth scrolling for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ==========================================================================
  // Scroll Animations
  // ==========================================================================

  /**
   * Initialize scroll-triggered animations
   * Adds 'visible' class to elements when they enter viewport
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // Mobile Menu (if needed)
  // ==========================================================================

  /**
   * Initialize mobile menu toggle
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  }

  // ==========================================================================
  // Form Handling
  // ==========================================================================

  /**
   * Initialize form validation and submission
   */
  function initForms() {
    const forms = document.querySelectorAll('form[data-ajax]');
    
    forms.forEach(form => {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('[type="submit"]');
        
        // Disable submit button
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Submitting...';
        }
        
        // Track form submission
        trackEvent('form_submit', {
          form_id: this.id || 'unknown',
          page_url: window.location.href
        });
        
        // In production, you would send the form data to your server
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Re-enable submit button after delay (simulating server response)
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
          }
        }, 2000);
      });
    });
  }

  // ==========================================================================
  // Exit Intent Detection
  // ==========================================================================

  /**
   * Initialize exit intent popup trigger
   * Detects when user is about to leave the page
   */
  function initExitIntent() {
    let exitIntentShown = false;
    
    document.addEventListener('mouseout', function(e) {
      if (exitIntentShown) return;
      
      // Check if mouse left the viewport from the top
      if (e.clientY < 10) {
        exitIntentShown = true;
        trackEvent('exit_intent_triggered', {
          page_url: window.location.href
        });
        
        // In production, you would show an exit intent popup here
        // showExitPopup();
      }
    });
  }

  // ==========================================================================
  // Time on Page Tracking
  // ==========================================================================

  /**
   * Track time spent on page
   */
  function initTimeTracking() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('page_time', {
        seconds: timeSpent,
        page_url: window.location.href
      });
    });
  }

  // ==========================================================================
  // Scroll Depth Tracking
  // ==========================================================================

  /**
   * Track scroll depth milestones
   */
  function initScrollTracking() {
    const milestones = [25, 50, 75, 100];
    const reached = new Set();
    
    const trackScroll = debounce(function() {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackEvent('scroll_depth', {
            depth: milestone,
            page_url: window.location.href
          });
        }
      });
    }, 100);
    
    window.addEventListener('scroll', trackScroll);
  }

  // ==========================================================================
  // Initialize Everything
  // ==========================================================================

  /**
   * Main initialization function
   * Called when DOM is ready
   */
  function init() {
    initAffiliateLinks();
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
    initForms();
    initExitIntent();
    initTimeTracking();
    initScrollTracking();
    
    // Track page view
    trackEvent('page_view', {
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      url_params: getUrlParams()
    });
    
    console.log('Guardio Affiliate Funnels initialized');
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose utilities to global scope if needed
  window.GuardioFunnels = {
    trackEvent,
    getUrlParams,
    debounce
  };

})();

