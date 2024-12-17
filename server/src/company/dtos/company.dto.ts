import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CompanySizeType } from '../enums/company.enums';

export class CompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsArray()
  @IsString({ each: true })
  locatedAt: string[];
  @IsString()
  @IsNotEmpty()
  @IsEnum(CompanySizeType, { message: 'Company size should be a valid type' })
  size: string;
  @IsDate()
  @IsOptional()
  foundedAt: Date;
  @IsString()
  @IsOptional()
  @IsUrl()
  website: string;
  @IsString()
  @IsOptional()
  logo: string;
  //   founders: user[]
  // staff: user[]
}

export class CompanyParams {
  @IsInt()
  @Type(() => Number)
  id?: string;
}
