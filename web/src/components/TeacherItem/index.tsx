//modules
import React from 'react';

//icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//stylesheets
import './styles.css'
import api from '../../services/api';

export interface Teacher{
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id,
        });
    }
    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={"Foto de " + teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>{"R$ " + teacher.cost}</strong>
                </p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                </a>
            </footer>
        </article>
    //      <article className="teacher-item">
    //      <header>
    //          <img src="https://avatars0.githubusercontent.com/u/16225172?s=400&u=ef6783fb7a3a0dd3c2c5723668aeaefa4c1084e2&v=4" alt="Sample"/>
    //          <div>
    //              <strong>Wellington Wallace</strong>
    //              <span>Física</span>
    //          </div>
    //      </header>
    //      <p>
    //          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    //          <br/><br/>
    //          Aut magnam suscipit ab voluptate dolore cupiditate aliquam eaque autem atque. Rem, vitae magni.
    //      </p>
    //      <footer>
    //          <p>
    //              Preço/hora
    //              <strong>R$ 50,00</strong>
    //          </p>
    //          <button>
    //                  <img src={whatsappIcon} alt="whatsapp"/>
    //                  Entrar em contato
    //              </button>
    //      </footer>
    //  </article>
    )
}
export default TeacherItem;