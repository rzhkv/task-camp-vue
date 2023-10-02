const spacing = (base, limit, unit = 'px') => {
  const output = {}
  let n = 1
  let value

  do {
    value = base * n
    output[value] = `${value}${unit}`
    n++
  } while (value <= limit)

  return output
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
      ]
    },
    screens: {
      phone: '575px',
      tablet: '768px',
      screen: '1200px'
    },
    container: {
      padding: {
        DEFAULT: '8px',
        tablet: '16px',
        screen: '32px'
      }
    },
    spacing: {
      0: 0,
      inherit: 'inherit',
      ...spacing(4, 120)
    },
    extend: {
      colors: {
        'color-text': '#1e1f21',
        accent: '#222261'
      },
      borderRadius: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px'
      }
    }
  },
  plugins: []
}
