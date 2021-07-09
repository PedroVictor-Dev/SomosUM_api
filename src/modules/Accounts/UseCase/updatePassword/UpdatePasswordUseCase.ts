import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../Repositories/IUserRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdatePassworldUseCase{
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ){}
 
  async execute(newPasswd: string, newPasswdConfirm: string, user_id: string): Promise<void>{

    if(newPasswd != newPasswdConfirm){
      throw new AppError("Senhas fornecidas são diferentes")
    }

    const user = await this.userRepository.findbyId(user_id)
    
    
    if(!user) {
      throw new AppError("Token error")
    }

    await this.userRepository.updatePassword( newPasswd, user_id );
  }
}

export { UpdatePassworldUseCase }