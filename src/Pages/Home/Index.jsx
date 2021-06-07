import React from 'react'
import Contacto from '../../Components/Contacto/Index.jsx'
import Header from '../../Components/Header/Index.jsx'
import Landing from '../../Components/Landing/Index'
import SobreMi from '../../Components/SobreMi/Index'
import Tecnologías from '../../Components/Tecnologías/Index'
import Trabajos from '../../Components/Trabajos/Index'

export default function Home() {
    return (
        <>
        <Header />
        <Landing />
        <Tecnologías />
        <SobreMi />
        <Trabajos />
        <Contacto/>
        </>
    )
}
