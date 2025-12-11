 type FooterProps ={
    NumeroDoCliente?: Number;

 }
 
 function Footer(props: FooterProps){
    return(
        <>NÚMERO PARA CONTATO {props.NumeroDoCliente}</>
    );
}

export default Footer;