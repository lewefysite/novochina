export function PlansSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Nossos Planos</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Básico</h3>
            <p className='text-gray-600 mb-6'>Plano essencial para você</p>
            <p className='text-2xl font-bold mb-6'>R$ 29,90/mês</p>
            <button className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700'>Assinar</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-md border-2 border-green-500'>
            <h3 className='text-xl font-bold mb-4'>Premium</h3>
            <p className='text-gray-600 mb-6'>Recursos completos</p>
            <p className='text-2xl font-bold mb-6'>R$ 59,90/mês</p>
            <button className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700'>Assinar</button>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Empresarial</h3>
            <p className='text-gray-600 mb-6'>Para sua equipe</p>
            <p className='text-2xl font-bold mb-6'>R$ 199,90/mês</p>
            <button className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700'>Assinar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
