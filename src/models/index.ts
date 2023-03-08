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
