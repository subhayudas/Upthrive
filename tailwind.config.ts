import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'playfair': ['Playfair', 'serif'],
  			'comfortaa': ['Comfortaa', 'sans-serif'],
  			'questrial': ['Questrial', 'sans-serif'],
  			'montserrat': ['Montserrat', 'sans-serif'],
  			'rubik': ['Rubik', 'sans-serif'],
  			'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				light: '#5a5f6a',
  				dark: '#23262b',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: '#d1d5db',
  				dark: '#8a929b',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		animation: {
  			'infinite-scroll': 'infinite-scroll 25s linear infinite',
			'shiny-text': 'shiny-text 4s linear infinite',
			'shiny-text-slow': 'shiny-text 8s linear infinite',
			'line-shadow': 'line-shadow 15s linear infinite',
			'spotlight': 'spotlight 2s ease .75s 1 forwards',
			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
			'marquee': 'marquee var(--duration) linear infinite',
			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'marquee': {
  				from: { transform: 'translateX(0%)' },
  				to: { transform: 'translateX(-100%)' }
  			},
  			'marquee-vertical': {
  				from: { transform: 'translateY(0%)' },
  				to: { transform: 'translateY(-100%)' }
  			},
			'shiny-text': {
				'0%': {
					'background-position': '-200% 0'
				},
				'100%': {
					'background-position': '200% 0'
				}
			},
			'line-shadow': {
				'0%': {
					'background-position': '0 0'
				},
				'100%': {
					'background-position': '100% -100%'
				}
			},
			'spotlight': {
				'0%': {
					opacity: '0',
					transform: 'scale(0.8) translateY(6rem) translateX(-16rem)'
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1) translateY(0) translateX(0)'
				}
			},
			'shimmer-slide': {
				'to': {
					transform: 'translate(calc(100cqw - 100%), calc(100cqh - 100%))'
				}
			},
			'spin-around': {
				'0%': {
					transform: 'translateZ(0) rotate(0)'
				},
				'15%, 35%': {
					transform: 'translateZ(0) rotate(90deg)'
				},
				'65%, 85%': {
					transform: 'translateZ(0) rotate(270deg)'
				},
				'100%': {
					transform: 'translateZ(0) rotate(360deg)'
				}
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
