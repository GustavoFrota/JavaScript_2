create database cadastro;
create table pessoas (
    id int not null auto_increment,
    nome varchar(30) not null,
    nascimento date,
    sexo enum('M', 'F'),
    peso decimal(5, 2),
    altura decimal(3, 2),
    nacionalidade varchar(50) default 'Brasil',
    primary key(id)
);
insert into pessoas(nome, nascimento, sexo, peso, altura, nacionalidade) values
('Gabriel', '2007-01-02', 'M', 78.5, 1.85, default);

select * from pessoas