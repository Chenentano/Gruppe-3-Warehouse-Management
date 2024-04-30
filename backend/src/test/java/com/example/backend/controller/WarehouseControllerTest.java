package com.example.backend.controller;

import com.example.backend.model.Product;
import com.example.backend.model.ProductCategory;
import com.example.backend.service.WarehouseService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseControllerTest {

    private WarehouseController warehouseController;
    private WarehouseService mockWarehouseService;

    @BeforeEach
    void setUp() {
        mockWarehouseService = mock(WarehouseService.class);
        warehouseController = new WarehouseController(mockWarehouseService);
    }

    @Test
    void getAllProducts() {
        List<Product> products = List.of(
                new Product("id1","pid1", "ProductName1", ProductCategory.NONE,21),
                new Product("id2","pid2", "ProductName2", ProductCategory.NONE,52),
                new Product("id3","pid3", "ProductName3", ProductCategory.NONE,43)
        );
        when(mockWarehouseService.getAllProducts()).thenReturn(products);
        List<Product> actual = warehouseController.getAllProducts();
        assertEquals(products, actual);
    }

    @Test
    void getProductById() {
        Product product = new Product("id1","pid1", "ProductName1", ProductCategory.NONE,21);
        when(mockWarehouseService.findProductById("id1")).thenReturn(product);
        Product actual = warehouseController.getProductById("id1");
        assertEquals(product, actual);
        verify(mockWarehouseService, times(1)).findProductById("id1");
    }

    @Test
    void createNewProduct() {
        Product product = new Product("id1","pid1", "ProductName1", ProductCategory.NONE,21);
        when(mockWarehouseService.createNewProduct(product)).thenReturn(product);

        Product newProduct = warehouseController.createNewProduct(product);

        assertEquals(product, newProduct);
        verify(mockWarehouseService, times(1)).createNewProduct(any(Product.class));
    }

    @Test
    void updateProduct() {
        Product product = new Product("id1","pid1", "ProductName1", ProductCategory.NONE,21);
        when(mockWarehouseService.updateProduct(product,"id1")).thenReturn(product);

        Product newProduct = warehouseController.updateProduct(product,"id1");

        assertEquals(product, newProduct);
        verify(mockWarehouseService, times(1)).updateProduct(any(Product.class), anyString());
    }

    @Test
    void deleteProduct() {
        warehouseController.deleteProduct("id1");
        verify(mockWarehouseService, times(1)).deleteProduct(anyString());
    }
}