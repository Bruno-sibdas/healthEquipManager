CREATE DATABASE IF NOT EXISTS health_equip_manager;

USE health_equip_manager;

-- Tabela de categorias dos equipamentos
CREATE TABLE Categoria (

    id_categoria INT AUTO_INCREMENT PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    descricao VARCHAR(255)

);

