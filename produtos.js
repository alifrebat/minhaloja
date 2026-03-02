let produtos = [
    {
        id: 1,
        descricao: 'Arroz Integral Orgânico',
        descricao_detalhada: 'Cultivado com as melhores prática ambientalmente e socialmente responsável',
        valor: 12.00,
        unidade: 'Kg',
        estoque: 120,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/arroz_integral.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 1,
                secao: 'Grãos'
            }
        }
    },
    {
        id: 2,
        descricao: 'Feijão Carioca Orgânico',
        descricao_detalhada: 'Cultivado com as melhores prática ambientalmente e socialmente responsável',
        valor: 8.60,
        unidade: 'Kg',
        estoque: 100,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/feijao_carioca.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 1,
                secao: 'Grãos'
            }
        }
    },
    {
        id: 3,
        descricao: 'Arroz Branco',
        descricao_detalhada: 'Produzido pelo método tradicional',
        valor: 5.30,
        unidade: 'Kg',
        estoque: 200,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/arroz_branco.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 1,
                secao: 'Grãos'
            }
        }
    },
    {
        id: 3,
        descricao: 'Feijão Preto',
        descricao_detalhada: 'Produzido pelo método tradicional',
        valor: 8.50,
        unidade: 'Kg',
        estoque: 80,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/feijao_preto.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 1,
                secao: 'Grãos'
            }
        }
    },
    {
        id: 4,
        descricao: 'Cenoura',
        descricao_detalhada: 'Produzido pelo método tradicional',
        valor: 2.30,
        unidade: 'Kg',
        estoque: 20,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cenoura.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 5,
        descricao: 'Abóbora',
        descricao_detalhada: 'Produzido por irrigação',
        valor: 5.40,
        unidade: 'Kg',
        estoque: 30,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/abobora.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 6,
        descricao: 'Beterraba',
        descricao_detalhada: 'Produzido por irrigação',
        valor: 12.00,
        unidade: 'Kg',
        estoque: 15,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/beterraba.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 7,
        descricao: 'Abacaxi',
        descricao_detalhada: 'Produzido pelo método tradiconal',
        valor: 5.60,
        unidade: 'und',
        estoque: 50,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/abacaxi.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 8,
        descricao: 'Laranja',
        descricao_detalhada: 'Produzido pelo método tradiconal',
        valor: 10.00,
        unidade: 'saco',
        estoque: 100,
        unidade_estoque: 'saco',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/laranja.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 9,
        descricao: 'Couve',
        descricao_detalhada: 'Produzido por Irrigação ',
        valor: 1.50,
        unidade: 'maço',
        estoque: 20,
        unidade_estoque: 'maço',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/couve.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 10,
        descricao: 'Coentro',
        descricao_detalhada: 'Produzido por Irrigação ',
        valor: 2.50,
        unidade: 'maço',
        estoque: 20,
        unidade_estoque: 'maço',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/coentro.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 11,
        descricao: 'Cebolinha',
        descricao_detalhada: 'Produzido por Irrigação ',
        valor: 1.20,
        unidade: 'maço',
        estoque: 30,
        unidade_estoque: 'maço',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cebolinha.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 12,
        descricao: 'Alface',
        descricao_detalhada: 'Produzido por Irrigação ',
        valor: 1.50,
        unidade: 'maço',
        estoque: 15,
        unidade_estoque: 'maço',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/alface.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 13,
        descricao: 'Tomate',
        descricao_detalhada: 'Produzido pelo método tradicional ',
        valor: 5.50,
        unidade: 'Kg',
        estoque: 40,
        unidade_estoque: 'Kg',
        promocao: 'n',
        destaque: 's',
        caminho_imagem: 'imagens/produtos/tomate.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 14,
        descricao: 'Macaxeira',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 5.80,
        unidade: 'kg',
        estoque: 25,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/macaxeira.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 15,
        descricao: 'Inhame',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 4.10,
        unidade: 'kg',
        estoque: 20,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/inhame.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 16,
        descricao: 'Pimentão verde',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/pimentao_verde.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 17,
        descricao: 'Banana Prata',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 5.30,
        unidade: 'Dúzia',
        estoque: 30,
        unidade_estoque: 'Dúzia',
        promocao: 'n',
        destaque: 's',
        caminho_imagem: 'imagens/produtos/banana_prata.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 18,
        descricao: 'Orégano',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 10.30,
        unidade: 'g',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/oregano.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 19,
        descricao: 'Melancia',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 10.00,
        unidade: 'und',
        estoque: 45,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/melancia.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 20,
        descricao: 'Goiaba',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 10.50,
        unidade: 'kg',
        estoque: 0,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/goiaba.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 21,
        descricao: 'Cereja',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 18.50,
        unidade: 'kg',
        estoque: 0,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 's',
        caminho_imagem: 'imagens/produtos/cereja.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 22,
        descricao: 'Alho Poro',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 20.50,
        unidade: 'kg',
        estoque: 0,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/alho_poro.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 4,
                secao: 'Verdura'
            }
        }
    },
    {
        id: 23,
        descricao: 'Graviola',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 14.00,
        unidade: 'kg',
        estoque: 5,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/graviola.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 24,
        descricao: 'Farinha Fina',
        descricao_detalhada: 'Produzido artesanal',
        valor: 5.00,
        unidade: 'kg',
        estoque: 100,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/farinha_fina.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 5,
                secao: 'Farináceos'
            }
        }
    },
    {
        id: 25,
        descricao: 'Farinha Média',
        descricao_detalhada: 'Produzido artesanal',
        valor: 5.00,
        unidade: 'kg',
        estoque: 80,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/farinha_media.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 5,
                secao: 'Farináceos'
            }
        }
    },
    {
        id: 26,
        descricao: 'Farinha Grossa',
        descricao_detalhada: 'Produzido artesanal',
        valor: 4.50,
        unidade: 'kg',
        estoque: 20,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 's',
        caminho_imagem: 'imagens/produtos/farinha_grossa.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 5,
                secao: 'Farináceos'
            }
        }
    },
    {
        id: 27,
        descricao: 'Quiabo',
        descricao_detalhada: 'Produzido pelo métodos tradicional',
        valor: 5.30,
        unidade: 'kg',
        estoque: 100,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/quiabo.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 28,
        descricao: 'Maçã',
        descricao_detalhada: 'Produzido pelo métodos tradicional',
        valor: 4.80,
        unidade: 'kg',
        estoque: 30,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/maca.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 29,
        descricao: 'Uva',
        descricao_detalhada: 'Produzido pelo métodos tradicional',
        valor: 6.20,
        unidade: 'kg',
        estoque: 50,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/uva.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 30,
        descricao: 'Alho',
        descricao_detalhada: 'Produzido pelo métodos tradicional',
        valor: 27.00,
        unidade: 'kg',
        estoque: 20,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/alho.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 31,
        descricao: 'Macarrão',
        descricao_detalhada: 'Pacote de 1kg',
        valor: 5.30,
        unidade: 'ptc',
        estoque: 100,
        unidade_estoque: 'ptc',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/macarrao.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 1,
                secao: 'Alimento'
            }
        }
    },
    {
        id: 32,
        descricao: 'Açúcar',
        descricao_detalhada: 'Pacote de 1kg',
        valor: 6.10,
        unidade: 'ptc',
        estoque: 90,
        unidade_estoque: 'ptc',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/acucar.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 1,
                secao: 'Alimento'
            }
        }
    },
    {
        id: 33,
        descricao: 'Leite',
        descricao_detalhada: 'Caixa de 1kg',
        valor: 5.90,
        unidade: 'cx',
        estoque: 150,
        unidade_estoque: 'cx',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/leite.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 1,
                secao: 'Alimento'
            }
        }
    },
    {
        id: 34,
        descricao: 'Café',
        descricao_detalhada: 'Caixa de 1kg',
        valor: 8.90,
        unidade: 'cx',
        estoque: 80,
        unidade_estoque: 'cx',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cafe.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 1,
                secao: 'Alimento'
            }
        }
    },
    {
        id: 36,
        descricao: 'Ervilha',
        descricao_detalhada: 'lata 170g',
        valor: 3.80,
        unidade: 'Lata',
        estoque: 30,
        unidade_estoque: 'Lata',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/ervilha.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 2,
                secao: 'Enlatados'
            }
        }
    },
    {
        id: 37,
        descricao: 'Milho',
        descricao_detalhada: 'lata 170g',
        valor: 6.40,
        unidade: 'Lata',
        estoque: 40,
        unidade_estoque: 'Lata',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/milho.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 2,
                secao: 'Enlatados'
            }
        }
    },
    {
        id: 42,
        descricao: 'Chá',
        descricao_detalhada: 'Caixa 15g',
        valor: 5.20,
        unidade: 'cx',
        estoque: 10,
        unidade_estoque: 'cx',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cha.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 3,
                secao: 'Alimentos'
            }
        }
    },
    {
        id: 46,
        descricao: 'Batata',
        descricao_detalhada: 'Pacote Congelado',
        valor: 12.00,
        unidade: 'ptc',
        estoque: 100,
        unidade_estoque: 'ptc',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/batata_congelada.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 4,
                secao: 'Congelado'
            }
        }
    },
    {
        id: 47,
        descricao: 'Batata',
        descricao_detalhada: 'Produzido pelo método tradicional',
        valor: 5.00,
        unidade: 'kg',
        estoque: 80,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 's',
        caminho_imagem: 'imagens/produtos/batata.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 48,
        descricao: 'Pimentão Amarelo',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/pimentao_amarelo.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 49,
        descricao: 'Pimentão Vermelho',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/pimentao_vermelho.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 50,
        descricao: 'Manteiga',
        descricao_detalhada: 'Pote de 500g',
        valor: 15.00,
        unidade: 'ptc',
        estoque: 180,
        unidade_estoque: 'ptc',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/manteiga.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 5,
                secao: 'Frios'
            }
        }
    },
    {
        id: 51,
        descricao: 'Cesto Sortido 01 - Legumes',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cesto01.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 52,
        descricao: 'Cesto Sortido 02 - Frutas',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cesto02.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 3,
                secao: 'Frutas'
            }
        }
    },
    {
        id: 51,
        descricao: 'Cesto Sortido 03 - Mista',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 3.80,
        unidade: 'kg',
        estoque: 10,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cesto03.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 60,
        descricao: 'Bolo de ovos',
        descricao_detalhada: 'Produção artesanal',
        valor: 20.00,
        unidade: 'und',
        estoque: 10,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/bolo_de_ovos.jpg',
        setor: {
            idsetor: 3,
            setor: 'Panificação',
            secao: {
                idsecao: 5,
                secao: 'Bolos'
            }
        }
    },
    {
        id: 61,
        descricao: 'Bolo de Macaxeira',
        descricao_detalhada: 'Produção artesanal',
        valor: 25.00,
        unidade: 'und',
        estoque: 10,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/bolo_de_macaxeira.jpg',
        setor: {
            idsetor: 3,
            setor: 'Panificação',
            secao: {
                idsecao: 5,
                secao: 'Bolos'
            }
        }
    },
    {
        id: 62,
        descricao: 'Bolo Confeita',
        descricao_detalhada: 'Produção artesanal',
        valor: 65.00,
        unidade: 'und',
        estoque: 10,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/bolo_confeitado.jpg',
        setor: {
            idsetor: 3,
            setor: 'Panificação',
            secao: {
                idsecao: 5,
                secao: 'Bolos'
            }
        }
    },
    {
        id: 67,
        descricao: 'Suco de Uva Integral ',
        descricao_detalhada: 'Garrafa de 1 litro',
        valor: 18.00,
        unidade: 'und',
        estoque: 80,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/suco_de_uva.jpg',
        setor: {
            idsetor: 4,
            setor: 'Bebidas',
            secao: {
                idsecao: 2,
                secao: 'Sucos'
            }
        }
    },
    {
        id: 68,
        descricao: 'Suco de Manga',
        descricao_detalhada: 'Garrafa de 1 litro',
        valor: 4.00,
        unidade: 'und',
        estoque: 80,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/suco_de_manga.jpg',
        setor: {
            idsetor: 4,
            setor: 'Bebidas',
            secao: {
                idsecao: 2,
                secao: 'Sucos'
            }
        }
    },
    {
        id: 86,
        descricao: 'Cebola Branca',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 4.60,
        unidade: 'kg',
        estoque: 30,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cebola_branca.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 86,
        descricao: 'Cebola Roxa',
        descricao_detalhada: 'Produzido por Irrigação',
        valor: 4.60,
        unidade: 'kg',
        estoque: 30,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/cebola_roxa.jpg',
        setor: {
            idsetor: 1,
            setor: 'Feira',
            secao: {
                idsecao: 2,
                secao: 'Legumes'
            }
        }
    },
    {
        id: 87,
        descricao: 'Queijo Coalho Artesanal',
        descricao_detalhada: 'Queijo do leite de vaca',
        valor: 38.90,
        unidade: 'kg',
        estoque: 180,
        unidade_estoque: 'kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/queijo_coalho.jpg',
        setor: {
            idsetor: 2,
            setor: 'Mercearia',
            secao: {
                idsecao: 5,
                secao: 'Frios'
            }
        }
    },
    {
        id: 89,
        descricao: 'Doce de Leite',
        descricao_detalhada: 'Produção artesanal',
        valor: 25.00,
        unidade: 'kg',
        estoque: 0,
        unidade_estoque: 'Kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/doce_de_leite.jpg',
        setor: {
            idsetor: 3,
            setor: 'Panificação',
            secao: {
                idsecao: 3,
                secao: 'Doces'
            }
        }
    },
    {
        id: 90,
        descricao: 'Doce',
        descricao_detalhada: 'Produção artesanal',
        valor: 25.00,
        unidade: 'kg',
        estoque: 0,
        unidade_estoque: 'Kg',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/doce_de_banana.jpg',
        setor: {
            idsetor: 3,
            setor: 'Panificação',
            secao: {
                idsecao: 3,
                secao: 'Doces'
            }
        }
    },
    {
        id: 91,
        descricao: 'Esponja para banho',
        descricao_detalhada: 'Unidade',
        valor: 2.00,
        unidade: 'und',
        estoque: 60,
        unidade_estoque: 'und',
        promocao: 'n',
        destaque: 'n',
        caminho_imagem: 'imagens/produtos/esponja_para_banho.jpg',
        setor: {
            idsetor: 5,
            setor: 'Higiene',
            secao: {
                idsecao: 2,
                secao: 'Corporal'
            }
        }
    },

]

export { produtos }