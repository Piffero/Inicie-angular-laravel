# Teste Seleção de Candidatos API

## Inicie-angular-laravel
Sistema Frontend Angular 14 e Backend Laravel 9

## Ambiente dev/local (docker)
---

### **Primeira vez (Iniciar)**
**Passos:** 
- Clonar repositórios para o Frontend e Backend
- Criar variáveis de usuario e grupo
- Criar/subir containers(build)
- Dependencias e configurações
- URL de acesso

### **Você também pode (Ao Iniciar)**
**Passos:** 
- seguir o README de cada projeto para inicia-lo com DOCKER

<br>
<br>
<br>

### **BACKEND**
Esta estruturado com DDD
As classes principais estão em Api. Como mostrado no exemplo abaixo.

- **Api**
- - **Comments**
- - - **Actions** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal pelas classes de controles* 
- - - **Domain**
- - - - **Interfaces** &nbsp;&nbsp;&nbsp;&nbsp; *Classes de Interfaces para firmar os Contratos*
- - - - **Repository** &nbsp;&nbsp;&nbsp;&nbsp; *Classes Repository responsaveis pela Manipulação dos Dados e Chamadas de Serviços*
- - - - **Validation** &nbsp;&nbsp;&nbsp;&nbsp; *Classes de Validação, aqui que verificamos se esta tudo certo para enviar para API de Terceiros*
- - - **Services** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal pelas chamadas do serviço de terceiros* 
- - **Posts**
- - **Users**

### **FRONTEND**
Esta estruturado com componetização por classes via Modulo
As classes principais estão em Api. como mostrado no exemplo abaixo.

- **app**
- - **modules**
- - - **back-office**
- - - - **post** &nbsp;&nbsp;&nbsp;&nbsp; *Modulo responsavel pela manipulação dos componentes, paginas entre outro recursos referente a postagem*
- - - - **post** &nbsp;&nbsp;&nbsp;&nbsp; *Modulo responsavel pela manipulação dos componentes, paginas entre outro recursos referente a postagem*
- - - - - **componentes** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal por quardar os components fragmentados* 
- - - - - **pages** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal por quardar as paginas que fazem usso de mais ou mais os components fragmentados* 
- - - - - **shared** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal por quardar os recursos que serão compartilhados com o modulo podendo se extender a aplicação* 
- - - - - - **interfaces** &nbsp;&nbsp;&nbsp;&nbsp; *nterfaces para firmar os contratos da aplicação* 
- - - - - - **resolver** &nbsp;&nbsp;&nbsp;&nbsp; *Responsável pelo pre carregamento dos dados junto api quando a rota é acessada* 
- - - - - - **services** &nbsp;&nbsp;&nbsp;&nbsp; *Responsal pelas chamadas junto a API* 
- - - **system** &nbsp;&nbsp;&nbsp;&nbsp; *Modulo System tem como objeto carregar a pagina princial como seus components como Exp:. MENU LATERAL*
- - - - **main** &nbsp;&nbsp;&nbsp;&nbsp; *Modulo Main nosso primerio component carregado o que mantes todos os outras paginas como seus filhos.*
- - **shared**