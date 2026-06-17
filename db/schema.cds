namespace tienda;

entity Productos {
    key ID        : UUID;
    orderNumber   : String(10);
    customer      : String(50);
    status        : String(20);
    totalAmount   : Decimal(10,2);
}
