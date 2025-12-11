type HEaderProps = {
    nomeDoCliente?: string;
    idadeDoCliete?: number;
}

function Header(props: HEaderProps){
    return(
        <>
        PAINEL ADMINISTRATIVO ONP - Usuario logado: {props.nomeDoCliente}
        </>
    );
}

export default Header;