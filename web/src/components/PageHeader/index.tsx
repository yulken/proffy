//modules
import React from 'react';
import { Link } from 'react-router-dom';

//images
import logoImg from "../../assets/images/logo.svg";

//icons
import backIcon from "../../assets/images/icons/back.svg";

//stylesheets
import './styles.css';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;