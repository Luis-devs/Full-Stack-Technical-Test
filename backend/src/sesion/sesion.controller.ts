import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';

@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Post('/cargar')
  async create(@Body() createSesionDto: CreateSesionDto) {
    return await this.sesionService.create(createSesionDto);
  }

  @Get()
  async findAll() {
    return await this.sesionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.sesionService.findOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Body() updateSesionDto: UpdateSesionDto,
  ) {
    return await this.sesionService.update(id, updateSesionDto);
  }

  @Put('/llenar')
  async llenarSesion() {
    return await this.sesionService.llenarSesion();
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    return await this.sesionService.remove(id);
  }
}
