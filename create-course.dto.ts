import { IsString, IsNotEmpty, IsInt, Min, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: 'Назва курсу не може бути порожньою' })
  @MaxLength(100, { message: 'Назва курсу занадто довга' })
  @Transform(({ value }) => value.trim()) 
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: "Ім'я викладача є обов'язковим" })
  @Transform(({ value }) => value.trim())
  readonly instructor: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Тривалість має бути цілим числом' })
  @Min(1, { message: 'Тривалість курсу має бути мінімум 1 година' })
  readonly duration: number;
}