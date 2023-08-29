import { Request, Response } from "express";
import User from "../models/user";

export const addUserAction = async (req: Request, res: Response) => {
   let { firstName, lastName, email, interest, age } = req.body;
   let newUser = new User();
   newUser.name = { firstName, lastName };
   newUser.email = email;
   newUser.interest = interest.split(',').map((item: string) => item.trim()); // Definindo o tipo do parâmetro "item"
   newUser.age = age;

   try {
       await newUser.save();
       res.redirect('/');
   } catch (error) {
       console.error('Erro ao adicionar usuário:', error);
       res.status(500).send('Erro ao adicionar usuário');
   }
};

export const home = async (req: Request, res: Response) => {
   try {
       let users = await User.find({}).sort({"name.firstName": 1});
       res.render('pages/home', {
          users
       });
   } catch (error) {
       console.error('Erro ao buscar usuários:', error);
       res.status(500).send('Erro ao buscar usuários');
   }
};
