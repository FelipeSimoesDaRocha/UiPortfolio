export type SocialButton = {
    name: string;
    color: string;
    link: string;
    className: string;
};

export type LinkItemsProps = {
    name: string;
    route: string;
    enName: string;
}

export type Project = {
    key: number;
    background: string;
    alt: string,
    imgUrl: string;
    video: string;
    linkGit: string;
    linkProdution: string;
};


export type User = {
    id: string;
    name: string;
    password: string;
    email: string;
    phones: string[];
    phones_format?: string;
    cpf?: string;
    cnpj?: string;
    role_format?: string;
    token?: string;
    status: boolean;
    lastLogin: string;
    forceChangePassword: boolean;
}

export type Address = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: boolean;
}

export interface iProps {
    name: string;
    label: string;
    initialValue?: string;
    required?: boolean;
    onGetCep?: (response: Address) => void;
}
