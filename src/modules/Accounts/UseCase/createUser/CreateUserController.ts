import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{

    async handle(request: Request, response: Response): Promise<Response>{

        const data = request.body
        const user_id = request.userId


        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute(data, user_id)

        return response.status(201).json({
            message: "Usuario criado com sucesso"
        })
    }


}


export { CreateUserController }