import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
  @IsString({ message: 'Nombre no válido' })
  name: string;

  @IsNotEmpty({ message: 'El Precio del producto es obligatorio' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Precio no válido' })
  price: number;

  @IsNotEmpty({ message: 'El cantidad no puede ir vacía' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Cantidad no válida' })
  inventory: number;

  @IsNotEmpty({ message: 'El categoría no puede ir vacía' })
  @IsInt({ message: 'La categoría no es válida' })
  categoryId: number;
}
