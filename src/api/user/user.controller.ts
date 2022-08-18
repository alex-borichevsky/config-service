import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserDto } from "./user.dto";

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  public getUser(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser(id);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.createUser(createUserDto);
  }

}
