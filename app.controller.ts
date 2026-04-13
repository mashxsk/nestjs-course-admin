import { Controller, Get, Post, Body, Param, Res, BadRequestException } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';
import { CreateCourseDto } from './dto/create-course.dto'; 
import { UpdateCourseDto } from './dto/update-course.dto'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(@Res() res: Response) {
    const courses = await this.appService.findAll();
    res.render('index', { courses });
  }

  @Get('create')
  createForm(@Res() res: Response) {
    res.render('create');
  }

  @Post('create')
  async create(@Body() createCourseDto: CreateCourseDto, @Res() res: Response) {
    try {
      await this.appService.create(createCourseDto);
      res.redirect('/');
    } catch (error) {
      res.status(400).send(error.response?.message || 'Помилка валідації');
    }
  }

  @Get('edit/:id')
  async editForm(@Param('id') id: string, @Res() res: Response) {
    const course = await this.appService.findOne(Number(id));
    if (course) {
      res.render('edit', { course });
    } else {
      res.status(404).send('Курс не знайдено');
    }
  }

  @Post('edit')
  async edit(@Body() updateCourseDto: UpdateCourseDto, @Res() res: Response) {
    try {
      await this.appService.update(updateCourseDto);
      res.redirect('/');
    } catch (error) {
      res.status(400).send(error.response?.message || 'Помилка валідації');
    }
  }

  @Post('delete/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    await this.appService.remove(Number(id));
    res.redirect('/');
  }
}