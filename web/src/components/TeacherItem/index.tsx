//modules
import React from 'react';

//icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//stylesheets
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/16225172?s=400&u=ef6783fb7a3a0dd3c2c5723668aeaefa4c1084e2&v=4" alt="Sample"/>
                <div>
                    <strong>Wellington Wallace</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                <br/><br/>
                Aut magnam suscipit ab voluptate dolore cupiditate aliquam eaque autem atque. Rem, vitae magni.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button>
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
            </footer>
        </article>
    )
}
export default TeacherItem;