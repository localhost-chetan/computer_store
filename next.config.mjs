/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: `https`,
            hostname: "res.cloudinary.com",
            port: ""
        }]
    },
    env: {
        BASE_URL: "http://127.0.0.1:3000"
    }

}


export default nextConfig;
