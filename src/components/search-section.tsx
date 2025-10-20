export function SearchSection() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Busca Inteligente</h2>
        <div className='max-w-2xl mx-auto'>
          <input 
            type='text' 
            placeholder='Buscar profissionais...' 
            className='w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500' 
          />
          <button className='mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition'>
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
