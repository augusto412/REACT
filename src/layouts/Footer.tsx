 type FooterProps ={
    NumeroDoCliente?: Number;

 }
 
 function Footer(props: FooterProps){
    return(
        <>Numero para contato {props.NumeroDoCliente}
            </>
    );
}

export default Footer;