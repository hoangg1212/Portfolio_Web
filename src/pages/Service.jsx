import React from 'react'


const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'We develop high-quality websites that meet your needs and deliver a seamless user experience.'
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'We create cross-platform mobile apps that work seamlessly on both iOS and Android.'
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description: 'We help you create engaging content, optimize your online presence, and grow your business.'
    },
    {
        id: 4,
        title: 'Software Development',
        description: 'We develop custom software solutions for businesses and organizations.'
    },
    {
        id: 5,
        title: 'Data Analysis & Reporting',
        description: 'We help you analyze your data, identify trends, and make informed decisions.'
    },
    {
        id: 6,
        title: 'Business Consulting',
        description: 'We help you grow your business, build strong relationships, and achieve your goals.'
    },
]

const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    Service
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                {service.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>
                                {service.description}
                            </p>
                            <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read more</a>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service
