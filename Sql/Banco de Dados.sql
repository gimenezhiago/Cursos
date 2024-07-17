-- Para mostrar as tabelas
show tables;


-- Para descrever a tabela
show tables;
describe cargo;


-- Para inserir
insert into produto (idproduto, nomepro)
values ('10', 'Tênis')
('11', 'Bandeira')


-- Para selecionar
select * from cliente;

select idcpf as cpf, nome as n, email as e, cidade c 
from pessoa as gente;


-- Para encontrar
select * from estoque as e
where idproduto > 5;

select * from estoque as e
where idproduto > 5 and estoque>=309;

select * from estoque as e
where idproduto > 5 or valorpreco = 299;


-- Para auxiliar na procura
select * from funcionario f 
where idcargo between 2 and 4;

select * from produto p 
where idproduto in(1,3,6,7);

select * from produto p 
where nomepro like '%a%a%';


-- Para ordenar
select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcpf asc;

select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcliente desc;


-- Para colocar o começo e quantidade da pesquisa
select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcliente desc
limit 4 offset 2;


-- Para deletar
delete from pessoa where nome='Rodrigo Garro';


-- Para atualizar
update pessoa set 
cidade='Peabiru'
where nome='Gabriel Istchuk';


-- Para selecionar várias tabelas
select idproduto, idpedido 
from produto, pedido
where idproduto=idpedido;


-- Para relacionar tabelas
select * from produto p
inner join estoque e
on p.idproduto= e.idproduto


-- Para relacionar tabela para esquerda
select * from estoque e
left join produto p 
on p.idproduto = e.idproduto;


-- Para relacionar tabela para direita
select * from produto p
right join estoque e
on p.idproduto = e.idproduto;


-- Para gerar números aleatórios
update funcionario set salary = round(rand() * 10000, 2)


-- Para ver dados aleatórios definindo as colunas
select idproduto,
(select nomepro from produto p2 order by rand() limit 1)from produto p;


-- Para inserir dados aleatórios
insert into produto  (nomepro)
select idproduto,
(select nomepro from produto p2 order by rand() limit 1)from produto p;


-- Para inserir dados aleatórios ignorando os erros
insert ignore into produto  (nomepro)
select idproduto,
(select nomepro from produto p2 order by rand() limit 1)from produto p order by rand() limit 50;


-- Para selecionar com varías junções
select p.idproduto, p.nomepro, e.estoque, h.`data`  
from produto p
left join estoque e on p.idproduto=e.idproduto  
inner join pedidohasproduto p2 on p.idproduto=p2.idproduto  
inner join pedido h on p2.idpedido=h.idpedido;


-- Para atualizar com varías junções
update produto as p
join estoque as e
on p.idproduto=e.idproduto
set p.nomepro = concat(p.nomepro, 'Atualizado');


-- Para deletar com várias junções
delete idproduto from produto p
join estoque as e
on p.idproduto=e.idproduto
where p.idproduto='2';


-- Para agrupar valores
select nomepro, count(idproduto) as total from produto
group by nomepro
order by total desc;


-- Para selecionar o maior valor
select max(precounitario) from pedidohasproduto;


-- Para selecionar o menor valor
select min(precounitario) from pedidohasproduto;


-- Para selecionar a média de valores
select avg(precounitario) from pedidohasproduto;


-- Para selecionar a soma dos valores
select sum(precounitario) from pedidohasproduto;


-- Para contar o registro
select count(precounitario) from pedidohasproduto;