package com.example.backend.service;

import com.example.backend.model.Product;
import com.example.backend.model.ProductCategory;
import com.example.backend.repository.WarehouseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.*;


class WarehouseServiceTest {

    private WarehouseService warehouseService;
    private WarehouseRepository mockWarehouseRepository;
    private IdGenerator mockIdGenerator;

    @BeforeEach
    void setUp() {
        mockWarehouseRepository = mock(WarehouseRepository.class);
        mockIdGenerator = mock(IdGenerator.class);
        warehouseService = new WarehouseService(mockWarehouseRepository, mockIdGenerator);
    }


    @Test
    void testGetAllProducts() {
        List<Product> products = List.of(
                new Product("id1", "pid1", "ProductName1", ProductCategory.GENERAL, 21),
                new Product("id2", "pid2", "ProductName2", ProductCategory.GENERAL, 52),
                new Product("id3", "pid3", "ProductName3", ProductCategory.GENERAL, 43)
        );
        when(mockWarehouseRepository.findAll()).thenReturn(products);

        List<Product> actual = warehouseService.getAllProducts();

        assertEquals(products, actual);
    }

    @Test
    void testFindProductById() {
        Product product = new Product("id1", "pid1", "ProductName1", ProductCategory.GENERAL, 21);
        when(mockWarehouseRepository.findById("id1")).thenReturn(Optional.of(product));

        Product actual = warehouseService.findProductById("id1");

        assertEquals(product, actual);
        verify(mockWarehouseRepository, times(1)).findById("id1");
    }

    @Test
    void testUpdateProduct() {
        Product product = new Product("id1", "pid1", "ProductName1", ProductCategory.GENERAL, 21);
        when(mockWarehouseRepository.save(product)).thenReturn(product);

        Product actual = warehouseService.updateProduct(product, product.id());

        assertEquals(product, actual);
        verify(mockWarehouseRepository, times(1)).save(product);
    }

    @Test
    void testDeleteProduct() {

        warehouseService.deleteProduct("id1");

        verify(mockWarehouseRepository, times(1)).deleteById("id1");
    }

    @Test
    void createNewProduct() {
        Product product = new Product("id1", "pid1", "ProductName1", ProductCategory.GENERAL, 21);

        Product actual = warehouseService.createNewProduct(product);
        assertNotEquals(product.id(), actual.id());
        assertEquals(product.productId(), actual.productId());
        assertEquals(product.productName(), actual.productName());
        assertEquals(product.category(), actual.category());
        assertEquals(product.productQuantity(), actual.productQuantity());
        verify(mockWarehouseRepository, times(1)).save(actual);
    }
}