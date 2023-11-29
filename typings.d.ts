type Base = {
    _crateAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updateAt: string;
};

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
}

interface Author extends Base {
    bio: Block[];
    Image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "Image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    childeren: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockqupte";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Categorie extends Base {
    description: string;
    title: string;
}

interface mainImage {
    _type: "string";
    current: string;
}

interface Title {
    _type: "string";
    current: string;
}
