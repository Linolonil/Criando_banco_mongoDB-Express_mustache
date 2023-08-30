import { Request, Response } from "express";
import User from "../models/User";

export const addUserAction = async (req: Request, res: Response) => {
    const { firstName, lastName, email, interest, age } = req.body;
    try {
        const newUser = await User.create({
            name: { firstName, lastName },
            email,
            interest: interest.split(',').map((item:string) => item.trim()),
            age
        });
 
        // Limpando os campos após adicionar o usuário
        const clearedFields = {
            firstName: "",
            lastName: "",
            email: "",
            interest: "",
            age: ""
        };
 
        res.redirect('/');
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).send('Erro ao adicionar usuário');
    }
 };

 export const addAge = async (req: Request, res: Response) => {
    const userId = req.params.id; // Substitua pelo ID correto

    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $inc: { age: 1 } },
            { new: true }
        );

        if (!user) {
            console.log('Usuário não encontrado.');
            return res.redirect('/');
        }

        console.log('Idade incrementada:', user.age);
        res.redirect('/');
    } catch (error) {
        console.error('Erro ao incrementar ano ao usuário:', error);
        res.status(500).send('Erro ao incrementar ano ao usuário');
    }
};


 export const home = async (req: Request, res: Response) => {
    try {
        let lino = await User.findOneAndDelete({email:'linox999@gmail.com'})

        if(lino){
            await lino.save()
        }

        // Buscando e ordenando todos os usuários por nome
        const users = await User.find({}).sort({ 'name.firstName': 1 });
 
        res.render('pages/home', {
            users
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro ao buscar usuários');
    }
 };
 
 

