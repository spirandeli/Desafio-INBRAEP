create database desafio;

use desafio;

create table tarefas (
	id int not null auto_increment,
    tarefa varchar(30) not null,
    descricao varchar(100),
    realizada boolean not null,
primary key (id)
)default charset = utf8;

insert into tarefas
(tarefa, descricao, realizada)
value
('Realizar banco de dados','Realizar banco de dados ultilizando mysql', false),
('Realizar front-end','Realizar front-end ultilizando html5', true);

update tarefas
set realizada = true
where id= '1';

delete from tarefas
where id = '2';

select * from tarefas;



