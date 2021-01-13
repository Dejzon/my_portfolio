import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProjectData] = useState(null)
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
            .then((data) => setProjectData(data))
            .catch(console.error)
    }, [])

    return (
        <main className="bg-blue-50 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive mb-8">My Projects</h1>
                <h2 className="text-lg flex justify-center mb-12 text-gray-700">Welcome to my projects page</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16" key={index}>
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a></h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span><strong>Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span><strong>Place</strong>:{" "}
                                    {project.place}
                                </span>
                                <span><strong>Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-600 leading-relaxed">{project.description}</p>
                                <a
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className=" block mb-5 text-blue-500 font-bold hover:underline hover:text-blue-600 text-xl"
                                >View The Project{" "}<span role="img" aria-label="right pointer">👉</span></a>
                                {project.tags.map((tag, i) => {
                                    return (
                                        <span className="bg-gray-500 text-gray-50 inline-flex rounded border-b-2 border-t-2 border-white pl-1 pr-1 cursor-default" key={i}>{"#"}{tag}</span>
                                    )
                                })}
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
