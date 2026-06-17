using tienda from '../db/schema';

service CatalogService {
    entity Productos as projection on tienda.Productos;
}