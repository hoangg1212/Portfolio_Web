import React from 'react'
import DuAn01 from '../assets/images/DuAn01.png'
import DuAn02 from '../assets/images/DuAn02.png'
import DuAn03 from '../assets/images/DuAn03.png'

const projects = [
    {
        id: 1,
        name: 'DuAn01',
        technologies: 'toeic',
        image: DuAn01,
        github: 'https://github.com/',
    },
    {
        id: 2,
        name: 'DuAn02',
        technologies: 'toeic',
        image: DuAn01,
        github: 'https://github.com/',
    },
    {
        id: 3,
        name: 'DuAn03',
        technologies: 'toeic',
        image: DuAn01,
        github: 'https://github.com/',
    },
]

const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                className='rounded-lg mb-4 w-full h-48 object-cover'
                            />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a
                                href={project.github}
                                className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Github
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
