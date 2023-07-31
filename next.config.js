/** @type {import('next').NextConfig} */
//agregar storage.googleapis.com a la lista de dominios permitidos

const nextConfig = {
    
    images: {
        domains: ['storage.googleapis.com'],
    },

}

module.exports = nextConfig
