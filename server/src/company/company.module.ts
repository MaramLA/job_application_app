import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './providers/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
