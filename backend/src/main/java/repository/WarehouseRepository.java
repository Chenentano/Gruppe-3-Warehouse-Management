package repository;

import model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface  WarehouseRepository extends MongoRepository<Product,String> {

}
