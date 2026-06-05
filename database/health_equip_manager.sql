CREATE DATABASE IF NOT EXISTS health_equip_manager;

USE health_equip_manager;

-- Tabela de categorias dos equipamentos
CREATE TABLE Categoria (

    id_categoria INT AUTO_INCREMENT PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    descricao VARCHAR(255)

);

-- Tabela de localizações físicas dos equipamentos
CREATE TABLE Localizacao (

    id_localizacao INT AUTO_INCREMENT PRIMARY KEY,

    edificio VARCHAR(100) NOT NULL,

    piso VARCHAR(50),

    servico VARCHAR(100) NOT NULL,

    sala VARCHAR(100)

);

