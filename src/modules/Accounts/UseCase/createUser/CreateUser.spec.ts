import { UsersRepositoryInMemory } from "@modules/Accounts/infra/typeorm/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"


let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Create a new user", () => {

    beforeEach(() => {
        const usersRepositoryInMemory =  new UsersRepositoryInMemory()
        const createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("should be able to create a new user",async () => {
        const user = await createUserUseCase.execute({
            username: "user test",
            church: "evangelista",
            data_nascimento: "99/99/9999",
            email: "test@test.com",
            genero: true,
            isAdmin: false,
            passwd: "test123",
            whatsapp: "9999999",
            CPF: "999.999.999-99",
            photo: "aaa",
            isCNPJ: false,
        })

        console.log(user)

        expect(user).toHaveProperty("user_id")   
    });

    it("should not be able to create a user if he exist", () => {
        
        expect(() => {
            
        })
    })

})
