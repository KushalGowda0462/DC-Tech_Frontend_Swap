
export default function Colors() {
  const colorClasses = [
    { name: '--background', style: 'bg-[hsl(var(--background))]' },
    { name: '--foreground', style: 'bg-[hsl(var(--foreground))] text-white' },
    { name: '--card', style: 'bg-[hsl(var(--card))]' },
    { name: '--card-foreground', style: 'bg-[hsl(var(--card-foreground))] text-white' },
    { name: '--popover', style: 'bg-[hsl(var(--popover))]' },
    { name: '--popover-foreground', style: 'bg-[hsl(var(--popover-foreground))] text-white' },
    { name: '--primary', style: 'bg-[hsl(var(--primary))] text-white' },
    { name: '--primary-foreground', style: 'bg-[hsl(var(--primary-foreground))]' },
    { name: '--secondary', style: 'bg-[hsl(var(--secondary))]' },
    { name: '--secondary-foreground', style: 'bg-[hsl(var(--secondary-foreground))] text-white' },
    { name: '--muted', style: 'bg-[hsl(var(--muted))]' },
    { name: '--muted-foreground', style: 'bg-[hsl(var(--muted-foreground))] text-white' },
    { name: '--accent', style: 'bg-[hsl(var(--accent))]' },
    { name: '--accent-foreground', style: 'bg-[hsl(var(--accent-foreground))] text-white' },
    { name: '--destructive', style: 'bg-[hsl(var(--destructive))] text-white' },
    { name: '--destructive-foreground', style: 'bg-[hsl(var(--destructive-foreground))] text-white' },
    { name: '--border', style: 'bg-[hsl(var(--border))]' },
    { name: '--input', style: 'bg-[hsl(var(--input))]' },
    { name: '--ring', style: 'bg-[hsl(var(--ring))]' },
    { name: '--chart-1', style: 'bg-[hsl(var(--chart-1))] text-white' },
    { name: '--chart-2', style: 'bg-[hsl(var(--chart-2))]' },
    { name: '--chart-3', style: 'bg-[hsl(var(--chart-3))] text-white' },
    { name: '--chart-4', style: 'bg-[hsl(var(--chart-4))]' },
    { name: '--chart-5', style: 'bg-[hsl(var(--chart-5))] text-white' }
  ];

  return (
    <>
      
      <main className="min-h-screen bg-gray-100 py-10 mt-10">
        <h1 className="text-center text-3xl font-bold mb-8">Color Palette</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-black">
          {colorClasses.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <div className={`w-32 h-32 rounded ${color.style} border border-primary`}></div>
              <p className="mt-4 text-center">{color.name}</p>
            </div>
          ))}
        </div>
      </main>
    <div >
      <div className="min-h-screen bg-background dark:bg-darkBackground text-foreground dark:text-darkForeground">
        <nav className="flex justify-between items-center p-6 bg-primary text-primary-foreground">
          <h1 className="text-xl font-bold">Colorful UI</h1>
          <button
            
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded"
          >
            Toggle {false ? 'Light' : 'Dark'}
          </button>
        </nav>

        <main className="p-10">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Welcome to the Colorful UI</h2>
            <p className="text-muted dark:text-muted-foreground">
              Experience the harmony of colors, designed to make your interface stand out!
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card dark:bg-darkCard p-6 rounded-lg shadow-lg text-cardForeground dark:text-darkForeground">
              <h3 className="text-xl font-semibold">Primary Color</h3>
              <p className="mt-4">This is your primary color: blue-500, used for important actions.</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg shadow-lg text-secondary-foreground">
              <h3 className="text-xl font-semibold">Secondary Color</h3>
              <p className="mt-4">Yellow serves as the secondary color, bringing vibrancy to your UI.</p>
            </div>

            <div className="bg-accent p-6 rounded-lg shadow-lg text-accent-foreground">
              <h3 className="text-xl font-semibold">Accent Color</h3>
              <p className="mt-4">This bright green color is used for subtle yet powerful highlights.</p>
            </div>

            <div className="bg-destructive p-6 rounded-lg shadow-lg text-destructive-foreground">
              <h3 className="text-xl font-semibold">Destructive Color</h3>
              <p className="mt-4">Used for error states or destructive actions like deleting.</p>
            </div>

            <div className="bg-muted p-6 rounded-lg shadow-lg text-muted-foreground">
              <h3 className="text-xl font-semibold">Muted Color</h3>
              <p className="mt-4">Soft blues serve for subtle text, backgrounds, and borders.</p>
            </div>

            <div className="bg-ring p-6 rounded-lg shadow-lg text-primary-foreground">
              <h3 className="text-xl font-semibold">Focus Ring</h3>
              <p className="mt-4">Use this blue color to indicate focus and accessibility.</p>
            </div>
          </section>
        </main>

        <footer className="bg-popover text-popover-foreground dark:bg-darkCard dark:text-darkForeground p-6 mt-12">
          <p className="text-center">Designed with a colorful palette for both light and dark modes.</p>
        </footer>
      </div>
    </div>
  
    </>
  );
}
