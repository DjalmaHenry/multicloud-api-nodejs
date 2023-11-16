<h1>Avaliação e Comparação de Desempenho de Funções Serverless em Plataformas de Function-as-a-Service</h1>
<p><a href="#">Link do Artigo</a></p>

<h2>Sobre o Repositório</h2>
    <p>Este repositório contém os scripts e recursos utilizados no artigo "Avaliação e Comparação de Desempenho de Funções Serverless em Plataformas de Function-as-a-Service". O objetivo deste repositório é fornecer uma visão detalhada e um ponto de acesso ao código e testes realizados durante a pesquisa. Ele é dividido em várias pastas, cada uma contendo componentes específicos utilizados na avaliação e comparação de desempenho das funções serverless nas plataformas AWS, Azure e GCP.</p>

<h3>Estrutura do Repositório</h3>
<p>O repositório é organizado nas seguintes pastas:</p>

<h4>Pastas AWS, Azure e GCP</h4>
    <p>Descrição: Estas pastas contêm os códigos específicos usados nas funções serverless em cada uma das plataformas respectivas (AWS, Azure e GCP).</p>

<h4>Pasta database_populating</h4>
<p>Descrição: Esta pasta contém o script desenvolvido para povoar o banco de dados MongoDB utilizado no estudo.</p>

<h4>Pasta performance_tests</h4>
    <p>Descrição: Aqui, você encontrará o script do K6 utilizado para realizar os testes de performance.</p>

<h5>Como Executar Testes com o K6 Usando o Grafana Cloud</h5>
    <p>Para executar os testes de performance usando o K6 com integração ao Grafana Cloud, siga os passos abaixo:</p>
    <ol>
        <li><strong>Login no Grafana Cloud:</strong> Antes de iniciar os testes, você precisa fazer login no Grafana Cloud usando o K6.</li>
        <p><code>k6 login cloud --token SEU_TOKEN_GRAFANA_CLOUD</code></p>
        <li><strong>Executando o Script de Teste:</strong> Após o login, você pode executar o script de teste com o seguinte comando:</li>
        <p><code>k6 cloud SEU_SCRIPT_DE_TESTE</code></p>
    </ol>

<h5>Análise de Resultados</h5>
<p>Depois de executar os testes, acesse seu painel do Grafana Cloud para visualizar e analisar os resultados.</p>

<h3>Como Usar</h3>
<p>Para utilizar os scripts e realizar seus próprios testes, siga as instruções detalhadas em cada pasta. É importante configurar adequadamente o ambiente de cada plataforma de cloud e o banco de dados MongoDB antes de executar os testes de performance.</p>

<h3>Contribuições e Feedback</h3>
<p>Sua contribuição e feedback são valiosos para nós. Se você tiver sugestões de melhorias ou encontrar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>
