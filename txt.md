# Anotações do Fluxo de volta de dados do planner para o Project

<!-- Contexto em si -->

## Formulas/Lógica

1 -  se não houve nenhum avanço na tarefa = Início previsto/Término previsto precisa ser reagendado

2 - se houve avanço na tarefa porém não foi concluída = início real/ Término previsto

3 - se a tarefa for finalizada = Início real/ Término real

<!-- como o planner funciona -->

## condições planner

### O planner tem um sistema que temos o progresso como métrica 
![Alt text](image.png)

1 - progresso Não iníciado = 0%
2 - progresso Em andamento = 50%
3 - progresso Conclúido = 100%

