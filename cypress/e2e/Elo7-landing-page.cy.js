describe('Página Carreiras', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b', {
      fixture: "data-vagas",
      statusCode: 200 
    })
  })
  it('Deve acessar a página de carreiras', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar o título da página', () => {
    cy.contains('h1', 'Trabalhe no Elo7')
  })
  it('Deve renderizar a imagem de fundo do header', () => {
    cy.get('.header-container--imagem').should('exist')
  })
  it('Deve renderizar o paragrafo de descrição da página', () => {
    cy.get('.header-container--descrição').should('exist')
    cy.contains('.descrição', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus quis lacinia in vehicula ut turpis.')
  })
  it('Deve renderizar o separador', () => {
    cy.get('.separador').should('exist')
  })
  it('Deve renderizar o link para vagas em aberto', () => {
    cy.get('.vagas-link').should('exist')
    cy.contains('.vagas-link', 'vagas em aberto')
  })
  it('Deve renderizar a imagem do video do CEO', () => {
    cy.get('.CEO-video').should('exist')
  })
  it('Deve renderizar o título, o nome do CEO e o parágrafo sobre o CEO', () => {
    cy.get('.CEO-descrição')
      .children('.tituloCEO')
      .should('exist')
      .should('contain', 'Palavras do CEO')

    cy.get('.CEO-descrição')
      .children('.nomeCEO')
      .should('exist')
      .should('contain', 'Carlos Curioni')

    cy.get('.CEO-descrição')
      .children('.textoCEO')
      .should('exist')
      .should('contain', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis lacinia in, vehicula ut turpis.')
  })
  it('Deve renderizar o título e as fotos dos integrantes do time', () => {
    cy.get('.time-container--contribuidores')
      .children('.contribuidores-titulo')
      .should('exist')
      .should('contain', 'Conheça nosso time')
      .should('contain', 'fora de série')

    cy.get('.time-container--contribuidores')
    .children('.contribuidores-fotos')
    .should('exist')
  })
  it('Deve renderizar a lista de benefícios', () => {
    cy.get('.benefícios-container--lista')
      .children('.sessão')
      .should('exist')
    
    cy.get('.benefícios-container--lista')
      .children('.sessão')
      .eq(0)
      .should('contain', 'qualidade de vida')
      .should('contain', 'Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum,')
    
    cy.get('.benefícios-container--lista')
      .children('.sessão')
      .eq(1)
      .should('contain', 'ambiente descontraído')
      .should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus quis lacinia in vehicula ut turpis.')

    cy.get('.benefícios-container--lista')
      .children('.sessão')
      .eq(2)
      .should('contain', 'atividades extras')
      .should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus,')

    })
    it('Deve renderizar o botão de saiba mais', () => {
      cy.get('.benefícios-container--btn')
        .children('.separador')
        .should('exist')

      cy.get('.benefícios-container--btn')
        .children('.saiba-mais-link')
        .should('exist')
    })
    it('Deve renderizar a imagem das vagas e o título', () => {
      cy.get('.vagas-container')
        .children('.foto-vagas')
        .should('exist')

      cy.get('.vagas-container')
        .children('.vagas-container--titulo')
        .should('exist')
        .should('contain', 'Vagas em aberto')
    })
    it('Deve renderizar as vagas abertas e o título ', () => {
      cy.get('.vagas-container')
        .children('.vagas-container--oportunidades')
        .children('.titulo-oportunidades')
        .should('exist')
        .should('contain', 'Desenvolvimento')

      cy.get('.vagas-container')
        .children('.vagas-container--oportunidades')
        .children('.vaga-container')
        .should('exist')
        .children('.vaga')
        .eq(0)
        .should('contain', 'Desenvolvedor Mobile Senior (Android e iOS)')
        .should('contain', 'Vila Olímpia - São Paulo, Brasil')

      cy.get('.vagas-container')
        .children('.vagas-container--oportunidades')
        .children('.vaga-container')
        .should('exist')
        .children('.vaga')
        .eq(1)
        .should('contain', 'Desenvolvedor Java Junior')
        .should('contain', 'Remoto')
    })

    it('Deve mostrar o erro se a API call não conseguir entregar os dados das vagas', () => {
      cy.intercept('GET', 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b', {
      statusCode: 404 
      })
      cy.get('.vagas-container')
        .children('.vagas-container--oportunidades')
        .children('.vaga-container')
        .should('exist')
        .should('contain', 'Ops! Algo deu errado 🤪 ! Atualize a página!')
    })
})