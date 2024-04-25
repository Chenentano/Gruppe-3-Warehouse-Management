package com.example.backend.service;

import com.example.backend.repository.WarehouseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;


class WarehouseServiceTest {

    private WarehouseService warehouseService;
    private WarehouseRepository mockWarehouseRepository;

    @BeforeEach
    void setUp() {
        mockWarehouseRepository = mock(WarehouseRepository.class);
        warehouseService = new WarehouseService(mockWarehouseRepository);
    }


    @Test
    void getAllProducts() {
    }

    @Test
    void saveNewProduct() {
    }

    @Test
    void findProductById() {
    }

    @Test
    void updateProduct() {
    }

    @Test
    void deleteProduct() {
    }

    @Test
    void testGetAllProducts() {
    }

    @Test
    void createNewProduct() {
    }

    @Test
    void testFindProductById() {
    }

    @Test
    void testUpdateProduct() {
    }

    @Test
    void testDeleteProduct() {
    }
}