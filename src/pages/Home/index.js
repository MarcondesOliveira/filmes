import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            filmes: []
        }
        this.loadFilmes = this.loadFilmes.bind(this)
    }

    componentDidMount(){
        this.loadFilmes()
    }

    loadFilmes(){
        //https://sujeitoprogramador.com/r-api/?api=filmes
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filmes: json})
            console.log(json)
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='lista-filmes'>
                    {this.state.filmes.map((item) => {
                        return(
                            <article key={item.id} className='filme'>
                                <strong>{item.nome}</strong>
                                <img src={item.foto} alt="Capa"/>
                                <Link to='/'>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home