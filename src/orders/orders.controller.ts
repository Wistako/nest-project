import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.ordersService.getById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');
    return this.ordersService.deleteById(id);
  }

  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }

  @Put('/:id')
  updateById(@Param('id') id: string, @Body() orderData: CreateOrderDTO) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');
    return this.ordersService.updateById(id, orderData);
  }
}
