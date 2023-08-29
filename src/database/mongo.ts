import { connect } from 'mongoose'; // Certifique-se de ter o pacote mongoose instalado
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async () => {
    try {
        console.log(`Conectando ao MongoDB...`);
        await connect(process.env.MONGO_URL as string)
        console.log(`Conexão bem-sucedida ao MongoDB!`);

    } catch (error) {
        console.error("Erro na conexão com o MongoDB:", error);
    }
};
