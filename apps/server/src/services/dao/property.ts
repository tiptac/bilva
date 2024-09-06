import {
  CreatePropertyDao,
  PropertyDao,
  PropertyDetailsDao,
} from '../../models/dao/property';
import { client } from './common/client';

export class PropertyDaoService {
  public async createProperty(
    createPropertyDao: CreatePropertyDao,
  ): Promise<PropertyDao> {
    return await client.property.create({ data: createPropertyDao });
  }

  public async getProperty(id: number): Promise<PropertyDao> {
    return await client.property.findFirstOrThrow({
      where: { id },
    });
  }

  public async getPropertyDetails(id: number): Promise<PropertyDetailsDao> {
    return await client.property.findFirstOrThrow({
      where: { id },
      include: { user: true },
    });
  }

  public async deleteProperty(
    userId: number,
    id: number,
  ): Promise<PropertyDao> {
    return await client.property.delete({ where: { id, userId } });
  }
}

export const propertyDaoService = new PropertyDaoService();
