import React, { useState } from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);



    function setValor(chave, valor){
        setValores({
            ...valores,
            [chave]: valor,
        })
    }

    function handleChange(info){
        const { name, value } = info.target;
        setValor( name, value );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(info){
                info.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);

                setValores(valoresIniciais)
            }}>

                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;