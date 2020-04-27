SELECT * from locais;
SELECT * from status;
SELECT * from tipos_bens;
SELECT * from bens;
SELECT * from profissoes;
SELECT * from usuarios;
SELECT * from emprestimos;

SELECT bens.id, tipos.nome AS Tipo, status.status, bens.numero_serial
FROM bens 
JOIN tipos_bens AS tipos ON bens.tipo_id = tipos.id
JOIN status ON bens.status_id = status.id;

DELETE FROM usuarios
WHERE id=1