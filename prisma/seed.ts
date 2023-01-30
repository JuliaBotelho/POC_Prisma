import prisma from "../src/database/database.js";

async function main() {
    await prisma.movies.createMany({
        data: [
            {
                "movie": "O Chamado",
                "availableOn": "netflix",
                "genre": "terror"
            },
            {
                "movie": "Spirit",
                "availableOn": "netflix",
                "genre": "aventura"
            },
            {
                "movie": "Orgulho e Preconceito",
                "availableOn": "netflix",
                "genre": "romance"
            },
            {
                "movie": "Tanajura",
                "availableOn": "hbo",
                "genre": "suspense"
            },
            {
                "movie": "A Pele que Habito",
                "availableOn": "netflix",
                "genre": "suspense"
            },
            {
                "movie": "Se beber não case",
                "availableOn": "prime",
                "genre": "comedia"
            },
            {
                "movie": "Se beber não case 2",
                "availableOn": "prime",
                "genre": "comedia"
            },
            {
                "movie": "A Bela e a Fera",
                "availableOn": "netflix",
                "genre": "aventura"
            },
            {
                "movie": "A Bela adormecida",
                "availableOn": "netflix",
                "genre": "aventura"
            },
            {
                "movie": "Anna Karenina",
                "availableOn": "netflix",
                "genre": "romance"
            }
        ]
    })
}

main()
    .then(() => {
        console.log("Seed has been planted")
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })