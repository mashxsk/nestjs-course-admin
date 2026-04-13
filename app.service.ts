import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findOne(id: number): Promise<Course | null> {
    return this.coursesRepository.findOneBy({ id });
  }

  async create(createCourseDto: CreateCourseDto): Promise<void> {
    const course = this.coursesRepository.create(createCourseDto);
    await this.coursesRepository.save(course);
  }

  async update(updateCourseDto: UpdateCourseDto): Promise<void> {
    const { id, ...updateData } = updateCourseDto;
    await this.coursesRepository.update(id, updateData);
  }

  async remove(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}