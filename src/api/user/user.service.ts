import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService {

  @InjectRepository(User)
  private readonly userRepository: Repository<User>

  public getUser(id: number): Promise<User> {
    return this.userRepository.findOne({where: {id}});
  }

  public createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    return this.userRepository.save(user);
  }


}
