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


-- Tabela de fornecedores
CREATE TABLE Fornecedor (

    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,

    nome_empresa VARCHAR(150) NOT NULL,

    nif VARCHAR(20) UNIQUE,

    telefone VARCHAR(20),

    email VARCHAR(150),

    morada VARCHAR(255),

    website VARCHAR(255),

    pessoa_contacto VARCHAR(150),

    telefone_contacto VARCHAR(20),

    tipo_fornecedor VARCHAR(100),

    observacoes TEXT,

    fornecedor_ativo BOOLEAN DEFAULT TRUE

);

