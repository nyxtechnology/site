const bronze = {
  title: 'Suporte Bronze',
  price: '1100/mês',
  included: [
    'Atualização do sistema operacional, softwares, bibliotecas e frameworks utilizados. <br /> OBS: essas atualizações irão ocorrer em stage, o cliente aprovando serão enviadas para produção.',
    'Canal de chat para comunicação sobre eventuais problemas',
    'Monitoramente constante da estabilidade dos servidores e aplicação e atuação em algum deles em caso de queda',
    'Toda demanda sera enviada para a equipe de suporte que irá avaliar se é uma tarefa do suporte ou uma nova demanda e assim acionar os responsáveis.',
    'Resposta a um chamado em menos de 5 horas',
    'Horas de suporte ilimitadas para os itens bronze',
    'Relatório mensal'
  ],
  notIncluded: [
    'Qualquer tipo de codificação na aplicação',
    'Dúvidas sobre cadastro de conteúdo',
    'Setup de novos servidores ou migração de servidores',
    'Rollback de servidor ou atualização uma vez que já foram aprovadas em stage e aplicadas em produção'
  ]
}

const silver = {
  title: 'Suporte Prata',
  highlight: true,
  price: '2200/mês',
  included: [
    'Tudo do suporte Bronze',
    'Ajuste de codificação na aplicação recorrente a atualizações do sistema operacional, softwares, bibliotecas e frameworks.',
    'Rollback de servidor ou atualização em produção por solicitação do cliente',
    'Dúvidas sobre cadastros de conteúdos'
  ],
  notIncluded: [
    'Não inclui manutenção de código customizado da aplicação enviado por algum dev para desenvolvimento de novas features. <br /> Exemplo: um dev acabou de enviar um novo código que causou falha na aplicação, o suporte apenas irá comunicar o dev a falha que ocorreu para que ele faça o ajuste e não fazer a correção por ele.',
    'Não inclui bugs já existentes na aplicação, porém ainda desconhecido e que não foram causados por updates mencionados acima. Ex.: Descobrimos que um menu não funciona para versão especifica de navegador ou celular.',
    'Não inclui manutenção por alteração de serviços de terceiros, por exemplo, Facebook altera a forma de login causando erro na aplicação, entendemos isso como uma nova funcionalidade uma vez que foi um terceiro que mudou a solução e a aplicação atual precisa de uma melhoria para se ajustar.'
  ]
}

const gold = {
  title: 'Suporte Ouro',
  price: '3300/mês',
  included: [
    'Todos os itens do Prata',
    'Inclui ajuste de codigo de bugs ja existentes na aplicação ou que possa ser enviado por outro dev causando erro em alguma área do site, correção de bugs causados por problemas de terceiros (limitado a 20 horas de codificação por mês, ficando pendente algum ajuste, será continuado no próximo mes) O que NÃO está incluído',
    'Banco de horas para uso em outras correções ou features'
  ],
  notIncluded: []
}

const diamond = {
  title: 'Suporte Diamante',
  price: '5000/mês',
  included: [
    'Todos os itens do Ouro',
    'Banco de horas das 20 horas de codificação que não foram utilizadas podendo ser usadas para desenvolvimento de novas features. <br /> Obs: Limitado a 60 horas, ou seja, se chegar a 60 horas de acumulo sem o cliente enviar nenhuma funcionalidade nova para ser criada, o valor não será mais aumentado.'
  ],
  notIncluded: [
    'Acúmulo de horas ilimitadas'
  ]
}

export default {
  data: [
    bronze,
    silver,
    gold,
    diamond
  ]
}
