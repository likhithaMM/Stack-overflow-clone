const config={
    jwtSecret:process.env.JWT_SECRET || "test",
    mongoUri:process.env.CONNECTION_URL || 'mongodb+srv://MedisettyLikhitha:MedisettyLikhitha@stack-overflow-clone.hrglzre.mongodb.net/?retryWrites=true&w=majority'
}
export default config;