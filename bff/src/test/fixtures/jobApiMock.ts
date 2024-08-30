export const jobApiMock = {
  jobs: [
    {
      title: 'especialista de fp&a',
      type: 'financeiro',
      level: 'especialista',
      location: 'são paulo, sp, brasil',
      is_active: true
    },
    {
      title: 'estágio em riscos e controles internos',
      type: 'controles internos',
      level: 'estágio',
      location: 'são paulo, sp, brasil',
      is_active: true
    },
    {
      title: 'gerente de produto',
      type: 'produto',
      level: 'pleno',
      location: 'são paulo, sp, brasil',
      is_active: true
    },
    {
      title: 'pessoa analista de data analytics',
      type: 'engenharia',
      level: 'pleno',
      location: 'são paulo, sp, brasil',
      is_active: true
    },
    {
      title: 'pessoa analista de gestão de parceiros',
      type: 'operacional',
      level: 'senior',
      location: 'são paulo, sp, brasil',
      is_active: true
    },
    {
      title: 'pessoa coordenadora de engenharia de dados',
      type: 'engenharia',
      level: 'senior',
      location: null,
      is_active: true
    },
    {
      title: 'pessoa engenheira de dados',
      type: 'engenharia',
      level: 'junior',
      location: null,
      is_active: true
    },
    {
      title: 'pessoa engenheira de sre/devops',
      type: 'engenharia',
      level: 'senior',
      location: null,
      is_active: true
    },
    {
      title: 'pessoa engenheira devops',
      type: 'engenharia',
      level: 'pleno',
      location: null,
      is_active: true
    },
    {
      title: 'pessoa desenvolvedora front-end',
      type: 'engenharia',
      level: 'senior',
      location: null,
      is_active: true
    },
    {
      title: 'pessoa desenvolvedora mobile (android e ios)',
      type: 'engenharia',
      level: 'senior',
      location: null,
      is_active: false
    },
    {
      title: 'pessoa desenvolvedora java',
      type: 'engenharia',
      level: 'pleno',
      location: null,
      is_active: false
    }
  ]
};

export const transformedJobApiMock = {
  jobs: {
    Engenharia: [
      {
        title: 'Pessoa Analista De Data Analytics - Pleno',
        location: 'São Paulo, Brasil',
        path: 'pessoa-analista-de-data-analytics'
      },
      {
        title: 'Pessoa Coordenadora De Engenharia De Dados - Senior',
        location: 'Remoto',
        path: 'pessoa-coordenadora-de-engenharia-de-dados'
      },
      {
        title: 'Pessoa Engenheira De Dados - Junior',
        location: 'Remoto',
        path: 'pessoa-engenheira-de-dados'
      },
      {
        title: 'Pessoa Engenheira De Sre/devops - Senior',
        location: 'Remoto',
        path: 'pessoa-engenheira-de-sre-devops'
      },
      {
        title: 'Pessoa Engenheira Devops - Pleno',
        location: 'Remoto',
        path: 'pessoa-engenheira-devops'
      },
      {
        title: 'Pessoa Desenvolvedora Front-end - Senior',
        location: 'Remoto',
        path: 'pessoa-desenvolvedora-front-end'
      }
    ],
    Financeiro: [
      {
        title: 'Especialista De Fp&a - Especialista',
        location: 'São Paulo, Brasil',
        path: 'especialista-de-fp-a'
      }
    ],
    'Controles Internos': [
      {
        title: 'Estágio Em Riscos E Controles Internos - Estágio',
        location: 'São Paulo, Brasil',
        path: 'est-gio-em-riscos-e-controles-internos'
      }
    ],
    Produto: [
      {
        title: 'Gerente De Produto - Pleno',
        location: 'São Paulo, Brasil',
        path: 'gerente-de-produto'
      }
    ],
    Operacional: [
      {
        title: 'Pessoa Analista De Gestão De Parceiros - Senior',
        location: 'São Paulo, Brasil',
        path: 'pessoa-analista-de-gest-o-de-parceiros'
      }
    ]
  },

  paginate: {
    limit: 10,
    page: 1,
    totalPages: 1
  }
};

export const filteredByEngenheiroJobApiMock = {
  jobs: {
    Engenharia: [
      {
        title: 'Pessoa Engenheira Devops - Pleno',
        location: 'Remoto',
        path: 'pessoa-engenheira-devops'
      },
      {
        title: 'Pessoa Engenheira De Dados - Junior',
        location: 'Remoto',
        path: 'pessoa-engenheira-de-dados'
      },
      {
        title: 'Pessoa Engenheira De Sre/devops - Senior',
        location: 'Remoto',
        path: 'pessoa-engenheira-de-sre-devops'
      },
      {
        title: 'Pessoa Analista De Data Analytics - Pleno',
        location: 'São Paulo, Brasil',
        path: 'pessoa-analista-de-data-analytics'
      },
      {
        title: 'Pessoa Coordenadora De Engenharia De Dados - Senior',
        location: 'Remoto',
        path: 'pessoa-coordenadora-de-engenharia-de-dados'
      },
      {
        title: 'Pessoa Desenvolvedora Front-end - Senior',
        location: 'Remoto',
        path: 'pessoa-desenvolvedora-front-end'
      }
    ]
  },

  paginate: {
    limit: 10,
    page: 1,
    totalPages: 1
  }
};
