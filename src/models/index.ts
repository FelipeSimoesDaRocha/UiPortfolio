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
    linkProdution: string
};

export interface session extends Record<string, unknown> {
    user: {
        name: string
        email: string
        image: string
    }
    expires: string
}

export interface user extends Record<string, unknown> {
    name: string
    email: string
    image: string
}
