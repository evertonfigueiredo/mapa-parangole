const clientes = [
  {
    estado: "Acre",
    cidade: "Cruzeiro do Sul"
  },
  {
    estado: "Acre",
    cidade: "Manoel Urbano"
  },
  {
    estado: "Acre",
    cidade: "Rio Branco"
  },
  {
    estado: "Alagoas",
    cidade: "Arapiraca"
  },
  {
    estado: "Alagoas",
    cidade: "Atalaia"
  },
  {
    estado: "Alagoas",
    cidade: "Batalha"
  },
  {
    estado: "Alagoas",
    cidade: "Boca da Mata"
  },
  {
    estado: "Alagoas",
    cidade: "COLONIA LEOPOLDINA"
  },
  {
    estado: "Alagoas",
    cidade: "CRAIBAS"
  },
  {
    estado: "Alagoas",
    cidade: "Cajueiro"
  },
  {
    estado: "Alagoas",
    cidade: "Campestre"
  },
  {
    estado: "Alagoas",
    cidade: "Campo Alegre"
  },
  {
    estado: "Alagoas",
    cidade: "Campo Grande"
  },
  {
    estado: "Alagoas",
    cidade: "Capela"
  },
  {
    estado: "Alagoas",
    cidade: "Coruripe"
  },
  {
    estado: "Alagoas",
    cidade: "Delmiro Gouveia"
  },
  {
    estado: "Alagoas",
    cidade: "Dois Riachos"
  },
  {
    estado: "Alagoas",
    cidade: "Feira Grande"
  },
  {
    estado: "Alagoas",
    cidade: "Girau do Ponciano"
  },
  {
    estado: "Alagoas",
    cidade: "Igaci"
  },
  {
    estado: "Alagoas",
    cidade: "Igreja Nova"
  },
  {
    estado: "Alagoas",
    cidade: "Japaratinga"
  },
  {
    estado: "Alagoas",
    cidade: "Jaramataia"
  },
  {
    estado: "Alagoas",
    cidade: "Joaquim Gomes"
  },
  {
    estado: "Alagoas",
    cidade: "Junqueiro"
  },
  {
    estado: "Alagoas",
    cidade: "Lagoa da Canoa"
  },
  {
    estado: "Alagoas",
    cidade: "Limoeiro de Anadia"
  },
  {
    estado: "Alagoas",
    cidade: "MACEIO"
  },
  {
    estado: "Alagoas",
    cidade: "Maceió"
  },
  {
    estado: "Alagoas",
    cidade: "Major Isidoro"
  },
  {
    estado: "Alagoas",
    cidade: "Maragogi"
  },
  {
    estado: "Alagoas",
    cidade: "Maravilha"
  },
  {
    estado: "Alagoas",
    cidade: "Mata Grande"
  },
  {
    estado: "Alagoas",
    cidade: "Matriz de Camaragibe"
  },
  {
    estado: "Alagoas",
    cidade: "Messias"
  },
  {
    estado: "Alagoas",
    cidade: "Murici"
  },
  {
    estado: "Alagoas",
    cidade: "Novo Lino"
  },
  {
    estado: "Alagoas",
    cidade: "OLHO D AGUA DO CASADO"
  },
  {
    estado: "Alagoas",
    cidade: "OLIVENCA"
  },
  {
    estado: "Alagoas",
    cidade: "PALMEIRA DOS INDIOS"
  },
  {
    estado: "Alagoas",
    cidade: "PAO DE ACUCAR"
  },
  {
    estado: "Alagoas",
    cidade: "POCO DAS TRINCHEIRAS"
  },
  {
    estado: "Alagoas",
    cidade: "PORTO REAL DO COLEGIO"
  },
  {
    estado: "Alagoas",
    cidade: "Palestina"
  },
  {
    estado: "Alagoas",
    cidade: "Pariconha"
  },
  {
    estado: "Alagoas",
    cidade: "Paripueira"
  },
  {
    estado: "Alagoas",
    cidade: "Penedo"
  },
  {
    estado: "Alagoas",
    cidade: "Piaçabuçu"
  },
  {
    estado: "Alagoas",
    cidade: "Piranhas"
  },
  {
    estado: "Alagoas",
    cidade: "Porto Calvo"
  },
  {
    estado: "Alagoas",
    cidade: "Porto Real do Colégio"
  },
  {
    estado: "Alagoas",
    cidade: "Porto de Pedras"
  },
  {
    estado: "Alagoas",
    cidade: "Rio Largo"
  },
  {
    estado: "Alagoas",
    cidade: "Roteiro"
  },
  {
    estado: "Alagoas",
    cidade: "SAO JOSE DA LAJE"
  },
  {
    estado: "Alagoas",
    cidade: "SAO JOSE DA TAPERA"
  },
  {
    estado: "Alagoas",
    cidade: "SAO LUIS DO QUITUNDE"
  },
  {
    estado: "Alagoas",
    cidade: "SAO MIGUEL DOS CAMPOS"
  },
  {
    estado: "Alagoas",
    cidade: "Santana do Ipanema"
  },
  {
    estado: "Alagoas",
    cidade: "Satuba"
  },
  {
    estado: "Alagoas",
    cidade: "Senador Rui Palmeira"
  },
  {
    estado: "Alagoas",
    cidade: "São Luís do Quitunde"
  },
  {
    estado: "Alagoas",
    cidade: "TEOTONIO VILELA"
  },
  {
    estado: "Alagoas",
    cidade: "Tanque D Arca"
  },
  {
    estado: "Alagoas",
    cidade: "Taquarana"
  },
  {
    estado: "Alagoas",
    cidade: "UNIAO DOS PALMARES"
  },
  {
    estado: "Alagoas",
    cidade: "União dos Palmares"
  },
  {
    estado: "Alagoas",
    cidade: "VICOSA"
  },
  {
    estado: "Alagoas",
    cidade: "Viçosa"
  },
  {
    estado: "Amapá",
    cidade: "Laranjal do Jari"
  },
  {
    estado: "Amapá",
    cidade: "MACAPA"
  },
  {
    estado: "Amapá",
    cidade: "Macapá"
  },
  {
    estado: "Amapá",
    cidade: "Oiapoque"
  },
  {
    estado: "Amapá",
    cidade: "Santana"
  },
  {
    estado: "Amazonas",
    cidade: "ANAMA"
  },
  {
    estado: "Amazonas",
    cidade: "Boca do Acre"
  },
  {
    estado: "Amazonas",
    cidade: "Caapiranga"
  },
  {
    estado: "Amazonas",
    cidade: "JURUA"
  },
  {
    estado: "Amazonas",
    cidade: "MANICORE"
  },
  {
    estado: "Amazonas",
    cidade: "Manacapuru"
  },
  {
    estado: "Amazonas",
    cidade: "Manaus"
  },
  {
    estado: "Amazonas",
    cidade: "SAO SEBASTIAO DO UATUMA"
  },
  {
    estado: "Bahia",
    cidade: "ABARE"
  },
  {
    estado: "Bahia",
    cidade: "AGUA FRIA"
  },
  {
    estado: "Bahia",
    cidade: "ALGODOES"
  },
  {
    estado: "Bahia",
    cidade: "ANAGE"
  },
  {
    estado: "Bahia",
    cidade: "APORA"
  },
  {
    estado: "Bahia",
    cidade: "Aiquara"
  },
  {
    estado: "Bahia",
    cidade: "Alagoinhas"
  },
  {
    estado: "Bahia",
    cidade: "Amargosa"
  },
  {
    estado: "Bahia",
    cidade: "Andorinha"
  },
  {
    estado: "Bahia",
    cidade: "Antas"
  },
  {
    estado: "Bahia",
    cidade: "Araci"
  },
  {
    estado: "Bahia",
    cidade: "Araças"
  },
  {
    estado: "Bahia",
    cidade: "BAIANOPOLIS"
  },
  {
    estado: "Bahia",
    cidade: "BANZAE"
  },
  {
    estado: "Bahia",
    cidade: "BARRA DO CHOCA"
  },
  {
    estado: "Bahia",
    cidade: "BREJOES"
  },
  {
    estado: "Bahia",
    cidade: "Baixa Grande"
  },
  {
    estado: "Bahia",
    cidade: "Banzaê"
  },
  {
    estado: "Bahia",
    cidade: "Barra do Choça"
  },
  {
    estado: "Bahia",
    cidade: "Barra do Rocha"
  },
  {
    estado: "Bahia",
    cidade: "Barreiras"
  },
  {
    estado: "Bahia",
    cidade: "Barro Alto"
  },
  {
    estado: "Bahia",
    cidade: "Barrocas"
  },
  {
    estado: "Bahia",
    cidade: "Belmonte"
  },
  {
    estado: "Bahia",
    cidade: "Bom Jesus da Lapa"
  },
  {
    estado: "Bahia",
    cidade: "Boninal"
  },
  {
    estado: "Bahia",
    cidade: "Brumado"
  },
  {
    estado: "Bahia",
    cidade: "CABACEIRAS DO PARAGUACU"
  },
  {
    estado: "Bahia",
    cidade: "CAETITE"
  },
  {
    estado: "Bahia",
    cidade: "CALDEIRAO GRANDE"
  },
  {
    estado: "Bahia",
    cidade: "CAMACARI"
  },
  {
    estado: "Bahia",
    cidade: "CANSANCAO"
  },
  {
    estado: "Bahia",
    cidade: "CARAIBAS"
  },
  {
    estado: "Bahia",
    cidade: "CHORROCHO"
  },
  {
    estado: "Bahia",
    cidade: "CICERO DANTAS"
  },
  {
    estado: "Bahia",
    cidade: "CIPO"
  },
  {
    estado: "Bahia",
    cidade: "CONCEICAO DO COITE"
  },
  {
    estado: "Bahia",
    cidade: "CONCEICAO DO JACUIPE"
  },
  {
    estado: "Bahia",
    cidade: "CRISOPOLIS"
  },
  {
    estado: "Bahia",
    cidade: "Cachoeira"
  },
  {
    estado: "Bahia",
    cidade: "Caculé"
  },
  {
    estado: "Bahia",
    cidade: "Cairu"
  },
  {
    estado: "Bahia",
    cidade: "Camamu"
  },
  {
    estado: "Bahia",
    cidade: "Camaçari"
  },
  {
    estado: "Bahia",
    cidade: "Campo Formoso"
  },
  {
    estado: "Bahia",
    cidade: "Canarana"
  },
  {
    estado: "Bahia",
    cidade: "Candeias"
  },
  {
    estado: "Bahia",
    cidade: "Canudos"
  },
  {
    estado: "Bahia",
    cidade: "Capim Grosso"
  },
  {
    estado: "Bahia",
    cidade: "Caravelas"
  },
  {
    estado: "Bahia",
    cidade: "Carinhanha"
  },
  {
    estado: "Bahia",
    cidade: "Casa Nova"
  },
  {
    estado: "Bahia",
    cidade: "Catu"
  },
  {
    estado: "Bahia",
    cidade: "Coaraci"
  },
  {
    estado: "Bahia",
    cidade: "Conceição do Jacuípe"
  },
  {
    estado: "Bahia",
    cidade: "Coração de Maria"
  },
  {
    estado: "Bahia",
    cidade: "Coronel João Sá"
  },
  {
    estado: "Bahia",
    cidade: "Cruz Das Almas"
  },
  {
    estado: "Bahia",
    cidade: "DOM BASILIO"
  },
  {
    estado: "Bahia",
    cidade: "Dias D Ávila"
  },
  {
    estado: "Bahia",
    cidade: "Dário Meira"
  },
  {
    estado: "Bahia",
    cidade: "EUNAPOLIS"
  },
  {
    estado: "Bahia",
    cidade: "Entre Rios"
  },
  {
    estado: "Bahia",
    cidade: "Esplanada"
  },
  {
    estado: "Bahia",
    cidade: "Euclides da Cunha"
  },
  {
    estado: "Bahia",
    cidade: "FATIMA"
  },
  {
    estado: "Bahia",
    cidade: "FILADELFIA"
  },
  {
    estado: "Bahia",
    cidade: "Feira de Santana"
  },
  {
    estado: "Bahia",
    cidade: "Gandu"
  },
  {
    estado: "Bahia",
    cidade: "Gongogi"
  },
  {
    estado: "Bahia",
    cidade: "HELIOPOLIS"
  },
  {
    estado: "Bahia",
    cidade: "IACU"
  },
  {
    estado: "Bahia",
    cidade: "IGAPORA"
  },
  {
    estado: "Bahia",
    cidade: "IGUAI"
  },
  {
    estado: "Bahia",
    cidade: "ILHEUS"
  },
  {
    estado: "Bahia",
    cidade: "IPECAETA"
  },
  {
    estado: "Bahia",
    cidade: "IPIAU"
  },
  {
    estado: "Bahia",
    cidade: "IRECE"
  },
  {
    estado: "Bahia",
    cidade: "ITACARE"
  },
  {
    estado: "Bahia",
    cidade: "ITAJU DO COLONIA"
  },
  {
    estado: "Bahia",
    cidade: "ITAJUIPE"
  },
  {
    estado: "Bahia",
    cidade: "ITAPE"
  },
  {
    estado: "Bahia",
    cidade: "ITIRUCU"
  },
  {
    estado: "Bahia",
    cidade: "ITORORO"
  },
  {
    estado: "Bahia",
    cidade: "ITUACU"
  },
  {
    estado: "Bahia",
    cidade: "ITUBERA"
  },
  {
    estado: "Bahia",
    cidade: "Ibicaraí"
  },
  {
    estado: "Bahia",
    cidade: "Ibipeba"
  },
  {
    estado: "Bahia",
    cidade: "Ibipitanga"
  },
  {
    estado: "Bahia",
    cidade: "Ibirapitanga"
  },
  {
    estado: "Bahia",
    cidade: "Ibirataia"
  },
  {
    estado: "Bahia",
    cidade: "Ichu"
  },
  {
    estado: "Bahia",
    cidade: "Ilhéus"
  },
  {
    estado: "Bahia",
    cidade: "Ipiaú"
  },
  {
    estado: "Bahia",
    cidade: "Ipirá"
  },
  {
    estado: "Bahia",
    cidade: "Irecê"
  },
  {
    estado: "Bahia",
    cidade: "Itaberaba"
  },
  {
    estado: "Bahia",
    cidade: "Itabuna"
  },
  {
    estado: "Bahia",
    cidade: "Itaju do Colônia"
  },
  {
    estado: "Bahia",
    cidade: "Itamari"
  },
  {
    estado: "Bahia",
    cidade: "Itapetinga"
  },
  {
    estado: "Bahia",
    cidade: "Itapicuru"
  },
  {
    estado: "Bahia",
    cidade: "Itapitanga"
  },
  {
    estado: "Bahia",
    cidade: "Itororó"
  },
  {
    estado: "Bahia",
    cidade: "JEQUIE"
  },
  {
    estado: "Bahia",
    cidade: "JITAUNA"
  },
  {
    estado: "Bahia",
    cidade: "Jacobina"
  },
  {
    estado: "Bahia",
    cidade: "Jaguarari"
  },
  {
    estado: "Bahia",
    cidade: "Jequié"
  },
  {
    estado: "Bahia",
    cidade: "Jeremoabo"
  },
  {
    estado: "Bahia",
    cidade: "Juazeiro"
  },
  {
    estado: "Bahia",
    cidade: "Jussiape"
  },
  {
    estado: "Bahia",
    cidade: "LAJEDAO"
  },
  {
    estado: "Bahia",
    cidade: "LUIS EDUARDO MAGALHAES"
  },
  {
    estado: "Bahia",
    cidade: "Laje"
  },
  {
    estado: "Bahia",
    cidade: "Lauro de Freitas"
  },
  {
    estado: "Bahia",
    cidade: "Livramento de Nossa Senhora"
  },
  {
    estado: "Bahia",
    cidade: "Luís Eduardo Magalhães"
  },
  {
    estado: "Bahia",
    cidade: "MACURURE"
  },
  {
    estado: "Bahia",
    cidade: "MARACAS"
  },
  {
    estado: "Bahia",
    cidade: "MARCIONILIO SOUZA"
  },
  {
    estado: "Bahia",
    cidade: "MATA DE SAO JOAO"
  },
  {
    estado: "Bahia",
    cidade: "MUQUEM DO SAO FRANCISCO"
  },
  {
    estado: "Bahia",
    cidade: "Madre de Deus"
  },
  {
    estado: "Bahia",
    cidade: "Mairi"
  },
  {
    estado: "Bahia",
    cidade: "Manoel Vitorino"
  },
  {
    estado: "Bahia",
    cidade: "Maragogipe"
  },
  {
    estado: "Bahia",
    cidade: "Mascote"
  },
  {
    estado: "Bahia",
    cidade: "Mata de São João"
  },
  {
    estado: "Bahia",
    cidade: "Medeiros Neto"
  },
  {
    estado: "Bahia",
    cidade: "Miguel Calmon"
  },
  {
    estado: "Bahia",
    cidade: "Mirante"
  },
  {
    estado: "Bahia",
    cidade: "Monte Santo"
  },
  {
    estado: "Bahia",
    cidade: "Mucuri"
  },
  {
    estado: "Bahia",
    cidade: "Mundo Novo"
  },
  {
    estado: "Bahia",
    cidade: "Muritiba"
  },
  {
    estado: "Bahia",
    cidade: "NAZARE"
  },
  {
    estado: "Bahia",
    cidade: "NOVA CANAA"
  },
  {
    estado: "Bahia",
    cidade: "NOVA VICOSA"
  },
  {
    estado: "Bahia",
    cidade: "Nordestina"
  },
  {
    estado: "Bahia",
    cidade: "Novo Triunfo"
  },
  {
    estado: "Bahia",
    cidade: "OUROLANDIA"
  },
  {
    estado: "Bahia",
    cidade: "Olindina"
  },
  {
    estado: "Bahia",
    cidade: "PAU A PIQUE"
  },
  {
    estado: "Bahia",
    cidade: "PE DE SERRA"
  },
  {
    estado: "Bahia",
    cidade: "PILAO ARCADO"
  },
  {
    estado: "Bahia",
    cidade: "PINDAI"
  },
  {
    estado: "Bahia",
    cidade: "PINDOBACU"
  },
  {
    estado: "Bahia",
    cidade: "PIRAI DO NORTE"
  },
  {
    estado: "Bahia",
    cidade: "POCOES"
  },
  {
    estado: "Bahia",
    cidade: "Palmas de Monte Alto"
  },
  {
    estado: "Bahia",
    cidade: "Palmeiras"
  },
  {
    estado: "Bahia",
    cidade: "Paramirim"
  },
  {
    estado: "Bahia",
    cidade: "Paratinga"
  },
  {
    estado: "Bahia",
    cidade: "Pau Brasil"
  },
  {
    estado: "Bahia",
    cidade: "Paulo Afonso"
  },
  {
    estado: "Bahia",
    cidade: "Pedro Alexandre"
  },
  {
    estado: "Bahia",
    cidade: "Pintadas"
  },
  {
    estado: "Bahia",
    cidade: "Pojuca"
  },
  {
    estado: "Bahia",
    cidade: "Porto Seguro"
  },
  {
    estado: "Bahia",
    cidade: "Presidente Tancredo Neves"
  },
  {
    estado: "Bahia",
    cidade: "Quijingue"
  },
  {
    estado: "Bahia",
    cidade: "RETIROLANDIA"
  },
  {
    estado: "Bahia",
    cidade: "RIACHAO DO JACUIPE"
  },
  {
    estado: "Bahia",
    cidade: "Remanso"
  },
  {
    estado: "Bahia",
    cidade: "Riachão do Jacuípe"
  },
  {
    estado: "Bahia",
    cidade: "Ribeira do Amparo"
  },
  {
    estado: "Bahia",
    cidade: "Ribeira do Pombal"
  },
  {
    estado: "Bahia",
    cidade: "Rio Real"
  },
  {
    estado: "Bahia",
    cidade: "Rio do Antônio"
  },
  {
    estado: "Bahia",
    cidade: "Rio do Pires"
  },
  {
    estado: "Bahia",
    cidade: "SANTA BRIGIDA"
  },
  {
    estado: "Bahia",
    cidade: "SANTA MARIA DA VITORIA"
  },
  {
    estado: "Bahia",
    cidade: "SANTO ANTONIO DE JESUS"
  },
  {
    estado: "Bahia",
    cidade: "SANTO ESTEVAO"
  },
  {
    estado: "Bahia",
    cidade: "SAO DOMINGOS"
  },
  {
    estado: "Bahia",
    cidade: "SAO FELIPE"
  },
  {
    estado: "Bahia",
    cidade: "SAO FRANCISCO DO CONDE"
  },
  {
    estado: "Bahia",
    cidade: "SAO MIGUEL DAS MATAS"
  },
  {
    estado: "Bahia",
    cidade: "SAO SEBASTIAO DO PASSE"
  },
  {
    estado: "Bahia",
    cidade: "SATIRO DIAS"
  },
  {
    estado: "Bahia",
    cidade: "SEBASTIAO LARANJEIRAS"
  },
  {
    estado: "Bahia",
    cidade: "SERROLANDIA"
  },
  {
    estado: "Bahia",
    cidade: "SIMOES FILHO"
  },
  {
    estado: "Bahia",
    cidade: "SITIO DO QUINTO"
  },
  {
    estado: "Bahia",
    cidade: "Salvador"
  },
  {
    estado: "Bahia",
    cidade: "Santa Brígida"
  },
  {
    estado: "Bahia",
    cidade: "Santaluz"
  },
  {
    estado: "Bahia",
    cidade: "Santo Amaro"
  },
  {
    estado: "Bahia",
    cidade: "Santo Antônio de Jesus"
  },
  {
    estado: "Bahia",
    cidade: "Santo Estêvão"
  },
  {
    estado: "Bahia",
    cidade: "Seabra"
  },
  {
    estado: "Bahia",
    cidade: "Senhor do Bonfim"
  },
  {
    estado: "Bahia",
    cidade: "Serra Dourada"
  },
  {
    estado: "Bahia",
    cidade: "Serrinha"
  },
  {
    estado: "Bahia",
    cidade: "Sátiro Dias"
  },
  {
    estado: "Bahia",
    cidade: "São Sebastião do Passé"
  },
  {
    estado: "Bahia",
    cidade: "TANHACU"
  },
  {
    estado: "Bahia",
    cidade: "TEOFILANDIA"
  },
  {
    estado: "Bahia",
    cidade: "TEOLANDIA"
  },
  {
    estado: "Bahia",
    cidade: "Tabocas do Brejo Velho"
  },
  {
    estado: "Bahia",
    cidade: "Tanque Novo"
  },
  {
    estado: "Bahia",
    cidade: "Teixeira de Freitas"
  },
  {
    estado: "Bahia",
    cidade: "Teodoro Sampaio"
  },
  {
    estado: "Bahia",
    cidade: "Terra Nova"
  },
  {
    estado: "Bahia",
    cidade: "Tucano"
  },
  {
    estado: "Bahia",
    cidade: "UAUA"
  },
  {
    estado: "Bahia",
    cidade: "UBATA"
  },
  {
    estado: "Bahia",
    cidade: "Ubaitaba"
  },
  {
    estado: "Bahia",
    cidade: "Ubaíra"
  },
  {
    estado: "Bahia",
    cidade: "Umburanas"
  },
  {
    estado: "Bahia",
    cidade: "Una"
  },
  {
    estado: "Bahia",
    cidade: "Urandi"
  },
  {
    estado: "Bahia",
    cidade: "VALENCA"
  },
  {
    estado: "Bahia",
    cidade: "VARZEA DA ROCA"
  },
  {
    estado: "Bahia",
    cidade: "VARZEA DO POCO"
  },
  {
    estado: "Bahia",
    cidade: "VARZEA NOVA"
  },
  {
    estado: "Bahia",
    cidade: "VITORIA DA CONQUISTA"
  },
  {
    estado: "Bahia",
    cidade: "Valente"
  },
  {
    estado: "Bahia",
    cidade: "Varzedo"
  },
  {
    estado: "Bahia",
    cidade: "Vitória da Conquista"
  },
  {
    estado: "Bahia",
    cidade: "WENCESLAU GUIMARAES"
  },
  {
    estado: "Bahia",
    cidade: "Wenceslau Guimarães"
  },
  {
    estado: "Bahia",
    cidade: "Xique-xique"
  },
  {
    estado: "Ceará",
    cidade: "Amontada"
  },
  {
    estado: "Ceará",
    cidade: "Antonina do Norte"
  },
  {
    estado: "Ceará",
    cidade: "Aracoiaba"
  },
  {
    estado: "Ceará",
    cidade: "Arneiroz"
  },
  {
    estado: "Ceará",
    cidade: "Baixio"
  },
  {
    estado: "Ceará",
    cidade: "Barbalha"
  },
  {
    estado: "Ceará",
    cidade: "Barroquinha"
  },
  {
    estado: "Ceará",
    cidade: "Brejo Santo"
  },
  {
    estado: "Ceará",
    cidade: "Cascavel"
  },
  {
    estado: "Ceará",
    cidade: "Crato"
  },
  {
    estado: "Ceará",
    cidade: "Deputado Irapuan Pinheiro"
  },
  {
    estado: "Ceará",
    cidade: "EUSEBIO"
  },
  {
    estado: "Ceará",
    cidade: "Fortaleza"
  },
  {
    estado: "Ceará",
    cidade: "Guaraciaba do Norte"
  },
  {
    estado: "Ceará",
    cidade: "Horizonte"
  },
  {
    estado: "Ceará",
    cidade: "ICO"
  },
  {
    estado: "Ceará",
    cidade: "Icó"
  },
  {
    estado: "Ceará",
    cidade: "Iguatu"
  },
  {
    estado: "Ceará",
    cidade: "Ipu"
  },
  {
    estado: "Ceará",
    cidade: "Itarema"
  },
  {
    estado: "Ceará",
    cidade: "Jaguaretama"
  },
  {
    estado: "Ceará",
    cidade: "Juazeiro do Norte"
  },
  {
    estado: "Ceará",
    cidade: "MINEIROLANDIA"
  },
  {
    estado: "Ceará",
    cidade: "MISSAO VELHA"
  },
  {
    estado: "Ceará",
    cidade: "Mauriti"
  },
  {
    estado: "Ceará",
    cidade: "Milagres"
  },
  {
    estado: "Ceará",
    cidade: "Morada Nova"
  },
  {
    estado: "Ceará",
    cidade: "Morrinhos"
  },
  {
    estado: "Ceará",
    cidade: "OROS"
  },
  {
    estado: "Ceará",
    cidade: "Pacajus"
  },
  {
    estado: "Ceará",
    cidade: "Pacatuba"
  },
  {
    estado: "Ceará",
    cidade: "Paraipaba"
  },
  {
    estado: "Ceará",
    cidade: "Penaforte"
  },
  {
    estado: "Ceará",
    cidade: "QUIXADA"
  },
  {
    estado: "Ceará",
    cidade: "Russas"
  },
  {
    estado: "Ceará",
    cidade: "TAUA"
  },
  {
    estado: "Ceará",
    cidade: "Trairi"
  },
  {
    estado: "Ceará",
    cidade: "Umirim"
  },
  {
    estado: "Distrito Federal",
    cidade: "BRASILIA"
  },
  {
    estado: "Distrito Federal",
    cidade: "BRASILIA - PLANALTINA"
  },
  {
    estado: "Distrito Federal",
    cidade: "BRASILIA TAGUATINGA"
  },
  {
    estado: "Espírito Santo",
    cidade: "Alegre"
  },
  {
    estado: "Espírito Santo",
    cidade: "Anchieta"
  },
  {
    estado: "Espírito Santo",
    cidade: "Aracruz"
  },
  {
    estado: "Espírito Santo",
    cidade: "BARRA DE SAO FRANCISCO"
  },
  {
    estado: "Espírito Santo",
    cidade: "Barra de São Francisco"
  },
  {
    estado: "Espírito Santo",
    cidade: "Cachoeiro de Itapemirim"
  },
  {
    estado: "Espírito Santo",
    cidade: "Cariacica"
  },
  {
    estado: "Espírito Santo",
    cidade: "Colatina"
  },
  {
    estado: "Espírito Santo",
    cidade: "GUACUI"
  },
  {
    estado: "Espírito Santo",
    cidade: "Guarapari"
  },
  {
    estado: "Espírito Santo",
    cidade: "Ibatiba"
  },
  {
    estado: "Espírito Santo",
    cidade: "Irupi"
  },
  {
    estado: "Espírito Santo",
    cidade: "Itaguaçu"
  },
  {
    estado: "Espírito Santo",
    cidade: "Itapemirim"
  },
  {
    estado: "Espírito Santo",
    cidade: "Jerônimo Monteiro"
  },
  {
    estado: "Espírito Santo",
    cidade: "Linhares"
  },
  {
    estado: "Espírito Santo",
    cidade: "MARATAIZES"
  },
  {
    estado: "Espírito Santo",
    cidade: "Montanha"
  },
  {
    estado: "Espírito Santo",
    cidade: "Rio Novo do Sul"
  },
  {
    estado: "Espírito Santo",
    cidade: "SAO GABRIEL DA PALHA"
  },
  {
    estado: "Espírito Santo",
    cidade: "SAO MATEUS"
  },
  {
    estado: "Espírito Santo",
    cidade: "Serra"
  },
  {
    estado: "Espírito Santo",
    cidade: "Sooretama"
  },
  {
    estado: "Espírito Santo",
    cidade: "VITORIA"
  },
  {
    estado: "Espírito Santo",
    cidade: "Vila Velha"
  },
  {
    estado: "Goiás",
    cidade: "ACREUNA"
  },
  {
    estado: "Goiás",
    cidade: "ANAPOLIS"
  },
  {
    estado: "Goiás",
    cidade: "APARECIDA DE GOIANIA"
  },
  {
    estado: "Goiás",
    cidade: "Anicuns"
  },
  {
    estado: "Goiás",
    cidade: "Anápolis"
  },
  {
    estado: "Goiás",
    cidade: "BELA VISTA DE GOIAS"
  },
  {
    estado: "Goiás",
    cidade: "Bela Vista de Goiás"
  },
  {
    estado: "Goiás",
    cidade: "CACU"
  },
  {
    estado: "Goiás",
    cidade: "CAIAPONIA"
  },
  {
    estado: "Goiás",
    cidade: "Cachoeira Dourada"
  },
  {
    estado: "Goiás",
    cidade: "Caiapônia"
  },
  {
    estado: "Goiás",
    cidade: "Campos Belos"
  },
  {
    estado: "Goiás",
    cidade: "Chapadão do Céu"
  },
  {
    estado: "Goiás",
    cidade: "Cristalina"
  },
  {
    estado: "Goiás",
    cidade: "Diorama"
  },
  {
    estado: "Goiás",
    cidade: "EDEIA"
  },
  {
    estado: "Goiás",
    cidade: "Formosa"
  },
  {
    estado: "Goiás",
    cidade: "GOIANIA"
  },
  {
    estado: "Goiás",
    cidade: "Goianira"
  },
  {
    estado: "Goiás",
    cidade: "Goiatuba"
  },
  {
    estado: "Goiás",
    cidade: "Goiânia"
  },
  {
    estado: "Goiás",
    cidade: "IPORA"
  },
  {
    estado: "Goiás",
    cidade: "ITABERAI"
  },
  {
    estado: "Goiás",
    cidade: "Indiara"
  },
  {
    estado: "Goiás",
    cidade: "Inhumas"
  },
  {
    estado: "Goiás",
    cidade: "Itajá"
  },
  {
    estado: "Goiás",
    cidade: "Itarumã"
  },
  {
    estado: "Goiás",
    cidade: "JARAGUA"
  },
  {
    estado: "Goiás",
    cidade: "MINACU"
  },
  {
    estado: "Goiás",
    cidade: "MONTES CLAROS DE GOIAS"
  },
  {
    estado: "Goiás",
    cidade: "Montividiu"
  },
  {
    estado: "Goiás",
    cidade: "Morrinhos"
  },
  {
    estado: "Goiás",
    cidade: "NAZARIO"
  },
  {
    estado: "Goiás",
    cidade: "NEROPOLIS"
  },
  {
    estado: "Goiás",
    cidade: "NIQUELANDIA"
  },
  {
    estado: "Goiás",
    cidade: "Nerópolis"
  },
  {
    estado: "Goiás",
    cidade: "PALMEIRAS DE GOIAS"
  },
  {
    estado: "Goiás",
    cidade: "Piracanjuba"
  },
  {
    estado: "Goiás",
    cidade: "Pontalina"
  },
  {
    estado: "Goiás",
    cidade: "Porangatu"
  },
  {
    estado: "Goiás",
    cidade: "Posse"
  },
  {
    estado: "Goiás",
    cidade: "Rio Verde"
  },
  {
    estado: "Goiás",
    cidade: "SAO LUIS DE MONTES BELOS"
  },
  {
    estado: "Goiás",
    cidade: "SAO MIGUEL DO ARAGUAIA"
  },
  {
    estado: "Goiás",
    cidade: "SAO SIMAO"
  },
  {
    estado: "Goiás",
    cidade: "SERRANOPOLIS"
  },
  {
    estado: "Goiás",
    cidade: "SILVANIA"
  },
  {
    estado: "Goiás",
    cidade: "SIMOLANDIA"
  },
  {
    estado: "Goiás",
    cidade: "Senador Canedo"
  },
  {
    estado: "Goiás",
    cidade: "URUACU"
  },
  {
    estado: "Maranhão",
    cidade: "ACAILANDIA"
  },
  {
    estado: "Maranhão",
    cidade: "ALTAMIRA DO MARANHAO"
  },
  {
    estado: "Maranhão",
    cidade: "Amarante do Maranhão"
  },
  {
    estado: "Maranhão",
    cidade: "Anapurus"
  },
  {
    estado: "Maranhão",
    cidade: "Araioses"
  },
  {
    estado: "Maranhão",
    cidade: "Arame"
  },
  {
    estado: "Maranhão",
    cidade: "Arari"
  },
  {
    estado: "Maranhão",
    cidade: "BEQUIMAO"
  },
  {
    estado: "Maranhão",
    cidade: "Bacabal"
  },
  {
    estado: "Maranhão",
    cidade: "Balsas"
  },
  {
    estado: "Maranhão",
    cidade: "Barra do Corda"
  },
  {
    estado: "Maranhão",
    cidade: "Bernardo do Mearim"
  },
  {
    estado: "Maranhão",
    cidade: "Bom Jardim"
  },
  {
    estado: "Maranhão",
    cidade: "Brejo"
  },
  {
    estado: "Maranhão",
    cidade: "Brejo de Areia"
  },
  {
    estado: "Maranhão",
    cidade: "Buriti"
  },
  {
    estado: "Maranhão",
    cidade: "Buriti Bravo"
  },
  {
    estado: "Maranhão",
    cidade: "Buriticupu"
  },
  {
    estado: "Maranhão",
    cidade: "CAMPESTRE DO MARANHAO"
  },
  {
    estado: "Maranhão",
    cidade: "CANDIDO MENDES"
  },
  {
    estado: "Maranhão",
    cidade: "CENTRO NOVO DO MARANHAO"
  },
  {
    estado: "Maranhão",
    cidade: "CODO"
  },
  {
    estado: "Maranhão",
    cidade: "Cajari"
  },
  {
    estado: "Maranhão",
    cidade: "Caxias"
  },
  {
    estado: "Maranhão",
    cidade: "Cidelândia"
  },
  {
    estado: "Maranhão",
    cidade: "Coelho Neto"
  },
  {
    estado: "Maranhão",
    cidade: "Colinas"
  },
  {
    estado: "Maranhão",
    cidade: "Dom Pedro"
  },
  {
    estado: "Maranhão",
    cidade: "Estreito"
  },
  {
    estado: "Maranhão",
    cidade: "GONCALVES DIAS"
  },
  {
    estado: "Maranhão",
    cidade: "GRAJAU"
  },
  {
    estado: "Maranhão",
    cidade: "Graça Aranha"
  },
  {
    estado: "Maranhão",
    cidade: "IGARAPE GRANDE"
  },
  {
    estado: "Maranhão",
    cidade: "Imperatriz"
  },
  {
    estado: "Maranhão",
    cidade: "Itaipava do Grajaú"
  },
  {
    estado: "Maranhão",
    cidade: "JATOBA"
  },
  {
    estado: "Maranhão",
    cidade: "LAGOA GRANDE DO MARANHAO"
  },
  {
    estado: "Maranhão",
    cidade: "Lago da Pedra"
  },
  {
    estado: "Maranhão",
    cidade: "Lagoa do Mato"
  },
  {
    estado: "Maranhão",
    cidade: "Loreto"
  },
  {
    estado: "Maranhão",
    cidade: "MARANHAOZINHO"
  },
  {
    estado: "Maranhão",
    cidade: "MATOES"
  },
  {
    estado: "Maranhão",
    cidade: "Mirador"
  },
  {
    estado: "Maranhão",
    cidade: "OLHO D AGUA DAS CUNHAS"
  },
  {
    estado: "Maranhão",
    cidade: "PACO DO LUMIAR"
  },
  {
    estado: "Maranhão",
    cidade: "POCAO DE PEDRAS"
  },
  {
    estado: "Maranhão",
    cidade: "Parnarama"
  },
  {
    estado: "Maranhão",
    cidade: "Passagem Franca"
  },
  {
    estado: "Maranhão",
    cidade: "Pastos Bons"
  },
  {
    estado: "Maranhão",
    cidade: "Paulo Ramos"
  },
  {
    estado: "Maranhão",
    cidade: "Pedreiras"
  },
  {
    estado: "Maranhão",
    cidade: "Pindaré-mirim"
  },
  {
    estado: "Maranhão",
    cidade: "Pinheiro"
  },
  {
    estado: "Maranhão",
    cidade: "Pio Xii"
  },
  {
    estado: "Maranhão",
    cidade: "Porto Franco"
  },
  {
    estado: "Maranhão",
    cidade: "Presidente Dutra"
  },
  {
    estado: "Maranhão",
    cidade: "RIACHAO"
  },
  {
    estado: "Maranhão",
    cidade: "ROSARIO"
  },
  {
    estado: "Maranhão",
    cidade: "SANTA LUZIA DO PARUA"
  },
  {
    estado: "Maranhão",
    cidade: "SAO BENTO"
  },
  {
    estado: "Maranhão",
    cidade: "SAO DOMINGOS DO MARANHAO"
  },
  {
    estado: "Maranhão",
    cidade: "SAO JOAO DO PARAISO"
  },
  {
    estado: "Maranhão",
    cidade: "SAO JOAO DOS PATOS"
  },
  {
    estado: "Maranhão",
    cidade: "SAO JOSE DE RIBAMAR"
  },
  {
    estado: "Maranhão",
    cidade: "SAO LUIS"
  },
  {
    estado: "Maranhão",
    cidade: "SAO RAIMUNDO DO DOCA BEZERRA"
  },
  {
    estado: "Maranhão",
    cidade: "SITIO NOVO"
  },
  {
    estado: "Maranhão",
    cidade: "Santa Luzia"
  },
  {
    estado: "Maranhão",
    cidade: "Santa Rita"
  },
  {
    estado: "Maranhão",
    cidade: "Santo Antônio dos Lopes"
  },
  {
    estado: "Maranhão",
    cidade: "Senador La Rocque"
  },
  {
    estado: "Maranhão",
    cidade: "São Bernardo"
  },
  {
    estado: "Maranhão",
    cidade: "São Domingos do Maranhão"
  },
  {
    estado: "Maranhão",
    cidade: "São Pedro da Água Branca"
  },
  {
    estado: "Maranhão",
    cidade: "São Raimundo Das Mangabeiras"
  },
  {
    estado: "Maranhão",
    cidade: "Tuntum"
  },
  {
    estado: "Maranhão",
    cidade: "Viana"
  },
  {
    estado: "Maranhão",
    cidade: "Vitorino Freire"
  },
  {
    estado: "Maranhão",
    cidade: "ZE DOCA"
  },
  {
    estado: "Mato Grosso",
    cidade: "Apiacás"
  },
  {
    estado: "Mato Grosso",
    cidade: "BARRA DO GARCAS"
  },
  {
    estado: "Mato Grosso",
    cidade: "CACERES"
  },
  {
    estado: "Mato Grosso",
    cidade: "CHAPADA DOS GUIMARAES"
  },
  {
    estado: "Mato Grosso",
    cidade: "COLIDER"
  },
  {
    estado: "Mato Grosso",
    cidade: "CUIABA"
  },
  {
    estado: "Mato Grosso",
    cidade: "Confresa"
  },
  {
    estado: "Mato Grosso",
    cidade: "Cáceres"
  },
  {
    estado: "Mato Grosso",
    cidade: "GUARANTA DO NORTE"
  },
  {
    estado: "Mato Grosso",
    cidade: "Guarantã do Norte"
  },
  {
    estado: "Mato Grosso",
    cidade: "Jaciara"
  },
  {
    estado: "Mato Grosso",
    cidade: "Juara"
  },
  {
    estado: "Mato Grosso",
    cidade: "Lucas do Rio Verde"
  },
  {
    estado: "Mato Grosso",
    cidade: "MATUPA"
  },
  {
    estado: "Mato Grosso",
    cidade: "MIRASSOL D OESTE"
  },
  {
    estado: "Mato Grosso",
    cidade: "Matupá"
  },
  {
    estado: "Mato Grosso",
    cidade: "NOVA CANAA DO NORTE"
  },
  {
    estado: "Mato Grosso",
    cidade: "Nova Bandeirantes"
  },
  {
    estado: "Mato Grosso",
    cidade: "Nova Xavantina"
  },
  {
    estado: "Mato Grosso",
    cidade: "Pontes E Lacerda"
  },
  {
    estado: "Mato Grosso",
    cidade: "QUERENCIA"
  },
  {
    estado: "Mato Grosso",
    cidade: "RONDONOPOLIS"
  },
  {
    estado: "Mato Grosso",
    cidade: "Sinop"
  },
  {
    estado: "Mato Grosso",
    cidade: "TANGARA DA SERRA"
  },
  {
    estado: "Mato Grosso",
    cidade: "VARZEA GRANDE"
  },
  {
    estado: "Mato Grosso",
    cidade: "Vila Rica"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Aquidauana"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Bela Vista"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "CASSILANDIA"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "CHAPADAO DO SUL"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "CORUMBA"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Cassilândia"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Chapadão do Sul"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Costa Rica"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Coxim"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "DEODAPOLIS"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Dourados"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "INOCENCIA"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Maracaju"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Miranda"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Nioaque"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "PONTA PORA"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Ribas do Rio Pardo"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Rio Brilhante"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "Rio Verde de Mato Grosso"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "SAO GABRIEL DO OESTE"
  },
  {
    estado: "Mato Grosso do Sul",
    cidade: "TRES LAGOAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "AGUAS VERMELHAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "AIMORES"
  },
  {
    estado: "Minas Gerais",
    cidade: "ARACUAI"
  },
  {
    estado: "Minas Gerais",
    cidade: "Araguari"
  },
  {
    estado: "Minas Gerais",
    cidade: "Augusto de Lima"
  },
  {
    estado: "Minas Gerais",
    cidade: "BOA ESPERANCA"
  },
  {
    estado: "Minas Gerais",
    cidade: "BRASILANDIA DE MINAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "Bandeira do Sul"
  },
  {
    estado: "Minas Gerais",
    cidade: "Barbacena"
  },
  {
    estado: "Minas Gerais",
    cidade: "Barroso"
  },
  {
    estado: "Minas Gerais",
    cidade: "Belo Horizonte"
  },
  {
    estado: "Minas Gerais",
    cidade: "Belo Vale"
  },
  {
    estado: "Minas Gerais",
    cidade: "Berilo"
  },
  {
    estado: "Minas Gerais",
    cidade: "CANAPOLIS"
  },
  {
    estado: "Minas Gerais",
    cidade: "CAPINOPOLIS"
  },
  {
    estado: "Minas Gerais",
    cidade: "CAPITAO ENEAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "CARMOPOLIS DE MINAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "CONCEICAO DAS ALAGOAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "CORACAO DE JESUS"
  },
  {
    estado: "Minas Gerais",
    cidade: "Campina Verde"
  },
  {
    estado: "Minas Gerais",
    cidade: "Caratinga"
  },
  {
    estado: "Minas Gerais",
    cidade: "Cataguases"
  },
  {
    estado: "Minas Gerais",
    cidade: "Conselheiro Pena"
  },
  {
    estado: "Minas Gerais",
    cidade: "Contagem"
  },
  {
    estado: "Minas Gerais",
    cidade: "Corinto"
  },
  {
    estado: "Minas Gerais",
    cidade: "Coronel Murta"
  },
  {
    estado: "Minas Gerais",
    cidade: "Curvelo"
  },
  {
    estado: "Minas Gerais",
    cidade: "Desterro de Entre Rios"
  },
  {
    estado: "Minas Gerais",
    cidade: "Divisa Nova"
  },
  {
    estado: "Minas Gerais",
    cidade: "Dom Cavati"
  },
  {
    estado: "Minas Gerais",
    cidade: "Entre Rios de Minas"
  },
  {
    estado: "Minas Gerais",
    cidade: "Espinosa"
  },
  {
    estado: "Minas Gerais",
    cidade: "Extrema"
  },
  {
    estado: "Minas Gerais",
    cidade: "FRANCISCO BADARO"
  },
  {
    estado: "Minas Gerais",
    cidade: "Fortaleza de Minas"
  },
  {
    estado: "Minas Gerais",
    cidade: "Frutal"
  },
  {
    estado: "Minas Gerais",
    cidade: "Governador Valadares"
  },
  {
    estado: "Minas Gerais",
    cidade: "ITAUNA"
  },
  {
    estado: "Minas Gerais",
    cidade: "Ibirité"
  },
  {
    estado: "Minas Gerais",
    cidade: "Ipatinga"
  },
  {
    estado: "Minas Gerais",
    cidade: "Itamarandiba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Ituiutaba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Iturama"
  },
  {
    estado: "Minas Gerais",
    cidade: "JAIBA"
  },
  {
    estado: "Minas Gerais",
    cidade: "JANUARIA"
  },
  {
    estado: "Minas Gerais",
    cidade: "Japonvar"
  },
  {
    estado: "Minas Gerais",
    cidade: "Jaíba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Jenipapo de Minas"
  },
  {
    estado: "Minas Gerais",
    cidade: "Jequeri"
  },
  {
    estado: "Minas Gerais",
    cidade: "MONTALVANIA"
  },
  {
    estado: "Minas Gerais",
    cidade: "MURIAE"
  },
  {
    estado: "Minas Gerais",
    cidade: "Machado"
  },
  {
    estado: "Minas Gerais",
    cidade: "Mantena"
  },
  {
    estado: "Minas Gerais",
    cidade: "Martins Soares"
  },
  {
    estado: "Minas Gerais",
    cidade: "Mato Verde"
  },
  {
    estado: "Minas Gerais",
    cidade: "Mirabela"
  },
  {
    estado: "Minas Gerais",
    cidade: "Monte Alegre de Minas"
  },
  {
    estado: "Minas Gerais",
    cidade: "Monte Azul"
  },
  {
    estado: "Minas Gerais",
    cidade: "Montes Claros"
  },
  {
    estado: "Minas Gerais",
    cidade: "Nanuque"
  },
  {
    estado: "Minas Gerais",
    cidade: "Nepomuceno"
  },
  {
    estado: "Minas Gerais",
    cidade: "Nova Lima"
  },
  {
    estado: "Minas Gerais",
    cidade: "POCO FUNDO"
  },
  {
    estado: "Minas Gerais",
    cidade: "POMPEU"
  },
  {
    estado: "Minas Gerais",
    cidade: "POTE"
  },
  {
    estado: "Minas Gerais",
    cidade: "Paracatu"
  },
  {
    estado: "Minas Gerais",
    cidade: "Paraopeba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Pirajuba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Pirapora"
  },
  {
    estado: "Minas Gerais",
    cidade: "Porteirinha"
  },
  {
    estado: "Minas Gerais",
    cidade: "RIBEIRAO DAS NEVES"
  },
  {
    estado: "Minas Gerais",
    cidade: "Raul Soares"
  },
  {
    estado: "Minas Gerais",
    cidade: "Rio Pardo de Minas"
  },
  {
    estado: "Minas Gerais",
    cidade: "SANTA BARBARA"
  },
  {
    estado: "Minas Gerais",
    cidade: "SANTA VITORIA"
  },
  {
    estado: "Minas Gerais",
    cidade: "SERRANOPOLIS DE MINAS"
  },
  {
    estado: "Minas Gerais",
    cidade: "SIMONESIA"
  },
  {
    estado: "Minas Gerais",
    cidade: "Santa Bárbara"
  },
  {
    estado: "Minas Gerais",
    cidade: "Santo Antônio do Retiro"
  },
  {
    estado: "Minas Gerais",
    cidade: "São Francisco"
  },
  {
    estado: "Minas Gerais",
    cidade: "TEOFILO OTONI"
  },
  {
    estado: "Minas Gerais",
    cidade: "Taiobeiras"
  },
  {
    estado: "Minas Gerais",
    cidade: "Tupaciguara"
  },
  {
    estado: "Minas Gerais",
    cidade: "Turmalina"
  },
  {
    estado: "Minas Gerais",
    cidade: "UBERLANDIA"
  },
  {
    estado: "Minas Gerais",
    cidade: "UNAI"
  },
  {
    estado: "Minas Gerais",
    cidade: "Uberaba"
  },
  {
    estado: "Minas Gerais",
    cidade: "Várzea da Palma"
  },
  {
    estado: "Minas Gerais",
    cidade: "Água Boa"
  },
  {
    estado: "Paraná",
    cidade: "Alto Paraná"
  },
  {
    estado: "Paraná",
    cidade: "Alvorada do Sul"
  },
  {
    estado: "Paraná",
    cidade: "CAMBE"
  },
  {
    estado: "Paraná",
    cidade: "CAMPO MOURAO"
  },
  {
    estado: "Paraná",
    cidade: "CENTENARIO DO SUL"
  },
  {
    estado: "Paraná",
    cidade: "CORBELIA"
  },
  {
    estado: "Paraná",
    cidade: "CORNELIO PROCOPIO"
  },
  {
    estado: "Paraná",
    cidade: "Cianorte"
  },
  {
    estado: "Paraná",
    cidade: "Curitiba"
  },
  {
    estado: "Paraná",
    cidade: "FOZ DO IGUACU"
  },
  {
    estado: "Paraná",
    cidade: "FRANCISCO BELTRAO"
  },
  {
    estado: "Paraná",
    cidade: "Irati"
  },
  {
    estado: "Paraná",
    cidade: "JAGUAPITA"
  },
  {
    estado: "Paraná",
    cidade: "Jacarezinho"
  },
  {
    estado: "Paraná",
    cidade: "LUPIONOPOLIS"
  },
  {
    estado: "Paraná",
    cidade: "MARINGA"
  },
  {
    estado: "Paraná",
    cidade: "Mandaguari"
  },
  {
    estado: "Paraná",
    cidade: "Maringá"
  },
  {
    estado: "Paraná",
    cidade: "Medianeira"
  },
  {
    estado: "Paraná",
    cidade: "Ortigueira"
  },
  {
    estado: "Paraná",
    cidade: "PRUDENTOPOLIS"
  },
  {
    estado: "Paraná",
    cidade: "Rolândia"
  },
  {
    estado: "Paraná",
    cidade: "SANTO INACIO"
  },
  {
    estado: "Paraná",
    cidade: "SERTANOPOLIS"
  },
  {
    estado: "Paraná",
    cidade: "Santa Inês"
  },
  {
    estado: "Paraná",
    cidade: "Santa Mariana"
  },
  {
    estado: "Paraná",
    cidade: "Sarandi"
  },
  {
    estado: "Paraná",
    cidade: "São Miguel do Iguaçu"
  },
  {
    estado: "Paraná",
    cidade: "Umuarama"
  },
  {
    estado: "Paraíba",
    cidade: "AGUA BRANCA"
  },
  {
    estado: "Paraíba",
    cidade: "ARACAGI"
  },
  {
    estado: "Paraíba",
    cidade: "Alagoinha"
  },
  {
    estado: "Paraíba",
    cidade: "Alhandra"
  },
  {
    estado: "Paraíba",
    cidade: "Araruna"
  },
  {
    estado: "Paraíba",
    cidade: "Areia"
  },
  {
    estado: "Paraíba",
    cidade: "BOQUEIRAO"
  },
  {
    estado: "Paraíba",
    cidade: "Bayeux"
  },
  {
    estado: "Paraíba",
    cidade: "Bom Sucesso"
  },
  {
    estado: "Paraíba",
    cidade: "Brejo do Cruz"
  },
  {
    estado: "Paraíba",
    cidade: "CAAPORA"
  },
  {
    estado: "Paraíba",
    cidade: "CAICARA"
  },
  {
    estado: "Paraíba",
    cidade: "CALDAS BRANDAO"
  },
  {
    estado: "Paraíba",
    cidade: "CATOLE DO ROCHA"
  },
  {
    estado: "Paraíba",
    cidade: "CONCEICAO"
  },
  {
    estado: "Paraíba",
    cidade: "Cabedelo"
  },
  {
    estado: "Paraíba",
    cidade: "Cajazeiras"
  },
  {
    estado: "Paraíba",
    cidade: "Caldas Brandão"
  },
  {
    estado: "Paraíba",
    cidade: "Campina Grande"
  },
  {
    estado: "Paraíba",
    cidade: "Catingueira"
  },
  {
    estado: "Paraíba",
    cidade: "Condado"
  },
  {
    estado: "Paraíba",
    cidade: "Conde"
  },
  {
    estado: "Paraíba",
    cidade: "Coremas"
  },
  {
    estado: "Paraíba",
    cidade: "Cubati"
  },
  {
    estado: "Paraíba",
    cidade: "DONA INES"
  },
  {
    estado: "Paraíba",
    cidade: "Emas"
  },
  {
    estado: "Paraíba",
    cidade: "Fagundes"
  },
  {
    estado: "Paraíba",
    cidade: "Guarabira"
  },
  {
    estado: "Paraíba",
    cidade: "Ibiara"
  },
  {
    estado: "Paraíba",
    cidade: "Itabaiana"
  },
  {
    estado: "Paraíba",
    cidade: "Itaporanga"
  },
  {
    estado: "Paraíba",
    cidade: "Itapororoca"
  },
  {
    estado: "Paraíba",
    cidade: "Itatuba"
  },
  {
    estado: "Paraíba",
    cidade: "JERICO"
  },
  {
    estado: "Paraíba",
    cidade: "JOAO PESSOA"
  },
  {
    estado: "Paraíba",
    cidade: "João Pessoa"
  },
  {
    estado: "Paraíba",
    cidade: "Juripiranga"
  },
  {
    estado: "Paraíba",
    cidade: "Lagoa Seca"
  },
  {
    estado: "Paraíba",
    cidade: "Mamanguape"
  },
  {
    estado: "Paraíba",
    cidade: "Mari"
  },
  {
    estado: "Paraíba",
    cidade: "Mato Grosso"
  },
  {
    estado: "Paraíba",
    cidade: "Natuba"
  },
  {
    estado: "Paraíba",
    cidade: "Patos"
  },
  {
    estado: "Paraíba",
    cidade: "Paulista"
  },
  {
    estado: "Paraíba",
    cidade: "Pedras de Fogo"
  },
  {
    estado: "Paraíba",
    cidade: "Pilar"
  },
  {
    estado: "Paraíba",
    cidade: "Pirpirituba"
  },
  {
    estado: "Paraíba",
    cidade: "Pitimbu"
  },
  {
    estado: "Paraíba",
    cidade: "Pocinhos"
  },
  {
    estado: "Paraíba",
    cidade: "Pombal"
  },
  {
    estado: "Paraíba",
    cidade: "Prata"
  },
  {
    estado: "Paraíba",
    cidade: "Princesa Isabel"
  },
  {
    estado: "Paraíba",
    cidade: "Queimadas"
  },
  {
    estado: "Paraíba",
    cidade: "SANTA INES"
  },
  {
    estado: "Paraíba",
    cidade: "SAO JOSE DE PIRANHAS"
  },
  {
    estado: "Paraíba",
    cidade: "SAO JOSE DO BREJO DO CRUZ"
  },
  {
    estado: "Paraíba",
    cidade: "SAO JOSE DOS CORDEIROS"
  },
  {
    estado: "Paraíba",
    cidade: "SAPE"
  },
  {
    estado: "Paraíba",
    cidade: "SOLANEA"
  },
  {
    estado: "Paraíba",
    cidade: "SUME"
  },
  {
    estado: "Paraíba",
    cidade: "Santa Inês"
  },
  {
    estado: "Paraíba",
    cidade: "Santa Rita"
  },
  {
    estado: "Paraíba",
    cidade: "Sobrado"
  },
  {
    estado: "Paraíba",
    cidade: "Sousa"
  },
  {
    estado: "Paraíba",
    cidade: "São João do Cariri"
  },
  {
    estado: "Paraíba",
    cidade: "Tacima"
  },
  {
    estado: "Paraíba",
    cidade: "Tavares"
  },
  {
    estado: "Paraíba",
    cidade: "Triunfo"
  },
  {
    estado: "Paraíba",
    cidade: "Umbuzeiro"
  },
  {
    estado: "Pará",
    cidade: "ACARA"
  },
  {
    estado: "Pará",
    cidade: "AURORA DO PARA"
  },
  {
    estado: "Pará",
    cidade: "Abaetetuba"
  },
  {
    estado: "Pará",
    cidade: "Acará"
  },
  {
    estado: "Pará",
    cidade: "Ananindeua"
  },
  {
    estado: "Pará",
    cidade: "Anapu"
  },
  {
    estado: "Pará",
    cidade: "Aurora do Pará"
  },
  {
    estado: "Pará",
    cidade: "BELEM"
  },
  {
    estado: "Pará",
    cidade: "Belém"
  },
  {
    estado: "Pará",
    cidade: "Benevides"
  },
  {
    estado: "Pará",
    cidade: "Bonito"
  },
  {
    estado: "Pará",
    cidade: "Breu Branco"
  },
  {
    estado: "Pará",
    cidade: "CAMETA"
  },
  {
    estado: "Pará",
    cidade: "CANAA DOS CARAJAS"
  },
  {
    estado: "Pará",
    cidade: "CAPITAO POCO"
  },
  {
    estado: "Pará",
    cidade: "Canaã dos Carajás"
  },
  {
    estado: "Pará",
    cidade: "Capanema"
  },
  {
    estado: "Pará",
    cidade: "Conceição do Araguaia"
  },
  {
    estado: "Pará",
    cidade: "Dom Eliseu"
  },
  {
    estado: "Pará",
    cidade: "IPIXUNA DO PARA"
  },
  {
    estado: "Pará",
    cidade: "Itaituba"
  },
  {
    estado: "Pará",
    cidade: "Itupiranga"
  },
  {
    estado: "Pará",
    cidade: "JACUNDA"
  },
  {
    estado: "Pará",
    cidade: "Jacundá"
  },
  {
    estado: "Pará",
    cidade: "Juruti"
  },
  {
    estado: "Pará",
    cidade: "MAE DO RIO"
  },
  {
    estado: "Pará",
    cidade: "MARABA"
  },
  {
    estado: "Pará",
    cidade: "Marapanim"
  },
  {
    estado: "Pará",
    cidade: "Medicilândia"
  },
  {
    estado: "Pará",
    cidade: "Monte Alegre"
  },
  {
    estado: "Pará",
    cidade: "Mãe do Rio"
  },
  {
    estado: "Pará",
    cidade: "NUCLEO URBANO QUILOMETRO 30 (ITAITUBA)"
  },
  {
    estado: "Pará",
    cidade: "Novo Progresso"
  },
  {
    estado: "Pará",
    cidade: "Novo Repartimento"
  },
  {
    estado: "Pará",
    cidade: "OUREM"
  },
  {
    estado: "Pará",
    cidade: "Oriximiná"
  },
  {
    estado: "Pará",
    cidade: "PACAJA"
  },
  {
    estado: "Pará",
    cidade: "Pacajá"
  },
  {
    estado: "Pará",
    cidade: "Paragominas"
  },
  {
    estado: "Pará",
    cidade: "Parauapebas"
  },
  {
    estado: "Pará",
    cidade: "Ponta de Pedras"
  },
  {
    estado: "Pará",
    cidade: "Portel"
  },
  {
    estado: "Pará",
    cidade: "Primavera"
  },
  {
    estado: "Pará",
    cidade: "Quatipuru"
  },
  {
    estado: "Pará",
    cidade: "REDENCAO"
  },
  {
    estado: "Pará",
    cidade: "RUROPOLIS"
  },
  {
    estado: "Pará",
    cidade: "Redenção"
  },
  {
    estado: "Pará",
    cidade: "SALINOPOLIS"
  },
  {
    estado: "Pará",
    cidade: "SANTAREM"
  },
  {
    estado: "Pará",
    cidade: "SAO DOMINGOS DO ARAGUAIA"
  },
  {
    estado: "Pará",
    cidade: "SAO MIGUEL DO GUAMA"
  },
  {
    estado: "Pará",
    cidade: "Santa Isabel do Pará"
  },
  {
    estado: "Pará",
    cidade: "Santana do Araguaia"
  },
  {
    estado: "Pará",
    cidade: "Soure"
  },
  {
    estado: "Pará",
    cidade: "São Félix do Xingu"
  },
  {
    estado: "Pará",
    cidade: "São Geraldo do Araguaia"
  },
  {
    estado: "Pará",
    cidade: "TAILANDIA"
  },
  {
    estado: "Pará",
    cidade: "TOME-ACU"
  },
  {
    estado: "Pará",
    cidade: "TUCURUI"
  },
  {
    estado: "Pará",
    cidade: "Tailândia"
  },
  {
    estado: "Pará",
    cidade: "Trairão"
  },
  {
    estado: "Pará",
    cidade: "Tucumã"
  },
  {
    estado: "Pará",
    cidade: "URUARA"
  },
  {
    estado: "Pará",
    cidade: "Vigia"
  },
  {
    estado: "Pará",
    cidade: "Xinguara"
  },
  {
    estado: "Pernambuco",
    cidade: "AFRANIO"
  },
  {
    estado: "Pernambuco",
    cidade: "AGUA PRETA"
  },
  {
    estado: "Pernambuco",
    cidade: "AGUAS BELAS"
  },
  {
    estado: "Pernambuco",
    cidade: "ALIANCA"
  },
  {
    estado: "Pernambuco",
    cidade: "Abreu E Lima"
  },
  {
    estado: "Pernambuco",
    cidade: "Afogados da Ingazeira"
  },
  {
    estado: "Pernambuco",
    cidade: "Afrânio"
  },
  {
    estado: "Pernambuco",
    cidade: "Aliança"
  },
  {
    estado: "Pernambuco",
    cidade: "Amaraji"
  },
  {
    estado: "Pernambuco",
    cidade: "Angelim"
  },
  {
    estado: "Pernambuco",
    cidade: "Araripina"
  },
  {
    estado: "Pernambuco",
    cidade: "Arcoverde"
  },
  {
    estado: "Pernambuco",
    cidade: "BELEM DO SAO FRANCISCO"
  },
  {
    estado: "Pernambuco",
    cidade: "BUIQUE"
  },
  {
    estado: "Pernambuco",
    cidade: "Barreiros"
  },
  {
    estado: "Pernambuco",
    cidade: "Belo Jardim"
  },
  {
    estado: "Pernambuco",
    cidade: "Bezerros"
  },
  {
    estado: "Pernambuco",
    cidade: "Bodocó"
  },
  {
    estado: "Pernambuco",
    cidade: "Bom Conselho"
  },
  {
    estado: "Pernambuco",
    cidade: "Bonito"
  },
  {
    estado: "Pernambuco",
    cidade: "Brejinho"
  },
  {
    estado: "Pernambuco",
    cidade: "Buenos Aires"
  },
  {
    estado: "Pernambuco",
    cidade: "Buíque"
  },
  {
    estado: "Pernambuco",
    cidade: "CABROBO"
  },
  {
    estado: "Pernambuco",
    cidade: "CAETES"
  },
  {
    estado: "Pernambuco",
    cidade: "CALCADO"
  },
  {
    estado: "Pernambuco",
    cidade: "CAMOCIM DE SAO FELIX"
  },
  {
    estado: "Pernambuco",
    cidade: "CHA DE ALEGRIA"
  },
  {
    estado: "Pernambuco",
    cidade: "CUSTODIA"
  },
  {
    estado: "Pernambuco",
    cidade: "Cabo de Santo Agostinho"
  },
  {
    estado: "Pernambuco",
    cidade: "Caetés"
  },
  {
    estado: "Pernambuco",
    cidade: "Camaragibe"
  },
  {
    estado: "Pernambuco",
    cidade: "Camocim de São Félix"
  },
  {
    estado: "Pernambuco",
    cidade: "Camutanga"
  },
  {
    estado: "Pernambuco",
    cidade: "Canhotinho"
  },
  {
    estado: "Pernambuco",
    cidade: "Capoeiras"
  },
  {
    estado: "Pernambuco",
    cidade: "Carnaíba"
  },
  {
    estado: "Pernambuco",
    cidade: "Carpina"
  },
  {
    estado: "Pernambuco",
    cidade: "Caruaru"
  },
  {
    estado: "Pernambuco",
    cidade: "Casinhas"
  },
  {
    estado: "Pernambuco",
    cidade: "Catende"
  },
  {
    estado: "Pernambuco",
    cidade: "Cedro"
  },
  {
    estado: "Pernambuco",
    cidade: "Chã Grande"
  },
  {
    estado: "Pernambuco",
    cidade: "Condado"
  },
  {
    estado: "Pernambuco",
    cidade: "Correntes"
  },
  {
    estado: "Pernambuco",
    cidade: "Cortês"
  },
  {
    estado: "Pernambuco",
    cidade: "Cumaru"
  },
  {
    estado: "Pernambuco",
    cidade: "Custódia"
  },
  {
    estado: "Pernambuco",
    cidade: "Dormentes"
  },
  {
    estado: "Pernambuco",
    cidade: "Escada"
  },
  {
    estado: "Pernambuco",
    cidade: "Exu"
  },
  {
    estado: "Pernambuco",
    cidade: "Feira Nova"
  },
  {
    estado: "Pernambuco",
    cidade: "Ferreiros"
  },
  {
    estado: "Pernambuco",
    cidade: "Flores"
  },
  {
    estado: "Pernambuco",
    cidade: "Floresta"
  },
  {
    estado: "Pernambuco",
    cidade: "Frei Miguelinho"
  },
  {
    estado: "Pernambuco",
    cidade: "GLORIA DO GOITA"
  },
  {
    estado: "Pernambuco",
    cidade: "GRAVATA"
  },
  {
    estado: "Pernambuco",
    cidade: "Garanhuns"
  },
  {
    estado: "Pernambuco",
    cidade: "Goiana"
  },
  {
    estado: "Pernambuco",
    cidade: "Gravatá"
  },
  {
    estado: "Pernambuco",
    cidade: "ITAIBA"
  },
  {
    estado: "Pernambuco",
    cidade: "ITAMBE"
  },
  {
    estado: "Pernambuco",
    cidade: "Ibimirim"
  },
  {
    estado: "Pernambuco",
    cidade: "Ipojuca"
  },
  {
    estado: "Pernambuco",
    cidade: "Ipubi"
  },
  {
    estado: "Pernambuco",
    cidade: "Itambé"
  },
  {
    estado: "Pernambuco",
    cidade: "Itapissuma"
  },
  {
    estado: "Pernambuco",
    cidade: "Itaquitinga"
  },
  {
    estado: "Pernambuco",
    cidade: "JABOATAO DOS GUARARAPES"
  },
  {
    estado: "Pernambuco",
    cidade: "JOAO ALFREDO"
  },
  {
    estado: "Pernambuco",
    cidade: "Jaboatão dos Guararapes"
  },
  {
    estado: "Pernambuco",
    cidade: "Jaqueira"
  },
  {
    estado: "Pernambuco",
    cidade: "Joaquim Nabuco"
  },
  {
    estado: "Pernambuco",
    cidade: "Lagoa Grande"
  },
  {
    estado: "Pernambuco",
    cidade: "Lagoa do Carro"
  },
  {
    estado: "Pernambuco",
    cidade: "Lagoa do Itaenga"
  },
  {
    estado: "Pernambuco",
    cidade: "Lagoa do Ouro"
  },
  {
    estado: "Pernambuco",
    cidade: "Lajedo"
  },
  {
    estado: "Pernambuco",
    cidade: "Limoeiro"
  },
  {
    estado: "Pernambuco",
    cidade: "MOREILANDIA"
  },
  {
    estado: "Pernambuco",
    cidade: "Macaparana"
  },
  {
    estado: "Pernambuco",
    cidade: "Machados"
  },
  {
    estado: "Pernambuco",
    cidade: "Manari"
  },
  {
    estado: "Pernambuco",
    cidade: "Maraial"
  },
  {
    estado: "Pernambuco",
    cidade: "Mirandiba"
  },
  {
    estado: "Pernambuco",
    cidade: "NAZARE DA MATA"
  },
  {
    estado: "Pernambuco",
    cidade: "NOSSA SENHORA DO O"
  },
  {
    estado: "Pernambuco",
    cidade: "OROBO"
  },
  {
    estado: "Pernambuco",
    cidade: "OROCO"
  },
  {
    estado: "Pernambuco",
    cidade: "Olinda"
  },
  {
    estado: "Pernambuco",
    cidade: "Ouricuri"
  },
  {
    estado: "Pernambuco",
    cidade: "PETROLANDIA"
  },
  {
    estado: "Pernambuco",
    cidade: "Palmares"
  },
  {
    estado: "Pernambuco",
    cidade: "Palmeirina"
  },
  {
    estado: "Pernambuco",
    cidade: "Panelas"
  },
  {
    estado: "Pernambuco",
    cidade: "Parnamirim"
  },
  {
    estado: "Pernambuco",
    cidade: "Passira"
  },
  {
    estado: "Pernambuco",
    cidade: "Paudalho"
  },
  {
    estado: "Pernambuco",
    cidade: "Pesqueira"
  },
  {
    estado: "Pernambuco",
    cidade: "Petrolina"
  },
  {
    estado: "Pernambuco",
    cidade: "Petrolândia"
  },
  {
    estado: "Pernambuco",
    cidade: "Pombos"
  },
  {
    estado: "Pernambuco",
    cidade: "Primavera"
  },
  {
    estado: "Pernambuco",
    cidade: "RIBEIRAO"
  },
  {
    estado: "Pernambuco",
    cidade: "Recife"
  },
  {
    estado: "Pernambuco",
    cidade: "Riacho Das Almas"
  },
  {
    estado: "Pernambuco",
    cidade: "Ribeirão"
  },
  {
    estado: "Pernambuco",
    cidade: "Rio Formoso"
  },
  {
    estado: "Pernambuco",
    cidade: "SANTA MARIA DO CAMBUCA"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO BENEDITO DO SUL"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO BENTO DO UNA"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO CAITANO"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO JOAQUIM DO MONTE"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO JOSE DA COROA GRANDE"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO JOSE DO BELMONTE"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO JOSE DO EGITO"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO LOURENCO DA MATA"
  },
  {
    estado: "Pernambuco",
    cidade: "SAO VICENTE FERRER"
  },
  {
    estado: "Pernambuco",
    cidade: "SERTANIA"
  },
  {
    estado: "Pernambuco",
    cidade: "SIRIJI"
  },
  {
    estado: "Pernambuco",
    cidade: "SIRINHAEM"
  },
  {
    estado: "Pernambuco",
    cidade: "Sairé"
  },
  {
    estado: "Pernambuco",
    cidade: "Salgueiro"
  },
  {
    estado: "Pernambuco",
    cidade: "Saloá"
  },
  {
    estado: "Pernambuco",
    cidade: "Santa Cruz da Baixa Verde"
  },
  {
    estado: "Pernambuco",
    cidade: "Santa Cruz do Capibaribe"
  },
  {
    estado: "Pernambuco",
    cidade: "Santa Maria da Boa Vista"
  },
  {
    estado: "Pernambuco",
    cidade: "Serra Talhada"
  },
  {
    estado: "Pernambuco",
    cidade: "Serrita"
  },
  {
    estado: "Pernambuco",
    cidade: "Sertânia"
  },
  {
    estado: "Pernambuco",
    cidade: "Surubim"
  },
  {
    estado: "Pernambuco",
    cidade: "São Caitano"
  },
  {
    estado: "Pernambuco",
    cidade: "São José do Belmonte"
  },
  {
    estado: "Pernambuco",
    cidade: "São José do Egito"
  },
  {
    estado: "Pernambuco",
    cidade: "São Lourenço da Mata"
  },
  {
    estado: "Pernambuco",
    cidade: "São Vicente Ferrer"
  },
  {
    estado: "Pernambuco",
    cidade: "TAMANDARE"
  },
  {
    estado: "Pernambuco",
    cidade: "TIMBAUBA"
  },
  {
    estado: "Pernambuco",
    cidade: "TRACUNHAEM"
  },
  {
    estado: "Pernambuco",
    cidade: "Tabira"
  },
  {
    estado: "Pernambuco",
    cidade: "Taquaritinga do Norte"
  },
  {
    estado: "Pernambuco",
    cidade: "Terezinha"
  },
  {
    estado: "Pernambuco",
    cidade: "Terra Nova"
  },
  {
    estado: "Pernambuco",
    cidade: "Timbaúba"
  },
  {
    estado: "Pernambuco",
    cidade: "Toritama"
  },
  {
    estado: "Pernambuco",
    cidade: "Trindade"
  },
  {
    estado: "Pernambuco",
    cidade: "Triunfo"
  },
  {
    estado: "Pernambuco",
    cidade: "Tupanatinga"
  },
  {
    estado: "Pernambuco",
    cidade: "Tuparetama"
  },
  {
    estado: "Pernambuco",
    cidade: "VERTENTE DO LERIO"
  },
  {
    estado: "Pernambuco",
    cidade: "VICENCIA"
  },
  {
    estado: "Pernambuco",
    cidade: "VITORIA DE SANTO ANTAO"
  },
  {
    estado: "Pernambuco",
    cidade: "Venturosa"
  },
  {
    estado: "Pernambuco",
    cidade: "Verdejante"
  },
  {
    estado: "Pernambuco",
    cidade: "Vertentes"
  },
  {
    estado: "Pernambuco",
    cidade: "Vicência"
  },
  {
    estado: "Pernambuco",
    cidade: "Vitória de Santo Antão"
  },
  {
    estado: "Pernambuco",
    cidade: "XEXEU"
  },
  {
    estado: "Pernambuco",
    cidade: "Xexéu"
  },
  {
    estado: "Piauí",
    cidade: "ACAUA"
  },
  {
    estado: "Piauí",
    cidade: "ALEGRETE DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "BELEM DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "Baixa Grande do Ribeiro"
  },
  {
    estado: "Piauí",
    cidade: "Barras"
  },
  {
    estado: "Piauí",
    cidade: "Barro Duro"
  },
  {
    estado: "Piauí",
    cidade: "Batalha"
  },
  {
    estado: "Piauí",
    cidade: "Beneditinos"
  },
  {
    estado: "Piauí",
    cidade: "Bom Jesus"
  },
  {
    estado: "Piauí",
    cidade: "Canto do Buriti"
  },
  {
    estado: "Piauí",
    cidade: "Floriano"
  },
  {
    estado: "Piauí",
    cidade: "Francisco Santos"
  },
  {
    estado: "Piauí",
    cidade: "Guadalupe"
  },
  {
    estado: "Piauí",
    cidade: "JAICOS"
  },
  {
    estado: "Piauí",
    cidade: "Jaicós"
  },
  {
    estado: "Piauí",
    cidade: "Joca Marques"
  },
  {
    estado: "Piauí",
    cidade: "LAGOA DO BARRO DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "MARCOLANDIA"
  },
  {
    estado: "Piauí",
    cidade: "MONSENHOR HIPOLITO"
  },
  {
    estado: "Piauí",
    cidade: "Marcolândia"
  },
  {
    estado: "Piauí",
    cidade: "Oeiras"
  },
  {
    estado: "Piauí",
    cidade: "PARNAIBA"
  },
  {
    estado: "Piauí",
    cidade: "Paulistana"
  },
  {
    estado: "Piauí",
    cidade: "Picos"
  },
  {
    estado: "Piauí",
    cidade: "Pimenteiras"
  },
  {
    estado: "Piauí",
    cidade: "Pio Ix"
  },
  {
    estado: "Piauí",
    cidade: "Piripiri"
  },
  {
    estado: "Piauí",
    cidade: "SAO FELIX DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "SAO JOAO DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "SAO JOSE DO PIAUI"
  },
  {
    estado: "Piauí",
    cidade: "SAO JULIAO"
  },
  {
    estado: "Piauí",
    cidade: "SAO RAIMUNDO NONATO"
  },
  {
    estado: "Piauí",
    cidade: "SIMPLICIO MENDES"
  },
  {
    estado: "Piauí",
    cidade: "São João do Piauí"
  },
  {
    estado: "Piauí",
    cidade: "São Raimundo Nonato"
  },
  {
    estado: "Piauí",
    cidade: "Teresina"
  },
  {
    estado: "Piauí",
    cidade: "Valença do Piauí"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "ACU"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "ARES"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Alto do Rodrigues"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Angicos"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Areia Branca"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "BAIA FORMOSA"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Brejinho"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Canguaretama"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Currais Novos"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "GUAMARE"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "JANDAIRA"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "LUIS GOMES"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Lajes"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "MOSSORO"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Mossoró"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Natal"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Nova Cruz"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Ouro Branco"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "PENDENCIAS"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Parelhas"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Parnamirim"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Passa E Fica"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Pedro Avelino"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Pedro Velho"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Riachuelo"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Ruy Barbosa"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "SANTO ANTONIO"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "SAO GONCALO DO AMARANTE"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "SAO JOSE DO CAMPESTRE"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "SAO MIGUEL"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "SAO PAULO DO POTENGI"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Santa Cruz"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Serrinha"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "TANGARA"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Tenente Laurentino Cruz"
  },
  {
    estado: "Rio Grande do Norte",
    cidade: "Touros"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "Caxias do Sul"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "DOIS IRMAOS"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "Itaqui"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "Novo Hamburgo"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "Porto Alegre"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "SAO LEOPOLDO"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "SAO LOURENCO DO SUL"
  },
  {
    estado: "Rio Grande do Sul",
    cidade: "Sapiranga"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "APERIBE"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "ARMACAO DOS BUZIOS"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Angra dos Reis"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Cachoeiras de Macacu"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Campos dos Goytacazes"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Cordeiro"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Duque de Caxias"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "ITABORAI"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "ITAGUAI"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Itaperuna"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "MACAE"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "MAGE"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Maricá"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Miracema"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Rio Bonito"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Rio Das Ostras"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "Rio de Janeiro"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "SANTO ANTONIO DE PADUA"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "SAO FRANCISCO DE ITABAPOANA"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "SAO GONCALO"
  },
  {
    estado: "Rio de Janeiro",
    cidade: "SAO JOSE DE UBA"
  },
  {
    estado: "Rondônia",
    cidade: "Ariquemes"
  },
  {
    estado: "Rondônia",
    cidade: "Buritis"
  },
  {
    estado: "Rondônia",
    cidade: "Cacoal"
  },
  {
    estado: "Rondônia",
    cidade: "JI-PARANA"
  },
  {
    estado: "Rondônia",
    cidade: "Jaru"
  },
  {
    estado: "Rondônia",
    cidade: "Ji-paraná"
  },
  {
    estado: "Rondônia",
    cidade: "MACHADINHO DOESTE"
  },
  {
    estado: "Rondônia",
    cidade: "NOVA BRASILANDIA D OESTE"
  },
  {
    estado: "Rondônia",
    cidade: "Ouro Preto do Oeste"
  },
  {
    estado: "Rondônia",
    cidade: "PRESIDENTE MEDICI"
  },
  {
    estado: "Rondônia",
    cidade: "Pimenta Bueno"
  },
  {
    estado: "Rondônia",
    cidade: "Porto Velho"
  },
  {
    estado: "Rondônia",
    cidade: "Rolim de Moura"
  },
  {
    estado: "Rondônia",
    cidade: "URUPA"
  },
  {
    estado: "Rondônia",
    cidade: "Vilhena"
  },
  {
    estado: "Santa Catarina",
    cidade: "Blumenau"
  },
  {
    estado: "Santa Catarina",
    cidade: "Brusque"
  },
  {
    estado: "Santa Catarina",
    cidade: "CACADOR"
  },
  {
    estado: "Santa Catarina",
    cidade: "CUNHA PORA"
  },
  {
    estado: "Santa Catarina",
    cidade: "FLORIANOPOLIS"
  },
  {
    estado: "Santa Catarina",
    cidade: "ICARA"
  },
  {
    estado: "Santa Catarina",
    cidade: "ITAJAI"
  },
  {
    estado: "Santa Catarina",
    cidade: "Ibirama"
  },
  {
    estado: "Santa Catarina",
    cidade: "Ipira"
  },
  {
    estado: "Santa Catarina",
    cidade: "JARAGUA DO SUL"
  },
  {
    estado: "Santa Catarina",
    cidade: "Luiz Alves"
  },
  {
    estado: "Santa Catarina",
    cidade: "Navegantes"
  },
  {
    estado: "Santa Catarina",
    cidade: "Nova Veneza"
  },
  {
    estado: "Santa Catarina",
    cidade: "PRESIDENTE GETULIO"
  },
  {
    estado: "Santa Catarina",
    cidade: "Pomerode"
  },
  {
    estado: "Santa Catarina",
    cidade: "Rio do Sul"
  },
  {
    estado: "Sergipe",
    cidade: "Aracaju"
  },
  {
    estado: "Sergipe",
    cidade: "Barra dos Coqueiros"
  },
  {
    estado: "Sergipe",
    cidade: "CARMOPOLIS"
  },
  {
    estado: "Sergipe",
    cidade: "CRISTINAPOLIS"
  },
  {
    estado: "Sergipe",
    cidade: "Campo do Brito"
  },
  {
    estado: "Sergipe",
    cidade: "Carira"
  },
  {
    estado: "Sergipe",
    cidade: "Carmópolis"
  },
  {
    estado: "Sergipe",
    cidade: "ESTANCIA"
  },
  {
    estado: "Sergipe",
    cidade: "Frei Paulo"
  },
  {
    estado: "Sergipe",
    cidade: "Ilha Das Flores"
  },
  {
    estado: "Sergipe",
    cidade: "Itabaianinha"
  },
  {
    estado: "Sergipe",
    cidade: "Japaratuba"
  },
  {
    estado: "Sergipe",
    cidade: "Lagarto"
  },
  {
    estado: "Sergipe",
    cidade: "Laranjeiras"
  },
  {
    estado: "Sergipe",
    cidade: "Malhada dos Bois"
  },
  {
    estado: "Sergipe",
    cidade: "Malhador"
  },
  {
    estado: "Sergipe",
    cidade: "Maruim"
  },
  {
    estado: "Sergipe",
    cidade: "Moita Bonita"
  },
  {
    estado: "Sergipe",
    cidade: "Monte Alegre de Sergipe"
  },
  {
    estado: "Sergipe",
    cidade: "NEOPOLIS"
  },
  {
    estado: "Sergipe",
    cidade: "NOSSA SENHORA DA GLORIA"
  },
  {
    estado: "Sergipe",
    cidade: "Neópolis"
  },
  {
    estado: "Sergipe",
    cidade: "Nossa Senhora da Glória"
  },
  {
    estado: "Sergipe",
    cidade: "Nossa Senhora de Lourdes"
  },
  {
    estado: "Sergipe",
    cidade: "Nossa Senhora do Socorro"
  },
  {
    estado: "Sergipe",
    cidade: "PINHAO"
  },
  {
    estado: "Sergipe",
    cidade: "POCO REDONDO"
  },
  {
    estado: "Sergipe",
    cidade: "PROPRIA"
  },
  {
    estado: "Sergipe",
    cidade: "Porto da Folha"
  },
  {
    estado: "Sergipe",
    cidade: "Propriá"
  },
  {
    estado: "Sergipe",
    cidade: "ROSARIO DO CATETE"
  },
  {
    estado: "Sergipe",
    cidade: "SANTANA DO SAO FRANCISCO"
  },
  {
    estado: "Sergipe",
    cidade: "SAO CRISTOVAO"
  },
  {
    estado: "Sergipe",
    cidade: "SIMAO DIAS"
  },
  {
    estado: "Sergipe",
    cidade: "Santo Amaro Das Brotas"
  },
  {
    estado: "Sergipe",
    cidade: "São Cristóvão"
  },
  {
    estado: "Sergipe",
    cidade: "Tobias Barreto"
  },
  {
    estado: "Sergipe",
    cidade: "UMBAUBA"
  },
  {
    estado: "São Paulo",
    cidade: "Americana"
  },
  {
    estado: "São Paulo",
    cidade: "Andradina"
  },
  {
    estado: "São Paulo",
    cidade: "Atibaia"
  },
  {
    estado: "São Paulo",
    cidade: "Barra Bonita"
  },
  {
    estado: "São Paulo",
    cidade: "Barretos"
  },
  {
    estado: "São Paulo",
    cidade: "Birigui"
  },
  {
    estado: "São Paulo",
    cidade: "Cajamar"
  },
  {
    estado: "São Paulo",
    cidade: "Campinas"
  },
  {
    estado: "São Paulo",
    cidade: "Cotia"
  },
  {
    estado: "São Paulo",
    cidade: "Diadema"
  },
  {
    estado: "São Paulo",
    cidade: "Dumont"
  },
  {
    estado: "São Paulo",
    cidade: "Franca"
  },
  {
    estado: "São Paulo",
    cidade: "GUAIRA"
  },
  {
    estado: "São Paulo",
    cidade: "Guaraci"
  },
  {
    estado: "São Paulo",
    cidade: "Guarulhos"
  },
  {
    estado: "São Paulo",
    cidade: "HORTOLANDIA"
  },
  {
    estado: "São Paulo",
    cidade: "IBITIUVA"
  },
  {
    estado: "São Paulo",
    cidade: "IGARACU DO TIETE"
  },
  {
    estado: "São Paulo",
    cidade: "IRAPUA"
  },
  {
    estado: "São Paulo",
    cidade: "ITAPOLIS"
  },
  {
    estado: "São Paulo",
    cidade: "ITARARE"
  },
  {
    estado: "São Paulo",
    cidade: "Itapevi"
  },
  {
    estado: "São Paulo",
    cidade: "Itupeva"
  },
  {
    estado: "São Paulo",
    cidade: "Ituverava"
  },
  {
    estado: "São Paulo",
    cidade: "JAGUARIUNA"
  },
  {
    estado: "São Paulo",
    cidade: "JARDINOPOLIS"
  },
  {
    estado: "São Paulo",
    cidade: "Jaboticabal"
  },
  {
    estado: "São Paulo",
    cidade: "Jales"
  },
  {
    estado: "São Paulo",
    cidade: "LENCOIS PAULISTA"
  },
  {
    estado: "São Paulo",
    cidade: "LUIS ANTONIO"
  },
  {
    estado: "São Paulo",
    cidade: "Lourdes"
  },
  {
    estado: "São Paulo",
    cidade: "MIRANDOPOLIS"
  },
  {
    estado: "São Paulo",
    cidade: "Macaubal"
  },
  {
    estado: "São Paulo",
    cidade: "Mococa"
  },
  {
    estado: "São Paulo",
    cidade: "Monte Alto"
  },
  {
    estado: "São Paulo",
    cidade: "Nova Granada"
  },
  {
    estado: "São Paulo",
    cidade: "Nova Odessa"
  },
  {
    estado: "São Paulo",
    cidade: "ORLANDIA"
  },
  {
    estado: "São Paulo",
    cidade: "PRADOPOLIS"
  },
  {
    estado: "São Paulo",
    cidade: "Piracicaba"
  },
  {
    estado: "São Paulo",
    cidade: "Pitangueiras"
  },
  {
    estado: "São Paulo",
    cidade: "Pontal"
  },
  {
    estado: "São Paulo",
    cidade: "Porto Feliz"
  },
  {
    estado: "São Paulo",
    cidade: "Praia Grande"
  },
  {
    estado: "São Paulo",
    cidade: "RIBEIRAO PRETO"
  },
  {
    estado: "São Paulo",
    cidade: "SANTA BARBARA DOESTE"
  },
  {
    estado: "São Paulo",
    cidade: "SANTO ANDRE"
  },
  {
    estado: "São Paulo",
    cidade: "SAO BERNARDO DO CAMPO"
  },
  {
    estado: "São Paulo",
    cidade: "SAO CAETANO DO SUL"
  },
  {
    estado: "São Paulo",
    cidade: "SAO JOSE DO RIO PRETO"
  },
  {
    estado: "São Paulo",
    cidade: "SAO PAULO"
  },
  {
    estado: "São Paulo",
    cidade: "SAO SEBASTIAO"
  },
  {
    estado: "São Paulo",
    cidade: "SERTAOZINHO"
  },
  {
    estado: "São Paulo",
    cidade: "SUMARE"
  },
  {
    estado: "São Paulo",
    cidade: "Salto"
  },
  {
    estado: "São Paulo",
    cidade: "Santos"
  },
  {
    estado: "São Paulo",
    cidade: "Serrana"
  },
  {
    estado: "São Paulo",
    cidade: "Sorocaba"
  },
  {
    estado: "São Paulo",
    cidade: "TATUI"
  },
  {
    estado: "São Paulo",
    cidade: "TAUBATE"
  },
  {
    estado: "São Paulo",
    cidade: "VARZEA PAULISTA"
  },
  {
    estado: "São Paulo",
    cidade: "Viradouro"
  },
  {
    estado: "Tocantins",
    cidade: "ALIANCA DO TOCANTINS"
  },
  {
    estado: "Tocantins",
    cidade: "ANANAS"
  },
  {
    estado: "Tocantins",
    cidade: "ARAGUAINA"
  },
  {
    estado: "Tocantins",
    cidade: "AUGUSTINOPOLIS"
  },
  {
    estado: "Tocantins",
    cidade: "Araguatins"
  },
  {
    estado: "Tocantins",
    cidade: "Araguaína"
  },
  {
    estado: "Tocantins",
    cidade: "Augustinópolis"
  },
  {
    estado: "Tocantins",
    cidade: "BABACULANDIA"
  },
  {
    estado: "Tocantins",
    cidade: "BARROLANDIA"
  },
  {
    estado: "Tocantins",
    cidade: "Buriti do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "Cachoeirinha"
  },
  {
    estado: "Tocantins",
    cidade: "Colinas do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "Dianópolis"
  },
  {
    estado: "Tocantins",
    cidade: "Divinópolis do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "Esperantina"
  },
  {
    estado: "Tocantins",
    cidade: "GUARAI"
  },
  {
    estado: "Tocantins",
    cidade: "Gurupi"
  },
  {
    estado: "Tocantins",
    cidade: "Itacajá"
  },
  {
    estado: "Tocantins",
    cidade: "MURICILANDIA"
  },
  {
    estado: "Tocantins",
    cidade: "Miranorte"
  },
  {
    estado: "Tocantins",
    cidade: "Nazaré"
  },
  {
    estado: "Tocantins",
    cidade: "Nova Olinda"
  },
  {
    estado: "Tocantins",
    cidade: "PARAISO DO TOCANTINS"
  },
  {
    estado: "Tocantins",
    cidade: "Palmas"
  },
  {
    estado: "Tocantins",
    cidade: "Paraíso do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "Pau D Arco"
  },
  {
    estado: "Tocantins",
    cidade: "Pedro Afonso"
  },
  {
    estado: "Tocantins",
    cidade: "Pequizeiro"
  },
  {
    estado: "Tocantins",
    cidade: "Porto Nacional"
  },
  {
    estado: "Tocantins",
    cidade: "São Bento do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "Sítio Novo do Tocantins"
  },
  {
    estado: "Tocantins",
    cidade: "TOCANTINOPOLIS"
  },
  {
    estado: "Tocantins",
    cidade: "Taguatinga"
  },
  {
    estado: "Tocantins",
    cidade: "Tocantinópolis"
  },
  {
    estado: "Tocantins",
    cidade: "Xambioá"
  }
];