/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)" /* slate-200 */,
        input: "var(--color-input)" /* slate-200 */,
        ring: "var(--color-ring)" /* red-700 */,
        background: "var(--color-background)" /* gray-50 */,
        foreground: "var(--color-foreground)" /* gray-900 */,
        surface: "var(--color-surface)" /* slate-50 */,
        primary: {
          DEFAULT: "var(--color-primary)" /* red-700 */,
          foreground: "var(--color-primary-foreground)" /* white */,
        },
        secondary: {
          DEFAULT: "var(--color-secondary)" /* blue-800 */,
          foreground: "var(--color-secondary-foreground)" /* white */,
        },
        destructive: {
          DEFAULT: "var(--color-destructive)" /* red-500 */,
          foreground: "var(--color-destructive-foreground)" /* white */,
        },
        muted: {
          DEFAULT: "var(--color-muted)" /* slate-100 */,
          foreground: "var(--color-muted-foreground)" /* slate-500 */,
        },
        accent: {
          DEFAULT: "var(--color-accent)" /* emerald-600 */,
          foreground: "var(--color-accent-foreground)" /* white */,
        },
        popover: {
          DEFAULT: "var(--color-popover)" /* white */,
          foreground: "var(--color-popover-foreground)" /* gray-900 */,
        },
        card: {
          DEFAULT: "var(--color-card)" /* white */,
          foreground: "var(--color-card-foreground)" /* gray-900 */,
        },
        success: {
          DEFAULT: "var(--color-success)" /* emerald-500 */,
          foreground: "var(--color-success-foreground)" /* white */,
        },
        warning: {
          DEFAULT: "var(--color-warning)" /* amber-500 */,
          foreground: "var(--color-warning-foreground)" /* white */,
        },
        error: {
          DEFAULT: "var(--color-error)" /* red-500 */,
          foreground: "var(--color-error-foreground)" /* white */,
        },
        textPrimary: "var(--color-text-primary)" /* amber-800 */,
        textSecondary: "var(--color-text-secondary)" /* slate-500 */,
        cta: {
          DEFAULT: "var(--color-cta)" /* red-600 */,
          foreground: "var(--color-cta-foreground)" /* white */,
        },
        gold: {
          DEFAULT: "var(--color-gold)" /* gold */,
          foreground: "var(--color-gold-foreground)" /* gray-900 */,
        },
      },
      // fontFamily: {
      //   playfair: ["Playfair Display", "serif"],
      //   sourceSans: ["Source Sans Pro", "sans-serif"],
      //   montserrat: ["Montserrat", "sans-serif"],
      //   crimson: ["Crimson Text", "serif"],
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-down": {
          from: { transform: "translateY(-20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-up": "slide-in-up 0.3s ease-out",
        "slide-in-down": "slide-in-down 0.3s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      boxShadow: {
        subtle: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        elevated: "0 8px 32px rgba(196, 30, 58, 0.3)",
      },
    },
  },
  plugins: [],
};
