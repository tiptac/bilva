import {
  CreatePropertyDto,
  PropertyDetailsDto,
  PropertyDto,
} from '../../models/dto/property';
import { propertyDaoService } from '../dao/property';

export class PropertyDtoService {
  async createProperty(
    userId: number,
    createPropertyDto: CreatePropertyDto,
  ): Promise<PropertyDto> {
    const property = await propertyDaoService.createProperty({
      userId,
      ...createPropertyDto,
    });
    return await propertyDaoService.getProperty(property.id);
  }

  async deleteProperty(userId: number, id: number): Promise<PropertyDto> {
    return await propertyDaoService.deleteProperty(userId, id);
  }

  async getPropertyDetails(
    userId: number,
    id: number,
  ): Promise<PropertyDetailsDto> {
    return await propertyDaoService.getPropertyDetails(id);
  }
}

export const propertyDtoService = new PropertyDtoService();
